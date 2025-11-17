import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import IndexUsers from "./Pages/users";
import UserShow from "./Components/users/Show";
import PostsIndex from "./Pages/posts/Index";
import PostShow from "./Components/posts/show";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/users" element={<IndexUsers />} />
          <Route path="/users/:usersId" element={<UserShow />} />

          <Route path="/posts" element={<PostsIndex />} />
          <Route path="/posts/:postId" element={<PostShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
