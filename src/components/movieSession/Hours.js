const Hours = ({hours}) => {
    console.log(hours)

    return (
        <div className="hours">
            {hours.map((hour)=>{
                const {
                    name,
                    id
                } = hour;
                return(
                    <div key={id} className="hour">{name}</div>
                );
            })}
        </div>
    );
};

export default Hours;