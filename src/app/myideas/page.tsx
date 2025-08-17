"use client";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function MyIdeas() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

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
            my notes
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <article className="space-y-6">
          {/* Graduating Debt Free Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('graduating-debt-free')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                Graduating Debt Free
              </h2>
              {expandedSections.includes('graduating-debt-free') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('graduating-debt-free') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Here's a distilled blueprint I've used for how I'll graduate debt free — something I've put a lot of thought into.
                </p>
                
                <div className="space-y-3 text-gray-700 text-sm">
                  {[
                    "High school dual enrollment/APs",
                    "Community college: partial or full, online or in person, it is an immense saving opportunity.",
                    "Be aware of all possible grants",
                    "Scholarships — emphasis on local, express clear pain point and how the scholarship will directly benefit you",
                    "Living with family",
                    "Taking annoying prerequisites online to free up time to work more",
                    "Work at a job that is not mentally taxing or demanding",
                    "Internships and/or summer school to graduate on time/early",
                    "Dependency status — improve aid",
                    "Correctly plan for classes ahead of time, only take what you need",
                    "General frugality, applicable to all of life",
                    "For loans you're not actively using, keep in HYSA. Ideally only take subsidized loans out.",
                    "Get the $2k AOTC tax credit every year you're eligible.",
                    "Leverage AI for course planning & financial aid discovery. Generate the right prompt and it will be beyond easy."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-purple-600 font-medium text-xs mt-1">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bill Perkins Ideology Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('bill-perkins')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                Bill Perkins Ideology
              </h2>
              {expandedSections.includes('bill-perkins') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('bill-perkins') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Focus on earning what you need and prioritizing fulfillment. Knowing when to stop is as important, if not more so, than building wealth in the first place.
                </p>
                
                <div className="space-y-3 text-gray-700 text-sm">
                  {[
                    "Earn what you need, not endless wealth",
                    "Prioritize fulfillment over accumulation",
                    "Know when to stop building wealth",
                    "Balance financial security with life satisfaction",
                    "Quality of life over quantity of money"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-purple-600 font-medium text-xs mt-1">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
