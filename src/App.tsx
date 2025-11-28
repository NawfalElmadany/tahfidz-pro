import React, { useState } from 'react';
import { Users, BookOpen, CheckCircle, AlertCircle } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import StudentList from './components/StudentList';
import InputModal from './components/InputModal';
import { INITIAL_STUDENTS } from './constants';
import { Student } from './types';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleOpenModal = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const handleUpdateStudent = (id: string, updatedData: Partial<Student>) => {
    setStudents(prev => prev.map(student => 
      student.id === id ? { ...student, ...updatedData } : student
    ));
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <>
            {/* Stats Row */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <StatCard
                title="Total Siswa"
                value={students.length.toString()}
                icon={Users}
                gradient="bg-gradient-to-r from-violet-600 to-fuchsia-600"
              />
              <StatCard
                title="Target Khatam"
                value="15"
                icon={BookOpen}
                gradient="bg-gradient-to-r from-blue-500 to-cyan-400"
              />
              <StatCard
                title="Setoran Hari Ini"
                value="45"
                icon={CheckCircle}
                gradient="bg-gradient-to-r from-orange-500 to-yellow-400"
              />
            </section>

            {/* Leaderboard Section */}
            <section>
              <StudentList students={students} onInputNilai={handleOpenModal} />
            </section>
          </>
        );
      case 'santri':
        return (
           <div className="space-y-6">
             <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-lg mb-6">
                <h2 className="text-3xl font-bold mb-2">Data Semua Santri</h2>
                <p className="text-indigo-200">Kelola data lengkap santri TQA Madiun</p>
             </div>
             <StudentList students={students} onInputNilai={handleOpenModal} />
           </div>
        );
      case 'setoran':
        return (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
              <BookOpen size={40} className="text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Halaman Setoran</h2>
            <p className="text-gray-500 max-w-md">Silahkan pilih santri dari dashboard atau data santri untuk menginput setoran hafalan baru.</p>
            <button 
              onClick={() => setActivePage('santri')}
              className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              Cari Santri
            </button>
          </div>
        );
      default:
        return (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
            <AlertCircle size={48} className="text-gray-300 mb-4" />
            <h2 className="text-xl font-bold text-gray-400">Halaman Belum Tersedia</h2>
            <p className="text-gray-400">Fitur ini sedang dalam pengembangan.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      {/* Sidebar Navigation */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        activePage={activePage}
        onNavigate={setActivePage}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full lg:w-auto h-screen overflow-y-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
          
          <Header onMenuClick={() => setIsSidebarOpen(true)} />

          {renderContent()}

        </div>
      </main>

      {/* Modal */}
      <InputModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        student={selectedStudent} 
        onSave={handleUpdateStudent}
      />
    </div>
  );
};

export default App;