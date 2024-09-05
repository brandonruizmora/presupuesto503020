import { Route, Routes } from "react-router-dom"
import { MonthsPage } from "../presupuesto/pages/MonthsPage"
import { YearsPage } from "../presupuesto/pages/YearsPage"
import { BudgetPage } from "../presupuesto/pages/BudgetPage"
import { NeedsWantsSavings } from "../presupuesto/pages/NeedsWantsSavings"
import { ConfigPage } from "../presupuesto/pages/ConfigPage"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<YearsPage />} />
                <Route path="/config" element={<ConfigPage />} />
                <Route path="/:year" element={<MonthsPage />} />
                <Route path="/:year/:month" element={<BudgetPage />} />
                <Route path="/:year/:month/:budget" element={<NeedsWantsSavings />} />
            </Routes>
        </>
    )
}
