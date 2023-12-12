import React from "react";

class Header extends React.Component{
    render() {
        return(
            <header>
                <nav className="header-l">
                    <a href="#">Вход</a>
                    <a href="#">Регистрация</a>
                </nav>
                <nav className="header-r">
                    <a href="#">Начать отчет</a>
                    <a href="#">История</a>
                    <a href="#">Статистика</a>
                    <a href="#">Денежный поток</a>
                    <a href="#">Лимиты</a>
                </nav>
            </header>
        )
    }
}

export default Header