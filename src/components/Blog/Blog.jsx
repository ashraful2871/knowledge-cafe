import PropTypes from "prop-types";
import { IoBookmarksOutline } from "react-icons/io5";
const Blog = ({ blog, handleAddToBookMarks, readingTimeHandler }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="space-y-5 mb-8">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-6">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookMarks(blog)}
            className="ml-4 text-2xl"
          >
            <IoBookmarksOutline />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>

      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="mr-2" href="">
              #{hash}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => readingTimeHandler(reading_time)}
        className="text-purple-800 underline"
      >
        mark as Read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMarks: PropTypes.func.isRequired,
  readingTimeHandler: PropTypes.func.isRequired,
};
export default Blog;
