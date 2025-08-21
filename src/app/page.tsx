"use client";
import { Hero } from "@/components/sections/hero";
import { Interests } from "@/components/sections/interests";
import { Socials } from "@/components/sections/socials";
import { Thoughts } from "@/components/sections/thoughts";
import Image from "next/image";
import { MapPin, Linkedin, Mail, Calendar, TrendingUp, Truck, Users, BookOpen, Lightbulb, FileText } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white intro-fade intro-fade-delayed pointer-events-none">
          <div className="text-center px-6 intro-panel bg-white/40 backdrop-blur-md rounded-xl shadow-2xl ring-2 ring-white/60">
            <h1 className="text-2xl font-semibold tracking-tight">Hannigan Alderson</h1>
            <svg className="mx-auto mt-2" width="220" height="24" viewBox="0 0 220 24" aria-hidden>
              <path
                d="M2 12 Q 60 2 110 12 T 218 12"
                className="signature-path"
                stroke="#a78bfa"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <div className="mt-3 text-sm text-gray-600 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bend, OR</span>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-2xl px-4 py-8 md:py-12 lg:py-20">
        <div className="flex flex-col gap-8 md:gap-10">
          {/* About Section */}
          <div className="flex flex-col items-center text-center gap-6 md:gap-8 p-6 md:p-8 lg:p-12 rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01]">
            {/* Animated multicolor outline with glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-blue-400 bg-[length:400%_100%] animate-gradient-x opacity-50 shadow-lg"></div>
            <div className="absolute inset-0.5 rounded-2xl bg-white/90 backdrop-blur-sm shadow-inner"></div>
            
            {/* Subtle inner glow */}
            <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-blue-50/15 via-purple-50/15 to-pink-50/15"></div>
            
            {/* Enhanced depth with multiple shadow layers */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.08)]"></div>
            <div className="absolute inset-0 rounded-2xl shadow-[0_6px_25px_rgba(0,0,0,0.08)]"></div>
            
            {/* Profile Image with enhanced shadow */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-blue-200 shadow-2xl relative z-10 bg-white hover:scale-105 transition-transform duration-300">
              <Image
                src="/profile.png"
                alt="Hannigan Alderson"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Location */}
            <div className="relative z-10">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">Hannigan Alderson</h1>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm md:text-base">Bend, OR</span>
              </div>
            </div>
            
            {/* About Content */}
            <div className="text-left w-full max-w-lg space-y-3 md:space-y-4 relative z-10">
              <div className="text-gray-700 leading-relaxed text-center text-sm md:text-base">
                Studying <a href="https://engineering.oregonstate.edu/academics/programs/computer-science/undergraduate/applied-software-entrepreneurship" target="_blank" rel="noopener noreferrer" className="group relative cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm md:text-base">
                  Computer Science
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1 z-20">
                    OSU-Cascades
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                </a>, graduating <Link href="/2027" className="group relative cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm md:text-base">
                  2027
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1 z-20">
                    goals
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                </Link>
              </div>
              
              <div>
                <p className="text-gray-700 font-medium mb-2 md:mb-3 text-center text-sm md:text-base">Interested in:</p>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <Link href="/ideas" className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm md:text-base">
                      decision making
                    </Link>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm md:text-base">
                      personal <a href="https://www.highagency.com/" target="_blank" rel="noopener noreferrer" className="group relative cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-200">
                        systems
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm md:text-base">fitness and nutrition</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <Link href="/startups" className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm md:text-base">
                      startups
                    </Link>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm md:text-base group relative cursor-pointer">
                      investing
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1 z-20 max-w-xs">
                        growth stocks & BTC
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                      </div>
                    </span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm md:text-base group relative cursor-pointer">
                      real estate
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1 z-20 max-w-xs">
                        in Bend & Phoenix metro
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="space-y-3">
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01]">
                {/* Animated purple outline - very thin */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 bg-[length:400%_100%] animate-gradient-x opacity-35"></div>
                <div className="absolute inset-0.5 rounded-xl bg-white/90 backdrop-blur-sm"></div>
                
                {/* Subtle inner glow */}
                <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-purple-50/8 to-purple-100/8"></div>
                
                {/* Layered shadows for depth */}
                <div className="absolute inset-0 rounded-xl shadow-[0_3px_15px_rgba(147,51,234,0.12)]"></div>
                <div className="absolute inset-0 rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)]"></div>
                
                {/* Now */}
                <Link href="/now" className="block w-full">
                  <div className="flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-2 bg-white/90 backdrop-blur-sm border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-purple-600 group text-sm md:text-base relative z-10 hover:scale-105 min-h-[44px] sm:min-h-0 w-full">
                    <Calendar className="w-4 h-4" />
                    <span>now</span>
                  </div>
                </Link>

                {/* Learning */}
                <Link href="/learning" className="block w-full">
                  <div className="flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-2 bg-white/90 backdrop-blur-sm border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-purple-600 group text-sm md:text-base relative z-10 hover:scale-105 min-h-[44px] sm:min-h-0 w-full">
                    <BookOpen className="w-4 h-4" />
                    <span>learning</span>
                  </div>
                </Link>

                {/* Favorite Ideas */}
                <Link href="/ideas" className="block w-full">
                  <div className="flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-2 bg-white/90 backdrop-blur-sm border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-purple-600 group text-sm md:text-base relative z-10 hover:scale-105 min-h-[44px] sm:min-h-0 w-full">
                    <Lightbulb className="w-4 h-4" />
                    <span>favorite ideas</span>
                  </div>
                </Link>

                {/* My Notes */}
                <Link href="/notes" className="block w-full">
                  <div className="flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-2 bg-white/90 backdrop-blur-sm border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-purple-600 group text-sm md:text-base relative z-10 hover:scale-105 min-h-[44px] sm:min-h-0 w-full">
                    <FileText className="w-4 h-4" />
                    <span>my notes</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-3">
            <h2 className="text-base md:text-lg font-medium text-gray-700 text-center">projects</h2>
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-6 md:p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl relative overflow-visible hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01]">
                {/* Animated red outline - very thin */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-400 via-red-500 to-red-400 bg-[length:400%_100%] animate-gradient-x opacity-35"></div>
                <div className="absolute inset-0.5 rounded-xl bg-white/90 backdrop-blur-sm"></div>
                
                {/* Subtle inner glow */}
                <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-red-50/8 to-red-100/8"></div>
                
                {/* Layered shadows for depth */}
                <div className="absolute inset-0 rounded-xl shadow-[0_3px_15px_rgba(239,68,68,0.12)]"></div>
                <div className="absolute inset-0 rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)]"></div>
                
                <a
                  href="https://aidmatch.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-2 bg-white/90 backdrop-blur-sm border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-red-600 cursor-pointer hover:-translate-y-1 text-sm md:text-base relative z-10 hover:scale-105 w-full sm:w-auto min-h-[44px] sm:min-h-0"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>aidmatch</span>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1 z-20">
                    AI scholarship matching
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                </a>

                <Link
                  href="/earlyequity"
                  className="group relative flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-2 bg-white/90 backdrop-blur-sm border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-red-600 cursor-pointer hover:-translate-y-1 text-sm md:text-base relative z-10 hover:scale-105 w-full sm:w-auto min-h-[44px] sm:min-h-0"
                >
                  <Users className="w-4 h-4" />
                  <span>early equity</span>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1 z-20">
                    founder conversations
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h2 className="text-base md:text-lg font-medium text-gray-700 text-center">contact</h2>
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 md:p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01]">
                {/* Animated blue outline - very thin */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-[length:400%_100%] animate-gradient-x opacity-35"></div>
                <div className="absolute inset-0.5 rounded-xl bg-white/90 backdrop-blur-sm"></div>
                
                {/* Subtle inner glow */}
                <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-blue-50/8 to-blue-100/8"></div>
                
                {/* Layered shadows for depth */}
                <div className="absolute inset-0 rounded-xl shadow-[0_3px_15px_rgba(59,130,246,0.12)]"></div>
                <div className="absolute inset-0 rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)]"></div>
                
                <a
                  href="https://linkedin.com/in/hanniganalderson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-2 bg-white/90 backdrop-blur-sm border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-blue-700 group text-sm md:text-base relative z-10 hover:scale-105 w-full sm:w-auto min-h-[44px] sm:min-h-0"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin</span>
                </a>
                
                <a
                  href="mailto:hi@hannigana.com"
                  className="flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-2 bg-white/90 backdrop-blur-sm border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-blue-700 group text-sm md:text-base relative z-10 hover:scale-105 w-full sm:w-auto min-h-[44px] sm:min-h-0"
                >
                  <Mail className="w-4 h-4" />
                  <span>hi@hannigana.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
