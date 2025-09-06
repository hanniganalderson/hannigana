"use client";

import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

export default function Now() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-6 md:py-8 lg:py-12">
      {/* Go Back Button */}
      <div className="mb-4 md:mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm md:text-base"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          <span>go back</span>
        </Link>
      </div>
      
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
        <div className="text-center">
          <h1 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
            now
          </h1>
          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          
          {/* Last Updated */}
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>last updated september 6, 2025</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 md:space-y-4 lg:space-y-6">
          <article className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 overflow-hidden">
            <div className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
              <div className="text-gray-700 leading-relaxed text-xs md:text-sm space-y-2 md:space-y-3">
                <p>• Traveling to Puerto Vallarta</p>
                <p>• Reading more sci-fi thrillers</p>
                <p>• Preparing for internship</p>
                <p>• Soon to be fall classes:</p>
                <div className="ml-4 space-y-1">
                  <p>— Computer Architecture/Assembly</p>
                  <p>— Software Engineering 1</p>
                  <p>— Social/Ethical Issues in CS</p>
                  <p>— Intro to Entrepreneurship</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
