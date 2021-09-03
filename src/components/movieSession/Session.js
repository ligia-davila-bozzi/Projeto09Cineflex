const Session = (props) => {
    const { days } = props;
    return (
        <>
            {days.map((day)=>{
                const {
                    id,
                    weekday,
                    date,
                    showtimes
                } = day;
                return ();
            })}
        </>
    );
};

export default Session;


<div className="session">
    <h1>{`{weekday} - {dd/mm/aaaa}`}</h1>
    <div className="hours">
        <div className="hour">{"hour"}</div>
    </div>
</div>