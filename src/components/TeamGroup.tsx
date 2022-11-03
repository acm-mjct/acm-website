import { Group } from '@mantine/core';

import TeamCard, { type TeamCardProps } from './TeamCard';

export interface TeamGroupProps {
	teamData: TeamCardProps[];
}

export default function TeamGroup({ teamData }: TeamGroupProps) {
	return (
		<div className="my-5 w-full">
			<Group className="justify-center">
				{teamData.map((data, index) => (
					<TeamCard key={index} {...data} />
				))}
			</Group>
		</div>
	);
}
