import { GlobalStyles } from "./styles/globalStyles"
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TechsProvider } from "./components/Context/TechsContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Home" element={<TechsProvider><Home /></TechsProvider>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
