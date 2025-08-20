"use client";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronRight, Search } from "lucide-react";
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
        '• Optimize for fulfillment. Spending money only to die with it means you traded years of life for dollars you never used.',
        '• Memory dividends. An experience in your 20s or 30s keeps paying you back every time you recall it. Health and mobility decline, so front-load your life.',
        '• Time buckets. Divide life into 5–10 year windows. Place the right experiences in the right stage so you don\'t miss chances that close with age.',
        '• Give while it matters. A dollar to a 20-year-old changes more than the same dollar at 50. Give to kids or causes when the impact is highest.',
        '• Use insurance, not oversaving. Transfer risk so you can spend freely on living well now.',
        '• Don\'t maximize net worth, maximize net fulfillment. The real scorecard is how well you convert money into meaningful life.',
        '• Trade-offs are unavoidable. Every dollar saved is an experience deferred. Every experience taken is compounding interest you give up. Balance consciously.'
      ],
      link: 'https://open.spotify.com/episode/1huHLhgK7lsPtFflpo0d21?si=0fb50bbb5c9041ee',
      linkText: 'Bill Perkins on Modern Wisdom #642'
    },
    {
      id: 'what-to-work-on',
      title: 'what to work on',
      content: 'What you think about in the shower is what you should probably focus on. The better question isn\'t "what do you want?" but "what pain are you willing to go through?" Progress is about struggle. Life is all journey. There is nothing else.',
      link: 'https://paulgraham.com/greatwork.html',
      linkText: 'Paul Graham\'s "How to Do Great Work"'
    },
    {
      id: 'compounding-knowledge',
      title: 'curated knowledge (shane parrish)',
      content: [
        '• Small decisions add up. What you read, who you talk to, how you spend an evening—these compound into who you become.',
        '• We live in the age of curation. Thousands of years of wisdom are compressed into books, podcasts, and essays.',
        '• Knowledge sticks. The ideas you consume shape your judgment and habits. They don\'t stay on the page.',
        '• Modern language makes wisdom usable. Old truths are rewritten to be clearer and easier to apply.',
        '• The edge comes from choosing what you consume and letting it compound.',
        '• Mental models are thinking tools. Collect them, connect them, and use them until they become instinct.',
        '• The foundational nine: map ≠ territory, circle of competence, first principles, thought experiments, second-order thinking, probabilistic thinking, inversion, Occam\'s razor, Hanlon\'s razor.',
        '• Better decisions are leverage. One right choice can be worth years of effort.',
        '• Clarity beats complexity. Simple rules, applied consistently, win.',
        '• Avoid stupidity. Cutting mistakes is often the fastest way to improve.',
        '• Handle decisions by consequence. Reversible ones? Act fast. Irreversible ones? Wait.'
      ],
      link: 'https://fs.blog/mental-models/',
      linkText: 'Farnam Street Mental Models'
    },
    {
      id: 'mark-manson',
      title: 'mark manson',
      content: [
        '• You don\'t need a productivity system. You need a bedtime.',
        '• Eight hours of sleep and a daily walk fix more problems than any guru.',
        '• The best antidepressant is exercise.',
        '• If you don\'t choose your priorities, the world will.',
        '• Your values show up in what you\'re willing to sacrifice.',
        '• If saying no makes you feel guilty, you were trained to neglect yourself.',
        '• Most people aren\'t stuck because life is hard. They\'re stuck because distractions feel safer than solutions.',
        '• Reading more isn\'t progress. Often it\'s procrastination.',
        '• Do one or two things well. Do them in one place, consistently, with a small group, for years.',
        '• Confidence and fear are both belief in the future. You\'re choosing fear.',
        '• Growth comes from failure. Success is just tolerating more of it.',
        '• You don\'t erase anxiety or self-doubt. You act anyway.',
        '• Happiness is better problems. Success is better failures. Discipline is better addictions. You don\'t remove struggle, you upgrade it.'
      ],
      link: null,
      linkText: null
    },
    {
      id: 'treadmill-friends',
      title: 'treadmill vs sofa friends (George Mack)',
      content: [
        'Treadmill friends leave you wired. Sofa friends leave you flat. That\'s energy transfer. Everyone knows the feeling. Steve Jobs had it so strong people called it a reality distortion field.',
        '',
        'At funerals, people don\'t recall what you said. They recall how you made them feel:',
        '• He made you feel like the only person in the room.',
        '• She was the first person to believe in me.',
        '',
        'A few notes:',
        '1. It\'s not mystical. It\'s charisma, tone, belief, and worldview combined.',
        '2. You can\'t teach it directly. But it spreads. Time with treadmill friends makes you more like them. Sofa friends do the same.',
        '3. Late dinners with treadmill friends might keep you awake.',
        '',
        'Notice who gives you energy and who drains it. Spend more time with treadmill friends.'
      ],
      link: null,
      linkText: null
    },
    {
      id: 'david-perell',
      title: 'david perell (50 best ideas, condensed)',
      content: [
        '1. Inversion. Avoiding stupidity is easier than being brilliant. Ask what hurts your company and stop it.',
        '2. Doublespeak. People say the opposite of what they mean. "War is peace. Freedom is slavery. Ignorance is strength."',
        '3. Theory of Constraints. A system is only as strong as its weakest link. Fix the bottleneck.',
        '4. Preference Falsification. People hide their real opinions in public and share them in private.',
        '5. Faustian Bargain. Don\'t win the battle and lose the war. Some trades cost more than they give.',
        '6. Mimetic Desire. We copy each other\'s wants. Advertising runs on this.',
        '7. Mimetic Conflict. Similar people fight hardest. That\'s why family feuds and civil wars get ugly.',
        '8. Talent vs Genius. Talent hits targets others can hit. Genius sees targets others can\'t.',
        '9. Competition is for Losers. Don\'t copy. Solve problems no one else will.',
        '10. Secrets in Plain Sight. The best ideas are obvious but overlooked.',
        '11. Never-Ending Now. Social media traps us in endless present, blind to history.',
        '12. Demand Curves. Raise price, fewer buyers. Lower price, more buyers.',
        '13. Look for Nonsense. When the world doesn\'t make sense, your model is wrong. That\'s opportunity.',
        '14. Wisdom of Paradox. Opposites can both be true. Explore paradoxes.',
        '15. Shitty Click-Through Rates. Marketing tactics decay. What worked yesterday won\'t tomorrow.',
        '16. Russell Conjugation. Word choice twists meaning. "Estate tax" vs "death tax."',
        '17. Opportunity Cost. Doing one thing means not doing another. Every choice is a trade.',
        '18. Overton Window. Control debate by setting what\'s "acceptable." Everything outside is ignored.',
        '19. Planck\'s Principle. Science advances one funeral at a time. Old ideas die with old scientists.',
        '20. Bike-Shed Effect. People argue over trivial stuff, ignore hard problems.',
        '21. Table Selection. Don\'t fight the best. Pick easier tables and execute well.',
        '22. Goodhart\'s Law. When a measure becomes a target, it stops working.',
        '23. Gall\'s Law. Complex systems evolve from simple ones. You can\'t design complexity from scratch.',
        '24. Hock Principle. Simple rules create smart behavior. Complex rules create stupid behavior.',
        '25. Parkinson\'s Law. Work expands to fill the time allowed. Deadlines matter.',
        '26. Second Law of Thermodynamics. The world trends toward disorder. Entropy always rises.',
        '27. Paradox of Specificity. Narrow focus creates more opportunities in the internet age.',
        '28. Emergence. Interactions create new, unpredictable forms. The whole is more than parts.',
        '29. Occam\'s Razor. The simplest explanation is usually true.',
        '30. Hickam\'s Dictum. Sometimes problems have many causes, not one.',
        '31. Hormesis. Low doses help, high doses harm. Stress a little, not too much.',
        '32. Robustness Principle. Hold yourself to higher standards than you hold others.',
        '33. Legibility. We manage what we can measure. But not everything that matters can be measured.',
        '34. Horseshoe Theory. Extremes resemble each other more than the center.',
        '35. Availability Cascade. Ideas spread because they\'re popular, not because they\'re true.',
        '36. Creativity at the Edge. Big ideas start on the margins, not the main stage.',
        '37. Copernican Principle. Earth and humans are not special. We\'re small in time and space.',
        '38. Personal Monopoly. Be the only person who does what you do. Own your niche.',
        '39. Paradox of Consensus. Total agreement can signal error, not truth.',
        '40. Penny Problem. Even tiny costs change behavior. Spam would vanish if emails cost $0.001.',
        '41. Invisible Hand. Prices signal supply and demand. Markets coordinate knowledge.',
        '42. Base Rate. Know the average odds. Restaurants fail more than succeed.',
        '43. Circle of Competence. Know what you know. Stay within your limits.',
        '44. Convexity. Look for bets with big upside and small downside.',
        '45. Go-For-It Window. Social norms lag behind tech. Gaps create short-lived opportunities.',
        '46. Via Negativa. Subtract to improve. What you avoid matters more than what you add.',
        '47. Medium is the Message. The medium shapes society more than the content.',
        '48. Resource Curse. Countries with lots of natural resources often grow slower.',
        '49. Paradox of Abundance. More info lowers the average quality but raises the best.',
        '50. Map is Not the Territory. All models are wrong, some are useful. Pay attention to what maps leave out.',
        '',
        'Baker\'s Dozen. Delight people with an unexpected bonus. Extra bagel, free chocolate, surprise gift.'
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
                </div>
              )}
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}
