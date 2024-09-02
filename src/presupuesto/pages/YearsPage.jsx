import { useState } from 'react';

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
                        <div key={year} className='col-12'>
                            {year}
                        </div>
                    ))
                }
                <div className='col-12'>
                    <button type='button' className='btn btn-dark' onClick={addNewYear}>Nuevo año</button>
                </div>
            </div>
        </div>
    )
}
