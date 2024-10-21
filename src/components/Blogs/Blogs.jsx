import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookMarks, readingTimeHandler }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      <h1 className="text-4xl">blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookMarks={handleAddToBookMarks}
          readingTimeHandler={readingTimeHandler}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookMarks: PropTypes.func,
  readingTimeHandler: PropTypes.func,
};
export default Blogs;
