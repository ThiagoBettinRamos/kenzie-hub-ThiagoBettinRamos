import { GlobalStyles } from "./styles/globalStyles"
/* import { Route, Routes } from "react-router-dom"; */
/* import { Home } from "./pages/Home"; */
import { Login } from "./pages/Login";
/* import { Cadastro } from "./pages/Cadastro"; */
/* import { useState } from "react"; */

function App() {
  /* const [user, setUser] = useState({}) */
  return (
    <>
      <GlobalStyles />
      {/*  <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Home" element={<Home user={user} setUser={setUser} />} />
      </Routes> */}
      <Login />

    </>
  );
}

export default App;
