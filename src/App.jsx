import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/Bookmarks/BookMarks";
import Header from "./Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleAddToBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex gap-7 border-2 border-red-600">
        <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
        <BookMarks bookMarks={bookMarks}></BookMarks>
      </div>
    </>
  );
}

export default App;
