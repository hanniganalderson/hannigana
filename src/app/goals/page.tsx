"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Goals() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 md:py-20">
      {/* Go Back Button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>go back</span>
        </Link>
      </div>
      
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-gray-900 mb-2">
            2027 goals
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-xl p-8 border border-gray-200">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
            <p className="text-gray-600 text-lg">TBD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
