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
      
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-serif font-bold tracking-tight">
          what i'm planning / working on
        </h1>
        <p className="text-muted-foreground">
          Coming soon...
        </p>
      </div>
    </div>
  );
} 
