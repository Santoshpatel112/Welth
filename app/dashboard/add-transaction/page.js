import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ArrowLeft, DollarSign, Calendar, Tag, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

export default async function AddTransaction() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/dashboard" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Dashboard</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Add New Transaction</h1>
            <p className="text-blue-100">Track your income and expenses</p>
          </div>

          <form className="p-8 space-y-6">
            {/* Transaction Type */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Transaction Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="group relative p-4 rounded-xl border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Income</p>
                      <p className="text-xs text-gray-500">Money received</p>
                    </div>
                  </div>
                </button>
                
                <button
                  type="button"
                  className="group relative p-4 rounded-xl border-2 border-red-200 hover:border-red-400 hover:bg-red-50 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <DollarSign className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Expense</p>
                      <p className="text-xs text-gray-500">Money spent</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <label htmlFor="amount" className="block text-sm font-semibold text-gray-700">
                Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="amount"
                  placeholder="0.00"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none text-lg font-semibold"
                />
              </div>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-semibold text-gray-700">
                Category
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Tag className="w-5 h-5 text-gray-400" />
                </div>
                <select
                  id="category"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none appearance-none cursor-pointer"
                >
                  <option value="">Select a category</option>
                  <option value="salary">Salary</option>
                  <option value="investment">Investment</option>
                  <option value="food">Food & Dining</option>
                  <option value="transport">Transportation</option>
                  <option value="shopping">Shopping</option>
                  <option value="bills">Bills & Utilities</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-semibold text-gray-700">
                Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  id="date"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
                Description (Optional)
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                  <FileText className="w-5 h-5 text-gray-400" />
                </div>
                <textarea
                  id="description"
                  rows="3"
                  placeholder="Add notes about this transaction..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                className="flex-1 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Add Transaction
              </Button>
              <Link href="/dashboard" className="flex-shrink-0">
                <Button
                  type="button"
                  variant="outline"
                  className="py-6 px-8 text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
