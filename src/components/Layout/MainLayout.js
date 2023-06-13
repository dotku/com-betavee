import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return <div className="container">
        <h1 className="my-3">贝塔维科技有限公司 Betavee</h1>
        <Outlet />
    </div>
}