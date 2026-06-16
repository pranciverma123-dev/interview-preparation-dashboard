function Navbar({ toggleSidebar }) {
  return (
    <div className="navbar">

      <button
        className="menu-btn"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <h2>
        PrepAce Dashboard
      </h2>

    </div>
  );
}

export default Navbar;