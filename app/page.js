import { Button } from "../components/ui/button";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { statsData, featuresData } from "../data/landing";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-[90vh] flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in z-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <Zap className="w-4 h-4 animate-pulse" />
                <span>Your Financial Future Starts Here</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Build Your{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Wealth
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                </span>{" "}
                Journey
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Take control of your financial future with intelligent wealth
                management tools designed for modern investors.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <SignedOut>
                  <SignInButton>
                    <Button size="lg" className="group text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Button>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <Link href="/dashboard">
                    <Button size="lg" className="group text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      Go to Dashboard
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Button>
                  </Link>
                </SignedIn>
              </div>
            </div>

            {/* Right Image with Effects */}
            <div className="relative lg:h-[600px] h-[500px] animate-fade-in" style={{animationDelay: '0.3s'}}>
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 blur-3xl animate-pulse"></div>
              
              {/* Floating cards effect */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl animate-float opacity-80"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-2xl animate-float animation-delay-2000 opacity-80"></div>
              
              {/* Main image container with 3D effect */}
              <div className="relative w-full h-full group perspective-1000">
                <div className="relative w-full h-full transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                  {/* Image with border and shadow */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                    <Image
                      src="/banner.jpeg"
                      alt="Welth Platform"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20 mix-blend-overlay"></div>
                  </div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Stats badges */}
              <div className="absolute top-8 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-1000 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">+24%</p>
                    <p className="text-xs text-gray-500">Growth</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-3000 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                    <p className="text-xs text-gray-500">Secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose Welth?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your wealth effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuresData.map((feature, index) => {
              const colors = [
                { border: 'border-blue-300', bg: 'from-blue-50', gradient: 'from-blue-500 to-blue-600' },
                { border: 'border-purple-300', bg: 'from-purple-50', gradient: 'from-purple-500 to-purple-600' },
                { border: 'border-green-300', bg: 'from-green-50', gradient: 'from-green-500 to-green-600' },
                { border: 'border-orange-300', bg: 'from-orange-50', gradient: 'from-orange-500 to-orange-600' },
                { border: 'border-pink-300', bg: 'from-pink-50', gradient: 'from-pink-500 to-pink-600' },
                { border: 'border-indigo-300', bg: 'from-indigo-50', gradient: 'from-indigo-500 to-indigo-600' },
              ];
              const color = colors[index % colors.length];
              
              return (
                <div 
                  key={index}
                  className={`group p-8 lg:p-10 rounded-3xl border-2 border-gray-200 hover:${color.border} bg-white hover:bg-gradient-to-br hover:${color.bg} hover:to-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${color.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your Wealth Journey?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of investors who trust Welth with their financial
              future.
            </p>
            <SignedOut>
              <SignInButton>
                <Button size="lg" variant="secondary" className="group text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button size="lg" variant="secondary" className="group text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
                  Go to Dashboard
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </section>
    </div>
  );
}
