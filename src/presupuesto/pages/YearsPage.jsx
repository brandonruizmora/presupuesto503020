import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addNewYear } from "../../redux/budgetSlice";

export const YearsPage = () => {

    const years = useSelector((state) => state.year);
    const dispatch = useDispatch();

    const handleAddYear = () => {
        const newYear = years.at(years.length - 1).id + 1;
        dispatch(addNewYear({ id: newYear, year: newYear.toString(), months: [] }));
    }

    return (
        <div className="container">
            <div className="row">
                {
                    years.map((year) => (
                        <Link key={year.id} to={"/" + year.id} className="col-12">
                            {year.year}
                        </Link>
                    ))
                }
                <div className="col-12">
                    <button type="button" className="btn btn-dark" onClick={handleAddYear}>Nuevo año</button>
                </div>
            </div>
        </div>
    )
}
