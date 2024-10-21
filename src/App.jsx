import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/Bookmarks/BookMarks";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex border-2 border-red-600">
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  );
}

export default App;
