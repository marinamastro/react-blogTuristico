import React from "react";

function Post (props){
    const {categoria} = props.datos
    let style={
        color:"",
        fontFamily: "'Quicksand', sans-serif",
        fontWeight:"bold"
    }
    if(categoria==="Colombia"){
        style.color="rgb(233, 236, 48)"
    }else if(categoria==="Argentina"){
        style.color="blue"
    }
    else if(categoria==="Brasil"){
        style.color="rgb(38, 184, 25)"
    }
    else if(categoria==="España"){
        style.color="red"
    }
    else if(categoria==="México"){
        style.color="orange"
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