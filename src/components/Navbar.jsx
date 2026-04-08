function Navbar() {
  return (
    <header className="navbar" role="banner">
      <a className="navbar-brand" href="#center">
        MyApp
      </a>
      <nav aria-label="Main navigation">
        <ul className="navbar-links">
          <li>
            <a href="#center">Home</a>
          </li>
          <li>
            <a href="#next-steps">Docs</a>
          </li>
          <li>
            <a href="#social">Community</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
