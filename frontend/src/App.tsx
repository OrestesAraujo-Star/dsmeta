import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Header from "./components/Header";
import Menu from "./components/Menu";
import SalesCard from "./components/SalesCard";
import Cadastro from './components/Cadastro';

function App() {
  return (
    <>
      <Header/>
      <Menu/>
      
      <Cadastro/>

           
     

    </>
  )
}

export default App;