import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
    return (
        <>
            <Header />

            <main className="site-content">
                <Home />
            </main>
        </>
    );
}

export default App;
