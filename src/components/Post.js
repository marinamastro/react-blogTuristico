import React from "react";

function Post (props){
    const {categoria} = props.datos
    let style={
        color:"",
        fontFamily: "'Quicksand', sans-serif",
        fontWeight:"bold"
    }
    switch (categoria) {
        case "Colombia":
            style.color="rgb(233, 236, 48)";
        break;
        case "Argentina":
            style.color="blue";
        break;
        case "España":
            style.color="red";
        break;
        case "Brasil":
            style.color="rgb(38, 184, 25)";
        break;
        case "México":
            style.color="orange";
        break;   
       }
 
    return(
        <React.Fragment >
        <h4>{props.datos.titulo}</h4>
        <p style={style}>{props.datos.categoria}</p>
        <p style={{fontSize:"0.8em",color:"gray"}}>{props.datos.fecha}</p>
        <p><strong>{props.datos.descripcion}</strong></p>
        <p>{props.nuevoDato}</p>
        </React.Fragment>
    )
}

export default Post