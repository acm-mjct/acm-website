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
					<div>
						<div className="text-center text-2xl pb-5">Current Execom 2022-2023</div>
						<Divider className="w-full" size={5} />
					</div>
					<div className="flex flex-col w-full justify-center items-center">
						<TeamGroup teamData={seniorData} title="Senior Execom" />
						<Divider className="w-full" />
						<TeamGroup teamData={leadData} title="Junior Execom" />
						<Divider className="w-full" />
						<TeamGroup teamData={helperData} title="Core Team" />
					</div>
					<div>
						<div className="text-center text-2xl pb-5">Past Execom 2021-2022</div>
						<Divider className="w-full" size={5} />
					</div>
					<div className="flex flex-col w-full justify-center items-center">
						<TeamGroup teamData={helperData} title="Senior Execom" />
						<Divider className="w-full" />
						<TeamGroup teamData={helperData} title="Junior Execom" />
						<Divider className="w-full" />
						<TeamGroup teamData={helperData} title="Core Team" />
					</div>
				</motion.div>
			</div>
		</div>
	);
}
