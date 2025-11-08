import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, Plus, LogIn } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "Your wealth management platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-lg shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="relative w-10 h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Image
                      src="/logo.png"
                      alt="Welth Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
                    Welth
                  </span>
                </Link>
                
                <div className="flex items-center gap-3">
                  <SignedOut>
                    <SignInButton>
                      <button className="group relative px-6 py-2.5 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                        <LogIn className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        <span>Sign In</span>
                      </button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <Link 
                      href="/dashboard" 
                      className="group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                    >
                      <LayoutDashboard className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span className="hidden sm:inline">Dashboard</span>
                    </Link>
                    <Link 
                      href="/dashboard/add-transaction" 
                      className="group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                    >
                      <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                      <span className="hidden sm:inline">Add Transaction</span>
                    </Link>
                    <div className="transition-transform hover:scale-110 duration-300">
                      <UserButton 
                        appearance={{
                          elements: {
                            avatarBox: "w-10 h-10 ring-2 ring-blue-100 hover:ring-blue-300 transition-all"
                          }
                        }}
                      />
                    </div>
                  </SignedIn>
                </div>
              </div>
            </div>
          </header>
          
          <main className="min-h-[calc(100vh-8rem)] transition-all duration-300">
            {children}
          </main>
          
          <footer className="border-t bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3 group">
                  <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/logo.png"
                      alt="Welth Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Welth
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  © 2024 Welth. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
