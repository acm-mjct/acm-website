import { Avatar, Badge, Card, Group, Text, Tooltip } from '@mantine/core';
import Image from 'next/image';

import type { DefaultMantineColor } from '@mantine/core';

export interface SocialMediaData {
	icon: React.ReactNode;
	link: string;
	tooltip: string;
}

export interface BadgeData {
	color: DefaultMantineColor;
	icon?: React.ReactNode | string;
	text: string;
}

export interface TeamCardProps {
	avatar: string;
	badges: BadgeData[];
	socialMedia: SocialMediaData[];
	username: string;
}

export default function TeamCard({ username, avatar, socialMedia, badges }: TeamCardProps) {
	return (
		<Card className="bg-true-dark-900" p="xl" radius="md" sx={{ width: 210 }} withBorder>
			<Avatar alt={username} mx="auto" radius={80} size={80} src={avatar} />
			<Text align="center" mt="sm" size="lg" weight={495}>
				{username}
			</Text>
			<Group mt="md" position="center" spacing={30}>
				{socialMedia.map((data, index) => (
					<Tooltip key={index} label={data.tooltip}>
						<a className="cursor-pointer" href={data.link} rel="noreferrer" target="_blank">
							{data.icon}
						</a>
					</Tooltip>
				))}
			</Group>
			<Group className="w-full" mt="md" position="center" spacing={5}>
				{badges.map((badge, index) => (
					<Badge
						color={badge.color}
						fullWidth
						key={index}
						leftSection={
							typeof badge.icon === 'string' ? (
								<Image alt="role-icon" className="-mt-1" height={15} src={badge.icon} width={15} />
							) : (
								badge.icon
							)
						}
					>
						{badge.text}
					</Badge>
				))}
			</Group>
		</Card>
	);
}
