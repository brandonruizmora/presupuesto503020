import Link from "next/link";

export default function Home() {
  return (
    <main className="container-fluid text-center">
      <div className="row mb-5">
        <div className="col-12">
          <h1><Link className="navbar-brand" href="/presupuesto">Presupuesto 50/30/20</Link></h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <Link className="card" href="/presupuesto">
            <h3 className="card-body">Año 2024</h3>
          </Link>
        </div>
        <div className="col-12 mt-5">
          <h3>
            <p>El presupuesto 50/30/20 es un método simple y popular para administrar las finanzas personales,
              diseñado para ayudarte a gestionar tus ingresos de manera equilibrada y eficiente.
              Fue popularizado por la senadora Elizabeth Warren en su libro All Your Worth: The Ultimate Lifetime Money Plan.</p>
          </h3>
        </div>
      </div>
    </main>
  );
}
