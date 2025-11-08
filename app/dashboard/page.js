import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { TrendingUp, Wallet, PieChart, Activity, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default async function Dashboard() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-float">
              <LayoutDashboard className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's your financial overview.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard/add-transaction">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Add Transaction
              </Button>
            </Link>
            <div className="transition-transform hover:scale-110 duration-300">
              <UserButton />
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-green-600">+12.5%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Balance</h3>
            <p className="text-3xl font-bold text-gray-900">$24,580</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-green-600">+8.2%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Investments</h3>
            <p className="text-3xl font-bold text-gray-900">$18,240</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <PieChart className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-green-600">+15.3%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Portfolio Value</h3>
            <p className="text-3xl font-bold text-gray-900">$32,890</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm font-medium text-green-600">+5.7%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Monthly Growth</h3>
            <p className="text-3xl font-bold text-gray-900">$1,420</p>
          </div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { title: "Investment in Tech Stocks", amount: "+$2,500", date: "Today", color: "text-green-600" },
                { title: "Dividend Payment", amount: "+$180", date: "Yesterday", color: "text-green-600" },
                { title: "Portfolio Rebalancing", amount: "$0", date: "2 days ago", color: "text-gray-600" },
                { title: "Monthly Contribution", amount: "+$1,000", date: "3 days ago", color: "text-green-600" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div>
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                  <span className={`font-semibold ${activity.color}`}>{activity.amount}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full p-4 text-left rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group">
                <p className="font-semibold text-gray-900 group-hover:text-blue-600">Add Investment</p>
                <p className="text-sm text-gray-500">Grow your portfolio</p>
              </button>
              <button className="w-full p-4 text-left rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 group">
                <p className="font-semibold text-gray-900 group-hover:text-purple-600">View Reports</p>
                <p className="text-sm text-gray-500">Analyze performance</p>
              </button>
              <button className="w-full p-4 text-left rounded-xl border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-300 group">
                <p className="font-semibold text-gray-900 group-hover:text-green-600">Set Goals</p>
                <p className="text-sm text-gray-500">Plan your future</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}