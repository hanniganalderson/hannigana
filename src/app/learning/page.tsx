"use client";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

export default function Exploring() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  // Auto-expand sections that contain search matches
  const autoExpandSections = (query: string) => {
    if (!query.trim()) {
      setExpandedSections([]);
      return;
    }
    
    const matchingSections = sections.filter(section =>
      section.title.toLowerCase().includes(query.toLowerCase()) ||
      section.items.some(item => item.toLowerCase().includes(query.toLowerCase()))
    );
    
    setExpandedSections(matchingSections.map(section => section.id));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    autoExpandSections(query);
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
  };

  const sections = [
    {
      id: 'reading',
      title: 'reading',
      items: [
        "Clear Thinking by Shane Parrish",
        "The Almanack of Naval Ravikant (always re-reading)"
      ]
    },
    {
      id: 'listening',
      title: 'listening',
      items: [
        "Modern Wisdom #780 - Tim Ferriss",
        "Tim Ferriss Show #668 - Derek Sivers"
      ]
    },
    {
      id: 'archive',
      title: 'archive',
      items: [
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
        "Who Moved My Cheese by Spencer Johnson",
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
        "The Bitcoin Standard by Saifedean Ammous",
        "Same as Ever by Morgan Housel"
      ]
    }
  ];

  const filteredSections = sections.map(section => ({
    ...section,
    items: section.items.filter(item =>
      searchQuery.trim() === "" ||
      item.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

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
            learning
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto px-4 md:px-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                               <input
                     type="text"
                     placeholder="Search"
                     value={searchQuery}
                     onChange={handleSearchChange}
                     className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white text-base md:text-sm"
                   />
          </div>
        </div>
        
        <article className="space-y-4 md:space-y-6">
          {filteredSections.map((section) => (
            <div key={section.id} className="group cursor-pointer" onClick={() => toggleSection(section.id)}>
              <div className="flex items-center justify-between py-4 md:py-3 px-4 md:px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200 min-h-[60px] md:min-h-0">
                <h2 
                  className="text-base md:text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200 pr-4"
                  dangerouslySetInnerHTML={{ 
                    __html: highlightText(section.title, searchQuery) 
                  }}
                />
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-5 h-5 md:w-4 md:h-4 text-purple-600 transition-transform duration-200 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 md:w-4 md:h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200 flex-shrink-0" />
                )}
              </div>
              
              {expandedSections.includes(section.id) && (
                <div className="px-4 md:px-4 py-4 md:py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                  <div className="space-y-3 text-gray-700 text-sm">
                    {section.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-purple-600 font-medium text-xs mt-1 flex-shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span 
                          className="leading-relaxed"
                          dangerouslySetInnerHTML={{ 
                            __html: highlightText(item, searchQuery) 
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}
