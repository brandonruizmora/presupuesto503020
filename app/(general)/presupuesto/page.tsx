import Link from "next/link";

export default function presupuesto() {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12 d-flex flex-row-reverse">
          <Link href="/agregar" className="btn btn-primary">Agregar</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <h1>GRAFICA</h1>
        </div>
        <div className="col-12 col-md-8">
          <h1><Link className="text-decoration-none" href="/necesidades">NECESIDADES</Link></h1>
          <h1><Link className="text-decoration-none" href="/prescindibles">PRESCINDIBLES</Link></h1>
          <h1><Link className="text-decoration-none" href="/ahorros">AHORROS</Link></h1>
        </div>
      </div>
    </div>
  )
}
