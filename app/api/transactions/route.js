import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET - Fetch all transactions
export async function GET(request) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "50");

    const transactions = await prisma.transaction.findMany({
      where: { userId: user.id },
      include: {
        account: true,
      },
      orderBy: { date: "desc" },
      take: limit,
    });

    return NextResponse.json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST - Create new transaction
export async function POST(request) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await request.json();
    const {
      type,
      amount,
      description,
      date,
      category,
      accountId,
      receiptUrl,
      isRecurring,
      recurringInterval,
    } = body;

    // Validate account belongs to user
    const account = await prisma.account.findFirst({
      where: { id: accountId, userId: user.id },
    });

    if (!account) {
      return NextResponse.json(
        { error: "Account not found" },
        { status: 404 }
      );
    }

    // Create transaction
    const transaction = await prisma.transaction.create({
      data: {
        type,
        amount,
        description,
        date: new Date(date),
        category,
        accountId,
        userId: user.id,
        receiptUrl,
        isRecurring: isRecurring || false,
        recurringInterval: isRecurring ? recurringInterval : null,
        nextRecurringDate: isRecurring ? new Date(date) : null,
      },
      include: {
        account: true,
      },
    });

    // Update account balance
    const newBalance =
      type === "INCOME"
        ? parseFloat(account.balance) + parseFloat(amount)
        : parseFloat(account.balance) - parseFloat(amount);

    await prisma.account.update({
      where: { id: accountId },
      data: { balance: newBalance },
    });

    return NextResponse.json(transaction, { status: 201 });
  } catch (error) {
    console.error("Error creating transaction:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
