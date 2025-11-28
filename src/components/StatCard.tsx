import React from 'react';
import { StatItem } from '../types';

interface StatCardProps extends StatItem {}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, gradient }) => {
  return (
    <div className={`p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-white ${gradient}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
          <Icon size={24} className="text-white" />
        </div>
        <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-lg backdrop-blur-sm">
          +2.5% vs Last Week
        </span>
      </div>
      <div>
        <p className="text-sm font-medium opacity-90 mb-1">{title}</p>
        <h3 className="text-3xl font-bold tracking-tight">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;