export default function Sidebar() {
  return (
    <div className="h-full p-4">
      <button className="w-full bg-blue-600 p-2 rounded">
        + New Project
      </button>

      <div className="mt-6 space-y-2">
        <div className="p-2 rounded hover:bg-gray-800 cursor-pointer">
          Chat 1
        </div>

        <div className="p-2 rounded hover:bg-gray-800 cursor-pointer">
          Chat 2
        </div>
      </div>
    </div>
  );
}