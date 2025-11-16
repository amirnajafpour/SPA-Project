import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import IndexUsers from "./Pages/users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<IndexUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
