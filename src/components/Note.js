import React from 'react';
import styled from 'styled-components';
import { people } from '../data';

function Note({ setCount, count }) {
	return (
		<Wrapper className='container'>
			{people.map((person) => {
				const {
					id,
					name,
					img,
					action,
					time,
					post,
					liked,
					msg,
					club,
				} = person;

				const read = (e) => {
					const divs = document.querySelectorAll(
						'.single-container'
					);
					/**this is that node element which is clicked */
					const ClickedNodeElement = [...divs].filter(
						(n) => parseInt(n.dataset.set) === id
					);

					/**remove the id  property 'unread....' at least trying */
					ClickedNodeElement[0].setAttribute('id', '');

					if (
						ClickedNodeElement[0].id === '' &&
						!ClickedNodeElement[0].getAttribute('checked')
					) {
						setCount(count - 1);
					}
					ClickedNodeElement[0].setAttribute(
						'checked',
						'true'
					);
				};
				return (
					<div
						onClick={read}
						className='single-container '
						key={id}
						data-set={id}>
						<img
							className='profile-img'
							src={img}
							alt='person'
						/>
						<div className='text-container'>
							<h2
								className={
									liked ? 'text liked-active ' : 'text'
								}>
								<span className='name'>{name}</span>
								{action}
								{post ? (
									<span className='post'>{post}</span>
								) : null}
								{club ? (
									<span className='club'>{club}</span>
								) : null}
							</h2>
							{liked ? (
								<img
									className='liked-img'
									src={liked}
									alt='img'
								/>
							) : null}
							<p className='time'>{time}</p>
							{msg ? <h3 className='msg'>{msg}</h3> : null}
						</div>
					</div>
				);
			})}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	#unread-msg-active {
		background-color: var(--unread-msg-bcg);
	}
	.single-container {
		width: 80%;
		display: flex;
		align-items: flex-start;
		padding: 0.2rem 0.8rem;
		margin-top: 1rem;
		justify-content: center;
		border-radius: 6px;
	}

	.profile-img {
		width: 3rem;
		flex: 1;
		margin-right: 0.9rem;
		margin-top: 0.8rem;
	}

	.text-container {
		order: 1;
		width: 100%;
	}

	.liked-active {
		width: 80%;
		display: inline-block;
	}

	.text {
		font-size: 1rem;
		font-weight: 400;
	}

	.name {
		font-weight: 800;
	}

	.post {
		color: darkblue;
		font-weight: 500;
	}

	.club {
		font-weight: 800;
		color: darkblue;
	}
	.time {
		color: gray;
		margin-top: -0.8rem;
	}

	.liked-img {
		width: 3rem;
		position: relative;
		top: 0.2rem;
	}
	.msg {
		border: 0.5px solid gray;
		padding: 0.5rem;
		color: gray;
		font-weight: 100;
		font-size: 1rem;
		border-radius: 6px;
	}

	@media screen and (min-width: 768px) {
	}
`;

export default Note;
