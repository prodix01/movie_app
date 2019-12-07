
import React, {Component} from "react";






class App extends Component {
    // 상태값

    state = {
        count : 0
    };





    // 함수

    add = () => {
      this.setState(current => ({count : current.count + 1}));
    };

    minus = () => {
      this.setState(current =>({count : current.count - 1 }));
    };

    // 라이프사이클
    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>State is : {count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
};

export default App;