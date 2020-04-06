import React from "react";
import "./style.css";
import InfoBlock from "./components/InfoBlock";
import TabBlock from "./components/TabBlock";


class Channel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			channel: {},
			isLoading: true,
		}
	}

	async componentDidMount() {
		const response = await fetch('http://localhost:8080/channel?id=124');
		const body = await response.json();
		console.log(body);
		this.setState({channel: body, isLoading: false});
	}

	render() {
		const {channel, isLoading} = this.state;

		if (isLoading) {
			return <p>Loading....</p>;
		}

		return (
			<div>
				<InfoBlock channel={channel}/>
				<TabBlock />
			</div>
		);
	}
}

export default Channel;