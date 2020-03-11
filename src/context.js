import React from "react";
import dataPosts from "./posts.json";

const context = new React.createContext();

class Provider extends React.Component{
    state={
            filterText:"",
            copyPosts:[],
            filter:false       
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
            this.setState({filterText:e.target.value.toUpperCase(),filter:true})
           };
        
    
    render(){
        return(
            <context.Provider value={{
            ...this.state,
            handleClick:this.handleClick,
            handleChange:this.handleChange,
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

const Consumer = context.Consumer

export {Provider,Consumer} 