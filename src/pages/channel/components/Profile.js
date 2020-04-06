import React from "react";
import "../style.css";

export default function Profile(props) {
	return (
		<div>
			<div className="clearfix">
				<div className="box1">
					<span className="title1">{props.profile.name}</span>
				</div>
			</div>
			<div className="clearfix">
				<div className="box1">
					<span className="title1">Joined {props.profile.platform} on:
					<span className="subtitle">2010-04-29</span>
					</span>

					<span className="title1">Area:
						<a className="" href="/youtube-channel-rank/top-250-US-all-youtuber-sorted-by-subs-weekly">
							<span className="subtitle underline">{props.profile.region}</span>
						</a>
					</span>

					<span className="title1">Language:
						<span className="subtitle">English</span>
					</span>
				</div>
			</div>
		</div>
	);
}