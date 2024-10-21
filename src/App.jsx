import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/Bookmarks/BookMarks";
import Header from "./Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  const readingTimeHandler = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex gap-7 border-2 border-red-600">
        <Blogs
          handleAddToBookMarks={handleAddToBookMarks}
          readingTimeHandler={readingTimeHandler}
        ></Blogs>
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>
    </>
  );
}

export default App;
