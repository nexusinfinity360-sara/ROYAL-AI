export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-800 bg-gray-950 px-6 py-4">
      <h1 className="text-3xl font-bold text-cyan-400">
        Genesis AI
      </h1>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-72 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white outline-none focus:border-cyan-400"
        />

        <button className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-black hover:bg-cyan-400">
          AI Model
        </button>

        <button className="rounded-lg border border-gray-700 px-5 py-2 hover:bg-gray-800">
          Profile
        </button>
      </div>
    </header>
  );
}