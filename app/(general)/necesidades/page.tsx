import { Navbar } from "@/components"
import Link from "next/link"

export default function presupuesto() {
  return (
    <div className="col-12">
      <Navbar />
      <div className="row">
        <div className="col-6 d-flex flex-row">
          <Link href="/presupuesto" className="btn btn-primary">Regresar</Link>
        </div>
        <div className="col-6 d-flex flex-row-reverse">
          <Link href="/agregar" className="btn btn-primary">Agregar</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <h1>GRAFICA</h1>
        </div>
        <div className="col-12 col-md-8">
          <h1>nes</h1>
          <h1>nes</h1>
          <h1>nes</h1>
        </div>
      </div>
    </div>
  )
}
