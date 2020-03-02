import React from "react";
import { Row,Col } from 'react-bootstrap';
import Posts from "./Posts";
import dataPosts from "../posts.json";
import NavBar from "./Navbar";
import { FaSearch } from "react-icons/fa";
import {Consumer} from "../context";



class Main extends React.Component{  
    render(){           
        return(
        <Consumer>
            {(data)=>{
                 const posts=[];
                 const filterText=data.filterText;
                 dataPosts.forEach(post=>{
                     if (post.descripcion.indexOf(filterText) === -1) {
                         return;
                       }
                 posts.push(<Posts datos={post} key={post.id} />)});

                return(
                    <React.Fragment>
            <Row className="justify-content-md-center">
               <Col lg={6} md={12} sm={12} >               
                <NavBar handleClick={data.handleClick}/>
                </Col>
                <Col lg={3} md={12} sm={12} style={{textAlign:"center"}}>               
                <FaSearch style={{color:"white"}}/>
                <input type="text"
                value={data.filterText}
                onChange={data.handleChange}
                placeholder="Buscador"
                autoComplete="true"/>
                </Col>               
            </Row>
            <Row className="justify-content-md-center">                
                <Col lg={10} md={10}>   
                {data.filter ? <React.Fragment>{posts}</React.Fragment> :
                    data.copyPosts.map(x=>{
                        return <Posts datos={x} key={x.id} />
                    })
                }        
                                                
                </Col>      
            </Row>
        </React.Fragment>
                )
            }}
        </Consumer>
        
    )
}
}

export default Main