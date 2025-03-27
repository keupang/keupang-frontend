import styled from '@emotion/styled';
import { PROFILES } from '@/constants/profile';

const ProfileContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ theme }) => theme.spacing.lg};
	justify-content: center;
	width: 70%;
`;

const ProfileCard = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 8px;
	padding: ${({ theme }) => theme.spacing.lg};
	text-align: center;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	line-height: ${({ theme }) => theme.spacing.lg};
	flex: 1;
`;

const ProfileImage = styled.img`
	width: 150px;
	height: 150px;
	object-fit: cover;
	border-radius: 50%;
	margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ProfileName = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 8px;
`;

const ProfileField = styled.p`
	font-size: 1rem;
	color: #666;
	margin-bottom: 16px;
`;

const ProfileLink = styled.a`
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;
	margin: 0 ${({ theme }) => theme.spacing.lg};

	&:hover {
		text-decoration: underline;
	}
`;

const ProfileExperience = styled.ul`
	list-style: none;
	padding: 0;
	margin: ${({ theme }) => theme.spacing.md}; 0;

	li {
		margin-bottom: 8px;
		font-size: 0.9rem;
	}
`;

const Profiles = () => {
	return (
		<ProfileContainer>
			{PROFILES.map((profile) => (
				<ProfileCard key={profile.id}>
					<ProfileImage src={profile.photo} alt={`${profile.name}'s photo`} />
					<ProfileName>{profile.name}</ProfileName>
					<ProfileField>{profile.field}</ProfileField>
					<ProfileLink
						href={profile.github}
						target='_blank'
						rel='noopener noreferrer'>
						GitHub
					</ProfileLink>
					<ProfileLink
						href={profile.blog}
						target='_blank'
						rel='noopener noreferrer'>
						Blog
					</ProfileLink>
					<hr />
					<ProfileExperience>
						{profile.experience.map((exp, index) => (
							<li key={index}>{exp}</li>
						))}
					</ProfileExperience>
				</ProfileCard>
			))}
		</ProfileContainer>
	);
};

export default Profiles;
