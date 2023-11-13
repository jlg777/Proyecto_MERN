import { Route, Routes } from 'react-router-dom';
import { HomePages } from './pages/HomePages';
import { TasksPage } from './pages/TasksPage';

export function Router () {
    return (
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/tareas" element={<TasksPage />} />
        </Routes>
    )
}