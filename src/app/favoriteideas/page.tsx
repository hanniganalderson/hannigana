"use client";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronRight, Clock, Search } from "lucide-react";
import { useState } from "react";

export default function FavoriteIdeas() {
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
      (Array.isArray(section.content) 
        ? section.content.some(item => item.toLowerCase().includes(query.toLowerCase()))
        : section.content.toLowerCase().includes(query.toLowerCase()))
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
      id: 'bill-perkins',
      title: 'bill perkins',
      content: [
        '• Optimize for fulfillment. Spend money on experiences, not just wealth accumulation. Money left over when you die means you traded irreplaceable time working for dollars you never used to live.',
        '• Front load your life with "memory dividends." An experience in your 20s or 30s keeps paying you back every time you recall it, while health and mobility decline as you age.',
        '• Plan with time buckets. Breaking your life into 5–10 year windows forces you to place the right experiences in the right stage, so you don\'t miss opportunities that will close with age.',
        '• Give while it matters. Helping your kids or causes earlier creates more impact, since money has greater utility when people are younger (20 vs 50) or when organizations are growing.',
        '• Manage risk with insurance, not oversaving. Instead of hoarding money out of fear, transfer longevity risk to insurance so you can spend more freely on living well today.'
      ],
      link: 'https://open.spotify.com/episode/1huHLhgK7lsPtFflpo0d21?si=0fb50bbb5c9041ee',
      linkText: 'Bill Perkins on Modern Wisdom #642'
    },
    {
      id: 'what-to-work-on',
      title: 'what to work on',
      content: 'What you think about in the shower is what you should probably focus on. And the better question is not "what do you want?" but "what pain are you willing to go through?" Life is all journey. There is nothing else.',
      link: 'https://paulgraham.com/greatwork.html',
      linkText: 'Paul Graham\'s "How to Do Great Work"'
    },
    {
      id: 'compounding-knowledge',
      title: 'curated knowledge (shane parrish + me)',
      content: [
        '• Small decisions add up. Ordinary choices such as what you read, who you talk to, and how you spend the evening compound into who you become. Extraordinary results come from the accumulation of ordinary moments.',
        '• We live in the age of curation. The best ideas from thousands of years are compressed into books, podcasts, and essays. We get the curated of the curated, filtered and modernized.',
        '• Consumed knowledge and aphorisms becomes part of you (how you do anything is how you do everything). Consume enough of these distilled ideas and they shape how you see & approach the world. They do not just stay on the page, they embed in your judgment and your habits.',
        '• Modern language makes wisdom usable. Ancient texts carried timeless insights, but today they are rewritten in engaging ways, clearer, faster to grasp, and easier to apply. Ideas are more actionable and understandable than ever.',
        '• The edge comes from deliberately choosing what to consume and letting it compound over time.'
      ],
      link: null,
      linkText: null
    },
    {
      id: 'desire',
      title: 'desire',
      content: 'Not wanting something can be just as good as having it. Leverage comes from pursuing only what you genuinely desire and disregarding everything else.',
      link: null,
      linkText: null
    },
    {
      id: 'mark-manson',
      title: 'mark manson',
      content: [
        '1. You don\'t need a productivity system, you need a bedtime',
        '2. 8 hours of sleep and a daily walk outside will solve as many of your problems as any online guru or coach will',
        '3. The most effective antidepressant in the world is exercise',
        '4. If you don\'t choose your priorities in life, the world will choose them for you',
        '5. Your values are exemplified by what you\'re willing to give up/sacrifice',
        '6. If saying no and standing on your own makes you feel guilty, then at some point in your life you\'ve probably been trained to neglect yourself',
        '7. Most people aren\'t actually stuck because their life is too hard. They\'re actually stuck because the distractions feel safer than the solutions do',
        '8. Learning more is a smart persons way to procrastinate',
        '9. Focus on doing 1 or 2 things extremely well. Do them in 1 place very consistently with a small group of people over a long period of time',
        '10. Confidence and fear both require believing in something that hasn\'t happened yet. You\'re choosing to be scared',
        '11. Growth requires failure the same way that gaining strength requires pain',
        '12. The only difference between a successful person and an unsuccessful person is the successful person has tolerated more failures over a longer period of time',
        '13. You don\'t get rid of anxiety or self-doubt, you just learn how to develop the ability to act despite it',
        '14. Happiness is not a lack of problems. Happiness is having better problems. Success is having better failures. Discipline is, in a way, having better addictions. You don\'t get rid of the struggle, you learn to upgrade it'
      ],
      link: null,
      linkText: null
    },
    {
      id: 'treadmill-friends',
      title: 'treadmill friends vs sofa friends (from George Mack)',
      content: [
        'Treadmill friends leave you wired. After seeing them you feel like you could sprint. Sofa friends leave you flat. After seeing them you just want to lie down.',
        'That is energy transference. Hard to define, but everyone knows it. It feels like a double espresso after a conversation. Steve Jobs had it so strong people called it a Reality Distortion Field.',
        'Listen to how people speak at funerals. They remember the energy someone gave.',
        '• He made you feel like the only person in the room',
        '• She was the first person to believe in me',
        'This is why the saying makes sense. People do not remember what you said. They remember how you made them feel.',
        'A few notes:',
        '1. It is not mystical. It is probably charisma, tone, belief, expression, and worldview working together.',
        '2. You cannot teach it directly. But it spreads. Spend time with treadmill friends and you pick it up. Spend time with sofa friends and you pick that up too.',
        '3. Be careful with late night dinners with treadmill friends. You might not sleep.',
        'Notice who gives you energy and who drains it. Spend more time with treadmill friends.'
      ],
      link: null,
      linkText: null
    },
    {
      id: 'david-perell',
      title: 'david perell (50 best ideas, condensed)',
      content: [
        '1. Inversion: Avoiding stupidity is easier than trying to be brilliant. Ask, "What can go wrong?" and don\'t do it.',
        '2. Doublespeak: People often say the opposite of what they mean. "War is peace. Freedom is slavery. Ignorance is strength."',
        '3. Theory of Constraints: Every system has a bottleneck. Fix the weakest point and the whole system improves.',
        '4. Preference Falsification: In public people say one thing, in private they say another.',
        '5. Faustian Bargain: Winning in the short term but losing in the long term.',
        '6. Mimetic Desire: We copy each other\'s wants. Most desire is imitation.',
        '7. Mimetic Conflict: The more similar people are, the more they fight.',
        '8. Talent vs Genius: Talent hits targets others can\'t. Genius finds targets others can\'t see.',
        '9. Competition is for Losers: Don\'t copy. Work on problems others ignore.',
        '10. Secrets in Plain Sight: Big opportunities are often obvious but overlooked.',
        '11. Never-Ending Now: Social media keeps us trapped in the present and blind to history.',
        '12. Demand Curves Slope Down: The harder or pricier something is, the fewer people will do it.',
        '13. Look for Things That Don\'t Make Sense: Confusion means your model is wrong. Opportunity hides there.',
        '14. Wisdom of Paradox: The deepest truths are often opposites that are both true.',
        '15. Law of Shitty Click-Through Rates: Every marketing tactic works until it doesn\'t.',
        '16. Russell Conjugation: Swap a word and you change meaning. "Estate tax" vs "death tax."',
        '17. Opportunity Cost: Saying yes to one thing means saying no to another.',
        '18. Overton Window: Control what ideas are acceptable and you control thought.',
        '19. Planck\'s Principle: Science advances one funeral at a time.',
        '20. Bike-Shed Effect: People argue over trivial details and ignore what matters.',
        '21. Table Selection: Winning is easier when you choose the right game.',
        '22. Goodhart\'s Law: When a measure becomes a target, it stops working.',
        '23. Gall\'s Law: Complex systems that work come from simple systems that worked.',
        '24. Hock Principle: Simple principles lead to smart behavior. Complex rules lead to dumb behavior.',
        '25. Parkinson\'s Law: Work expands to fill the time you give it.',
        '26. Second Law of Thermodynamics: The world drifts toward disorder. Entropy always wins.',
        '27. Paradox of Specificity: The more specific you are, the more opportunities you create.',
        '28. Emergence: Interactions create outcomes greater than the parts.',
        '29. Occam\'s Razor: The simplest explanation is usually the right one.',
        '30. Hickam\'s Dictum: Complex problems often have multiple causes.',
        '31. Hormesis: A little stress helps. A lot destroys.',
        '32. Robustness Principle: Be strict with yourself, generous with others.',
        '33. Legibility: Not everything that counts can be measured.',
        '34. Horseshoe Theory: Extremes resemble each other more than the center.',
        '35. Availability Cascade: Ideas spread because they are popular, not because they are true.',
        '36. Creativity Begins at the Edge: The best ideas start on the margins, not the mainstream.',
        '37. Copernican Principle: We are not special. Earth and humans are tiny in time and space.',
        '38. Personal Monopoly: Become the only person who does what you do.',
        '39. Paradox of Consensus: Too much agreement can mean something is wrong.',
        '40. Penny Problem Gap: Even tiny costs change behavior completely.',
        '41. Invisible Hand: Prices are signals wrapped in incentives.',
        '42. Base Rate: Use averages and probabilities as reality checks.',
        '43. Circle of Competence: Know what you know. Admit what you don\'t.',
        '44. Convexity: Seek bets with big upside and small downside.',
        '45. Go-For-It Window: Huge opportunities open when technology outpaces culture.',
        '46. Via Negativa: Sometimes subtraction is the best solution.',
        '47. Medium is the Message: The medium shapes society more than the content.',
        '48. Resource Curse: Natural wealth often makes nations weaker, not stronger.',
        '49. Paradox of Abundance: In a world of too much, average quality falls but the best rises.',
        '50. Map is Not the Territory: Models are not reality. The gaps are where you find edges.'
      ],
      link: null,
      linkText: null
    }
  ];

  const filteredSections = sections.filter(section =>
    searchQuery.trim() === "" ||
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (Array.isArray(section.content) 
      ? section.content.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
      : section.content.toLowerCase().includes(searchQuery.toLowerCase()))
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
            favorite ideas
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto px-4 md:px-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
            <input
              type="text"
              placeholder="Search ideas..."
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
                  {Array.isArray(section.content) ? (
                    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                      {section.content.map((item, index) => (
                        <div 
                          key={index}
                          dangerouslySetInnerHTML={{ 
                            __html: highlightText(item, searchQuery) 
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <p 
                      className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm"
                      dangerouslySetInnerHTML={{ 
                        __html: highlightText(section.content, searchQuery) 
                      }}
                    />
                  )}
                  {section.link && (
                    <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm">
                      See <a href={section.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">{section.linkText}</a>.
                    </p>
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
