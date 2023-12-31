import TeamGroup from '@components/TeamGroup';
import { Divider } from '@mantine/core';
import { preseniorData, preleadData } from '@utils/previousExecom';
import { coreTeamData, helperData, leadData, seniorData } from '@utils/teamData';
import { variants } from '@utils/variants';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';

const ExecomPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
	const [execom, setExecom] = useState('Current Execom');
	let teamData;

	if (currentPage === 1) {
		teamData = { seniorData, leadData, coreTeamData };
	} else if (currentPage === 2) {
		teamData = { seniorData: preseniorData, leadData: preleadData, coreTeamData: helperData };
	} else {
		teamData = { seniorData, leadData, coreTeamData };
	}

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
						<div className="text-center text-2xl pb-5">
							{execom} {currentYear}-{currentYear + 1}
						</div>
						<div className="flex flex-row justify-center items-center">
							<button
								className="btn btn-primary"
								onClick={() => {
									setExecom('Current Execom');
									setCurrentYear(new Date().getFullYear());
									setCurrentPage(1);
								}}
								type="button"
							>
								{'<'} Current Execom
							</button>
							<button
								onClick={() => {
									setExecom('Previous Execom');
									setCurrentYear(2_022);
									setCurrentPage(2);
								}}
								type="button"
							>
								Previous Execom {'>'}
							</button>
						</div>
						<Divider className="w-full" size={5} />
					</div>

					<div className="flex flex-col w-full justify-center items-center">
						<Divider className="w-full" size={5} />
						<TeamGroup teamData={teamData.seniorData} title="Senior Execom" />
						<Divider className="w-full" />
						<TeamGroup teamData={teamData.leadData} title="Junior Execom" />
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ExecomPage;
