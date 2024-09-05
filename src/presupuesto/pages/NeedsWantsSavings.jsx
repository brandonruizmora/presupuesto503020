import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { Chart } from "react-google-charts";
import { ExpensesModal } from "../components/ExpensesModal"

export const NeedsWantsSavings = () => {

    const { totalIncome } = useSelector(state => state.config);

    const { year, month, budget } = useParams();

    let dataChart = [];

    let expenses = [];

    let title = "";

    let total = totalIncome;

    switch (budget) {
        case "needs":
            title = "Necesidades";
            expenses = useSelector((state) => state.year.find(y => y.id == year).months.find(m => m.id == month).needs);
            expenses.forEach(element => {
                total = total - element.total
            });
            dataChart = [
                ["Expense", "Amount"],
                ["total", total],
                ...expenses.map(item => [item.expense, item.total])
            ]
            break;

        case "wants":
            title = "Prescindibles"
            expenses = useSelector((state) => state.year.find(y => y.id == year).months.find(m => m.id == month).wants);
            expenses.forEach(element => {
                total = total - element.total
            });
            dataChart = [
                ["Expense", "Amount"],
                ["total", total],
                ...expenses.map(item => [item.expense, item.total])
            ]
            break;

        case "savings":
            title = "Ahorros"
            break;

        default:
            break;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <Chart
                        chartType="PieChart"
                        data={dataChart}
                        options={{ legend: "none" }}
                        width={"100%"}
                        height={"400px"}
                    />
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
