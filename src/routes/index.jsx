import Login from "../Components/Login";
import NotFound from "../Components/NotFound";
import Home from "../Components/Home";
import Sign from "../Components/Sign";


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
	{
		path:'/sign',
		element:<Sign/>
	},
]