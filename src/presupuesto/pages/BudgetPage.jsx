import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const BudgetPage = () => {

    const yearsStore = useSelector((state) => state.year);

    console.log(yearsStore);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    Grafica
                </div>
                <div className="col-12 col-md-6">
                    Presupuestos
                    <div className="row">
                        <Link to="needs" className="col-12">
                            Necesidades
                        </Link>
                        <Link to="wants" className="col-12">
                            Prescindible
                        </Link>
                        <Link to="savings" className="col-12">
                            Ahorros
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
