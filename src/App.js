import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/home';
import News from './pages/news';
import NewsItem from './pages/newsItem';

library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<News />} /> */}
          <Route path="/news" element={<News />} />
          <Route path="/news-item" element={<NewsItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
