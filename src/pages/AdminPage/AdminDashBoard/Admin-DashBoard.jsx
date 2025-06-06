import React from "react";
import styled from "styled-components";
import AdminLayout from "../AdminLayout/AdminLayout";
import {
    LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart as RePieChart, Pie, Cell, Legend,
} from "recharts";

const WidgetContainer = styled.div`
    flex: 1;
    margin: 0 12px;
    padding: 20px;
    border-radius: 8px;
    background: ${({ color }) => color || "#f5f5f5"};
    color: #222;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
`;

const WidgetTitle = styled.div`
    font-size: 14px;
    opacity: 0.7;
`;

const WidgetValue = styled.div`
    font-size: 28px;
    font-weight: 700;
`;

const FlexRow = styled.div`
    display: flex;
    margin-bottom: ${({ mb }) => mb || 0}px;
`;

const ChartBox = styled.div`
    flex: ${({ flex }) => flex || 1};
    min-height: 320px;
    background: #fff;
    border-radius: 16px;
    margin-right: 5px;
    margin-left: 10px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    border: 1.5px solid #e3e8f0;
    transition: box-shadow 0.2s, border 0.2s;
    &:hover {
        box-shadow: 0 8px 32px rgba(136,132,216,0.15);
        border: 1.5px solid #8884d8;
    }
`;
const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    color: #333;
    margin: 80px 0 30px 30px;
`;

const StatWidget = ({ title, value, color }) => (
    <WidgetContainer color={color}>
        <WidgetTitle>{title}</WidgetTitle>
        <WidgetValue>{value}</WidgetValue>
    </WidgetContainer>
);

// Dữ liệu mẫu cho LineChart
const lineData = [
    { name: "Tuần 1", doanhthu: 8000000 },
    { name: "Tuần 2", doanhthu: 12000000 },
    { name: "Tuần 3", doanhthu: 10000000 },
    { name: "Tuần 4", doanhthu: 10000000 },
];

// Dữ liệu mẫu cho PieChart
const pieData = [
    { name: "Dịch vụ", value: 15 },
    { name: "Sản phẩm", value: 25 },
];

const dataService = [
    { name: "Điện nước", value: 3 },
    { name: "Hút bể phốt", value: 6 },
    { name: "Xây dựng nhà ở", value: 4 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const LineChart = () => (
    <div style={{ width: "70%", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: 24 }}>
        <h3 style={{ textAlign: "center" }}>Thống kê doanh thu</h3>
        <ChartBox flex={2} mr={12}>
            <ResponsiveContainer width="95%" height={200}>
                <ReLineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="doanhthu" stroke="#8884d8" strokeWidth={2} />
                </ReLineChart>
            </ResponsiveContainer>
        </ChartBox>
    </div>
);

const PieChart = () => (
    <div style={{ width: "30%", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: 24 }}>
        <h3 style={{ textAlign: "center" }}>Thống kê dịch vụ và sản phẩm</h3>
        <ChartBox flex={1}>
            <ResponsiveContainer width="95%" height={200}>
                <RePieChart>
                    <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        label
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                </RePieChart>
            </ResponsiveContainer>
        </ChartBox>
    </div>
);

const ServicePieChart = () => (
    <div style={{ width: "100%", height: 550, background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: 24 }}>
        <h3 style={{ textAlign: "center" }}>Thống kê số dịch vụ</h3>
        <ResponsiveContainer width="100%" height={220}>
            <RePieChart>
                <Pie
                    data={dataService}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                >
                    {dataService.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
                <Tooltip />
            </RePieChart>
        </ResponsiveContainer>
    </div>
);
const AdminDashBoard = () => {
    return (
        <AdminLayout>
            <Title>Dashboard</Title>
            <FlexRow mb={32}>
                <StatWidget title="Tổng doanh thu tháng" value="40,000,000₫" color="#e3f2fd" />
                <StatWidget title="Khách hàng mới" value="50" color="#fce4ec" />
                <StatWidget title="Đơn hàng hôm nay" value="56" color="#e8f5e9" />
                <StatWidget title="Dịch vụ đang hoạt động" value="15" color="#fff3e0" />
            </FlexRow>
            <FlexRow>
                <LineChart />
                <PieChart />
            </FlexRow>
            <ServicePieChart />
        </AdminLayout>
    );
}

export default AdminDashBoard;