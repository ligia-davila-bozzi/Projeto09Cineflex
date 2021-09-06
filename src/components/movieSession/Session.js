import Hours from "./Hours";
const Session = ({ sessions }) => {
    const { days } = sessions;
    return (
        <>
            {days.map((day) => {
                const {
                    id,
                    weekday,
                    date,
                    showtimes
                } = day;
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