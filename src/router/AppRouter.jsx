import { Route, Routes } from 'react-router-dom'
import { MonthsPage } from '../presupuesto/pages/MonthsPage'
import { YearsPage } from '../presupuesto/pages/YearsPage'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<YearsPage />} />
                <Route path=':year' element={<MonthsPage />} />
            </Routes>
        </>
    )
}
