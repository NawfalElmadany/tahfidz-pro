import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import { Student } from '../types';

interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student | null;
  onSave: (id: string, data: Partial<Student>) => void;
}

const InputModal: React.FC<InputModalProps> = ({ isOpen, onClose, student, onSave }) => {
  const [formData, setFormData] = useState({
    currentJuz: 30,
    currentSurah: '',
    totalProgress: 0,
    status: 'Jayyid' as Student['status']
  });

  useEffect(() => {
    if (student) {
      setFormData({
        currentJuz: student.currentJuz,
        currentSurah: student.currentSurah,
        totalProgress: student.totalProgress,
        status: student.status
      });
    }
  }, [student]);

  if (!isOpen || !student) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(student.id, {
      ...formData,
      lastUpdate: 'Baru saja'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 scale-100">
        <div className="bg-indigo-900 p-5 flex justify-between items-center text-white">
          <h3 className="font-bold text-lg">Input Hafalan Baru</h3>
          <button onClick={onClose} className="hover:bg-indigo-800 p-2 rounded-full transition-colors"><X size={20} /></button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="flex items-center gap-4 bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <img src={student.avatar} alt={student.name} className="w-14 h-14 rounded-full object-cover border-2 border-indigo-200" />
            <div>
              <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">Santri</p>
              <p className="font-bold text-gray-800 text-lg">{student.name}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-2">Juz Saat Ini</label>
              <input 
                type="number" 
                min="1" 
                max="30"
                value={formData.currentJuz}
                onChange={(e) => setFormData({...formData, currentJuz: parseInt(e.target.value)})}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-2">Status</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value as Student['status']})}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-medium bg-white"
              >
                <option value="Mumtaz">Mumtaz</option>
                <option value="Jayyid">Jayyid</option>
                <option value="Perlu Bimbingan">Perlu Bimbingan</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 mb-2">Surah Terakhir</label>
            <input 
              type="text" 
              value={formData.currentSurah}
              onChange={(e) => setFormData({...formData, currentSurah: e.target.value})}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-medium"
              placeholder="Contoh: Al-Mulk ayat 1-5"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="flex justify-between mb-2">
               <label className="block text-xs font-bold text-gray-600">Total Progress 30 Juz</label>
               <span className="text-xs font-bold text-indigo-600">{formData.totalProgress}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={formData.totalProgress}
              onChange={(e) => setFormData({...formData, totalProgress: parseInt(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>

          <button 
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-indigo-200"
          >
            <Save size={18} />
            Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputModal;