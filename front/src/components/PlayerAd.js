import React from 'react';
import '../Style.css';

const PlayerAd = (props) => {
	return (
		<div className="Ad_Box">
			<div className="Ad_Content">
				<h3>ZERO LATENCY - SOL RAIDERS</h3>
				<h4>18/02/2020 à 18h20 - 30€ par joueur - 3 joueurs recherchés</h4>

				<p className="Ad_Content_Description">
					Bonjour, on est une équipe de 5, et on voudrait compléter notre session avec qui veut ! plus on est
					de fou, tout ça tout ça ;) on a un bon niveau, donc débutant s'abstenir !on est là pour gagner
				</p>
			</div>
			<div>
				<button className="Main_Button">Répondre</button>
			</div>
		</div>
	);
};

export default PlayerAd;
