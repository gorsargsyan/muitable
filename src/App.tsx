import { BrowserRouter, Routes, Route } from "react-router-dom";

import UsersPage from './pages/users/Index';
import TodosPage from './pages/todos/Index';
import PostsPage from './pages/posts/Index';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/posts" element={<PostsPage />} />
    </Routes>
  </BrowserRouter>
}

export default App;
