import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";       // url에 있는 값을 반환해주는 함수(특히 변경되는 값)

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json(); //fetch 함수는 네트워크 리소스를 가져오는 API, await 키워드는 fetch 함수를 호출한 결과가 올 때까지 기다림,fetch가 반환한 응답(response) 객체에서 .json() 메서드를 호출하여 JSON 형태로 변환
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return <div>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
                <div key={movie.id}>
                    <img src={movie.medium_cover_image} alt={movie.title} />
                    <h2>{movie.title}</h2>
                    <ul>
                        {movie.genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>

            </div>)}

    </div>
}

export default Detail;