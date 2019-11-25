import React, {Component} from 'react';
import {withRouter,Redirect} from 'react-router-dom';
// import {saveUserInFirebase} from '../../utils/firebaseFunctions';

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
        const { history } = this.props
        const name = this.state.name
        const validated = this.validateNameInput(name)
        if(validated){
            localStorage.setItem('userName', name)
           // saveUserInFirebase(name)
            history.replace('/Game')
        }
    }

    render(){
        const nameFromLocalStorage = localStorage.getItem('userName')
        
        return (
            !nameFromLocalStorage &&
            <main className="new-player-main">
                <header>
                <h2>¡Hola {this.state.name}!</h2>
                </header>
                <section className="section-container">
                    <figure className="new-player-img">
                        <img src="/img/player.png" alt="new-player"/>
                    </figure>
                    <p>Para iniciar el juego solo agrega tu nombre:</p>
                    <p>Tu serás X</p>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Ingresa tu nombre"
                        onChange={this.changeUserName}
                        className="input-new-player"/>
                    <button
                        text="Jugar"
                        onClick={this.saveUserNameinLocal}
                        className="yellow-button"
                    >Jugar</button>
                </section>
            </main>
        ) || <Redirect to="/Game"/>
    }
}

export default withRouter(NewPlayer);