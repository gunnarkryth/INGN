import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/App.scss";
import { Home } from "./pages/Home";
import { Header } from "./components/Header/Header";
import { Posts } from "./components/Posts/Posts";
import { Post } from "./pages/Post";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post:slug" element={<Post />}></Route>
        </Routes>
        ;<Header></Header>
        <Posts></Posts>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
