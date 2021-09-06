import { useState } from "react";
import { Link } from "react-router-dom";

const Seat = (props) => {
    const [select, setSelect] = useState ("")
    const {
        key,
        name,
        reserved
    } = props;

    function selecionar(type) {
        if (select === "") {
            setSelect("selected");

        } else {
            setSelect("");
        }
    }

    if(reserved === false) {
        return(
            <div className="seat unavailable"onClick ={()=> alert("Esse assento não está disponível")} >{name}</div>
        )
    } else {
    return(
        <div className={`seat ${select}`} onClick={selecionar}>{name}</div>
    );}
}

export default Seat;