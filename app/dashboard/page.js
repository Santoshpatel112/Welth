import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";

export default async function Dashboard() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/");
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <UserButton />
            <SignOutButton>
              <Button variant="outline">Sign Out</Button>
            </SignOutButton>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Welcome to your dashboard!</h2>
            <p className="text-gray-600">This is a protected route that requires authentication.</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
            <p className="text-gray-600">Manage your account settings and preferences.</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Analytics</h2>
            <p className="text-gray-600">View your activity and statistics.</p>
          </div>
        </div>
      </div>
    </div>
  );
}