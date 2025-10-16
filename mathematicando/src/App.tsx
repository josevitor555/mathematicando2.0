// Import CSS
import './App.css'

// Pages
import Home from './pages/Home';
import Activity01 from './pages/Funcoes/Activity01';
import Activity02 from './pages/Funcoes/Activity02';
import Activity03 from './pages/Funcoes/Activity03';
import EstatisticaActivity01 from './pages/Estatistica/Activity01';
import EstatisticaActivity02 from './pages/Estatistica/Activity02';
import GeometriaActivity01 from './pages/Geometria/Activity01';
import GeometriaActivity02 from './pages/Geometria/Activity02';

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        {/* Main route */}
        <Route path='/' element={<Home />} />

        {/* Rotas para atividades de Funções */}
        <Route path='/funcoes/activity01' element={<Activity01 />} />
        <Route path='/funcoes/activity02' element={<Activity02 />} />
        <Route path='/funcoes/activity03' element={<Activity03 />} />

        {/* Rotas para atividades de Estatística */}
        <Route path='/estatistica/activity01' element={<EstatisticaActivity01 />} />
        <Route path='/estatistica/activity02' element={<EstatisticaActivity02 />} />

        {/* Rotas para atividades de Geometria */}
        <Route path='/geometria/activity01' element={<GeometriaActivity01 />} />
        <Route path='/geometria/activity02' element={<GeometriaActivity02 />} />

        {/* Route not found */}
        <Route path="*" element={<div> 404 - Page Not Found </div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;