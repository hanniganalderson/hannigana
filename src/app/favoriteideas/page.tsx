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
          {/* Bill Perkins Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('bill-perkins')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                bill perkins
              </h2>
              {expandedSections.includes('bill-perkins') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('bill-perkins') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>• Optimize for fulfillment. Spend money on experiences, not just wealth accumulation. Money left over when you die means you traded irreplaceable time working for dollars you never used to live.</p>
                  <p>• Front load your life with "memory dividends." An experience in your 20s or 30s keeps paying you back every time you recall it, while health and mobility decline as you age.</p>
                  <p>• Plan with time buckets. Breaking your life into 5–10 year windows forces you to place the right experiences in the right stage, so you don't miss opportunities that will close with age.</p>
                  <p>• Give while it matters. Helping your kids or causes earlier creates more impact, since money has greater utility when people are younger (20 vs 50) or when organizations are growing.</p>
                  <p>• Manage risk with insurance, not oversaving. Instead of hoarding money out of fear, transfer longevity risk to insurance so you can spend more freely on living well today.</p>
                </div>
                <p className="text-gray-600 mt-6 leading-relaxed text-sm">
                  See <a href="https://open.spotify.com/episode/1huHLhgK7lsPtFflpo0d21?si=43be6650d8874898" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Bill Perkins on Modern Wisdom #642</a>.
                </p>
              </div>
            )}
          </div>

          {/* What to Work On Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('what-to-work-on')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                what to work on
              </h2>
              {expandedSections.includes('what-to-work-on') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('what-to-work-on') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  What you think about in the shower is what you should probably focus on. And the better question is not "what do you want?" but "what pain are you willing to go through?" Life is all journey. There is nothing else.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  See <a href="https://paulgraham.com/greatwork.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Paul Graham's "How to Do Great Work"</a>.
                </p>
              </div>
            )}
          </div>

          {/* Curated Knowledge Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('compounding-knowledge')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                curated knowledge (shane parrish + me)
              </h2>
              {expandedSections.includes('compounding-knowledge') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('compounding-knowledge') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>• Small decisions add up. Ordinary choices such as what you read, who you talk to, and how you spend the evening compound into who you become. Extraordinary results come from the accumulation of ordinary moments.</p>
                  <p>• We live in the age of curation. The best ideas from thousands of years are compressed into books, podcasts, and essays. We get the curated of the curated, filtered and modernized.</p>
                  <p>• Consumed knowledge and aphorisms becomes part of you (how you do anything is how you do everything). Consume enough of these distilled ideas and they shape how you see & approach the world. They do not just stay on the page, they embed in your judgment and your habits.</p>
                  <p>• Modern language makes wisdom usable. Ancient texts carried timeless insights, but today they are rewritten in engaging ways, clearer, faster to grasp, and easier to apply. Ideas are more actionable and understandable than ever.</p>
                  <p>• The edge comes from deliberately choosing what to consume and letting it compound over time.</p>
                </div>
              </div>
            )}
          </div>

          {/* Desire Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('desire')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                desire
              </h2>
              {expandedSections.includes('desire') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('desire') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Not wanting something can be just as good as having it. Leverage comes from pursuing only what you genuinely desire and disregarding everything else.
                </p>
              </div>
            )}
          </div>

          {/* Mark Manson Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('mark-manson')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                mark manson
              </h2>
              {expandedSections.includes('mark-manson') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('mark-manson') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>1. You don't need a productivity system, you need a bedtime</p>
                  <p>2. 8 hours of sleep and a daily walk outside will solve as many of your problems as any online guru or coach will</p>
                  <p>3. The most effective antidepressant in the world is exercise</p>
                  <p>4. If you don't choose your priorities in life, the world will choose them for you</p>
                  <p>5. Your values are exemplified by what you're willing to give up/sacrifice</p>
                  <p>6. If saying no and standing on your own makes you feel guilty, then at some point in your life you've probably been trained to neglect yourself</p>
                  <p>7. Most people aren't actually stuck because their life is too hard. They're actually stuck because the distractions feel safer than the solutions do</p>
                  <p>8. Learning more is a smart persons way to procrastinate</p>
                  <p>9. Focus on doing 1 or 2 things extremely well. Do them in 1 place very consistently with a small group of people over a long period of time</p>
                  <p>10. Confidence and fear both require believing in something that hasn't happened yet. You're choosing to be scared</p>
                  <p>11. Growth requires failure the same way that gaining strength requires pain</p>
                  <p>12. The only difference between a successful person and an unsuccessful person is the successful person has tolerated more failures over a longer period of time</p>
                  <p>13. You don't get rid of anxiety or self-doubt, you just learn how to develop the ability to act despite it</p>
                  <p>14. Happiness is not a lack of problems. Happiness is having better problems. Success is having better failures. Discipline is, in a way, having better addictions. You don't get rid of the struggle, you learn to upgrade it</p>
                </div>
              </div>
            )}
          </div>

          {/* Treadmill Friends Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('treadmill-friends')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                treadmill friends vs sofa friends (from George Mack)
              </h2>
              {expandedSections.includes('treadmill-friends') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('treadmill-friends') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>Treadmill friends leave you wired. After seeing them you feel like you could sprint. Sofa friends leave you flat. After seeing them you just want to lie down.</p>
                  <p>That is energy transference. Hard to define, but everyone knows it. It feels like a double espresso after a conversation. Steve Jobs had it so strong people called it a Reality Distortion Field.</p>
                  <p>Listen to how people speak at funerals. They remember the energy someone gave.</p>
                  <p>• He made you feel like the only person in the room</p>
                  <p>• She was the first person to believe in me</p>
                  <p>This is why the saying makes sense. People do not remember what you said. They remember how you made them feel.</p>
                  <p>A few notes:</p>
                  <p>1. It is not mystical. It is probably charisma, tone, belief, expression, and worldview working together.</p>
                  <p>2. You cannot teach it directly. But it spreads. Spend time with treadmill friends and you pick it up. Spend time with sofa friends and you pick that up too.</p>
                  <p>3. Be careful with late night dinners with treadmill friends. You might not sleep.</p>
                  <p>Notice who gives you energy and who drains it. Spend more time with treadmill friends.</p>
                </div>
              </div>
            )}
          </div>

          {/* David Perell Section */}
          <div className="group cursor-pointer" onClick={() => toggleSection('david-perell')}>
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:border-gray-200 transition-colors duration-200">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                david perell (50 best ideas, condensed)
              </h2>
              {expandedSections.includes('david-perell') ? (
                <ChevronDown className="w-4 h-4 text-purple-600 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-200" />
              )}
            </div>
            
            {expandedSections.includes('david-perell') && (
              <div className="px-4 py-6 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                  <p>1. Inversion: Avoiding stupidity is easier than trying to be brilliant. Ask, "What can go wrong?" and don't do it.</p>
                  <p>2. Doublespeak: People often say the opposite of what they mean. "War is peace. Freedom is slavery. Ignorance is strength."</p>
                  <p>3. Theory of Constraints: Every system has a bottleneck. Fix the weakest point and the whole system improves.</p>
                  <p>4. Preference Falsification: In public people say one thing, in private they say another.</p>
                  <p>5. Faustian Bargain: Winning in the short term but losing in the long term.</p>
                  <p>6. Mimetic Desire: We copy each other's wants. Most desire is imitation.</p>
                  <p>7. Mimetic Conflict: The more similar people are, the more they fight.</p>
                  <p>8. Talent vs Genius: Talent hits targets others can't. Genius finds targets others can't see.</p>
                  <p>9. Competition is for Losers: Don't copy. Work on problems others ignore.</p>
                  <p>10. Secrets in Plain Sight: Big opportunities are often obvious but overlooked.</p>
                  <p>11. Never-Ending Now: Social media keeps us trapped in the present and blind to history.</p>
                  <p>12. Demand Curves Slope Down: The harder or pricier something is, the fewer people will do it.</p>
                  <p>13. Look for Things That Don't Make Sense: Confusion means your model is wrong. Opportunity hides there.</p>
                  <p>14. Wisdom of Paradox: The deepest truths are often opposites that are both true.</p>
                  <p>15. Law of Shitty Click-Through Rates: Every marketing tactic works until it doesn't.</p>
                  <p>16. Russell Conjugation: Swap a word and you change meaning. "Estate tax" vs "death tax."</p>
                  <p>17. Opportunity Cost: Saying yes to one thing means saying no to another.</p>
                  <p>18. Overton Window: Control what ideas are acceptable and you control thought.</p>
                  <p>19. Planck's Principle: Science advances one funeral at a time.</p>
                  <p>20. Bike-Shed Effect: People argue over trivial details and ignore what matters.</p>
                  <p>21. Table Selection: Winning is easier when you choose the right game.</p>
                  <p>22. Goodhart's Law: When a measure becomes a target, it stops working.</p>
                  <p>23. Gall's Law: Complex systems that work come from simple systems that worked.</p>
                  <p>24. Hock Principle: Simple principles lead to smart behavior. Complex rules lead to dumb behavior.</p>
                  <p>25. Parkinson's Law: Work expands to fill the time you give it.</p>
                  <p>26. Second Law of Thermodynamics: The world drifts toward disorder. Entropy always wins.</p>
                  <p>27. Paradox of Specificity: The more specific you are, the more opportunities you create.</p>
                  <p>28. Emergence: Interactions create outcomes greater than the parts.</p>
                  <p>29. Occam's Razor: The simplest explanation is usually the right one.</p>
                  <p>30. Hickam's Dictum: Complex problems often have multiple causes.</p>
                  <p>31. Hormesis: A little stress helps. A lot destroys.</p>
                  <p>32. Robustness Principle: Be strict with yourself, generous with others.</p>
                  <p>33. Legibility: Not everything that counts can be measured.</p>
                  <p>34. Horseshoe Theory: Extremes resemble each other more than the center.</p>
                  <p>35. Availability Cascade: Ideas spread because they are popular, not because they are true.</p>
                  <p>36. Creativity Begins at the Edge: The best ideas start on the margins, not the mainstream.</p>
                  <p>37. Copernican Principle: We are not special. Earth and humans are tiny in time and space.</p>
                  <p>38. Personal Monopoly: Become the only person who does what you do.</p>
                  <p>39. Paradox of Consensus: Too much agreement can mean something is wrong.</p>
                  <p>40. Penny Problem Gap: Even tiny costs change behavior completely.</p>
                  <p>41. Invisible Hand: Prices are signals wrapped in incentives.</p>
                  <p>42. Base Rate: Use averages and probabilities as reality checks.</p>
                  <p>43. Circle of Competence: Know what you know. Admit what you don't.</p>
                  <p>44. Convexity: Seek bets with big upside and small downside.</p>
                  <p>45. Go-For-It Window: Huge opportunities open when technology outpaces culture.</p>
                  <p>46. Via Negativa: Sometimes subtraction is the best solution.</p>
                  <p>47. Medium is the Message: The medium shapes society more than the content.</p>
                  <p>48. Resource Curse: Natural wealth often makes nations weaker, not stronger.</p>
                  <p>49. Paradox of Abundance: In a world of too much, average quality falls but the best rises.</p>
                  <p>50. Map is Not the Territory: Models are not reality. The gaps are where you find edges.</p>
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
