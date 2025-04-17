import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";

const AdminDashBoard = () => {
    return (
        <AdminLayout>
            <h1>Dashboard</h1>
            <div className="widgets">
                {/* <EarningsWidget title="EARNINGS (MONTHLY)" value="$40,000" />
        <EarningsWidget title="EARNINGS (ANNUAL)" value="$215,000" />
        <TasksWidget /> */}
            </div>

            <div className="charts">
                {/* <LineChart />
        <PieChart /> */}
            </div>
        </AdminLayout>
    );
}

export default AdminDashBoard;