import React from "react";
import {Col} from "react-bootstrap";

function ItemNav (props){
    return(
    <Col xs="12" md="auto"
     className="itemNav"
     id={props.item}
     onClick={()=>{props.handleClick(props.item)}}>
         {props.item}
    </Col>
    )
}

export default ItemNav