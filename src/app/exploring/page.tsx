"use client";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Exploring() {
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
            reading/listening
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <article className="space-y-6">
          {/* Reading Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('reading')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                reading
              </h2>
              {expandedSections.includes('reading') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('reading') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <div className="space-y-3 text-gray-700 text-sm">
                  {[
                    "Clear Thinking by Shane Parrish",
                    "The Almanack of Naval Ravikant"
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

          {/* Listening To Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('listening')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                listening to
              </h2>
              {expandedSections.includes('listening') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('listening') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <div className="space-y-3 text-gray-700 text-sm">
                  {[
                    "The Iced Coffee Hour",
                    "Modern Wisdom - Jimmy Carr #953",
                    "Modern Wisdom",
                    "Founders"
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

          {/* Archive Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('archive')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                archive
              </h2>
              {expandedSections.includes('archive') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('archive') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <div className="space-y-3 text-gray-700 text-sm">
                  {[
                    "The Millionaire Mind by Thomas Stanley",
                    "Rich Dad Poor Dad by Robert Kiyosaki",
                    "7 Secrets to Investing Like Warren Buffett by Mary Buffett",
                    "Buffett by Roger Lowenstein",
                    "The Richest Man in Babylon by George S. Clason",
                    "The Millionaire Next Door by Thomas Stanley",
                    "How to Win Friends & Influence People by Dale Carnegie",
                    "Financial Freedom by Grant Sabatier",
                    "Outliers by Malcolm Gladwell",
                    "The 4 Hour Workweek by Tim Ferriss",
                    "How to Invest in Real Estate by Joshua Dorkin and Brandon Turner",
                    "Rich Dad's Cashflow Quadrant by Robert Kiyosaki",
                    "A Random Walk Down Wall Street by Burton Malkiel",
                    "The Power of Habit by Charles Duhigg",
                    "The Compound Effect by Darren Hardy",
                    "The Power of Now by Eckhart Tolle",
                    "1984 by George Orwell",
                    "Who Moved My Cheese by Spencer Johnson",
                    "The Metamorphosis by Franz Kafka",
                    "The Great Gatsby by F. Scott Fitzgerald",
                    "Thinking, Fast and Slow by Daniel Kahneman",
                    "The 7 Habits of Highly Effective People by Stephen Covey",
                    "The Great Mental Models Volume 1 by Shane Parrish",
                    "The Lean Startup by Eric Ries",
                    "The E-Myth by Michael Gerber",
                    "Shoe Dog by Phil Knight",
                    "Blink by Malcolm Gladwell",
                    "The Tipping Point by Malcolm Gladwell",
                    "The Psychology of Money by Morgan Housel",
                    "Smarter Faster Better by Charles Duhigg",
                    "The Almanack of Naval Ravikant",
                    "The Algebra of Wealth by Scott Galloway",
                    "Zero to One by Peter Thiel",
                    "Elon Musk by Ashlee Vance",
                    "Anthology of Balaji by Balaji Srinivasan",
                    "Hackers and Painters by Paul Graham",
                    "The Everything Store by Brad Stone",
                    "The Hitchhiker's Guide to the Galaxy by Douglas Adams",
                    "Steve Jobs by Walter Isaacson",
                    "Elon Musk by Walter Isaacson",
                    "Poor Charlie's Almanack by Charlie Munger",
                    "Am I Being Too Subtle by Sam Zell",
                    "The Bitcoin Standard by Saifedean Ammous"
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
