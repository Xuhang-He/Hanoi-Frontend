
import React from "react";
import "../../style.css";
import ChannelStatsCard from "./ChannelStatsCard";
import ChannelStatsTable from "./ChannelStatsTable";
import InlineChart from "./charts/InlineChart";

export default function ChannelStatsTabPanel(props) {

	return (
		<div className="panel-container">
			<div className="card-block">
				<div className="clearfix">
					<div className="column">
						<ChannelStatsCard/>
					</div>
					<div className="column">
						<ChannelStatsCard/>
					</div>
					<div className="column">
						<ChannelStatsCard/>
					</div>
				</div>

				<div className="clearfix">
					<div className="column">
						<ChannelStatsCard/>
					</div>
					<div className="column">
						<ChannelStatsCard/>
					</div>
					<div className="column">
						<ChannelStatsCard/>
					</div>
				</div>
			</div>

			<div>
				<div style={{paddingTop: "20px"}}>
					<ChannelStatsTable/>
				</div>
			</div>

			<div>
				<div style={{paddingTop: "30px"}}>
					<InlineChart />
				</div>
			</div>

			<div>
				<div style={{paddingTop: "30px"}}>
					<InlineChart />
				</div>
			</div>
			<div>
				<div style={{paddingTop: "30px"}}>
					<InlineChart />
				</div>
			</div>

		</div>
	);
}