import { useDispatch } from "react-redux";
import "./components-css.css"
import { addNewExpenseNeeds, addNewExpenseWants, editExpenseNeeds, editExpenseWants } from "../../redux/budgetSlice";
import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from 'alert';

export const ExpensesModal = ({ expenses, year, month, expenseData }) => {

    const [data, setData] = useState(expenseData);
    const [submitExpense, setSubmitExpense] = useState("");
    const inputExpenseRef = useRef(null);
    const inputExpenseTotalRef = useRef(null);
    const inputExpenseSelectRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {

        //Settear data cuando se monta el componente modal
        setData({ ...expenseData });


        // Al montar el componente, agregamos el evento "hidden.bs.modal"
        const modalElement = modalRef.current;

        const handleModalHidden = () => {
            // Quitar la clase cuando el modal se oculta
            inputExpenseRef.current.classList.remove('invalid-input');
            inputExpenseTotalRef.current.classList.remove('invalid-input');
            if (inputExpenseSelectRef.current) {
                inputExpenseSelectRef.current.classList.remove('invalid-input');
            }
        };

        // Agregar el evento "hidden.bs.modal" de Bootstrap
        modalElement.addEventListener('hidden.bs.modal', handleModalHidden);

        // Limpiar el evento cuando el componente se desmonta
        return () => {
            modalElement.removeEventListener('hidden.bs.modal', handleModalHidden);
        }

    }, [expenseData])

    let titleAndDescription = "";

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
            titleAndDescription = "gasto"
            break;
    }

    const handleClicSubmit = () => {

        if (expenses === "quick" && submitExpense === "") {
            toast.error('El tipo de gasto no puede estar vacio');
            if (inputExpenseSelectRef.current) {
                inputExpenseSelectRef.current.classList.add('invalid-input');
            }
        }

        //Validate empty data
        if (data.expense === "" && data.total <= 0) {
            toast.error('Gasto y Total no pueden estar vacios');
            if (inputExpenseRef.current && inputExpenseTotalRef.current) {
                inputExpenseRef.current.classList.add('invalid-input');
                inputExpenseTotalRef.current.classList.add('invalid-input');
            }

        } else {
            const idYearInt = parseInt(year);
            const idMonthInt = parseInt(month);

            if (expenses === "needs" || submitExpense === "needs") {
                if (data.id != undefined) {
                    dispatch(editExpenseNeeds({ idYear: idYearInt, idMonth: idMonthInt, expense: data }));
                } else {
                    dispatch(addNewExpenseNeeds({ idYear: idYearInt, idMonth: idMonthInt, expense: data }));
                }
            } else if (expenses === "wants" || submitExpense === "wants") {
                if (data.id != undefined) {
                    dispatch(editExpenseWants({ idYear: idYearInt, idMonth: idMonthInt, expense: data }));
                } else {
                    dispatch(addNewExpenseWants({ idYear: idYearInt, idMonth: idMonthInt, expense: data }));
                }
            } else if (expenses === "savings") {

            }

            setData({
                expense: "",
                description: "",
                total: 0
            });

            setSubmitExpense("");

            var closeButton = document.querySelector('[data-bs-dismiss="modal"]');  // Selecciona el botón que tiene data-bs-dismiss="modal"
            closeButton.click();  // Simula un clic en el botón
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
            <Toaster />
            <div className="floating-button d-flex align-items-center flex-column">
                <i id="buttonOpen" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="bi bi-plus-circle-fill"></i>
                <span className="xx-small-text">añadir gasto</span>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{`Agregar un nuevo ` + titleAndDescription}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="inputExpense" className="form-label">{titleAndDescription}</label>
                                <input type="text" className="form-control" id="inputExpense" value={data.expense} onChange={handleInputChange} ref={inputExpenseRef} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputExpenseDescription" className="form-label">descripción</label>
                                <input type="text" className="form-control" id="inputExpenseDescription" value={data.description} onChange={handleInputChange} />
                                <div id="expenseDescriptionHelp" className="form-text">(Opcional)</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputExpenseTotal" className="form-label">total</label>
                                <input type="number" className="form-control" id="inputExpenseTotal" value={data.total} onChange={handleInputChange} ref={inputExpenseTotalRef} />
                                <div id="expenseTotalHelp" className="form-text">100.54</div>
                            </div>
                            {
                                expenses === "quick" &&
                                <div className="mb-3">
                                    <select className="form-select" value={submitExpense} onChange={(e) => setSubmitExpense(e.target.value)} aria-label="Default select example" ref={inputExpenseSelectRef}>
                                        <option value="">Selecciona el tipo de gasto</option>
                                        <option value="needs">Necesidad</option>
                                        <option value="wants">Prescindible</option>
                                    </select>
                                </div>
                            }
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
