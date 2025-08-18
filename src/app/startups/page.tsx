"use client";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Startups() {
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
            startups
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg text-gray-600 mb-4 text-center">recommendations</h2>
            <div className="space-y-3">
              <a 
                href="https://paulgraham.com/greatwork.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 group hover:shadow-md border border-transparent hover:border-blue-300"
              >
                <span className="text-gray-700 font-medium">Great Work</span>
              </a>
              
              <a 
                href="https://paulgraham.com/love.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 group hover:shadow-md border border-transparent hover:border-blue-300"
              >
                <span className="text-gray-700 font-medium">Love</span>
              </a>
              
              <a 
                href="https://paulgraham.com/ds.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 group hover:shadow-md border border-transparent hover:border-blue-300"
              >
                <span className="text-gray-700 font-medium">Do Things That Don't Scale</span>
              </a>
              
              <a 
                href="https://paulgraham.com/growth.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 group hover:shadow-md border border-transparent hover:border-blue-300"
              >
                <span className="text-gray-700 font-medium">Startup = Growth</span>
              </a>
              
              <a 
                href="https://paulgraham.com/when.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 group hover:shadow-md border border-transparent hover:border-blue-300"
              >
                <span className="text-gray-700 font-medium">When to Start a Startup</span>
              </a>
              
              <a 
                href="https://open.spotify.com/episode/1rUbCbidC2eigLzm4A6ucg?si=0fb50bbb5c9041ee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 group hover:shadow-md border border-transparent hover:border-blue-300"
              >
                <span className="text-gray-700 font-medium">Founders - Steve Jobs Episode</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
