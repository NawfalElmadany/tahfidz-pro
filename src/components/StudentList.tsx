import React, { useState } from 'react';
import { ChevronRight, Edit3, Search } from 'lucide-react';
import { Student } from '../types';

interface StudentListProps {
  students: Student[];
  onInputNilai: (student: Student) => void;
}

const StudentList: React.FC<StudentListProps> = ({ students, onInputNilai }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.currentSurah.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getProgressColor = (progress: number) => {
    if (progress >= 85) return 'bg-emerald-500';
    if (progress >= 60) return 'bg-amber-400';
    return 'bg-rose-500';
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Mumtaz': return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
      case 'Jayyid': return 'bg-blue-100 text-blue-700 border border-blue-200';
      default: return 'bg-amber-100 text-amber-700 border border-amber-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-800">Leaderboard & Progres Hafalan</h2>
        
        {/* Search Bar */}
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Cari santri..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none w-full sm:w-64 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div 
              key={student.id} 
              className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                
                {/* Avatar & Info */}
                <div className="flex items-center gap-4 w-full sm:w-1/3">
                  <div className="relative">
                      <img 
                      src={student.avatar} 
                      alt={student.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-indigo-50 group-hover:border-indigo-200 transition-colors"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <div className={`w-3 h-3 rounded-full ${student.totalProgress > 80 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                      </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg group-hover:text-indigo-700 transition-colors">{student.name}</h3>
                    <p className="text-xs text-gray-500">Updated: {student.lastUpdate}</p>
                  </div>
                </div>

                {/* Status & Badge */}
                <div className="w-full sm:w-1/4 flex flex-col sm:items-center gap-2">
                   <span className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${getStatusBadge(student.status)}`}>
                      {student.status}
                   </span>
                   <div className="text-sm font-medium text-indigo-900 bg-indigo-50 px-3 py-1 rounded-lg">
                      Juz {student.currentJuz} - {student.currentSurah}
                   </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full sm:w-1/4 flex flex-col justify-center gap-2">
                  <div className="flex justify-between text-xs font-medium text-gray-500">
                      <span>Progress 30 Juz</span>
                      <span className="text-gray-700">{student.totalProgress}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${getProgressColor(student.totalProgress)}`}
                      style={{ width: `${student.totalProgress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="w-full sm:w-auto ml-auto">
                  <button 
                    onClick={() => onInputNilai(student)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border-2 border-indigo-100 text-indigo-600 font-semibold text-sm hover:bg-indigo-600 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <Edit3 size={16} />
                    Input Nilai
                  </button>
                </div>

              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500">Tidak ada santri ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;