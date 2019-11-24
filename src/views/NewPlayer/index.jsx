import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import YellowButton from 'components/YellowButton';
import './style.css';

class NewPlayer extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: 'nuevo jugad@r'
        }

        this.changeUserName = this.changeUserName.bind(this);
        this.validateNameInput = this.validateNameInput.bind(this);
        this.saveUserNameinLocal = this.saveUserNameinLocal.bind(this);
    }

    changeUserName(e){
        console.log(e.target.value)
        this.setState({name: e.target.value})
    }

    validateNameInput(name){
        return name !== 'nuevo jugad@r'? true : false;
    }

    saveUserNameinLocal(){
        const name = this.state.name
        const validated = this.validateNameInput(name)
        if(validated){
            localStorage.setItem('userName', name)
        }
        return false;
    }

    render(){
        const nameFromLocalStorage = localStorage.getItem('userName')
        const userSaved = this.saveUserNameinLocal()
        return (
            <main className="new-player-main">
                <header>
                <h2>¡Hola {this.state.name}!</h2>
                </header>
                <section className="section-container">
                    <figure className="new-player-img">
                        <img src="./img/player.png" alt="new-player"/>
                    </figure>
                    <p>Para iniciar el juego solo agrega tu nombre:</p>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Ingresa tu nombre"
                        onChange={this.changeUserName}
                        className="input-new-player"/>
                    <button
                        text="Jugar"
                        onClick={()=> this.saveUserNameinLocal}
                        className="yellow-button"
                    >Jugar</button>
                    {
                        nameFromLocalStorage || userSaved ? <Redirect to="/Game"/> 
                        : console.log('no hay usuario')
                    }
                </section>
            </main>
        )
    }
}

export default NewPlayer;