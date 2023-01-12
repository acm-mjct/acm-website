import { FaCode,  FaGithub, FaInstagramSquare, FaTwitter, FaLinkedin} from 'react-icons/fa';

import type { BadgeData, TeamCardProps } from '@components/TeamCard';

const gameArtistBadge: BadgeData = {
	color: 'violet',
	text: 'Game Artist',
	icon: 'https://cdn.discordapp.com/role-icons/874840760585969705/88cef2e316f78cb983f0503c87510883.png',
};


// const webDeveloperBadge: BadgeData = {
// 	color: 'green',
// 	text: 'Web Developer',
// 	icon: <FaCode size={15} />,
// };

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
		username: 'Haseeb Khan',
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
		username: 'Syed Abdul Rahman',
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
				color: 'orange',
				text: 'Tech Captain',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Maleha Ansari',
		avatar: '/senior/maleha.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/maleha-ansari-035bc/',
				tooltip: 'Maleha Ansari',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/maleha_07/',
				tooltip: 'Maleha Ansari',
			},
		],
		badges: [
			{
				color: 'yellow',
				text: 'Secretary',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Maheen',
		avatar: '/senior/maheen.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/syeda-maheen/',
				tooltip: 'Syeda Maheen',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/maaheeenx/',
				tooltip: 'Syeda Maheen',
			},
		],
		badges: [
			{
				color: 'cyan',
				text: 'Treasurer',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Maryum Urooj',
		avatar: '/senior/urooj.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/maryum-urooj-ahmed-9b463a214/',
				tooltip: 'Maryum Urooj',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/perksofbeingmaryum/',
				tooltip: 'Maryum Urooj',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Internal Affairs',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Syed Rafey Ahmed',
		avatar:
			'https://media-exp1.licdn.com/dms/image/C4D03AQGGKhJ0qWGEyw/profile-displayphoto-shrink_400_400/0/1655557395072?e=1674691200&v=beta&t=w2foniAsWYoVINi7wmF11ByjVkbN9HzsZCB1Qsqfre0',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/syed-rafey-ahmed-2b958b195/',
				tooltip: 'Syed Rafey Ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/rafeyahmed_/',
				tooltip: 'Syed Rafey Ahmed',
			},
		],
		badges: [
			{
				color: 'greem',
				text: 'Advisor',
				icon: <FaCode size={15} />,
			},
		],
	},
];

export const leadData: TeamCardProps[] = [
	{
		username: 'Mariyam Arshia',
		avatar: '/Junior/arshiya.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/mariyam-arshia-0b4621209/?originalSubdomain=in',
				tooltip: 'Mariyam Arshia',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: ' https://www.instagram.com/mariyammm__78/',
				tooltip: 'Mariyam Arshia',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Human Resources',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Adeeb Abdul Taher',
		avatar: '/Junior/Adeeb.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/adeeb-abdultaher-696229194',
				tooltip: 'Adeeb Abdul Taher',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/adeebabdultaher?igshid=YmMyMTA2M2Y=',
				tooltip: 'Adeeb Abdul Taher',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Human Resources',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Masood Ahmed',
		avatar: '/Junior/Masood.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/masood-ahmed-mohiuddin',
				tooltip: 'masood ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/masoodahmed.gm/',
				tooltip: 'masood ahmed',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Logistics',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Quazi Affan Ahmed',
		avatar: '/Junior/affan.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/quazi-affan-ahmad-15b6a221b',
				tooltip: 'affan ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'affan ahmed',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Logistics',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Yasir Hussain',
		avatar: '/Junior/yasir.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/yasir-hussain-763200215',
				tooltip: 'yasir',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/yasir_.hussain_/',
				tooltip: 'yasir',
			},
		],
		badges: [
			{
				color: 'grape',
				text: 'Marketing',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Anum Rida',
		avatar: '/Junior/anum.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'anum rida',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'anum rida',
			},
		],
		badges: [
			{
				color: 'pink',
				text: 'Media',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Abdul Hadi',
		avatar: '/Junior/hadi.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'hadi',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'abdul hadi',
			},
		],
		badges: [
			{
				color: 'green',
				text: 'Documentation',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Juwairia Baig',
		avatar: '/Junior/baig.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'juwairia baig',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'juwairia baig',
			},
		],
		badges: [
			{
				color: 'green',
				text: 'Documentation',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Aaqeb Ahmed',
		avatar: '/Junior/aaqeb2.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'aaqeb ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'aaqeb ahmed',
			},
		],
		badges: [
			{
				color: 'orange',
				text: 'Tech ',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Abdul Basith',
		avatar: '/Junior/me.jpg',
		socialMedia: [
			{
				icon: <FaGithub size={20} />,
				link: 'https://github.com/Abdulbasith0792',
				tooltip: 'Abdul Basith',
			},
			
			{
				icon: <FaLinkedin size={20} />,
				link: 'www.linkedin.com/in/abdulbasith1733',
				tooltip: 'Abdul Basith',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/_abdulbasith07._/',
				tooltip: 'AB',
			},
		],
		badges: [
			{
				color: 'orange',
				text: 'Tech',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Asrar Ahmed',
		avatar: '/Junior/asrar.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/mohd-asrar-ahmed-738b5922b/',
				tooltip: 'Asrar ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Asrar Ahmed',
			},
		],
		badges: [
			{
				color: 'orange',
				text: 'Tech',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Uzma Begum',
		avatar: '/Junior/uzma1.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/uzma-begum-293206201',
				tooltip: 'uzma',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/you.begum?igshid=YmMyMTA2M2Y=',
				tooltip: 'uzma',
			},
		],
		badges: [
			{
				color: 'violet',
				text: 'Design',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Syed Zain',
		avatar: '/Junior/zain.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'zain',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'zain',
			},
		],
		badges: [
			{
				color: 'indigo',
				text: 'Content Creation',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Waqas Faraz',
		avatar: '/Junior/far.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/waqas-faraz-b622891b8',
				tooltip: 'waqas',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/waqasfaraz2?igshid=Njc5ZjliZWU=',
				tooltip: 'waqas',
			},
		],
		badges: [
			{
				color: 'cyan',
				text: 'Social Media',
				icon: <FaCode size={15} />,
			},
		],
	},
];

export const helperData: TeamCardProps[] = [
	{
		username: 'TEST PROFILE',
		avatar: '/junior/ab.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Human Resources',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Madiha Wahed',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/madiha-wahed-6b5872201',
				tooltip: 'Madhiha Wahed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/madiha_wahed?igshid=Zjc2ZTc4Nzk=',				
				tooltip: 'Madhiha Wahed',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Human Resources',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Syed Farooq',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Human Resources',
				icon: <FaCode size={15} />,
			},
		],	},
	{
		username: 'Sk Kazna Sultana',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Human Resources',
				icon: <FaCode size={15} />,
			},
		],	},
	{
		username: 'Mohammed Touseef',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [gameArtistBadge],
	},
	
];
