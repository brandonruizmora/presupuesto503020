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
            <div className="row row-cols-1 g-4">
                {
                    years.map((year) => (
                        <Link
                            key={year.id}
                            to={year.id.toString()}
                            className="col"
                        >
                            <div className="card text-bg-light h-100">
                                <div className="card-body">
                                    <h5 className="card-title text-center text-decoration-underline">{year.year}</h5>
                                </div>
                            </div>

                        </Link>
                    ))
                }
                <div className="col">
                    <div
                        type="button"
                        className="card border-secondary h-100"
                        onClick={handleAddYear}
                    >
                        <div className="card-body">
                            <h5 className="card-title text-center">Nuevo año</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
