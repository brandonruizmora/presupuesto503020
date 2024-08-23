export const Navbar = () => {
    return (
        <nav className="row">
            <div className="col-4">
                <a className="nav-divnk active" href="/necesidades">Necesidades</a>
            </div>
            <div className="col-4">
                <a className="nav-divnk disabled" href="/prescindibles">Prescindibles</a>
            </div>
            <div className="col-4">
                <a className="nav-divnk" href="/ahorros">Ahorros</a>
            </div>
        </nav>
    )
}
