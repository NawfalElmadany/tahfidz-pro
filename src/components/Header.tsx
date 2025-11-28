import React from 'react';
import { Menu, Bell } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const currentDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg bg-white shadow-sm text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <Menu size={24} />
        </button>
        
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Assalamualaikum, <span className="text-indigo-600">Ustadz Hanif</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {currentDate}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 self-end sm:self-auto">
        <button className="relative p-2.5 rounded-full bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition-all text-gray-600">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-800">Hanif Abdullah</p>
            <p className="text-xs text-indigo-500 font-medium">Head Teacher</p>
          </div>
          <img 
            src="https://picsum.photos/seed/ustadz/100/100" 
            alt="Profile" 
            className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;