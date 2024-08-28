import { Navbar } from "@/components"

export default function agregar() {
    return (
        <div className="col-12">
            <Navbar />
            <div className="row">
                <div className="col-12">
                    <h1>AGREGAR</h1>
                </div>
                <div className="col-12">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Descripción</label>
                            <input type="text" className="form-control" id="description" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fecha</label>
                            <input type="date" className="form-control" id="date" aria-describedby="dateHelp" />
                            <div id="dateHelp" className="form-text">Fecha en la que se efecuto (por defecto toma la fecha actual).</div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label">
                                    Necesidad
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label">
                                    Prescindible
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label className="form-check-label">
                                    Ahorro
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
