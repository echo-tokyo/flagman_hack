import React from "react";

class Inputs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            sum: Number,
            category: '',
            isСonsumption: true,
            date: ''
        }
    }
    render() {
        return(
            <div className="block1">
                <h1>Начать отчет</h1>
                <form className="form" id="add-msg-form">
                    <div className="choose">
                        <p>Выберите:</p>
                        <label htmlFor="radio1">Расход</label>
                        <input className="radio" type="radio" id="radio1" onChange={(event) => this.setState({isСonsumption: event.target.checked ? true : false })} onClick={() => {document.getElementById('radio2').checked = false}}/>
                        <label htmlFor="radio2">Доход</label>
                        <input className="radio" type="radio" id="radio2" onChange={(event) => this.setState({isСonsumption: event.target.checked ? false : true })} onClick={() => {document.getElementById('radio1').checked = false}}/>
                    </div>
                    <div className="block1-inputs">
                        <input type="text" placeholder="Название" id="consumptionName" onChange={(event) => this.setState({name: event.target.value})} required/>
                        <input type="text" placeholder="Сумма" id="consumptionSum" onChange={(event) => this.setState({sum: event.target.value})} required/>
                        <input type="text" placeholder="Категория" id="category" onChange={(event) => this.setState({category: event.target.value})}/>
                    </div>
                    <div className="block1-button">
                        <button type="button" onClick={() => this.props.onAdd({
                            name: this.state.name,
                            sum: this.state.sum,
                            category: this.state.category,
                            isСonsumption: this.state.isСonsumption,
                            date: this.date()
                        })}>Добавить</button>
                    </div>
                </form>
            </div>
        )
    }
    date(){
        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let formattedDate = day + "." + month + "." + year;
        return (formattedDate)
    }
}

export default Inputs