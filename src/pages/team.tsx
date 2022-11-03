import TeamGroup from '@components/TeamGroup';
import { Divider } from '@mantine/core';
import { helperData, leadData, seniorData } from '@utils/teamData';
import { variants } from '@utils/variants';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function TermsPage() {
	return (
		<div className="pt-20">
			<Head>
				<title>Meet Our Team | ACM MJCET</title>
			</Head>
			<div className="min-h-screen">
				<motion.div
					animate="enter"
					exit="exit"
					initial="hidden"
					transition={{ duration: 0.4, type: 'ease-in-out' }}
					variants={variants}
				>
					<div className="flex flex-col w-full justify-center items-center">
						<TeamGroup teamData={seniorData} />
						<Divider className="w-full" />
						<TeamGroup teamData={leadData} />
						<Divider className="w-full" />
						<TeamGroup teamData={helperData} />
					</div>
				</motion.div>
			</div>
		</div>
	);
}
