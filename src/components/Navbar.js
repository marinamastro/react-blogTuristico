import React from "react";
import {Row} from "react-bootstrap";
import ItemNav from "./ItemNav";

function NavBar (props){
    let items=["Inicio","Nosotros","España","Brasil","Argentina","México","Colombia"];
    return( 
       
<nav style={{textAlign:"center"}}>
<Row className="justify-content-md-center">
  {items.map(item=><ItemNav item={item} key={item} handleClick={props.handleClick}/>)}
  </Row>
</nav>   
       
    )
}

export default NavBar