import React from 'react';

class UserInput extends React.Component{
	constructor(){
		super()
		this.state = {
			flowers: {}
		}
	}
	componentWillMount() {
		console.log('yooooo');
		fetch('/flower')
      		.then(response => response.json())
      		.then(data => {
        		this.setState({ flowers: data });
      		})
	}
	render(){
		return(
			<div>
				Here is a flower
				<div>
					{this.state.flowers.name}
				</div>
			</div>
		)
	}
}


export default UserInput;