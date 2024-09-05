import "./components-css.css"

export const ExpensesModal = ({ expenses }) => {

    switch (expenses) {
        case "needs":
            expenses = "gasto necesario"
            break;

        case "wants":
            expenses = "gasto no necesario"
            break;

        case "savings":
            expenses = "ahorro"
            break;

        default:
            break;
    }

    return (
        <>
            <button type="button" className="floating-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                X
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{`Agregar un nuevo ` + expenses}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label for="inputExpense" className="form-label">{expenses}</label>
                                <input type="text" className="form-control" id="inputExpense" />
                            </div>
                            <div className="mb-3">
                                <label for="inputExpenseDescription" className="form-label">descripción</label>
                                <input type="password" className="form-control" id="inputExpenseDescription" />
                                <div id="expenseDescriptionHelp" className="form-text">(Opcional)</div>
                            </div>
                            <div className="mb-3">
                                <label for="inputExpenseTotal" className="form-label">total</label>
                                <input type="number" className="form-control" id="inputExpenseTotal" />
                                <div id="expenseTotalHelp" className="form-text">100.54</div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
