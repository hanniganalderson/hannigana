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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-gray-900 mb-2">
            learning
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Search Bar */}
        <div className="mb-4 md:mb-6">
          <div className="relative max-w-md mx-auto px-4 md:px-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white text-sm md:text-base"
            />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-3 md:space-y-4 lg:space-y-6">
          {filteredSections.map((section) => (
            <article
              key={section.id}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-200"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
              >
                <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900">
                  {expandedSections.includes(section.id) ? (
                    <span dangerouslySetInnerHTML={{ __html: highlightText(section.title, searchQuery) }} />
                  ) : (
                    <span dangerouslySetInnerHTML={{ __html: highlightText(section.title, searchQuery) }} />
                  )}
                </h2>
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {expandedSections.includes(section.id) && (
                <div className="px-4 md:px-6 pb-3 md:pb-4">
                  <div className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {section.items.map((item, index) => (
                      <div key={index} className="mb-1.5 last:mb-0 flex items-start gap-3">
                        <span className="text-purple-600 font-medium text-xs mt-1 flex-shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: highlightText(item, searchQuery) }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
