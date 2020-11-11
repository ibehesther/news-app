import React, { Component } from 'react';



class RenderWorldComponent extends Component {
    state = {  }
    render() { 
        console.log(this.props.info)
        return ( 
            <div>
                {this.props.info.map(info =>{
                return(
                info.world.map(world => world.title=== this.props.match.params.title? (
                
                <div className='container'>
                    <div className= 'row row-content'>
                    <h1> { world.title }</h1>
                        <img src={world.urlToImage} width="100%"/>
                        <div className='row'>
                            {world.content} 
                        </div>
                        <p>Source: {world.author}</p>
                    </div>
                    
                </div>)
            
                : 
                
            null)
            );
                })}
            
            
            
            </div>
         );
    }
}
 
export default RenderWorldComponent;