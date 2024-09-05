import Chart from "react-google-charts";
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

export const BudgetPage = () => {

    const { year, month } = useParams();

    const { totalIncome } = useSelector(state => state.config);

    const monthStore = useSelector(state => state.year.find(y => y.id === parseInt(year)).months.find(m => m.id === parseInt(month)));

    let needsTotal = 0;
    let wantsTotal = 0;
    let savingsTotal = 0;

    monthStore.needs.forEach(element => {
        needsTotal = needsTotal + element.total;
    });

    monthStore.wants.forEach(element => {
        wantsTotal = wantsTotal + element.total;
    });

    savingsTotal = totalIncome - (needsTotal + wantsTotal);

    const data = [
        ["Presupuesto", "Total de presupuesto"],
        ["Necesidades", needsTotal],
        ["Prescindibles", wantsTotal],
        ["Ahorros", savingsTotal]
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={{ legend: "none" }}
                        width={"100%"}
                        height={"400px"}
                    />
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
