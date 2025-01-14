import React from 'react'

import About from './Main/About'
import Contact from './Main/Contact'
import DataFlowProvider from './Context/DataFlow'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>This is Home page
        
      </div>,
    },
    {
      path: "/about",
      element: <div>
        <About />
        

      </div>,
    },
    {
      path: "/contact",
      element: <div>
        <Contact />
        
      </div>,
    },
  ]);

  return (
    <DataFlowProvider><RouterProvider router={router} /> </DataFlowProvider>
  )
}


export default App