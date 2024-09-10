import Chart from "react-google-charts";
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { formatNumber } from "../utils";

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
        pieSliceText: "label",
        colors: ["#2196F3", "#FF9800", "#4CAF50"]
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 text-center">
                    <h4 className="mb-4">Información Presupuestos</h4>
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
                        height={"400px"}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <h4 className="mb-4">Total presupuestos</h4>
                    <div className="row">
                        <Link to="needs" className="col-12 d-flex justify-content-between bg-needs rounded my-3 p-2 text-decoration-none">
                            <span className="text-dark">{`$${formatNumber(needsTotal)} Necesidades`}</span>
                            <i className="bi bi-arrow-right-circle text-dark fs-6"></i>
                        </Link>
                        <Link to="wants" className="col-12 d-flex justify-content-between bg-wants rounded my-3 p-2 text-decoration-none">
                            <span className="text-dark">{`$${formatNumber(wantsTotal)} Prescindibles`}</span>
                            <i className="bi bi-arrow-right-circle text-dark fs-6"></i>
                        </Link>
                        <Link to="savings" className="col-12 d-flex justify-content-between bg-savings rounded my-3 p-2 text-decoration-none">
                            <span className="text-dark">{`$${formatNumber(savingsTotal)} Ahorros`}</span>
                            <i className="bi bi-arrow-right-circle text-dark fs-6"></i>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
