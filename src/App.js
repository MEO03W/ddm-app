import Welcome from './pages/Welcome';
import SizeAndLanguage from './pages/SizeAndLanguage';
import Content from './pages/Content';
import QrScanner from './pages/QrScanner';
import ColorScreen from './pages/ColorScreen';
import './App.css';
import {BrowserRouter ,Route,Routes, Switch} from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector';

import i18next from 'i18next';
import {useTranslation} from 'react-i18next';


//Main Component and Routing 
function App() {
  return (
      <div className="App">
        
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/SizeAndLanguage" element={<SizeAndLanguage />} />
            <Route path="/QRScanner" element={<QrScanner />} />
            <Route path="/ColorScreen" element={<ColorScreen />} />
            <Route path="/Content/:id" element={<Content />} />
          </Routes>
        </BrowserRouter>   
       {/*
        <SizeAndLanguage />
  <Content className="icons"/>  */}
      </div>
       
  
  );
}

export default App;
