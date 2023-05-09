import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";import './App.css';
import Home from './pages/Home';
import AddAdmin from './pages/AddAdmin';
import Events from './pages/Events';
import Help from './pages/Help';
import ChatScreen from './pages/ChatScreen';
import NotificationScreen from './pages/NotificationScreen';
import Profile from './pages/Profile';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../src/components/globalStyles";
import { lightTheme, darkTheme } from "../src/components/Themes"
import { useState } from 'react';
import {ThemeContext} from './context/ThemeContext'
import ChatScreenMobo from './pages/ChatScreenMobo';
import ProductListScreen from './pages/ProductListScreen';
import ProductScreen from './pages/ProductScreen';
import Setting from './pages/Setting';

function App() {
  
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
    <ThemeContext.Provider value={{theme, setTheme}}>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AddAdmin />} />
      <Route path="/events" element={<Events />} />
      <Route path="/help" element={<Help />} />
      <Route path="/chat" element={<ChatScreen />} />
      <Route path="/chatm" element={<ChatScreenMobo />} />
      <Route path="/notification" element={<NotificationScreen />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/productlist" element={<ProductListScreen />} />
      <Route path="/product" element={<ProductScreen />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  </BrowserRouter>
    </ThemeContext.Provider>
      </ThemeProvider>
  );
}

export default App;
