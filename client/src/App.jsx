import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Header />

            <main className="site-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Catalog />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
