import React from 'react';
import { LogOut, X, BookHeart } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activePage, onNavigate }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar Content */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-indigo-900 text-white
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col h-full shadow-2xl lg:shadow-none
      `}>
        {/* Logo */}
        <div className="p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
              <BookHeart className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-wide">TQA Madiun</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-white/70 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          <div className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4 px-4">
            Main Menu
          </div>
          {MENU_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  if (window.innerWidth < 1024) onClose();
                }}
                className={`
                  w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group
                  ${isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' 
                    : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'
                  }
                `}
              >
                <item.icon size={20} className={`transition-transform duration-200 group-hover:scale-110 ${isActive ? 'text-white' : 'text-indigo-300 group-hover:text-white'}`} />
                <span className="font-medium text-sm">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-indigo-800/50">
           <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-200 hover:bg-red-500/10 hover:text-red-100 transition-colors">
            <LogOut size={20} />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;