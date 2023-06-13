import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return <div className="container">
        <h1>贝塔维科技有限公司 betavee</h1>
        <Outlet />
    </div>
}