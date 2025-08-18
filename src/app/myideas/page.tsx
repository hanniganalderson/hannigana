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
          {/* On Leaving the House Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('leaving-house')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                on leaving the house
              </h2>
              {expandedSections.includes('leaving-house') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('leaving-house') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Whether you want to or not, leaving the house consistently helps in all facets of life. Your environment pushes you more than willpower. Habitually you'll be better off.
                </p>
              </div>
            )}
          </div>

          {/* Mental Compounding Section */}
          <div className="py-3 px-4 border-b border-gray-100">
            <button
              onClick={() => toggleSection('mental-compounding')}
              className="flex items-center justify-between w-full text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <h2 className="text-lg font-medium text-gray-900">
                mental compounding
              </h2>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  expandedSections.includes('mental-compounding') ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSections.includes('mental-compounding') && (
              <div className="mt-3 text-gray-600">
                Both social media and large language models compound the direction your mind is already pointed.
              </div>
            )}
          </div>

          {/* Confidence/EQ Realization Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('confidence-eq')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                confidence/eq realization
              </h2>
              {expandedSections.includes('confidence-eq') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('confidence-eq') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Confidence got easier once I realized it's more embarrassing to be guarded than just to be myself. High EQ is about the same thing but toward others, making people feel valued and building them up.
                </p>
              </div>
            )}
          </div>

          {/* Personal Clarity Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('personal-clarity')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                personal clarity
              </h2>
              {expandedSections.includes('personal-clarity') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('personal-clarity') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  As a kid there was a lot of dread and uncertainty, always expecting I'd have to do things I didn't want. Now I have clarity. Life can be structured however I want. The less I desire, the fewer forced obligations there are. Almost everything can be turned into something I want to do.
                </p>
              </div>
            )}
          </div>

          {/* Elated Feeling Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('elated-feeling')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                elated feeling
              </h2>
              {expandedSections.includes('elated-feeling') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('elated-feeling') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  I feel elated and it's coming from realizing everything boils down to decision making, and there's not much to dread out of your control. Taking risks gives excitement, purpose, and fulfillment. All we have to optimize for is fulfillment, for ourselves and the people around us.
                </p>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
