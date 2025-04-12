import {
	ProfileContainer,
	ProfileCard,
	ProfileImage,
	ProfileName,
	ProfileField,
	ProfileLink,
	ProfileExperience,
} from './ProfileCard.styles';
import { PROFILES } from '@/constants/user/profile';

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
