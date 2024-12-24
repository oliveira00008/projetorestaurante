import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Le Gourmet</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Menu</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;