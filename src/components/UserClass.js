import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <h2>{this.props.name}</h2>
        <h3>Location: Noida</h3>
        <h4>Contact: agarwalmohak6@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
