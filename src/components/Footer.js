import React from "react";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";


function Footer (){
    return(
        <Row className="footer">           
               <Col lg={4} md={4}>
                   <div>
                   <p><strong>Contactanos</strong></p>
                   <p><FaRegEnvelope/> blogturistico@travellers.com.ar</p>
                   <p><FaWhatsapp/> +5458462468545</p>
                   <p style={{fontSize:"0.8em",paddingTop:"2%"}}><FaRegCopyright/>Derechos Reservados</p>
                   </div>
               </Col>           
        </Row>
    )
}

export default Footer