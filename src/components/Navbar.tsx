import { useState } from "react";

interface Props{
    items : string[];
    onSelectItem : (item : string) => void;
    navbarTheme? : string;
}

function Navbar({items, onSelectItem, navbarTheme = "navbar-dark bg-primary"} : Props){
    const [selectedIndex, setSelectedIndex] = useState(false);

    return(
        <nav className={'navbar navbar-expand-lg ' + navbarTheme}>
            {items.length === 0 ? <a className="navbar-brand">No Navbar items</a> : <a className="navbar-brand">{items[0]}</a>}
            <div className = "navbar-nav">
                {items.map((item : string) => (
                    <a className="nav-item nav-link" href="#">{item}</a>
                ))}
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        </nav>

    );
}

export default Navbar;