"use client";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Startups() {
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
            startups
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-4 md:space-y-6">
          <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-xl p-4 md:p-6 border border-gray-200">
            <div className="space-y-2 md:space-y-3">
              <a 
                href="https://paulgraham.com/greatwork.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 md:p-4 bg-gray-50/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 group hover:shadow-sm border border-gray-200/50 hover:border-purple-300/50 hover:-translate-y-0.5"
              >
                <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors duration-200">Great Work</span>
              </a>
              
              <a 
                href="https://paulgraham.com/love.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 md:p-4 bg-gray-50/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 group hover:shadow-sm border border-gray-200/50 hover:border-purple-300/50 hover:-translate-y-0.5"
              >
                <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors duration-200">Love</span>
              </a>
              
              <a 
                href="https://paulgraham.com/ds.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 md:p-4 bg-gray-50/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 group hover:shadow-sm border border-gray-200/50 hover:border-purple-300/50 hover:-translate-y-0.5"
              >
                <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors duration-200">Do Things That Don't Scale</span>
              </a>
              
              <a 
                href="https://paulgraham.com/growth.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 md:p-4 bg-gray-50/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 group hover:shadow-sm border border-gray-200/50 hover:border-purple-300/50 hover:-translate-y-0.5"
              >
                <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors duration-200">Startup = Growth</span>
              </a>
              
              <a 
                href="https://paulgraham.com/when.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 md:p-4 bg-gray-50/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 group hover:shadow-sm border border-gray-200/50 hover:border-purple-300/50 hover:-translate-y-0.5"
              >
                <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors duration-200">When to Start a Startup</span>
              </a>
              
              <a 
                href="https://open.spotify.com/episode/1rUbCbidC2eigLzm4A6ucg?si=0fb50bbb5c9041ee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 md:p-4 bg-gray-50/80 hover:bg-gray-100/80 rounded-xl transition-all duration-200 group hover:shadow-sm border border-gray-200/50 hover:border-purple-300/50 hover:-translate-y-0.5"
              >
                <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors duration-200">Founders - Steve Jobs Episode</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
