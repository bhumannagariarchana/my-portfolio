import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-gray-400">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Bhumannagari Archana
        </p>
        <p className="text-gray-500 text-sm mt-2">
          © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}