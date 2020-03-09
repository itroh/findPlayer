import React, { useState } from 'react';
import '../Style.css';

const NewAd = (props) => {
	const [ user, setUser ] = useState({
		name: '',
		mail: '',
		phone: 0
	});
	const [ session, setSession ] = useState({
		game: 'choisissez un jeu',
		day: '',
		hour: '',
		resa: null,
		price: 0
	});
	const [ availableSeat, setAvailableSeat ] = useState(null);
	const [ comment, setComment ] = useState('');

	return (
		<div className="Ad_Box">
			<h3>Créer une annonce et chercher des joueurs</h3>
			<form className="NewAdForm">
				{/* user presentation */}
				<h4>Qui êtes vous ?</h4>
				<label>
					votre nom
					<input
						// className="Login-input"
						name="form_name"
						placeholder="votre nom"
						onChange={(e) =>
							setUser({
								...user,
								name: e.target.value
							})}
						value={user.name}
					/>
				</label>
				<label>
					Votre mail (il ne sera pas affiché)
					<input
						// className="Login-input"
						name="form_mail"
						placeholder="votre mail"
						onChange={(e) =>
							setUser({
								...user,
								mail: e.target.value
							})}
						value={user.mail}
						type="email"
					/>
				</label>
				<label>
					votre téléphone (il ne sera pas affiché)
					<input
						// className="Login-input"
						name="form_phone"
						placeholder="votre numéro de téléphone"
						onChange={(e) =>
							setUser({
								...user,
								phone: e.target.value
							})}
						value={user.name}
						type="number"
					/>{' '}
				</label>
				{/* user session */}
				<h4>Votre session</h4>
				<label>
					Choisissez votre jeu :
					<select
						defaultValue={session.game}
						value={session.game}
						onChange={(e) =>
							setSession({
								...session,
								game: e.target.value
							})}
					>
						<option value="default">Choisissez</option>
						<option value="lime">Citron vert</option>
						<option value="coconut">Noix de coco</option>
						<option value="mango">Mangue</option>
					</select>
				</label>
				<input
					// className="Login-input"
					name="form_day"
					placeholder="jour de la session"
					onChange={(e) =>
						setSession({
							...session,
							day: e.target.value
						})}
					value={session.day}
					type="date"
				/>
				<label>
					Heure de la session{' '}
					<select
						value={session.hour}
						onChange={(e) =>
							setSession({
								...session,
								hour: e.target.value
							})}
					>
						<option value="default">Choisissez</option>
						<option value="lime">09h30</option>
						<option value="coconut">10h30</option>
						<option value="mango">11h30</option>
					</select>
				</label>
				<label>
					La résa est-elle déjà effective ?
					<input
						// className="Login-input"
						name="form_resa"
						onChange={(e) =>
							setSession({
								...session,
								resa: e.target.value
							})}
						value={session.resa}
						type="checkbox"
					/>
				</label>
				<label>
					Prix par joueur<input
						// className="Login-input"
						name="form_price"
						placeholder="prix par joueur"
						onChange={(e) =>
							setSession({
								...session,
								price: e.target.value
							})}
						value={session.price}
						type="number"
					/>
				</label>
				<label>
					Place(s) disponible(s)
					<input
						// className="Login-input"
						name="form_seat"
						onChange={(e) => setAvailableSeat(e.target.value)}
						value={availableSeat}
						type="number"
					/>
				</label>
				<label>
					Description
					<textarea
						// className="Login-input"
						name="form_comment"
						onChange={(e) => setComment(e.target.value)}
						value={comment}
					/>
				</label>

				<button
					href=""
					style={{ width: '80px' }}
					type="primary"
					// onClick={(e) => signUp(e)}
				>
					Valider
				</button>
			</form>

			<p>title</p>
			<p>game</p>
			<p>date et heure</p>
			<p>prix</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
				fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
				deserunt mollit anim id est laborum
			</p>
			<button className=".Ad_Button">Répondre</button>
		</div>
	);
};

export default NewAd;
