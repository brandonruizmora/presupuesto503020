import { useDispatch } from "react-redux";
import "./components-css.css"
import { addNewExpenseNeeds, addNewExpenseWants } from "../../redux/budgetSlice";
import { useState } from "react";

export const ExpensesModal = ({ expenses, year, month }) => {

    let titleAndDescription = "";

    const [data, setData] = useState({
        expense: "",
        description: "",
        total: 0
    });

    const dispatch = useDispatch();

    switch (expenses) {
        case "needs":
            titleAndDescription = "gasto necesario"
            break;

        case "wants":
            titleAndDescription = "gasto no necesario"
            break;

        case "savings":
            titleAndDescription = "ahorro"
            break;

        default:
            break;
    }

    const handleClicSubmit = () => {
        const idYearInt = parseInt(year);
        const idMonthInt = parseInt(month);
        setData({
            expense: "",
            description: "",
            total: 0
        });
        if (expenses === "needs") {
            dispatch(addNewExpenseNeeds({ idYear: idYearInt, idMonth: idMonthInt, expense: data }));
        } else if (expenses === "wants") {
            dispatch(addNewExpenseWants({ idYear: idYearInt, idMonth: idMonthInt, expense: data }));
        } else if (expenses === "savings") {

        }
    }

    const handleInputChange = (e) => {
        switch (e.target.id) {
            case "inputExpense":
                setData({ ...data, expense: e.target.value });
                break;
            case "inputExpenseDescription":
                setData({ ...data, description: e.target.value });
                break;
            case "inputExpenseTotal":
                setData({ ...data, total: parseFloat(e.target.value) });
                break;

            default:
                break;
        }
    }

    return (
        <>
            <i type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="bi bi-plus-circle-fill floating-button"></i>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{`Agregar un nuevo ` + titleAndDescription}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="inputExpense" className="form-label">{titleAndDescription}</label>
                                <input type="text" className="form-control" id="inputExpense" value={data.expense} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputExpenseDescription" className="form-label">descripción</label>
                                <input type="text" className="form-control" id="inputExpenseDescription" value={data.description} onChange={handleInputChange} />
                                <div id="expenseDescriptionHelp" className="form-text">(Opcional)</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputExpenseTotal" className="form-label">total</label>
                                <input type="number" className="form-control" id="inputExpenseTotal" value={data.total} onChange={handleInputChange} />
                                <div id="expenseTotalHelp" className="form-text">100.54</div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClicSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
