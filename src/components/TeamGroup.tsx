import { Group } from '@mantine/core';

import TeamCard, { type TeamCardProps } from './TeamCard';

export interface TeamGroupProps {
	readonly teamData: TeamCardProps[];
	readonly title: string;
}

export default function TeamGroup({ teamData, title }: TeamGroupProps) {
	return (
		<div className="my-5 w-full">
			<div className="text-center text-xl pb-5">{title}</div>
			<Group className="justify-center">
				{teamData.map((data, index) => (
					<TeamCard key={index} {...data} />
				))}
			</Group>
		</div>
	);
}
