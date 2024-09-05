import { useDispatch, useSelector } from "react-redux"
import { changeTotalIncome } from "../../redux/configSlice";
import { useState } from "react";

export const ConfigPage = () => {

    const { totalIncome } = useSelector(state => state.config);
    const dispatch = useDispatch();

    const [income, setIncome] = useState(totalIncome);

    const handleInputChange = (e) => {
        setIncome(parseFloat(e.target.value));
        
    }

    const handleSaveConfig = () => {
        dispatch(changeTotalIncome(income));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h5>Captura tu ingreso actual neto:</h5>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input type="number" className="form-control" value={income} onChange={handleInputChange} />
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5>Selecciona tu presupuesto a seguir:</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="budget" id="buget503020" defaultChecked />
                        <label className="form-check-label">
                            Presupuesto 50/30/20
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="budget" id="budget702010" disabled />
                        <label className="form-check-label">
                            Presupuesto 70/20/10
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="budget" id="budget701015" disabled />
                        <label className="form-check-label">
                            Presupuesto 75/10/15
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="budget" id="budgetZero" disabled />
                        <label className="form-check-label">
                            Zero
                        </label>
                    </div>
                </div>
                <div className="col-12 d-flex flex-row-reverse">
                    <button type="button" className="btn btn-primary" onClick={handleSaveConfig}>Save changes</button>
                </div>
            </div>
        </div>
    )
}
