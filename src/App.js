import React from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Cards from "./components/Cards";

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cards: [
                
            ]
        } 
        this.addCard = this.addCard.bind(this)
    }
    render() {
        return(
            <div>
                <Header />
                <main>
                    <Inputs onAdd = {this.addCard} />
                    <Cards cards = {this.state.cards} />
                </main>
            </div>
        )
    }
    addCard(card){
        const id = this.state.cards.length + 1
        this.setState({ cards:[...this.state.cards, {id, ...card}]})
    }
}

export default App