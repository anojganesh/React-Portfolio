import { useState } from "react";

// coded Navbar as a reusable component for the sake of demonstration and practice
interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
  navbarTheme?: string;
}

function Navbar2({ items, onSelectItem, navbarTheme }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(false);
  return (
    <nav className={"mynav navbar sticky-top navbar-expand-lg " + navbarTheme}>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {items.length === 0 && <a className="navbar-brand">No Navbar items</a>}
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <a className="nav-link" href="/" key="3">
            <span className="navtext">Home</span>
          </a>
          {items.map((item: string, index: number) => (
            <a className="nav-link" href={item} key={index}>
              <span className="navtext">{item}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
