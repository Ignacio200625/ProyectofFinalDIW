import Header from "./componentes/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
   
      <BrowserRouter>
        <Header />
         <div className="px-20 py-5 mt-20">
          <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
         </div>
        
      </BrowserRouter>
    
  );
}

export default App;
