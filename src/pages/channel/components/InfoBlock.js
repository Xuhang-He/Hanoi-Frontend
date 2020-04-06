import React from "react";
import "../style.css";
import Avatar from "@material-ui/core/Avatar";
import Profile from "./Profile";
import Stats from "./Stats";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	large: {
		width: theme.spacing(14),
		height: theme.spacing(14),
	},
}));

export default function InfoBlock(props) {
	const classes = useStyles();
	return (
		<div className="info-block">
			<div className="info-container-left">
				<Avatar alt="Remy Sharp" src="/images/1.jpg" className={classes.large}/>
			</div>
			<div className="info-container-right">
				<Profile profile={props.channel.profile}/>
				<Stats stats={props.channel.stats}/>
			</div>
		</div>
	);
}