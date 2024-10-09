import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Chart } from "react-google-charts";
import { ExpensesModal } from "../components/ExpensesModal"
import { deleteExpenseNeeds, deleteExpenseWants } from "../../redux/budgetSlice";
import { useState } from "react";
import { formatNumber } from "../utils";

export const NeedsWantsSavings = () => {

    const [expenseData, setExpenseData] = useState({
        expense: "",
        description: "",
        total: 0
    });

    const { totalIncome } = useSelector(state => state.config);

    const { year, month, budget } = useParams();

    let dataChart = [];

    let expenses = [];

    let title = "";

    let total = totalIncome;

    let options = {
        legend: "none",
        colors: ["#4CAF50"]
    }

    const dispatch = useDispatch();

    switch (budget) {
        case "needs":
            title = "Necesidades";
            total = totalIncome * .5;
            expenses = useSelector((state) => state.year.find(y => y.id == year).months.find(m => m.id == month).needs);
            expenses.forEach(element => {
                total = total - element.total
            });
            dataChart = [
                ["Expense", "Amount"],
                ["Excedente", total],
                ...expenses.map(item => [item.expense, item.total])
            ];
            options.colors.push("#2196F3");
            break;

        case "wants":
            title = "Prescindibles";
            total = totalIncome * .3;
            expenses = useSelector((state) => state.year.find(y => y.id == year).months.find(m => m.id == month).wants);
            expenses.forEach(element => {
                total = total - element.total
            });
            dataChart = [
                ["Expense", "Amount"],
                ["Excedente", total],
                ...expenses.map(item => [item.expense, item.total])
            ];
            options.colors.push("#FF9800");
            break;

        case "savings":
            title = "Ahorros"
            break;

        default:
            break;
    }

    const handleDeleteExpense = (id) => {
        if (budget === "needs") {
            const idYearInt = parseInt(year);
            const idMonthInt = parseInt(month);
            dispatch(deleteExpenseNeeds({ idYear: idYearInt, idMonth: idMonthInt, idExpense: id }));
        } else if (budget === "wants") {
            const idYearInt = parseInt(year);
            const idMonthInt = parseInt(month);
            dispatch(deleteExpenseWants({ idYear: idYearInt, idMonth: idMonthInt, idExpense: id }));
        }
    }

    const handleEditExpense = (expense) => {
        var openButton = document.getElementById('buttonOpen');  // Selecciona el botón con id buttonOpen
        openButton.click();  // Simula un clic en el botón
        setExpenseData(expense);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="mb-4">Presupuesto:</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 col-lg-12 mb-0 mb-md-3 d-flex flex-lg-row flex-column justify-content-between align-items-center text-center custom-border">
                            Presupuesto para {title}:
                            <span className="badge text-bg-primary rounded-pill">{`$${formatNumber(totalIncome * .5)}`}</span>
                        </div>
                        <div className="col-4 col-lg-12  mb-0 mb-md-3 d-flex flex-lg-row flex-column justify-content-between align-items-center text-center custom-border">
                            Ahorros en {title}:
                            <span className="badge text-bg-primary rounded-pill">{`$${formatNumber(total)}`}</span>
                        </div>
                        <div className="col-4 col-lg-12  mb-0 mb-md-3 d-flex flex-lg-row flex-column justify-content-between align-items-center text-center custom-border">
                            Total Gastado en {title}:
                            <span className="badge text-bg-primary rounded-pill">{`$${formatNumber((totalIncome * .5) - total)}`}</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <Chart
                        chartType="PieChart"
                        data={dataChart}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                    />
                </div>
                <div className="col-12 col-md-6">
                    {expenses.length <= 0 ?
                        <div className="card text-center h-100 bg-total-all-exp">
                            <div className="card-body">
                                <i className="bi bi-list-ul rem10-text text-light"></i>
                                <p>No se han añadido gastos...</p>
                            </div>
                        </div> :
                        <div className="card text-center">
                            <div className="card-header">
                                {title}
                            </div>
                            <div className="card-body">
                                <div className="list-group list-group-flush">
                                    {
                                        expenses.map(expense => (
                                            <div key={expense.id} className="list-group-item list-group-item-action d-flex flex-row">
                                                <div className="flex-grow-1 d-flex justify-content-start" onClick={() => handleEditExpense(expense)}>
                                                    <i className="bi bi-pencil me-3"></i>
                                                    ${expense.total} - {expense.expense}
                                                </div>
                                                <i className="bi bi-trash3 ms-3" onClick={() => handleDeleteExpense(expense.id)}></i>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="card-footer text-body-secondary">
                                {expenses.length}
                            </div>
                        </div>
                    }
                </div>
            </div>
            <ExpensesModal expenses={budget} year={year} month={month} expenseData={expenseData} />
        </div>
    )
}
