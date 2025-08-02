"use client";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function MyIdeas() {
  const [isExpanded, setIsExpanded] = useState(false);

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
            my own ideas
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <article className="space-y-6">
          <div className="group cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                Graduating Debt Free
              </h2>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {isExpanded && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Here's a distilled blueprint I've used for how I'll graduate debt free — something I've put a lot of thought into.
                </p>
                
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">01</span>
                    <span className="leading-relaxed">High school dual enrollment/APs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">02</span>
                    <span className="leading-relaxed">Community college: partial or full, online or in person, it is an immense saving opportunity.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">03</span>
                    <span className="leading-relaxed">Be aware of all possible grants</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">04</span>
                    <span className="leading-relaxed">Scholarships — emphasis on local, express clear pain point and how the scholarship will directly benefit you</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">05</span>
                    <span className="leading-relaxed">Living with family</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">06</span>
                    <span className="leading-relaxed">Taking annoying prerequisites online to free up time to work more</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">07</span>
                    <span className="leading-relaxed">Work at a job that is not mentally taxing or demanding</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">08</span>
                    <span className="leading-relaxed">Internships and/or summer school to graduate on time/early</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">09</span>
                    <span className="leading-relaxed">Dependency status — improve aid</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">10</span>
                    <span className="leading-relaxed">Correctly plan for classes ahead of time, only take what you need</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">11</span>
                    <span className="leading-relaxed">General frugality, applicable to all of life</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">12</span>
                    <span className="leading-relaxed">For loans you're not actively using, keep in HYSA. Ideally only take subsidized loans out.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">13</span>
                    <span className="leading-relaxed">Get the $2k AOTC tax credit every year you're eligible.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 font-medium text-xs mt-1">14</span>
                    <span className="leading-relaxed">Leverage AI for course planning & financial aid discovery. Generate the right prompt and it will be beyond easy.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
} 