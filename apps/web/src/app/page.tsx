export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <section className="max-w-xl text-center space-y-6 px-6">
        <h1 className="text-4xl font-semibold tracking-tight">
          ACQUIRE OS
        </h1>

        <p className="text-lg text-slate-600">
          A dual operating system for self awareness and situational awareness
        </p>

        <p className="text-slate-700">
          Most tools help you act faster.
          <br />
          <strong>
            ACQUIRE helps you decide what should change — and what should not.
          </strong>
        </p>

        <button className="px-6 py-3 rounded-md bg-slate-900 text-white">
          Enter the system
        </button>
      </section>
    </main>
  );
}
