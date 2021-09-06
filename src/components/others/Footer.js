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

/*
return (
        <main className="mar-bottom">
            <PageTitle title="Selecione o(s) assento(s)" />
            <div>
                <div className="seats">
                    {seats.map((seat) => {
                        const { id, name, isAvailable } = seat;

                        return (
                        <Seat key={id} name={name} reserved={isAvailable} />
                        );
                    })}
                </div>
                <div className="subtitle">
                    <div className="seat selected"></div>
                    <div className="seat available"></div>
                    <div className="seat unavailable"></div>
                </div>
                <Input />

                <div className="botao">Reservar assento(s)</div>
            </div>
            <Footer
                ImgMovie={posterURL}
                Overview={overview}
                NameMovie={title}
                Date={`${day.weekday} - ${name}`}
            />
        </main>
    );
*/