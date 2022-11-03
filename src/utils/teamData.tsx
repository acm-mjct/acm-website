import { FaCode, FaDiscord, FaGithub, FaTwitter, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

import type { BadgeData, TeamCardProps } from '@components/TeamCard';

const gameArtistBadge: BadgeData = {
	color: 'violet',
	text: 'Game Artist',
	icon: 'https://cdn.discordapp.com/role-icons/874840760585969705/88cef2e316f78cb983f0503c87510883.png',
};

const webDeveloperBadge: BadgeData = {
	color: 'green',
	text: 'Web Developer',
	icon: <FaCode className="-mt-1" size={15} />,
};

export const seniorData: TeamCardProps[] = [
	{
		username: 'Madiha Siddique',
		avatar: '/senior/madiha.jpg',
		socialMedia: [
			{
				icon: <FaTwitter size={20} />,
				link: 'https://twitter.com/MadihahaSid',
				tooltip: 'MadihahaSid',
			},
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/madiha-siddique-96000b1b7/',
				tooltip: 'Madiha Siddique',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/madihasid._/',
				tooltip: 'Madiha Siddique',
			},
		],
		badges: [
			{
				color: 'violet',
				text: 'Chairperson',
				icon: 'https://cdn.discordapp.com/role-icons/877076975188082688/e0e4f634c5a4b1b8a3141a48d90e552c.webp',
			},
		],
	},
	{
		username: 'Haseeb',
		avatar: '/senior/has.webp',
		socialMedia: [
			{
				icon: <FaTwitter size={20} />,
				link: 'https://twitter.com/HaseebKhanYT',
				tooltip: 'Haseeb Khan',
			},
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/haseebkhanyt',
				tooltip: 'haseebkhanyt',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/0haseeb1/',
				tooltip: 'Haseeb Khan',
			},
		],
		badges: [
			{
				color: 'grape',
				text: 'Vice Chairperson',
				icon: 'https://cdn.discordapp.com/role-icons/877076975188082688/e0e4f634c5a4b1b8a3141a48d90e552c.webp',
			},
		],
	},
	{
		username: 'AR',
		avatar: 'https://avatars.githubusercontent.com/u/69213593',
		socialMedia: [
			{
				icon: <FaGithub size={20} />,
				link: 'https://github.com/legendhimslef',
				tooltip: 'Syed Abdul Rahman',
			},
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/syed-abdul-rahman-a87207201/',
				tooltip: 'Syed Abdul Rahman',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/s_a__rahman786/',
				tooltip: 'Syed Abdul Rahman',
			},
		],
		badges: [
			{
				color: 'cyan',
				text: 'Tech Captain',
				icon: <FaCode className="-mt-1" size={15} />,
			},
		],
	},
];

