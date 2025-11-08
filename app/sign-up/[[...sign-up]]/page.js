import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Join Welth
          </h1>
          <p className="text-gray-600">Create your account to get started</p>
        </div>
        <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
          <SignUp 
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-2xl border-2 border-gray-100",
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
