
import { createBrowserRouter } from 'react-router'
import './App.css'
//homepage
//categories
//search
//singlegif
//favourites

const router= createBrowserRouter([
  {
    element:<Applayout/>,
    children:[
      {
     path:'/',
     element:<Home/>
    }

    ]
  }
])
function App() {
 
  return <div>subsrcribe to roadsidecoder</div>
  
}

export default App
