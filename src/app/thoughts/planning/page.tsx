import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Planning() {
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
            what i'm planning / working on
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-4 text-muted-foreground">
          <p>computer science studies, graduating june 2027</p>
          <p>building a place to have real conversations with like-minded people</p>
          <p>buying my first property in spring 2028 — planning ahead on property type and getting loan ready</p>
          <p>meeting and learning from as many people as possible in all areas of life</p>
        </div>
      </div>
    </div>
  );
} 
