import img1 from './assets/images/avatar-mark-webber.webp';
import img2 from './assets/images/avatar-angela-gray.webp';
import img3 from './assets/images/avatar-jacob-thompson.webp';
import img4 from './assets/images/avatar-rizky-hasanuddin.webp';
import img5 from './assets/images/avatar-kimberly-smith.webp';
import img6 from './assets/images/avatar-nathan-peterson.webp';
import img7 from './assets/images/avatar-anna-kim.webp';
import img8 from './assets/images/image-chess.webp';

const actions = [
	[' reacted to your recent post'],
	[' followed you'],
	[' has joined your group'],
	[' sent you a private message'],
	[' commented on your picture'],
	[' left the group'],
];
export const people = [
	{
		id: 1,
		img: img1,
		name: 'Mark Weber',
		action: actions[0],
		time: '1m ago',
		post: ' My first tournament today!',
	},
	{
		id: 2,
		img: img2,
		name: 'Angela Gray',
		action: actions[1],
		time: '5m ago',
	},
	{
		id: 3,
		img: img3,
		name: 'Jacob Thompson',
		action: actions[2],
		time: '1 day ago',
		club: ' Chess club',
	},
	{
		id: 4,
		img: img4,
		name: 'Rizky Hasanuddin',
		action: actions[3],
		time: '5 days ago',
		msg: "Hello, thanks for setting up the chess club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
	},
	{
		id: 5,
		img: img5,
		name: 'Kimberly Smith',
		action: actions[4],
		time: '1 week ago',
		liked: img8,
	},
	{
		id: 6,
		img: img6,
		name: 'Nathan Peterson',
		action: actions[0],
		time: '2 weeks ago',
		post: '5 end-game strategies to increase your win rate',
	},
	{
		id: 7,
		img: img7,
		name: 'Anna Kim',
		action: actions[5],
		time: '2 weeks ago',
		club: ' Chess club',
	},
];
