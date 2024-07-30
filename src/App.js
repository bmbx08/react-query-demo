import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage';
import ReactQueryPage from './page/ReactQueryPage';
import NormalPage from './page/NormalPage';
import ReactQueryPage2 from './page/ReactQueryPage2';

function App() {
  return (
    <div>
      <nav style={{backgroundColor: "beige", padding: "20px"}}>
        <Link to="/" style={{marginRight:"10px"}}>
          Homepage
        </Link>
        <Link to="/normal-page" style={{marginRight:"10px"}}>Normal fetch</Link>
        <Link to="/react-query" style={{marginRight:"10px"}}>React Query</Link>
        <Link to="/react-query2">useQueries Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/react-query" element={<ReactQueryPage />}/>
        <Route path="/normal-page" element={<NormalPage/>}/>
        <Route path="/react-query2" element={<ReactQueryPage2/>}/>
      </Routes>
    </div>
  );
}

export default App;