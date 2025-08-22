"use client";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

export default function MyIdeas() {
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
      section.content.toLowerCase().includes(query.toLowerCase()) ||
      (section.details && section.details.some(detail => detail.toLowerCase().includes(query.toLowerCase())))
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
      id: 'overlapping-controllables',
      title: 'overlapping controllables',
      content: 'Across the people I admire, these are the levers they manage best:',
      details: [
        '1. Attention: What you read, watch, listen to, and think about.',
        '2. Time: Who you spend it with and what projects you choose.',
        '3. Health: Sleep, exercise, diet, and mental practices.',
        '4. Boundaries: Saying no to almost everything.',
        '5. Expression: Writing, building, creating. Control the output, not the reaction.',
        '6. Environment: Where you live, who is nearby, and how your space shapes behavior.',
        '7. Capital: How you manage money, risk, and equity to stay free.'
      ],
      date: 'August 22, 2025'
    },
    {
      id: 'desire',
      title: 'desire',
      content: 'Not wanting something can be as good as having it. The key is to pursue only what you genuinely want and disregard everything else.',
      date: 'August 18, 2025'
    },
    {
      id: 'confidence-eq',
      title: 'confidence & eq',
      content: 'Confidence got easier once I realized it\'s more embarrassing to be guarded than just to be myself. High EQ is about the same thing but toward others, making people feel valued and building them up.',
      date: 'August 16, 2025'
    },
    {
      id: 'personal-clarity',
      title: 'personal clarity',
      content: 'As a kid I expected dread and obligations. Now I see life can be structured how I want. The less I desire, the fewer obligations. Most things can be turned into something I want to do.',
      date: 'August 15, 2025'
    },
    {
      id: 'mental-compounding',
      title: 'mental compounding',
      content: 'Both social media and large language models compound the direction your mind is already pointed.',
      date: 'August 14, 2025'
    },
    {
      id: 'fulfillment',
      title: 'fulfillment',
      content: 'I realized life boils down to decisions, not dread. Taking risks gives excitement, purpose, and fulfillment. The goal is simple: optimize for fulfillment, for yourself and others.',
      date: 'August 12, 2025'
    },
    {
      id: 'leaving-house',
      title: 'leaving the house',
      content: 'Whether you want to or not, leaving the house consistently helps in all facets of life. Your environment pushes you more than willpower. Habitually you\'ll be better off.',
      date: 'August 10, 2025'
    },
    {
      id: 'graduating-debt-free',
      title: 'graduating debt free',
      content: 'Here\'s a distilled blueprint I\'ve used for how I\'ll graduate debt free - something I\'ve put a lot of thought into.',
      details: [
        'High school dual enrollment/APs',
        'Community college: partial or full, online or in person, it is an immense saving opportunity.',
        'Be aware of all possible grants',
        'Scholarships - emphasis on local, express clear pain point and how the scholarship will directly benefit you',
        'Living with family',
        'Taking annoying prerequisites online to free up time to work more',
        'Work at a job that is not mentally taxing or demanding',
        'Internships and/or summer school to graduate on time/early',
        'Dependency status - improve aid',
        'Correctly plan for classes ahead of time, only take what you need',
        'General frugality, applicable to all of life',
        'For loans you\'re not actively using, keep in HYSA. Ideally only take subsidized loans out.',
        'Get the $2k AOTC tax credit every year you\'re eligible.',
        'Leverage AI for course planning & financial aid discovery. Generate the right prompt and it will be beyond easy.'
      ],
      date: 'August 1, 2025'
    }
  ];

  const filteredSections = sections.filter(section =>
    searchQuery.trim() === "" ||
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (section.details && section.details.some(detail => detail.toLowerCase().includes(searchQuery.toLowerCase())))
  );

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
            my notes
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
        <div className="space-y-4 md:space-y-5">
          {filteredSections.map((section) => (
            <article
              key={section.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 group"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 md:px-8 py-4 md:py-5 text-left flex items-center justify-between hover:bg-gray-50/30 transition-all duration-300 border-b border-gray-50"
              >
                <div className="flex flex-col items-start">
                  <h2 className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                    {expandedSections.includes(section.id) ? (
                      <span dangerouslySetInnerHTML={{ __html: highlightText(section.title, searchQuery) }} />
                    ) : (
                      <span dangerouslySetInnerHTML={{ __html: highlightText(section.title, searchQuery) }} />
                    )}
                  </h2>
                  {section.date && (
                    <span className="text-sm text-gray-500 mt-1">{section.date}</span>
                  )}
                </div>
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-500 flex-shrink-0 transition-transform duration-300" />
                )}
              </button>
              
              {expandedSections.includes(section.id) && (
                <div className="px-6 md:px-8 py-6 md:py-8 bg-gray-50/30">
                  <div className="text-gray-700 leading-relaxed text-sm md:text-base space-y-4">
                    {section.details ? (
                      <>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          <span dangerouslySetInnerHTML={{ __html: highlightText(section.content, searchQuery) }} />
                        </p>
                        <div className="space-y-3">
                          {section.details.map((detail, index) => (
                            <div key={index} className="text-gray-700 leading-relaxed text-sm">
                              <span dangerouslySetInnerHTML={{ __html: highlightText(detail, searchQuery) }} />
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="text-gray-700 leading-relaxed">
                        <span dangerouslySetInnerHTML={{ __html: highlightText(section.content, searchQuery) }} />
                      </div>
                    )}
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
