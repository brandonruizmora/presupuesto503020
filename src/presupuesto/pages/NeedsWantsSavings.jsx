import { useParams } from "react-router-dom"
import { ExpensesModal } from "../components/ExpensesModal"
import { useSelector } from "react-redux";

export const NeedsWantsSavings = () => {

    const { year, month, budget } = useParams();

    let expenses = [];

    let title = "";

    switch (budget) {
        case "needs":
            title = "Necesidades";
            expenses = useSelector((state) => state.year.find(y => y.id == year).months.find(m => m.id == month).needs);
            break;

        case "wants":
            title = "Prescindibles"
            break;

        case "savings":
            title = "Ahorros"
            break;

        default:
            break;
    }

    console.log(expenses);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    Grafica
                </div>
                <div className="col-12 col-md-6">
                    {title}
                    <div className="row">
                        {
                            expenses.map(expense => (
                                <div key={expense.expense} className="col-12">
                                    ${expense.total} - {expense.expense}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <ExpensesModal expenses={budget} year={year} month={month} />
        </div>
    )
}
