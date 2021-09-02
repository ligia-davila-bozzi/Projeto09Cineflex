import { Link } from "react-router-dom"

export default function Movie ({ movie }) {
    const {
        id,
        posterURL,
        overview
    } = movie;

    return (
        <Link to={`/filme/${id}`}>
            <div className="movie">
                <img
                    src={posterURL}
                    alt={overview}
                />
            </div>
        </Link>
    );
}