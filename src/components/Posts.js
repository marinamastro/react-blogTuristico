import React from "react"
import { Row,Col,Image } from 'react-bootstrap';
import dataPosts from "../posts.json";
import Post from "./Post";
import Comments from "./Comments";


class Posts extends React.Component {
   constructor(props){
       super(props)
       this.state={ posts:dataPosts,
                    leerMas:false,
                    nuevoDato:"",
                    comments:[]
                                                            
    }
   } 
   componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response=>response.json())
    .then(data=>this.setState({comments:data}))
}

   leerMas=(id)=>{    
    let dato;    
    this.setState(PrevState=>{        
        this.state.posts.map((x)=>{
            if(x.id===id){
                 dato=x.articulo
            }
            return dato
        })
        return{leerMas:!PrevState.leerMas,nuevoDato:dato}
    })   
    }

   leerMenos=(id)=>{
    let dato;
    this.setState(PrevState=>{        
        this.state.posts.map((x)=>{
            if(x.id===id){
                 dato=x.descripcion
            }
            return dato
        })
        return{leerMas:!PrevState.leerMas,nuevoDato:dato}
    })     
   }
 
    render(){
     if(this.state.leerMas){       
         return(           
        <Row className="noticia">
            <Col>
            <Post datos={this.props.datos} nuevoDato={this.state.nuevoDato}/>  
            </Col>
            <Comments comments={this.state.comments} id={this.props.datos.id}/> 
            <h6 style={{paddingLeft:"2%"}}onClick={()=>{this.leerMenos(this.props.datos.id)}}>
            <strong>Leer menos</strong>
            </h6>
        </Row> 
           ) }

    return(
        <Row className="noticia">
            <Col lg={2} md={2}>            
              <Image src={this.props.datos.img}  alt="" fluid />    
           </Col>
            <Col lg={10} md={10}>
                <Post datos={this.props.datos}/>    
                <h6 onClick={()=>{this.leerMas(this.props.datos.id)}}>
                    <strong>Leer más y ver comentarios</strong>
                </h6>    
            </Col>
        </Row>
    )
}}

export default Posts