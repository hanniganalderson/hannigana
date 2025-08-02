import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CollectiveIdeas() {
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
            collective ideas and content i enjoy
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6 text-muted-foreground">
          <div>
            <p className="mb-2">
              <Link 
                href="https://www.navalmanack.com/almanack-of-naval-ravikant/table-of-contents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-200 underline"
              >
                https://www.navalmanack.com/almanack-of-naval-ravikant/table-of-contents
              </Link>
            </p>
            <p>Obviously, my #1 piece of content. Naval's Almanack.</p>
          </div>
          
          <div>
            <p className="mb-2">
              <Link 
                href="https://www.highagency.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-200 underline"
              >
                https://www.highagency.com/
              </Link>
            </p>
            <p>One of my favorite essays ever written on a topic most people overlook.</p>
          </div>
          
          <div>
            <p className="mb-2">
              <Link 
                href="https://youtu.be/xmYekD6-PZ8?si=ymQZQTdnA4s_hkqv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-200 underline"
              >
                https://youtu.be/xmYekD6-PZ8?si=ymQZQTdnA4s_hkqv
              </Link>
            </p>
            <p>The most important talk for clarity on navigating a career.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 