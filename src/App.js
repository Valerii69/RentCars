import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Layout } from './component/Layout/Layout';
import Loader from '../src/component/Spinner/Spinner';

const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Favorite = lazy(() => import('./pages/Favorite'));

function App() {
  
    useEffect(() => {
      const modalRoot = document.getElementById('modal-root');
      if (modalRoot) {
        console.log('modal-root exists');
      } else {
        console.log('modal-root does not exist');
      }
    }, []);
  return (
    <>
     <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>   
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorite />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
        </Suspense>
    </>
  );
}

export default App;
