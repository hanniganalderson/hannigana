"use client";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function FavoriteIdeas() {
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
            favorite ideas
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <article className="space-y-6">
          {/* High Agency Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('high-agency')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                highagency.com
              </h2>
              {expandedSections.includes('high-agency') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('high-agency') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  George Mack's incredible writing and storytelling.
                </p>
                
                <div className="space-y-3 text-gray-700 text-sm">
                  {[
                    "Crafts compelling narratives and insights",
                    "Makes complex ideas accessible",
                    "Builds genuine connection with readers",
                    "Authentic and emotionally resonant content"
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
