import { useState } from "react";
import { Link } from "react-router-dom"

export const MonthsPage = () => {

    const [months, setMonths] = useState(["Enero"]);

    const addNewMonth = function () {
        const lastMonth = months.at(months.length - 1);
        switch (lastMonth) {
            case "Enero":
                setMonths([...months, "Febrero"]);
                break;
            case "Febrero":
                setMonths([...months, "Marzo"]);
                break;
            case "Marzo":
                setMonths([...months, "Abril"]);
                break;
            case "Abril":
                setMonths([...months, "Mayo"]);
                break;
            case "Mayo":
                setMonths([...months, "Junio"]);
                break;
            case "Junio":
                setMonths([...months, "Julio"]);
                break;
            case "Julio":
                setMonths([...months, "Agosto"]);
                break;
            case "Agosto":
                setMonths([...months, "Septiembre"]);
                break;
            case "Septiembre":
                setMonths([...months, "Octubre"]);
                break;
            case "Octubre":
                setMonths([...months, "Noviembre"]);
                break;
            case "Noviembre":
                setMonths([...months, "Diciembre"]);
                break;

            default:
                break;
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                {
                    months.map(month => (
                        <Link key={month} to={month} className="col-12 col-md-6 col-lg-4">{month}</Link>
                    ))
                }
                <div className='col-12'>
                    <button type='button' className='btn btn-dark' onClick={addNewMonth}>Nuevo mes</button>
                </div>
            </div>
        </div>
    )
}
