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
            <div className="row">
                {
                    yearContext.months.map(month => (
                        <Link key={month.id} to={month.id.toString()} className="col-12 col-md-6 col-lg-4">{month.month}</Link>
                    ))
                }
                <div className="col-12">
                    <button type="button" className="btn btn-dark" onClick={handleAddMonth}>Nuevo mes</button>
                </div>
            </div>
        </div >
    )
}
