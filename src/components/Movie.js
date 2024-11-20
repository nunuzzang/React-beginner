import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
    return <div>
        <img src={coverImg} alt={title} />
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>        {/*Link 컴포넌트는 브라우저가 새로고침 안하고 페이지를 이동할 수 있게 해준다. */}
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
    </div>;
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;


// 모든 이미지 element들은 alt속성을 가진다.d