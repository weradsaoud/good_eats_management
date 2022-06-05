import GoodEats from './components/structures/goodeats/GoodEats';
import { BrowserRouter } from 'react-router-dom';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <GoodEats />
      <ToastContainer closeButton={false} position="top-right" />
    </BrowserRouter>
  );
}

export default App;
