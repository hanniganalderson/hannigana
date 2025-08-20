"use client";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronRight, Clock, Search } from "lucide-react";
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
      id: 'leaving-house',
      title: 'on leaving the house',
      content: 'Whether you want to or not, leaving the house consistently helps in all facets of life. Your environment pushes you more than willpower. Habitually you\'ll be better off.'
    },
    {
      id: 'graduating-debt-free',
      title: 'graduating debt free',
      content: 'Here\'s a distilled blueprint I\'ve used for how I\'ll graduate debt free — something I\'ve put a lot of thought into.',
      details: [
        'High school dual enrollment/APs',
        'Community college: partial or full, online or in person, it is an immense saving opportunity.',
        'Be aware of all possible grants',
        'Scholarships — emphasis on local, express clear pain point and how the scholarship will directly benefit you',
        'Living with family',
        'Taking annoying prerequisites online to free up time to work more',
        'Work at a job that is not mentally taxing or demanding',
        'Internships and/or summer school to graduate on time/early',
        'Dependency status — improve aid',
        'Correctly plan for classes ahead of time, only take what you need',
        'General frugality, applicable to all of life',
        'For loans you\'re not actively using, keep in HYSA. Ideally only take subsidized loans out.',
        'Get the $2k AOTC tax credit every year you\'re eligible.',
        'Leverage AI for course planning & financial aid discovery. Generate the right prompt and it will be beyond easy.'
      ]
    },
    {
      id: 'mental-compounding',
      title: 'mental compounding',
      content: 'Both social media and large language models compound the direction your mind is already pointed.'
    },
    {
      id: 'confidence-eq',
      title: 'confidence/eq realization',
      content: 'Confidence got easier once I realized it\'s more embarrassing to be guarded than just to be myself. High EQ is about the same thing but toward others, making people feel valued and building them up.'
    },
    {
      id: 'personal-clarity',
      title: 'personal clarity',
      content: 'As a kid there was a lot of dread and uncertainty, always expecting I\'d have to do things I didn\'t want. Now I have clarity. Life can be structured however I want. The less I desire, the fewer forced obligations there are. Almost everything can be turned into something I want to do.'
    },
    {
      id: 'elated-feeling',
      title: 'elated feeling',
      content: 'I feel elated and it\'s coming from realizing everything boils down to decision making, and there\'s not much to dread out of your control. Taking risks gives excitement, purpose, and fulfillment. All we have to optimize for is fulfillment, for ourselves and the people around us.'
    }
  ];

  const filteredSections = sections.filter(section =>
    searchQuery.trim() === "" ||
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (section.details && section.details.some(detail => detail.toLowerCase().includes(searchQuery.toLowerCase())))
  );

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
            my notes
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto px-4 md:px-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
            <input
              type="text"
              placeholder="Search notes..."
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
                  <div 
                    className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-sm"
                    dangerouslySetInnerHTML={{ 
                      __html: highlightText(section.content, searchQuery) 
                    }}
                  />
                  {section.details && (
                    <div className="space-y-3 text-gray-700 text-sm">
                      {section.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-purple-600 font-medium text-xs mt-1 flex-shrink-0">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span 
                            className="leading-relaxed"
                            dangerouslySetInnerHTML={{ 
                              __html: highlightText(detail, searchQuery) 
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-xs text-gray-400 pt-4 border-t border-gray-200 mt-4 md:mt-0">
                    <Clock className="w-3 h-3" />
                    <span>last updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
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
