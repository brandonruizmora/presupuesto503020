import Link from "next/link";

export default function Home() {
  return (
    <main className="container-fluid text-center">
      <div className="row">
        <div className="col-12">
          <h1><Link className="navbar-brand" href="/presupuesto">Presupuesto 50/30/20</Link></h1>
        </div>
      </div>
    </main>
  );
}
