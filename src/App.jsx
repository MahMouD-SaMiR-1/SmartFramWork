
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import Layout from "./Component/Layout/Layout";
import About from "./Component/About/About";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import NotFound from "./Component/NotFound/NotFound";



let x = createBrowserRouter([
	{
		path:'', element: <Layout />, children: [
			{ path:'home', element: <Home/>},
			{ path: 'about', element:<About/> },
			{ path: 'portfolio', element:<Portfolio/> },
			{ path: 'contact', element: <Contact /> },
			{path: '*' , element: <NotFound/>}
		
	]},
	
	
])

export default function App()
{
	return <RouterProvider router={x}>
		
	</RouterProvider>

}

