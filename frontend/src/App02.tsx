import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import Menu from "./components/Menu";
import SalesCard from "./components/SalesCard";

function App02() {
  return (
    <>
      <ToastContainer />
      <Header />


{/*      <div className="dsmeta-menu">
        <Menu />
      </div>


      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />

          </div>
        </section>
  </main>*/}
    </>
  )
}

export default App02;