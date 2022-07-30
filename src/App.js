import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/home'
import NewsPage from './pages/newsPage';
import NewsDetail from './pages/newsDetail';
import Missing from './pages/notFound';


library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<Missing />} />
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />}>
            <Route path=":newsId" element={<NewsDetail />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
