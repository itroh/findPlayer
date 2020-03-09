import React from 'react';
import '../Style.css';
import PlayerAd from './PlayerAd';
import { Link } from 'react-router-dom';

const AdsList = (props) => {
	return (
		<div className="List_Container">
			<div className="Entete">
				<div>
					<h1>Ils recherchent des joueurs</h1>
				</div>
				<div>
					<Link to="/NewAd">
						<button className="Main_Button">Déposer une nouvelle annonce</button>
					</Link>
				</div>
			</div>

			<div className="List">
				<PlayerAd /> <PlayerAd /> <PlayerAd />
				<PlayerAd /> <PlayerAd /> <PlayerAd />
			</div>
		</div>
	);
};

export default AdsList;
