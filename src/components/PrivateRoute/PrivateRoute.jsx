import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (!user || !user.isAdmin) {
        return <Navigate to="/" replace />;
    }

    // Đã đăng nhập và có quyền
    return children
}

export default PrivateRoute
