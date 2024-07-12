function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white font-bold">
          Shopping Guru
        </a>
        <ul className="flex">
          <li>
            <a href="/" className="text-white mx-2">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-white mx-2">
              Products
            </a>
          </li>
          <li>
            <a href="/" className="text-white mx-2">
              About
            </a>
          </li>
          <li>
            <a href="/" className="text-white mx-2">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
