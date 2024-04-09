export default function NavbarSearch() {
  return (
    <div className="mr-5 relative hidden md:block">
      <input
        type="search"
        className="bg-transparent border-gray-600 border rounded-2xl w-96 p-2 text-red-400 hover:bg-gray-900/50 focus:outline-none focus:bg-gray-900 focus:border-gray-600 placeholder:text-gray-600 placeholder:focus:text-gray-600"
        placeholder="Search..."
      />
      <div className="absolute top-0 right-0 mt-2 mr-2 p-1 text-xs text-gray-600 rounded-lg border border-gray-600 opacity-50">
        CRTL + K
      </div>
    </div>
  );
}
