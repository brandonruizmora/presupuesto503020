import Chart from "react-google-charts";
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { formatNumber } from "../utils";
import { ExpensesModal } from "../components/ExpensesModal";

export const BudgetPage = () => {

    const { year, month } = useParams();

    const { totalIncome } = useSelector(state => state.config);

    const monthStore = useSelector(state => state.year.find(y => y.id === parseInt(year)).months.find(m => m.id === parseInt(month)));

    let needsTotal = 0;
    let wantsTotal = 0;
    let savingsTotal = 0;
    const expenseData = {
        expense: "",
        description: "",
        total: 0
    };

    monthStore.needs.forEach(element => {
        needsTotal = needsTotal + element.total;
    });

    monthStore.wants.forEach(element => {
        wantsTotal = wantsTotal + element.total;
    });

    savingsTotal = totalIncome - (needsTotal + wantsTotal);

    const dataOld = [
        ["Presupuesto", "Total de presupuesto"],
        ["Necesidades", (totalIncome * .5)],
        ["Prescindibles", (totalIncome * .3)],
        ["Ahorros", (totalIncome * .2)]
    ];

    const dataNew = [
        ["Presupuesto", "Total de presupuesto"],
        ["Necesidades", needsTotal],
        ["Prescindibles", wantsTotal],
        ["Ahorros", savingsTotal]
    ];

    const diffdata = {
        old: dataOld,
        new: dataNew,
    };

    const options = {
        legend: "bottom",
        pieSliceText: "none",
        colors: ["#2196F3", "#FF9800", "#4CAF50"],
        tooltip: {
            trigger: 'none'
        }
    }

    const chartEvents = [
        {
            eventName: "select",
            callback({ chartWrapper }) {
                console.log(chartWrapper)
                console.log("Selected ", chartWrapper.getChart().getSelection());
            }
        },
        /*{
            eventName: "ready",
            callback: ({ chartWrapper, google }) => {
                const chart = chartWrapper.getChart();
                google.visualization.events.addListener(chart, "onmouseover", e => {
                    const { row, column } = e;
                    console.warn("MOUSE OVER ", { row, column });
                });
                google.visualization.events.addListener(chart, "onmouseout", e => {
                    const { row, column } = e;
                    console.warn("MOUSE OUT ", { row, column });
                });
            }
        }*/
    ];

    return (
        <>
            <div className="d-md-flex align-items-center vh90">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 text-center d-none d-lg-block">
                            <h4 className="mb-4">Información Presupuestos</h4>
                            <p className="bg-total-all-exp rounded px-1">Total presupuesto <br /> {`$${formatNumber(totalIncome)}`}</p>
                            <p className="bg-needs-exp rounded px-1">Presupuesto para necesidades <br /> {`$${formatNumber(totalIncome * .5)}`}</p>
                            <p className="bg-wants-exp rounded px-1">Presupuesto para prescindibles <br /> {`$${formatNumber(totalIncome * .3)}`}</p>
                            <p className="bg-savings-exp rounded px-1">Presupuesto para el ahorro <br /> {`$${formatNumber(totalIncome * .2)}`}</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5">
                            <Chart
                                chartType="PieChart"
                                diffdata={diffdata}
                                options={options}
                                width={"100%"}
                                height={"100%"}
                                chartEvents={chartEvents}
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <h4 className="mb-4">Total presupuestos</h4>
                            <div className="row px-2 p-md-0">
                                <Link to="needs" className="col-12 d-flex justify-content-between bg-needs rounded my-3 p-2 text-decoration-none">
                                    <span className="text-white">{`$${formatNumber(needsTotal)} Necesidades`}</span>
                                    <i className="bi bi-arrow-right-circle text-white fs-6"></i>
                                </Link>
                                <Link to="wants" className="col-12 d-flex justify-content-between bg-wants rounded my-3 p-2 text-decoration-none">
                                    <span className="text-white">{`$${formatNumber(wantsTotal)} Prescindibles`}</span>
                                    <i className="bi bi-arrow-right-circle text-white fs-6"></i>
                                </Link>
                                <Link to="savings" className="col-12 d-flex justify-content-between bg-savings rounded my-3 p-2 text-decoration-none">
                                    <span className="text-white">{`$${formatNumber(savingsTotal)} Ahorros`}</span>
                                    <i className="bi bi-arrow-right-circle text-white fs-6"></i>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ExpensesModal expenses={"quick"} year={year} month={month} expenseData={expenseData} />
        </>
    )
}
