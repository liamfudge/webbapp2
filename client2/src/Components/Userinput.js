import React from 'react';

class UserInput extends React.Component{
	constructor(){
		super()
		this.state = {
			flowers: {},
			input: '',
			output: ''
		}
	}
	componentWillMount() {
		fetch('/flower')
      		.then(response => response.json())
      		.then(data => {
        		this.setState({ flowers: data });
      		})
	}

	input = (e) => {
		this.setState({ input: e.target.value });
	}
	clicked = () => {
		this.setState({output: this.state.input});
	}
	render(){
		return(
			<div>
				Here is a flower
				<div>
					{this.state.flowers.name}
				</div>
				<input type="text" placeholder="write your name here" onChange={this.input.bind(this)} />
				<button onClick={this.clicked} >Generate Name</button>

				{this.state.output}
			</div>
		)
	}
}


export default UserInput;