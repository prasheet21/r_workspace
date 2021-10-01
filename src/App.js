import React from 'react' ;
import {BrowserRouter as Router} from 'react-router-dom' ;
import PrimaryRoutes from './routers/primary.routes' ;
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <PrimaryRoutes/>
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
