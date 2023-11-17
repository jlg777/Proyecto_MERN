import { Route, Routes } from 'react-router-dom';
import { HomePages } from './pages/HomePages';
import { TasksPage } from './pages/TasksPage';
import { UserPage } from './pages/UserPage';
import { TaskIdPage } from './pages/TaskIdPage';
import { ProductPages } from './pages/ProductPages';
import { TaskOtherPage } from './pages/TaskOtherPage';

export function Router () {
    return (
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/tareas" element={<TasksPage />} />
          <Route path="/tareas1" element={<TaskOtherPage />} />
          <Route path="/tareas/:taskId" element={<TaskIdPage />} />
          <Route path="/login" element={<UserPage />} />
          <Route path="/productos" element={<ProductPages />} />
        </Routes>
    )
}