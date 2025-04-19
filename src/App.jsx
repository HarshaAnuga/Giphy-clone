
import { createBrowserRouter } from 'react-router-dom';
import './App.css'
import { RouterProvider } from 'react-router-dom';
import Applayout from './layout/app.layout';
import Home from './pages/home';
import Categories from './pages/categories';
import SearchPage from './pages/search';
import Gifpage from './pages/singlegif';
import Favourites from './pages/favourites';
import GifProvider from './context/gif-context';

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
     path:"/",
     element:<Home/>
    },
     {
      path:"/:categories",
      element:<Categories/>
     },
     {
      path:"/:search/:query",
      element:<SearchPage/>
     },
     {
      path:"/:type/:slug",
      element:<Gifpage/>
     },
     {
      path:"/favourites",
      element:<Favourites/>
     },
     
    ],
  },
]);
function App() {
     return (
     <GifProvider>
   <RouterProvider router={router}/>;
  </GifProvider>
  );
}

export default App;