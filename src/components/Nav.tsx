const Nav = () => {
  return (
    <header className="flex justify-between max-w-screen-xl px-6 py-4 mx-auto lg:px-8 xl:px-4">
      <a href="#">
        <span className="sr-only">ICES</span>
        <img src="/assets/images/logo_title.png" className="h-12" alt="ICES" />
      </a>
      <nav className="flex items-center space-x-4">
        <a href="#" className="flex items-center space-x-1 hover:text-blue-600">
          <span>Doc</span>
        </a>
        <a href="#" className="flex items-center space-x-1 hover:text-blue-600">
          <span>Twitter</span>
        </a>
        <a href="#" className="flex items-center space-x-1 hover:text-blue-600">
          <span>Discord</span>
        </a>
        <a
          href="#"
          className="inline-block px-5 py-2 font-semibold text-white rounded-lg bg-gradient-to-br from-pink-600 to-yellow-600 hover:from-blue-500 hover:to-blue-700 "
        >
          Dashboard
        </a>
      </nav>
    </header>
  );
};

export default Nav;
