const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-800 rounded-md">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="text-2xl font-bold">Phone Arena</div>
          {/* Nav Links */}
          <div className="hidden md:flex space-x-4">
            {[
              "NEWS",
              "REVIEWS",
              "PHONES",
              "SPECS COMPARE",
              "SIZE COMPARE",
              "MANUFACTURERS",
            ].map((item) => (
              <a key={item} href="#" className="hover:text-gray-300">
                {item}
              </a>
            ))}
          </div>
        </div>
        {/* Icons */}
        <div className="flex space-x-4">
          <i className="fa fa-user-circle text-xl"></i>
          <i className="fa fa-bell text-xl"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
