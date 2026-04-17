import Calculator from "@/components/Calculator/Calculator";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-[#020617] overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />

      {/* The Component */}
      <Calculator />

      {/* Footer Label for Internship */}
      <div className="absolute bottom-8 text-slate-500 text-xs tracking-widest uppercase font-medium">
        Created By Tamosa Dey
      </div>
    </main>
  );
}