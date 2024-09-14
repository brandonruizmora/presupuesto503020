import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { addNewMonthToYear } from "../../redux/budgetSlice";

export const MonthsPage = () => {

    const { year } = useParams();

    const yearsStore = useSelector((state) => state.year);

    const dispatch = useDispatch();

    const yearContext = yearsStore.find((yearStore) => yearStore.year == year);

    const handleAddMonth = () => {
        dispatch(addNewMonthToYear(yearContext.id));
    }

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {
                    yearContext.months.map(month => (
                        <Link
                            key={month.id}
                            to={month.id.toString()}
                            className="col"
                        >
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{month.month}</h5>
                                </div>
                            </div>
                        </Link>
                    ))
                }
                {
                    yearContext.months.length < 12 &&
                    <div className="col">
                        <div
                            type="button"
                            className="card h-100"
                            onClick={handleAddMonth}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Nuevo mes</h5>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}
