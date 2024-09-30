import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/App.scss";
import { Home } from "./pages/Home";
import { Header } from "./components/Header/Header";
import { Post } from "./pages/Post";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post/:slug" element={<Post />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
