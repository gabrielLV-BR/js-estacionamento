import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound/index';
import { Header } from './components/Header/index';

export function AppRouter() {
  return <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </>;
}