// import { BrowserRouter, Routes, Route } from "react-browser-router";
import "./assets/styles/App.scss";
import { Home } from "./pages/Home";
import { Header } from "./components/Header/Header";
import { Posts } from "./components/Posts/Posts";
function App() {
  // <BrowserRouter>
  //   <Routes>
  //     <Route to="/" element={<Home />}></Route>
  //   </Routes>
  // </BrowserRouter>;
  return (
    <>
      <Header></Header>
      <Posts></Posts>
    </>
  );
}

export default App;
