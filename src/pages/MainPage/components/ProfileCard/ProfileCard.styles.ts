import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ theme }) => theme.spacing.lg};
	justify-content: center;
	width: 70%;
`;

export const ProfileCard = styled.div`
	perspective: 1000px;
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 8px;
	padding: ${({ theme }) => theme.spacing.lg};
	text-align: center;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	line-height: ${({ theme }) => theme.spacing.lg};
	flex: 1;
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;
	transform-style: preserve-3d;

	&:hover {
		transform: rotateY(6deg) rotateX(3deg) scale(1.03);
		box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
	}
`;

export const ProfileImage = styled.img`
	width: 150px;
	height: 150px;
	object-fit: cover;
	border-radius: 50%;
	margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const ProfileName = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 8px;
`;

export const ProfileField = styled.p`
	font-size: 1rem;
	color: #666;
	margin-bottom: 16px;
`;

export const ProfileLink = styled.a`
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;
	margin: 0 ${({ theme }) => theme.spacing.lg};

	&:hover {
		text-decoration: underline;
	}
`;

export const ProfileExperience = styled.ul`
	list-style: none;
	padding: 0;
	margin: ${({ theme }) => theme.spacing.md} 0;

	li {
		margin-bottom: 8px;
		font-size: 0.9rem;
	}
`;
