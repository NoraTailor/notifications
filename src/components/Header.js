import styled from 'styled-components';

function Header({ count, setCount }) {
	const markAll = () => {
		const divs = document.querySelectorAll(
			'.single-container'
		);
		divs.forEach((div) => {
			div.setAttribute('id', 'unread-msg-active');
			div.setAttribute('checked', '');
			setCount((n) => n + 1);
			if (count) {
				setCount(divs.length);
			}
		});
	};

	return (
		<Wrapper>
			<div className='notifications-container'>
				<h1 className='notify'>Notifications</h1>
				<div className='unread'>{count}</div>
			</div>
			<button onClick={markAll} className='mark-all'>
				Mark all as unread
			</button>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 1rem;
	margin-bottom: -1rem;

	.notifications-container {
		display: flex;
		flex-direction: row;
	}

	.mark-all {
		border: none;
		color: darkgray;
		background-color: transparent;
		position: relative;
		right: -2rem;
		font-size: 0.9rem;
		cursor: pointer;
	}

	.unread {
		padding: 0.2rem;
		background-color: darkblue;
		width: 1.3rem;
		height: 1.3rem;
		margin-top: 1rem;
		margin-left: 1rem;
		color: white;
		text-align: center;
		font-weight: 700;
		border-radius: 6px;
	}
	.notify {
		margin-left: 1.5rem;
		font-size: 1.5rem;
	}

	@media screen and (min-width: 768px) {
		.mark-all {
			position: relative;
			right: -80%;
		}
		.notifications-container {
			position: relative;
			left: -85%;
		}
	}
`;
export default Header;
