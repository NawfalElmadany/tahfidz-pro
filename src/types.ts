import React from 'react';

export interface Student {
  id: string;
  name: string;
  avatar: string;
  currentJuz: number;
  currentSurah: string;
  totalProgress: number; // Percentage 0-100
  lastUpdate: string;
  status: 'Mumtaz' | 'Jayyid' | 'Perlu Bimbingan';
}

export interface StatItem {
  title: string;
  value: string | number;
  icon: React.ElementType;
  gradient: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
}