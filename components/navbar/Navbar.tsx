import Link from "next/link"

const navItems = [
    { path: "/necesidades", text: "Necesidades" },
    { path: "/prescindibles", text: "Prescindibles" },
    { path: "/ahorros", text: "Ahorros" }
]

export const Navbar = () => {
    return (
        <nav className="row">
            {
                navItems.map(navItem => (
                    <div key={navItem.path} className="col-4">
                        <Link className="nav-divnk active" href={navItem.path}>{navItem.text}</Link>
                    </div>
                ))
            }
        </nav>
    )
}
