import { Link, NavLink, useLocation, useParams } from "react-router-dom"

export const Navbar = () => {

    const { pathname } = useLocation();

    const parts = pathname.split("/").filter(Boolean); // Divide la cadena por "/" y elimina los elementos vacíos
    const year = parseInt(parts[0], 10); // Convierte el primer valor en número
    const month = parseInt(parts[1], 10); // Convierte el segundo valor en número
    const budget = parts[2]; // Convierte el segundo valor en número

    console.log(pathname)

    console.log(budget)

    if (!isNaN(month)) {
        console.log("acctive class")
    }

    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Presupuesto 50/30/20</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <NavLink className="nav-item nav-link" to="/">Años</NavLink>
                        {
                            !isNaN(year)
                            &&
                            <Link className={!isNaN(month) ? "nav-item nav-link" : "nav-item nav-link active"} to={"/" + year}>{`meses del ${year}`}</Link>
                        }
                        {
                            !isNaN(month)
                            &&
                            <Link className={budget ? "nav-item nav-link" : "nav-item nav-link active"} to={`/${year}/${month}`}>Presupuesto</Link>
                        }
                    </ul>
                    <NavLink className="nav-link" exact to="/config">Configuración</NavLink>
                </div>
            </div>
        </nav>
    )
}
