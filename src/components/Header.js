import React from "react";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap"


function Header (){
    
    return(   
          
        <Row>
            <Col className="titulo">
            <h3>BLOGTURÍSTICO</h3>
            <p id="subtitulo">BY TRAVELLERS</p>               
            </Col>
        </Row>    
       
    )
}

export default Header