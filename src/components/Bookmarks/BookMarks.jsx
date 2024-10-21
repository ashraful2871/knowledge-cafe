import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const BookMarks = ({ bookMarks }) => {
  return (
    <div className="1/3 text-center bg-gray-200 rounded-2xl">
      <h2 className="text-2xl">Bookmarks: {bookMarks.length}</h2>
      {bookMarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
BookMarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
};
export default BookMarks;
