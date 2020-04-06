
import React from "react";
import "../style.css";

export default function Stats(props) {

	return (
		<div className="clearfix">
			<div className="column">
				<div className="title">
					<span>Subscribers</span>
				</div>
				<div className="sub-title">
					<span>{props.stats.subscribers}</span>
				</div>
			</div>
			<div className="column">
				<div className="title">
					<span>Total Views</span>
				</div>
				<div className="sub-title">
					<span>{props.stats.totalViews}</span>
				</div>
			</div>
			<div className="column">
				<div className="title">
					<span>Total Videos</span>
				</div>
				<div className="sub-title">
					<span>{props.stats.totalVideos}</span>
				</div>
			</div>
		</div>
	);
}