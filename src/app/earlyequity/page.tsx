import Image from "next/image";
import Link from "next/link";
import { Podcast, Youtube, Linkedin, Music, ArrowLeft } from "lucide-react";

export default function EarlyEquity() {
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
      
      <div className="flex flex-col items-center text-center gap-12 p-16 rounded-2xl bg-white border-2 border-transparent relative overflow-hidden">
        {/* Moving gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse"></div>
        <div className="absolute inset-1 rounded-2xl bg-white"></div>
        
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-purple-500/50 shadow-lg relative z-10">
          <Image
            src="/finalequity.png"
            alt="Early Equity"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social Links */}
        <div className="w-full max-w-sm space-y-3 relative z-10">
          <Link
            href="https://open.spotify.com/show/7GJN0UTtuNgPENsu2qWw3Y?si=01d2d953c5184fd9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-white border border-gray-200 hover:shadow-lg rounded-lg transition-all duration-200 text-gray-700 hover:text-purple-700 group relative overflow-hidden"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="absolute inset-0.5 rounded-lg bg-white"></div>
            <Music className="w-5 h-5 relative z-10" />
            <span className="relative z-10">listen on spotify</span>
          </Link>

          <Link
            href="https://podcasts.apple.com/us/podcast/early-equity/id1825452405"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-white border border-gray-200 hover:shadow-lg rounded-lg transition-all duration-200 text-gray-700 hover:text-purple-700 group relative overflow-hidden"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="absolute inset-0.5 rounded-lg bg-white"></div>
            <Podcast className="w-5 h-5 relative z-10" />
            <span className="relative z-10">apple podcasts</span>
          </Link>

          <Link
            href="https://www.youtube.com/@earlyequityhq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-white border border-gray-200 hover:shadow-lg rounded-lg transition-all duration-200 text-gray-700 hover:text-purple-700 group relative overflow-hidden"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="absolute inset-0.5 rounded-lg bg-white"></div>
            <Youtube className="w-5 h-5 relative z-10" />
            <span className="relative z-10">youtube</span>
          </Link>

          <Link
            href="https://www.linkedin.com/company/earlyequityhq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-white border border-gray-200 hover:shadow-lg rounded-lg transition-all duration-200 text-gray-700 hover:text-purple-700 group relative overflow-hidden"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="absolute inset-0.5 rounded-lg bg-white"></div>
            <Linkedin className="w-5 h-5 relative z-10" />
            <span className="relative z-10">linkedin</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 