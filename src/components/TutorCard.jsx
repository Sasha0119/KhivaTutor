import { Star, ShieldCheck, MessageCircle, Phone } from 'lucide-react';

export default function TutorCard({ tutor }) {
  return (
    <div className={`bg-white p-8 rounded-[2.5rem] border shadow-sm transition-all group relative ${tutor.is_featured ? 'border-[#ff6b00] ring-2 ring-orange-100' : 'border-slate-50'}`}>
      {tutor.is_featured && (
        <span className="absolute -top-3 left-8 bg-[#ff6b00] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1">
          <Star size={10} fill="white"/> TOP USTOZ
        </span>
      )}
      <div className="flex justify-between items-start mb-4">
        <span className="bg-blue-50 text-[#0057b7] px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1">
          <ShieldCheck size={12} /> Verified
        </span>
        <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
          {tutor.format === 'ikkalasiham' ? 'Online & Offline' : tutor.format}
        </span>
      </div>
      <h3 className="text-2xl font-black text-slate-800 mb-1">{tutor.full_name}</h3>
      <p className="text-[#0057b7] font-extrabold text-sm mb-2">{tutor.subject}</p>
      <p className="text-slate-500 text-xs font-bold mb-6 italic">"{tutor.level}"</p>
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-[10px] font-bold">📍 {tutor.district}</span>
      </div>
      <div className="flex justify-between items-center pt-6 border-t border-slate-50">
        <p className="text-xl font-black text-slate-900">{Number(tutor.price_per_month).toLocaleString()} sum</p>
        <div className="flex gap-2">
          <a href={`https://t.me/${tutor.tg_username?.replace('@','')}`} target="_blank" rel="noreferrer" className="bg-[#24A1DE] text-white p-3 rounded-xl">
            <MessageCircle size={20} />
          </a>
          <a href={`tel:${tutor.phone_number}`} className="bg-slate-900 text-white p-3 rounded-xl hover:bg-[#ff6b00] transition-colors">
            <Phone size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}