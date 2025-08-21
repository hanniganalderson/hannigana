"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Now() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8 md:py-12 lg:py-20">
      {/* Go Back Button */}
      <div className="mb-6 md:mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm md:text-base"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          <span>go back</span>
        </Link>
      </div>
      
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-gray-900 mb-2">
            now
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-4 md:space-y-6">
          <article className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 overflow-hidden">
            <div className="px-6 md:px-8 py-6 md:py-8">
                             <div className="text-gray-700 leading-relaxed text-sm md:text-base space-y-3">
                 <p>• Finished summer term. Fall starts next month.</p>
                 <p>• Traveling: Phoenix → Sunriver → Puerto Vallarta.</p>
                 <p>• Reading, podcasts, walking, mindfulness.</p>
               </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
