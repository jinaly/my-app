import React from 'react'
import routes from './routes'
import {  BrowserRouter as Router,Routes,Route
} from 'react-router-dom'

const RouterProvider = () => {
  return (
    <div>

        <Router>
            <Routes>
                {routes.map((route)=>{
                    return(
                        <Route key={route.path} path={route.path} element={route.component}/>
                    )
                })}
            </Routes>
        </Router>
    </div>
  )
}

export default RouterProvider