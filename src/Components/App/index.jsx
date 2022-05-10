import {useState} from 'react'
import './index.css'
import {useRoutes} from "react-router-dom";
import routes from '../../routes'

export default function App() {
    const myRoutes = useRoutes(routes);
    return myRoutes
}

