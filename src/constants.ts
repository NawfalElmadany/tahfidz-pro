import { Student, MenuItem } from './types';
import { LayoutDashboard, Users, BookOpen, FileText, Settings } from 'lucide-react';

export const INITIAL_STUDENTS: Student[] = [
  {
    id: '1',
    name: 'Muhammad Fatih',
    avatar: 'https://picsum.photos/seed/fatih/200/200',
    currentJuz: 29,
    currentSurah: 'Al-Mulk',
    totalProgress: 85,
    lastUpdate: '10 Menit lalu',
    status: 'Mumtaz'
  },
  {
    id: '2',
    name: 'Aisyah Zahra',
    avatar: 'https://picsum.photos/seed/aisyah/200/200',
    currentJuz: 30,
    currentSurah: 'An-Naba',
    totalProgress: 92,
    lastUpdate: '1 Jam lalu',
    status: 'Mumtaz'
  },
  {
    id: '3',
    name: 'Umar Abdullah',
    avatar: 'https://picsum.photos/seed/umar/200/200',
    currentJuz: 28,
    currentSurah: 'Al-Mujadilah',
    totalProgress: 65,
    lastUpdate: 'Hari ini',
    status: 'Jayyid'
  },
  {
    id: '4',
    name: 'Fatimah Az-Zahra',
    avatar: 'https://picsum.photos/seed/fatimah/200/200',
    currentJuz: 29,
    currentSurah: 'Al-Haqqah',
    totalProgress: 78,
    lastUpdate: 'Kemarin',
    status: 'Jayyid'
  },
  {
    id: '5',
    name: 'Khalid bin Walid',
    avatar: 'https://picsum.photos/seed/khalid/200/200',
    currentJuz: 30,
    currentSurah: 'Al-Inshiqaq',
    totalProgress: 45,
    lastUpdate: '2 Hari lalu',
    status: 'Perlu Bimbingan'
  },
  {
    id: '6',
    name: 'Zaid bin Tsabit',
    avatar: 'https://picsum.photos/seed/zaid/200/200',
    currentJuz: 27,
    currentSurah: 'Ar-Rahman',
    totalProgress: 55,
    lastUpdate: '3 Hari lalu',
    status: 'Jayyid'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'santri', label: 'Data Santri', icon: Users },
  { id: 'setoran', label: 'Setoran', icon: BookOpen },
  { id: 'laporan', label: 'Laporan', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
];