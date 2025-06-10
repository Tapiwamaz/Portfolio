import "./Header.css";

export const Header = () => {
  return (
    <header>
      <h1 className="logo-title">Tapiwa</h1>
      <nav>
        <ul className="header-ul">
          <li className="header-li">
            <a className="nav-link">About Me</a>
          </li>
          <li className="header-li">
            <a className="nav-link">Projects</a>
          </li>
          <li className="header-li">
            <a className="nav-link">Contact Me</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="header-ul">
          <li className="header-li">
            <a className="social-link">LinkedIn</a>
          </li>
          <li className="header-li">
            <a className="social-link">Github</a>
          </li>
          <li className="header-li">
            <a className="social-link">Gmail</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
