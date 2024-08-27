
export default function General({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="container-fluid text-center">
            <div className="row">
                <div className="col-12">
                    <h1><a className="navbar-brand" href="/presupuesto">Presupuesto 50/30/20</a></h1>
                </div>
                {children}
            </div>
        </main>
    );
}