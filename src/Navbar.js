export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                Harjoitustyö
            </a>
            <ul>
                <CustomLink href="/info">Tietoja</CustomLink>
                <CustomLink href="/stats">Tehtävät</CustomLink>
            </ul>
        </nav>
    );
}

//Merkataan sivu jolla olemme aktiiviseksi.
function CustomLink({ href, children }) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href}>{children}</a>
        </li>
    );
}
