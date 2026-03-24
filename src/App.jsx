import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import { PlusCircle } from 'lucide-react'
import TutorCard from './components/TutorCard'
import RegistrationForm from './components/RegistrationForm'
import Filters from './components/Filters'

function App() {
  const [view, setView] = useState('students') 
  const [tutors, setTutors] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [loading, setLoading] = useState(false)

  useEffect(() => { fetchTutors() }, [])

  async function fetchTutors() {
    const { data, error } = await supabase
      .from('tutors')
      .select('*')
      .eq('is_verified', true) // FIX: Change false to true
      .order('is_featured', { ascending: false });

    if (error) {
      console.error("Database Error:", error.message);
    } else {
      setTutors(data || []);
    }
  }

  const filteredTutors = tutors.filter(t => {
    const sSearch = searchTerm.toLowerCase();
    const sSubject = selectedSubject.toLowerCase();
    const tSubject = (t.subject || "").toLowerCase();
    const tName = (t.full_name || "").toLowerCase();

    const subjectMatch = sSubject === 'all' || tSubject === sSubject;
    const searchMatch = tName.includes(sSearch) || tSubject.includes(sSearch);
    return subjectMatch && searchMatch;
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    
    const newTutor = {
      ...Object.fromEntries(formData.entries()),
      price_per_month: Number(formData.get('price_per_month')),
      is_verified: false,   // Tutor is live immediately
      is_featured: false   // Regular status by default
    };
    
    const { error } = await supabase.from('tutors').insert([newTutor]);
    
    if (error) {
      alert("Xato: " + error.message);
    } else {
      alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      setView('students');
      fetchTutors(); 
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black text-[#0057b7]">Khiva<span className="text-[#ff6b00]">Tutor</span></h1>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setView('students')} 
              className={`px-4 py-2 rounded-xl text-sm font-bold ${view === 'students' ? 'text-blue-600 bg-blue-50' : 'text-slate-500'}`}
            >
              O'quvchilar
            </button>
            <button 
              onClick={() => setView('register')} 
              className="bg-[#0057b7] text-white px-5 py-2.5 rounded-xl text-sm font-black flex items-center gap-2"
            >
              <PlusCircle size={18} /> Ustoz bo'lish
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        {view === 'students' ? (
          <>
            <Filters setSearchTerm={setSearchTerm} setSelectedSubject={setSelectedSubject} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredTutors.map(tutor => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))}
            </div>
          </>
        ) : (
          <RegistrationForm handleRegister={handleRegister} loading={loading} />
        )}
      </main>
    </div>
  )
}

export default App