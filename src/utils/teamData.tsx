import { FaCode, FaGithub, FaInstagramSquare, FaTwitter, FaLinkedin, FaBlog } from 'react-icons/fa';

import type { TeamCardProps } from '@components/TeamCard';

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
				link: 'https://github.com/legendhimself',
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
		avatar: '/junior/arshiya.jpg',
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
		avatar: '/junior/adeeb.jpg',
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
		avatar: '/junior/masood.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/masood-ahmed-mohiuddin',
				tooltip: 'Masood Ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/masoodahmed.gm/',
				tooltip: 'Masood Ahmed',
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
		avatar: '/junior/affan.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/quazi-affan-ahmad-15b6a221b',
				tooltip: 'Affan Ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Affan Ahmed',
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
		avatar: '/junior/yasir.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/yasir-hussain-763200215',
				tooltip: 'Yasir Hussain',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/yasir_.hussain_/',
				tooltip: 'Yasir Hussain',
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
		avatar: '/junior/anum.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',

				tooltip: 'Anum Rida',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Anum Rida',
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
		avatar: '/junior/hadi.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',

				tooltip: 'Abdul Hadi',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Abdul Hadi',
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
		avatar: '/junior/baig.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/juwairia-baig-730609201',
				tooltip: 'Juwairia Baig',
			},
			{
				icon: <FaBlog size={20} />,
				link: 'https://juwairiabaig.wordpress.com/author/juwairiabaig',
				tooltip: 'Juwairia Baig Blog',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/juwairia_baig/',
				tooltip: 'Juwairia Baig',
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
		avatar: '/junior/aaqeb2.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Aaqeb Ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Aaqeb Ahmed',
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
		avatar: '/junior/me.jpg',
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
		avatar: '/junior/asrar.jpeg',
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
		avatar: '/junior/uzma1.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/uzma-begum-293206201',

				tooltip: 'Uzma Begum',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/you.begum?igshid=YmMyMTA2M2Y=',

				tooltip: 'Uzma Begum',
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
		avatar: '/junior/zain.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'zain',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Syed Zain',
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
		avatar: '/junior/far.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/waqas-faraz-b622891b8',
				tooltip: 'Waqas Faraz',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/waqasfaraz2?igshid=Njc5ZjliZWU=',
				tooltip: 'Waqas Faraz',
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

export const coreTeamData: TeamCardProps[] = [
	{
		username: 'Madiha Wahed',
		avatar: '/core/hr1.jpeg',
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
				link: 'https://www.linkedin.com/in/syed-farooq-143a6b246',
				tooltip: 'Syed Farooq',
			},
			{
				icon: <FaGithub size={20} />,
				link: 'https://github.com/JuniorAdult',
				tooltip: 'Syed Farooq',
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
		username: 'Sk Kazna Sultana',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/shaik-kazna-0650a424a',
				tooltip: 'Kazna Sultana',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/shaik_kazna/',
				tooltip: 'Kazna Sultana',
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
		username: 'Touseef Banu',
		avatar: '/core/hr2.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/touseef-banu-mohammad-3a621925a',
				tooltip: 'Touseef Banu',
			},
			{
				icon: <FaGithub size={20} />,
				link: 'https://github.com/MohammadTouseef29',
				tooltip: 'Touseef Banu',
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
		username: 'Mujataba Uddin',
		avatar: '/core/mujtaba.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/mujtaba-uddin-6941a1246',
				tooltip: 'Mujtaba Uddin',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/mujtabauddin_?igshid=YmMyMTA2M2Y=',
				tooltip: 'Mujtaba Uddin',
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
		username: 'Aziz Ur Rahman',
		avatar: '/core/log1.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Aziz Ur Rahman',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Aziz Ur Rahman',
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
		username: 'Yusra Asif Gavandi',
		avatar: '/core/log2.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Yusra Asif',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Yusra Asif',
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
		username: 'Mohammad Yaseen',
		avatar: '/core/log3.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/yaseen-mohammed-5a4ba925b',
				tooltip: 'Yaseen',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/i.yaseen.07/',
				tooltip: 'Yaseen',
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
		username: 'Waasi Uddin',
		avatar: '/core/log4.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/waasiuddin-siddiqui-4bb1ab260',
				tooltip: 'Waasi Uddin',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/waasi987/',
				tooltip: 'Waasi Uddin',
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
		username: 'Aman Khan',
		avatar: '/core/aman.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/aman-khan-116139260/',
				tooltip: 'Aman',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/__.amankhan___?igshid=Zjc2ZTc4Nzk=',
				tooltip: 'Aman',
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
		username: 'Ayesha Sania',
		avatar: '/core/mar1.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Ayesha Sania',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
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
		username: 'Syeda Wafiqah Ali',
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
				color: 'grape',
				text: 'Marketing',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Mohd Asif Uddin',
		avatar: '/core/asif.jpg',
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
				color: 'grape',
				text: 'Marketing',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'M. Mubashir Uddin ',
		avatar: '/core/m1.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Mubashir',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/mubasshirx/',
				tooltip: 'Mubashir',
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
		username: 'Zaina Fatima Abedi',
		avatar: '/core/m2.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/zaina-abedi-938a58256',
				tooltip: 'Zaina Fatima Abedi',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/hijabedi?igshid=YmMyMTA2M2Y=',
				tooltip: 'Zaina Fatima',
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
		username: 'Emaad Ali Khan',
		avatar: '/core/emaad.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/emaad-ali-khan-1a3517241/',
				tooltip: 'Emaad Ali Khan',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/emaad_ali_khan/',
				tooltip: 'Emaad Ali Khan',
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
		username: 'Amaan Moizuddin',
		avatar: '/core/m4.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/mohammed-amaan-moizuddin-1st-ba785b205',
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
				color: 'pink',
				text: 'Media',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Maleeha Fatima',
		avatar: '/core/d1.jpeg',
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
				color: 'green',
				text: 'Documentation',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Aaryaraj Saxena',
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
				color: 'green',
				text: 'Documentation',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Zaid Ali Khan',
		avatar: '/core/d2.jpg',
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
				color: 'green',
				text: 'Documentation',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Mohd Abid Nafi',
		avatar: '/core/abid.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/mwlite/in/margs-global-0239b01b1',
				tooltip: 'Abid Nafi',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://github.com/MohammedAbidNafi',
				tooltip: 'Abid Nafi',
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
		username: 'Abdullah Ansari',
		avatar: '/core/ansari.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/abdullah-ansari-2855b6228',
				tooltip: 'Abdullah Ansari',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: ' https://www.instagram.com/a_ansari6600/',
				tooltip: 'Abdullah Ansari',
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
		username: 'Aamir Shoeb',
		avatar: '/core/aamir.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/aamir-shoeb-035289213',
				tooltip: 'Aamir Shoeb',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
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
		username: 'Syed Atif',
		avatar: '/core/ati.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/syed-atif-7a845024b',
				tooltip: 'Syed Atif',
			},
			{
				icon: <FaGithub size={20} />,
				link: 'https://github.com/SyedAtif04',
				tooltip: 'Syed Atif',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: ' https://www.instagram.com/its_atifsyed/',
				tooltip: 'Syed Atif',
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
		username: 'Muzammil Ahmed',
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
				color: 'orange',
				text: 'Tech',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Mukarram Shareef',
		avatar: '/core/tec1.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/moazzam-mukarram-shareef-67250524a',
				tooltip: 'Mukaarram Shareef',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
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
		username: 'Affan Ahmed',
		avatar: '/core/aff.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/affan-ahmed-b50bb125b/',
				tooltip: 'Affan Ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/_affannnn__/',
				tooltip: 'Affan Ahmed',
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
		username: 'Abdul Adnan',
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
				color: 'orange',
				text: 'Tech',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Abdul Muneeb',
		avatar: '/core/mun.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/syed-abdul-muneeb',
				tooltip: 'Abdul Muneeb',
			},
			{
				icon: <FaGithub size={20} />,
				link: 'https://github.com/AbdulMuneebSyed',
				tooltip: 'Abdul Muneeb',
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
		username: 'Pattan Asif Khan',
		avatar: '/core/de3.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/asif-khan-a50a19261/',
				tooltip: 'Asif Khan',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/_aja52/',
				tooltip: 'Asif Khan',
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
		username: 'Abdur Rahman',
		avatar: '/core/de2.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/syed-abdur-rahman-69a773261/',
				tooltip: 'Abdur Rahman',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/sar_1803/',
				tooltip: 'Abdur Rahman',
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
		username: 'Sk Sadiqa Parveen',
		avatar: '/core/de1.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/sk-sadiqa-803ab4261',
				tooltip: 'Sadiqa Parveen',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/komo__rebi_7?igshid=Yzg5MTU1MDY=',
				tooltip: 'Sadiqa Parveen',
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
		username: 'Anas Ahmed',
		avatar: '/core/cc3.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/mohammed-anas-ahmed-959581249',
				tooltip: 'Anas Ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/anas_blz?igshid=MDM4ZDc5MmU=',
				tooltip: 'Anas Ahmed',
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
		username: 'Amena W',
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
				color: 'indigo',
				text: 'Content Creation',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Maaz Ahmed',
		avatar: '/core/cc2.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/maaz-ahmed-a7b118256',
				tooltip: 'Maaz Ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/thatt___guy?igshid=YmMyMTA2M2Y=',
				tooltip: 'Maaz Ahmed',
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
		username: 'Syed Uzair Ullah',
		avatar: '/core/cc1.jpeg',
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
				color: 'indigo',
				text: 'Content Creation',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Abdul Basith',
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
				color: 'cyan',
				text: 'Social Media',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Aliuddin Hussain',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/aliuddin_04/',
				tooltip: 'Aliuddin Hussain',
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
	{
		username: 'Poorvi Reddy',
		avatar: '/core/smm1.jpg',
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
				color: 'cyan',
				text: 'Social Media',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Aimen Laiba',
		avatar: '/core/smm2.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/aimen-laiba-158aaa256',
				tooltip: 'Aimen Laiba',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/aimenlaibaa/',
				tooltip: 'Aimen Laiba',
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