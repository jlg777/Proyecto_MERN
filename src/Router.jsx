import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/NavBar';

export function Router () {
    return (
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
    )
}