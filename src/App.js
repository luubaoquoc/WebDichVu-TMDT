import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routers } from './routers/index'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import FloatingIcons from './components/FloatingIcons/FloatingIcons'
import FloatingServiceButton from './components/FloatingIcons/FloatingServiceButton.jsx'


function App() {
  return (
    <div>
      <Router>
        <FloatingIcons />
        <FloatingServiceButton />
        <Routes>

          {routers.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : React.Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>

    </div>
  )
}

export default App