import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import MainScreen from './pages/MainScreen';
import UserContext from "../contexts/userContext";
import MyAppointments from "./pages/MyAppointments";
import Appointments from "./pages/Appointments";
import Header from "./Header";
import Doctors from "./pages/Doctors";
import Footer from "./Footer";
import MakeAnAppointment from "./pages/MakeAnAppointment";



function App() {
  const [user, setUser] = useState(null);


  return (
    <UserContext.Provider value={{ user, setUser}}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/signUp' element={<RegisterScreen />} />
          <Route path='/' element={<MainScreen />} />
          <Route path='/agendamentos' element={<Appointments />} />
          <Route path='/medicos' element={<Doctors />} />
          <Route path='/agendamento' element={<MakeAnAppointment />} />
          <Route path='/meu-perfil' element={<MyAppointments />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
