import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-sky-700 text-white ">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-3 px-3">
        <h1 className="text-4xl">
          <Link to="">Cooking:)</Link>
        </h1>
        <Link className="border px-3 py-2 rounded-md hover:bg-white hover:text-gray-950 active:opacity-50" to="create">Create</Link>
      </div>
    </header>
  );
}

export default Navbar;
