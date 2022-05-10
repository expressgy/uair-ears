import Login from "../Components/Login";
import NotFound from "../Components/NotFound";
import Home from "../Components/Home";


export default [
	{
		path: '*',
		element: <NotFound/>
	},
	{
		path:'/',
		element:<Home/>
	},
	{
		path:'/login',
		element:<Login/>
	},
]