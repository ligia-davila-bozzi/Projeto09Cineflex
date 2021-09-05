export default function Footer (props) {
    const {
        ImgMovie,
        NameMovie,
        Date
    } = props;
    return (
        <footer>
            <div className="movie-bottom">
                <img src={ImgMovie} alt=""/>
            </div>
            <div className="order">
                <p>{NameMovie}</p>
                <p>{Date}</p>
            </div>
        </footer>
    );

}