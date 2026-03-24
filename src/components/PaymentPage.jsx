import { CreditCard } from 'lucide-react';

export default function PaymentPage({ setShowPayme, setView }) {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-12 rounded-[3rem] shadow-2xl text-center border-t-8 border-[#ff6b00]">
      <CreditCard size={60} className="mx-auto text-[#ff6b00] mb-6" />
      <h2 className="text-3xl font-black mb-4">To'lov qiling 20.000 so'm</h2>
      <div className="bg-slate-50 p-6 rounded-3xl mb-8 text-left">
        <p className="text-xs font-black text-slate-400 mb-2 uppercase">Karta raqami</p>
        <p className="text-xl font-mono font-bold bg-white p-4 rounded-xl border border-slate-100">8600 0000 0000 0000</p>
      </div>
      <button 
        onClick={() => { setShowPayme(false); setView('students'); }} 
        className="w-full h-16 bg-slate-900 text-white rounded-2xl font-black"
      >
        To'lov qildim
      </button>
    </div>
  );
}