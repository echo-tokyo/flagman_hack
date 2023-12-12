import React from "react";
import Card from "./Card";

class Cards extends React.Component{
    render() {
        return(
            <div className="block2">
                <div className="b2_title-text">
                    <h1>История</h1>
                    {this.props.cards.length > 0 ? <p className="clear" onClick={() => this.clear()}>Очистить</p> : <p>Здесть пусто</p>}
                </div>
                {this.props.cards.map((el) => (
                    <Card key = {el.id} card = {el}/>
                ))}
            </div>
        )
    } 
    clear(){
        this.props.cards.length = 0
        console.log(this.props.cards.length)
        window.location.reload()
    }
}

export default Cards