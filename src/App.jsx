import Index from 'pages/index';
import Opex from  'pages/opex';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'styles/App.css';





function App() {
  return (
    
    <div className="App">
            <Router>
               
              <Routes>
                  <Route path='/Opex' element={<Opex/>} />
              </Routes>
              <Routes>
                  <Route path='/' element={<Index/>} />
              </Routes>

            </Router>

          
                                 
            
           
    </div>
  );
}

export default App;
