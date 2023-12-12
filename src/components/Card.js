import React from "react";

class Card extends React.Component{
    render() {
        return(
            <div className="swiper-slide">
                <div className="p"></div>
                <div className={this.props.card.isСonsumption ? "item itemRed" : "item itemGreen"}>
                    <div className="item-text">
                        <p>{this.props.card.name}</p>
                        <p>{this.props.card.sum}</p>
                    </div>
                    <div className="menu hidden">
                        <div className="menu-text">
                            <p>{this.props.card.date}</p>
                            <p>{this.props.card.category ? this.props.card.category : 'Категория'}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 26" className="blackSvg" onClick={(event) => {this.blackClick(event)}}>
                            <path d="M0.0856018 25.5V21.3333H32.6514V25.5H0.0856018ZM0.0856018 15.0833V10.9167H32.6514V15.0833H0.0856018ZM0.0856018 4.66667V0.5H32.6514V4.66667H0.0856018Z" pointerEvents={'none'}></path>
                        </svg>              
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 26" className="whiteSvg" onClick={(event) => {this.whiteClick(event)}}>
                        <path d="M0.0856018 25.5V21.3333H32.6514V25.5H0.0856018ZM0.0856018 15.0833V10.9167H32.6514V15.0833H0.0856018ZM0.0856018 4.66667V0.5H32.6514V4.66667H0.0856018Z" pointerEvents={'none'}></path>
                    </svg> 
                </div>
            </div>
        )
    }
    whiteClick(event){
        let svg = event.target
        let container = svg.parentNode
        let menu = container.children[1]
        
        menu.classList.remove('hidden')
        svg.classList.add('hidden')      
    }
    blackClick(event){
        let svg = event.target
        let menu = svg.parentNode
        let container = menu.parentNode
        let svg2 = container.children[2]
        
        menu.classList.add('hidden')      
        svg2.classList.remove('hidden')
    }
}

export default Card