import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Latest from '../pages/latest/Latest'
import Detail from '../pages/detail/Detail'

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/latest",
      element: <Latest />,
    },
    {
      path: "product/:id",
      element: <Detail />,
    },
  ]);
}

export default Router