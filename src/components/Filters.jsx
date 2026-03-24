import { Search } from 'lucide-react';
import { ALL_SUBJECTS } from './constants';

export default function Filters({ setSearchTerm, setSelectedSubject }) {
  return (
    <div className="bg-white p-5 rounded-[2rem] shadow-sm mb-10 flex flex-col md:flex-row gap-4 border border-slate-100 mt-4">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
        <input 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Ustoz qidirish..." 
          className="w-full h-12 pl-12 pr-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 font-medium" 
        />
      </div>
      <select 
        onChange={(e) => setSelectedSubject(e.target.value)} 
        className="h-12 px-5 bg-slate-50 rounded-2xl border-none font-extrabold text-[#0057b7] outline-none"
      >
        <option value="All">Barcha fanlar</option>
        {ALL_SUBJECTS.map(sub => <option key={sub} value={sub}>{sub}</option>)}
      </select>
    </div>
  );
}