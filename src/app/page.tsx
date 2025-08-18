"use client";
import { Hero } from "@/components/sections/hero";
import { Interests } from "@/components/sections/interests";
import { Socials } from "@/components/sections/socials";
import { Thoughts } from "@/components/sections/thoughts";
import Image from "next/image";
import { MapPin, Linkedin, Mail, Calendar, TrendingUp, Truck, Users, BookOpen, Lightbulb, FileText } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8 md:py-12 lg:py-20">
      <div className="flex flex-col gap-8 md:gap-10">
        {/* About Section */}
        <div className="flex flex-col items-center text-center gap-6 md:gap-8 p-8 md:p-12 rounded-2xl bg-white shadow-lg relative overflow-hidden">
          {/* Animated multicolor outline */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-blue-400 bg-[length:400%_100%] animate-gradient-x opacity-40 border-4"></div>
          <div className="absolute inset-1 rounded-2xl bg-white"></div>
          
          {/* Profile Image */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-blue-200 shadow-xl relative z-10">
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">Hannigan Alderson</h1>
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
              <MapPin className="w-4 h-4" />
              <span>Bend, OR</span>
            </div>
          </div>
          
          {/* About Content */}
          <div className="text-left w-full max-w-lg space-y-3 md:space-y-4 relative z-10">
            <div className="text-gray-700 leading-relaxed text-center text-sm md:text-base group relative cursor-pointer">
              Studying Computer Science, graduating 2027
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1">
                OSU-Cascades
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
            
            <div>
              <p className="text-gray-700 font-medium mb-2 md:mb-3 text-center text-sm md:text-base">Interested in:</p>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm md:text-base">software startups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm md:text-base group relative cursor-pointer">
                    real estate
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1">
                      in Bend & Phoenix metro
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm md:text-base group relative cursor-pointer">
                    investing
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1">
                      growth stocks & BTC
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm md:text-base">decision making & leverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm md:text-base group relative cursor-pointer">
                    systems for personal growth
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1">
                      see notes
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm md:text-base">fitness and nutrition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium text-gray-700 text-center">contact</h2>
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-6 bg-white border-2 border-blue-300 rounded-xl shadow-sm">
              <a
                href="https://linkedin.com/in/hanniganalderson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-blue-700 group text-sm md:text-base"
              >
                <Linkedin className="w-4 h-4" />
                <span>linkedin</span>
              </a>
              
              <a
                href="mailto:hi@hannigana.com"
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-blue-700 group text-sm md:text-base"
              >
                <Mail className="w-4 h-4" />
                <span>hi@hannigana.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium text-gray-700 text-center">projects</h2>
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-6 bg-white border-2 border-red-300 rounded-xl shadow-sm">
              <a
                href="https://aidmatch.co"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-red-600 cursor-pointer hover:-translate-y-1 text-sm md:text-base"
              >
                <TrendingUp className="w-4 h-4" />
                <span>aidmatch</span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1">
                  AI scholarship matching
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </a>

              <a
                href="https://www.yelp.com/biz/terra-nova-bend"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-red-600 cursor-pointer hover:-translate-y-1 text-sm md:text-base"
              >
                <Truck className="w-4 h-4" />
                <span>terra nova</span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1">
                  junk removal & hauling
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </a>

              <Link
                href="/earlyequity"
                className="group relative flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-red-600 cursor-pointer hover:-translate-y-1 text-sm md:text-base"
              >
                <Users className="w-4 h-4" />
                <span>early equity</span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap group-hover:-translate-y-1">
                  founder & investor conversations
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium text-gray-700 text-center">notes</h2>
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-6 bg-white border-2 border-purple-300 rounded-xl shadow-sm">
              {/* Reading & Listening */}
              <Link href="/exploring" className="block">
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-purple-600 group text-sm md:text-base">
                  <BookOpen className="w-4 h-4" />
                  <span>reading & listening</span>
                </div>
              </Link>

              {/* Favorite Ideas */}
              <Link href="/favoriteideas" className="block">
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-purple-600 group text-sm md:text-base">
                  <Lightbulb className="w-4 h-4" />
                  <span>favorite ideas</span>
                </div>
              </Link>

              {/* My Notes */}
              <Link href="/myideas" className="block">
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:shadow-md rounded-lg transition-all duration-200 text-gray-700 hover:text-purple-600 group text-sm md:text-base">
                  <FileText className="w-4 h-4" />
                  <span>my notes</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
