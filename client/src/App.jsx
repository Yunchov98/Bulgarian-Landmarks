import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import ToTheTopButton from './components/ToTheTopButton/ToTheTopButton';
import CreatePost from './components/CreatePost/CreatePost';
import Login from './components/Login/Login';

function App() {
    return (
        <>
            <Header />

            <main className="site-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/login" element={<Login />} />
                </Routes>

                <ToTheTopButton />
            </main>

            <Footer />
        </>
    );
}

export default App;
