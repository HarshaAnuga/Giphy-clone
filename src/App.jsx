
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
    },
     {
      path:'/categories',
      element:<Categories/>
     },
     {
      path:'/search',
      element:<Search/>
     },
     {
      path:'/singlegif',
      element:<Singlegif/>
     },
     {
      path:'/favourites',
      element:<Favourites/>
     }
    ]
  }
])
function App() {
 
  return <div>subsrcribe to roadsidecoder</div>
  
}

export default App
