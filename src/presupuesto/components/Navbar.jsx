import { Link, NavLink, useLocation } from "react-router-dom"

export const Navbar = () => {

    const { pathname } = useLocation();

    const monthNames = {
        1: "Enero", 2: "Febrero", 3: "Marzo", 4: "Abril", 5: "Mayo", 6: "Junio",
        7: "Julio", 8: "Agosto", 9: "Septiembre", 10: "Octubre", 11: "Noviembre", 12: "Diciembre"
    };

    const parts = pathname.split("/").filter(Boolean); // Divide la cadena por "/" y elimina los elementos vacíos
    const year = parseInt(parts[0], 10); // Convierte el primer valor en número
    const month = parseInt(parts[1], 10); // Convierte el segundo valor en número
    const budget = parts[2];

    const monthText = monthNames[month] || "";

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
                            <Link className={!isNaN(month) ? "nav-item nav-link" : "nav-item nav-link active"} to={`/${year}`}>{`meses del ${year}`}</Link>
                        }
                        {
                            !isNaN(month)
                            &&
                            <Link className={budget ? "nav-item nav-link" : "nav-item nav-link active"} to={`/${year}/${month}`}>{`Presupuesto de ${monthText}`}</Link>
                        }
                    </ul>
                    <NavLink className="nav-link" to="/config"><i className="bi bi-gear-fill"></i> Configuración</NavLink>
                </div>
            </div>
        </nav>
    )
}
