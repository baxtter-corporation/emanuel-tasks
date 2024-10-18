import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../components';
import Telephone from '../components/Telephone';
import  { TelephoneEditfrm } from '../components/TelephoneEdit'; 
function Rroutes () {

    return (
        <>

      <Router>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/telephone" element={<Telephone />} />
          <Route path="/telephone/Edit/:phone" element={<TelephoneEditfrm />} />
        </Routes>
      </div>
    </Router>
        </>
    )
  }
  
export default Rroutes
