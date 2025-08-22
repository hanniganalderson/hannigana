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
      id: 'personal-clarity',
      title: 'personal clarity',
      content: 'As a kid I expected dread and obligations. Now I see life can be structured how I want. The less I desire, the fewer obligations. Most things can be turned into something I want to do.'
    },
    {
      id: 'fulfillment',
      title: 'fulfillment',
      content: 'I realized life boils down to decisions, not dread. Taking risks gives excitement, purpose, and fulfillment. The goal is simple: optimize for fulfillment, for yourself and others.'
    },
    {
      id: 'desire',
      title: 'desire',
      content: 'Not wanting something can be as good as having it. The key is to pursue only what you genuinely want and disregard everything else.'
    },
    {
      id: 'mental-compounding',
      title: 'mental compounding',
      content: 'Both social media and large language models compound the direction your mind is already pointed.'
    },
    {
      id: 'confidence-eq',
      title: 'confidence & eq',
      content: 'Confidence got easier once I realized it\'s more embarrassing to be guarded than just to be myself. High EQ is about the same thing but toward others, making people feel valued and building them up.'
    },
    {
      id: 'leaving-house',
      title: 'leaving the house',
      content: 'Whether you want to or not, leaving the house consistently helps in all facets of life. Your environment pushes you more than willpower. Habitually you\'ll be better off.'
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
      ]
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
                    {section.details ? (
                      <>
                        <p className="mb-3">{section.content}</p>
                        <ul className="space-y-1.5">
                          {section.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-purple-600 font-medium text-xs mt-1 flex-shrink-0">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <span dangerouslySetInnerHTML={{ __html: highlightText(detail, searchQuery) }} />
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <span dangerouslySetInnerHTML={{ __html: highlightText(section.content, searchQuery) }} />
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
