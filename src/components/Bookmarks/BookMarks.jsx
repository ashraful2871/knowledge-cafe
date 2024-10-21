import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const BookMarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="1/3 bg-gray-200 rounded-2xl">
      <div>
        <h2 className="text-4xl text-center"> Reading Time:{readingTime} m</h2>
      </div>
      <h2 className="text-2xl text-center">Bookmarks: {bookMarks.length}</h2>
      {bookMarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
BookMarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default BookMarks;
