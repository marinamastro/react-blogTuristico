import React from "react"
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Posts from "./Posts"
import dataPosts from "../posts.json"
import NavBar from "./Navbar"
import { FaSearch } from "react-icons/fa";



class Main extends React.Component{
    constructor(){
        super()
        this.state={filterText:"",
                    copyPosts:[],
                    filter:false
        }   
    };

    componentDidMount(){
        this.setPosts()               
    };
    
    setPosts=()=>{
       let posts=[];
       dataPosts.forEach(item=>{
           const singleItem={...item};
           posts=[...posts,singleItem]
       })
       this.setState({copyPosts:posts})        
    };


       handleClick=(id)=>{    
            const posts = dataPosts.filter(x=>x.categoria === id)
            this.setState({copyPosts:posts,filter:false}) 
            if(id==="Inicio"){
                const posts = dataPosts
                this.setState({copyPosts:posts,filter:false}) 
            } 
       };

       handleChange=(e)=>{
        this.setState({filterText:e.target.value,filter:true})
       };

      
    render(){ 
        const posts=[];
        const filterText=this.state.filterText;
        dataPosts.forEach(post=>{
            if (post.descripcion.indexOf(filterText) === -1) {
                return;
              }
        posts.push(<Posts datos={post} key={post.id} />)});   
        return(
        <React.Fragment>
            <Row className="justify-content-md-center">
               <Col lg={6} md={12} sm={12} >               
                <NavBar handleClick={this.handleClick}/>
                </Col>
                <Col lg={3} md={12} sm={12} style={{textAlign:"center"}}>               
                <FaSearch style={{color:"white"}}/>
                <input type="text"
                value={this.state.filterText}
                onChange={this.handleChange}
                placeholder="Buscador"
                autoComplete="true"/>
                </Col>               
            </Row>
            <Row className="justify-content-md-center">                
                <Col lg={10} md={10}>   
                {this.state.filter ? <React.Fragment>{posts}</React.Fragment> :
                    this.state.copyPosts.map(x=>{
                        return <Posts datos={x} key={x.id} />
                    })
                }        
                                                
                </Col>      
            </Row>
        </React.Fragment>
    )
}
}

export default Main