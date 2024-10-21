import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/Bookmarks/BookMarks";
import Header from "./Header/Header";


function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const handleAddToBookMarks = (blog) => {
    console.log("book mark adding");
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex border-2 border-red-600">
        <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  );
}

export default App;
