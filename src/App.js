import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
// import Blank from './pages/Blank';
import Patients from './pages/Patients';
import Hopitaux from './pages/Hopitaux';
// import Mapage from './pages/Mapage';
// import Map2page from './pages/Map2page';
import TableauBord from './pages/TableauBord';
import AjoutAdmin from './pages/AjoutAdmin';
import RechercheDoctor from './pages/RechercheDoctor';



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<TableauBord />} />
                    <Route path='/map2page' element={<AjoutAdmin />} />
                    <Route path='/mapage' element={<RechercheDoctor />} />
                    <Route path='/patient' element={<Patients />} />
                    <Route path='/hopitaux' element={<Hopitaux />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
