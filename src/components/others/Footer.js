export default function Footer (props) {
    return (
        <footer>
            <div className="movie-bottom">
                <img src={"ImgMovie"} alt=""/>
            </div>
            <div className="order">
                <p>{"{NameMovie}"}</p>
                <p>{"{weekday} - {hour}"}</p>
            </div>
        </footer>
    );

}