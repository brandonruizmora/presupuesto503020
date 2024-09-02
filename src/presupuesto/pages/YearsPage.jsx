import { useState } from 'react';
import { Link } from 'react-router-dom';

export const YearsPage = () => {

    const [years, setYears] = useState([2024]);

    const addNewYear = function () {
        const newYear = years.at(years.length - 1) + 1;
        setYears([...years, newYear]);
    }

    return (
        <div className='container'>
            <div className='row'>
                {
                    years.map(year => (
                        <Link key={year} to={"/" + year} className='col-12'>
                            {year}
                        </Link>
                    ))
                }
                <div className='col-12'>
                    <button type='button' className='btn btn-dark' onClick={addNewYear}>Nuevo año</button>
                </div>
            </div>
        </div>
    )
}
