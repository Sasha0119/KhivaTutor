import { ALL_SUBJECTS } from './constants';

export default function RegistrationForm({ handleRegister, loading }) {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-50">
      <h2 className="text-4xl font-black text-slate-900 mb-6 text-center">Profil Yarating</h2>
      <form onSubmit={handleRegister} className="space-y-5">
        <input name="full_name" placeholder="F.I.O" className="w-full h-16 px-6 bg-slate-50 rounded-2xl outline-none font-bold" required />
        <div className="grid grid-cols-2 gap-4">
          <select name="subject" defaultValue="" className="h-16 px-6 bg-slate-50 rounded-2xl font-bold outline-none" required>
            <option value="" disabled>Fan</option>
            {ALL_SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select name="format" defaultValue="offline" className="h-16 px-6 bg-slate-50 rounded-2xl font-bold outline-none" required>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="ikkalasiham">Ikkalasi ham</option>
          </select>
        </div>
        <input name="level" placeholder="Darajangiz (IELTS 8.5...)" className="w-full h-16 px-6 bg-slate-50 rounded-2xl outline-none font-bold" required />
        <div className="grid grid-cols-2 gap-4">
          <input name="price_per_month" type="number" placeholder="Narxi" className="h-16 px-6 bg-slate-50 rounded-2xl outline-none font-bold" required />
          <select name="district" defaultValue="Xiva shahar" className="h-16 px-6 bg-slate-50 rounded-2xl font-bold outline-none">
            <option value="Xiva shahar">Xiva</option>
            <option value="Urganch shahar">Urganch</option>
          </select>
        </div>
        <input name="tg_username" placeholder="Telegram username (@username)" className="w-full h-16 px-6 bg-slate-50 rounded-2xl outline-none font-bold" required />
        <input name="phone_number" placeholder="Telefon (+998)" className="w-full h-16 px-6 bg-slate-50 rounded-2xl outline-none font-bold" required />
        <button type="submit" disabled={loading} className="w-full h-18 bg-[#ff6b00] text-white rounded-2xl font-black text-xl shadow-xl hover:scale-[0.98] transition-all">
          {loading ? "Yuborilmoqda..." : "Keyingi bosqich"}
        </button>
      </form>
    </div>
  );
}