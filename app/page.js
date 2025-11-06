import { Button } from "../components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        
        
        <div className="space-y-4">
          <SignedOut>
          </SignedOut>
          
          <SignedIn>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <p>Welcome! You are signed in.</p>
                <UserButton />
              </div>
              <Link href="/dashboard">
                <Button>Go to Dashboard</Button>
              </Link>
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
