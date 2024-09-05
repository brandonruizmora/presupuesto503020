import { useParams } from "react-router-dom"
import { ExpensesModal } from "../components/ExpensesModal"

export const NeedsWantsSavings = () => {

    const {budget} = useParams();

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    Grafica
                </div>
                <div className="col-12 col-md-6">
                    Necesidades
                    <div className="row">
                        <div className="col-12">
                            Necesidad 1
                        </div>
                    </div>
                </div>
            </div>
            <ExpensesModal expenses={budget} />
        </div>
    )
}
