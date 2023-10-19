import { Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Favorite from './pages/Favorite';

import { AppBar } from './component/AppBar/AppBar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          {/* <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorite />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
