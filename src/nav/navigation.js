import React from 'react'
import './menu.css'
import Main from './main-menu'
import Subitem from './sub-menu'
import * as utility from './utilities'


class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggle: false};
    }

    handleClick=(e)=>{
        this.setState({isToggle: !this.state.isToggle});
    }
    render(){
        return(
            <div className={`menu ${utility.navType}`}>
                <div className="mobile-button" onClick={this.handleClick}>Menu</div>
                <nav  style={{display: this.state.isToggle ? 'block': 'none'}}>                    
                    <ul>
                        <Main name='Home'></Main>
                        <Main name='About us'></Main>
                        <Main name='Services'>
                            <Subitem name="hello"></Subitem>  
                            <Subitem name="bye"></Subitem>       
                        </Main>
                        <Main name='Products'>
                            <Subitem name="Endpoint Protection Cloud"></Subitem>  
                            <Subitem name="Endpoint Protection Cloud Server"></Subitem> 
                            <Subitem name="Email Security Services"></Subitem>
                            <Subitem name="Ghost Solution Suite"></Subitem>
                        </Main>
                        <Main name='Contact us'></Main>
                        <Main name='dummy'>
                            <Subitem name="One"></Subitem>  
                            <Subitem name="Two"></Subitem> 
                        </Main>
                    </ul>
                </nav>                
            </div>
        )
    }
}

export default Menu