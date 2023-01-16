import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import navbarImage from '../../public/one.png';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const links = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'About',
			path: '/#about',
		},
		{
			name: 'Team',
			path: '/team',
		},
		// {
		// 	name: 'Events',
		// 	path: '/events',
		// },
		{
			name: 'Snapshots',
			path: '/snapshots',
		},
		// {
		// 	name: 'Contact',
		// 	path: '/contact',
		// },
		// {
		// 	name: 'Register',
		// 	path: '/register',
		// },
	];

	return (
		<div className="bg-[#08090d] w-full">
			<div className="w-full py-2 px-4 z-100 absolute lg:fixed lg:backdrop-filter lg:backdrop-blur-2xl ">
				<div className="mx-auto max-w-8xl">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Link href="/">
								<Image
									alt="acm"
									className="cursor-pointer"
									height={48}
									placeholder="empty"
									src={navbarImage}
									width={103}
								/>
							</Link>
							<div className="flex font-bold font-inter space-x-0 pl-4 text-light-900 lt-lg:hidden ">
								{links.map((link, index) =>
									link.path.startsWith('/#') ? (
										<a href={link.path} key={index}>
											<div className="cursor-pointer py-2 px-4 hover:underline- hover:text-light-400 hover:bg-true-gray-600/90 hover:rounded ">
												{link.name}
											</div>
										</a>
									) : (
										<Link href={link.path} key={index} passHref>
											<div className="cursor-pointer py-2 px-4 hover:underline- hover:text-light-400 hover:bg-true-gray-600/90 hover:rounded ">
												{link.name}
											</div>
										</Link>
									),
								)}
							</div>
						</div>
						<div className="flex space-x-4 items-center lg:space-x-4 ">
							<div className="block lg:hidden">
								<div
									className="h-10 -ml-2 text-pink-500 w-10 relative focus:outline-none"
									onClick={() => setOpen(!open)}
								>
									<div className="transform top-1/2 left-1/2 w-5 -translate-x-1/2 -translate-y-1/2  block absolute">
										<span
											aria-hidden="true"
											className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
												open ? 'rotate-45' : '-translate-y-1.5'
											}`}
										/>
										<span
											aria-hidden="true"
											className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
												open ? 'opacity-0' : ''
											}`}
										/>
										<span
											aria-hidden="true"
											className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
												open ? '-rotate-45' : 'translate-y-1.5'
											}`}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full absolute lg:hidden">
				<motion.div
					animate={open ? 'opened' : 'closed'}
					className="text-right w-full px-4 pt-0 z-10"
					initial={false}
					variants={{
						opened: {
							display: 'block',
							top: 0,
							transition: {
								when: 'beforeChildren',
								staggerChildren: 0.05,
							},
							position: 'absolute',
						},
						closed: {
							top: '-80vh',
							display: 'none',
						},
					}}
				>
					{links.map((element, index) => (
						<Link
							href={element.path}
							key={index}
							passHref
							prefetch={element.path.startsWith('http') ? false : undefined}
						>
							<motion.div
								className="cursor-pointer font-inter font-medium py-1 px-2 text-light-500 "
								onClick={() => setOpen(false)}
								variants={{
									opened: {
										opacity: 1,
										y: 50,
									},
									closed: {
										opacity: 0,
										y: 0,
									},
								}}
							>
								{element.name}
							</motion.div>
						</Link>
					))}
				</motion.div>
			</div>
		</div>
	);
}
