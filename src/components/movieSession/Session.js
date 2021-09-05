import Hours from "./Hours";
const Session = ({ sessions }) => {
    const { days } = sessions;
    console.log(days)
    return (
        <>
            {days.map((day) => {
                const {
                    id,
                    weekday,
                    date,
                    showtimes
                } = day;
                console.log(showtimes)
                return (
                    <div key = {id} className="session">
                        <h1>{`${weekday} - ${date}`}</h1>
                        <Hours hours={showtimes} />
                    </div>
                );
            })}
        </>
    );
}

export default Session;