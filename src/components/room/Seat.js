import { useState } from "react";
import { Link } from "react-router-dom";

const Seat = (props) => {
    const [select, setSelect] = useState ("")
    const {
        key,
        name,
        reserved
    } = props;

    const clientData = {
        id:[],
        name:"",
        cpf: ""
    }

    const {id, name:nome, cpf} = clientData

    function selecionar(seat) {
        if (select === "") {
            setSelect("selected");
            purchase (seat);

        } else {
            setSelect("");
        }
    }

    function purchase (seat){
        id.push(seat);
        console.log(id)
    }

    if(reserved === false) {
        return(
            <div className="seat unavailable"onClick ={()=> alert("Esse assento não está disponível")} >{name}</div>
        )
    } else {
    return(
        <div className={`seat ${select}`} onClick={()=>selecionar(name)}>{name}</div>
    );}
}

export default Seat;