export const leadData: TeamCardProps[] = [
	{
		username: 'Akaimnky',
		avatar: 'https://cdn.discordapp.com/avatars/537619455409127442/91559c151e21b966d1058a50821f71e5.webp',
		socialMedia: [
			{
				icon: <FaDiscord size={20} />,
				link: 'https://discord.com/users/537619455409127442',
				tooltip: 'Akaimnky#6850',
			},
		],
		badges: [
			{
				color: 'cyan',
				text: 'Support Lead',
				icon: 'https://cdn.discordapp.com/role-icons/868429437044154399/60cb684efa0d979423c2e9323f558c0a.png',
			},
		],
	},
	{
		username: 'Yorki',
		avatar: 'https://cdn.discordapp.com/avatars/606379671851892737/9588e32f7aee6e2483aa4302d2b92da3.webp',
		socialMedia: [
			{
				icon: <FaDiscord size={20} />,
				link: 'https://discord.com/users/606379671851892737',
				tooltip: 'Yorki#6704',
			},
		],
		badges: [
			{
				color: 'teal',
				text: 'Card Lead',
				icon: 'https://cdn.discordapp.com/role-icons/868102246397792296/49e7503b834647222cd00519e757ae6c.png',
			},
		],
	},
	{
		username: 'Gojo Jojo',
		avatar: 'https://cdn.discordapp.com/avatars/516896190416289802/f62fdf0dd87da7465a05d4fa510ad86d.webp',
		socialMedia: [
			{
				icon: <FaDiscord size={20} />,
				link: 'https://discord.com/users/516896190416289802',
				tooltip: 'Gojo Jojo | The Always Pog#2811',
			},
		],
		badges: [
			{
				color: 'pink',
				text: '3D Lead',
				icon: 'https://cdn.discordapp.com/role-icons/1003184212997832714/d40e503aa52c94b26317fb24e3d394c3.png',
			},
		],
	},
	{
		username: 'raphtalia',
		avatar: 'https://cdn.discordapp.com/avatars/832631730837782578/bb726cae719ae5f2bbb11d72749f35f5.webp',
		socialMedia: [
			{
				icon: <FaDiscord size={20} />,
				link: 'https://discord.com/users/832631730837782578',
				tooltip: 'raphtalia#0290',
			},
		],
		badges: [
			{
				color: 'pink',
				text: '3D Lead',
				icon: 'https://cdn.discordapp.com/role-icons/1003184212997832714/d40e503aa52c94b26317fb24e3d394c3.png',
			},
		],
	},
	{
		username: '金一',
		avatar: 'https://cdn.discordapp.com/avatars/452490042028589057/6e564f66c5a55dc9359d9cb220a35308.webp',
		socialMedia: [
			{
				icon: <FaDiscord size={20} />,
				link: 'https://discord.com/users/452490042028589057',
				tooltip: '金一#2121',
			},
		],
		badges: [
			{
				color: 'yellow',
				text: 'GIF Lead',
				icon: 'https://cdn.discordapp.com/role-icons/1003184216982429706/59556f1550758b4d40bea3a53bba10cf.png',
			},
		],
	},
	{
		username: '♚𝐌𝐎𝐌𝐌𝐘♚',
		avatar: 'https://cdn.discordapp.com/avatars/586541677934542868/520841b7712e33620333ef4ece1351b9.webp',
		socialMedia: [
			{
				icon: <FaDiscord size={20} />,
				link: 'https://discord.com/users/586541677934542868',
				tooltip: '♚𝐌𝐎𝐌𝐌𝐘♚#1215',
			},
		],
		badges: [
			{
				color: 'grape',
				text: 'Custom Lead',
				icon: 'https://cdn.discordapp.com/role-icons/1003184219717107802/9459064c00c33e444d678efa3cc5b38c.png',
			},
		],
	},
];

export const helperData: TeamCardProps[] = [
	{
		username: 'elle',
		avatar: 'https://cdn.discordapp.com/avatars/699595616233193566/51af9d865871c5b73697ac010958cd3a.webp',
		socialMedia: [
			{
				icon: <FaDiscord size={20} />,
				link: 'https://discord.com/users/699595616233193566',
				tooltip: 'elle#0184',
			},
			{
				icon: <FaTwitter size={20} />,
				link: 'https://twitter.com/Dan__i__elle',
				tooltip: 'Dan__i__elle',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: '.fuyu',
		avatar: 'https://cdn.discordapp.com/avatars/360956108476514311/2c9aa9bbacc8c6c6f575ddd02957fb8c.webp',
		socialMedia: [
			{
				icon: <FaDiscord size={20} />,
				link: 'https://discord.com/users/360956108476514311',
				tooltip: '.fuyu#9256',
			},
			{
				icon: <FaTwitter size={20} />,
				link: 'https://twitter.com/Fuyutsuki11',
				tooltip: 'Fuyutsuki11',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'Frezz1ck </>',
		avatar: 'https://avatars.githubusercontent.com/u/84974655',
		socialMedia: [
			{
				icon: <FaGithub size={20} />,
				link: 'https://github.com/nazish-16',
				tooltip: 'nazish-16',
			},
			{
				icon: <FaDiscord size={20} />,
				link: 'https://discord.com/users/775387817085108235',
				tooltip: 'Frezz1ck </>#9673',
			},
		],
		badges: [webDeveloperBadge],
	},
];
