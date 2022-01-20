import { Component } from "react";


class MyComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: 'SpiderMan'
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('%c getDerivedStateFromProps lancée', 'color:red; background: yellow; font-size: 15px;');
        console.log(props);
        console.log(state);
        return null;
    }

    forceChangement = () => {
        this.forceUpdate(() => {
            console.log('je force le changement')
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
         console.log('Je suis dans shouldComponentUpdate()')
         return true;
    }

    render() {
        console.log('Je suis dans le Render')
        return (
            <div>
                <p>Nom: {this.state.name}</p>
                <p>Age: {this.props.age}</p>
                <button onClick={this.forceChangement}>Forced</button>
            </div>
        );
    }
}

export default MyComponent;