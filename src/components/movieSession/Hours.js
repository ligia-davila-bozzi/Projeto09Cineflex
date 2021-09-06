import { Link } from "react-router-dom";
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
                    <Link className = "link" to={`/session/${id}`}>
                        <div className="hour">{name}</div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Hours;