import styled from '@emotion/styled';

const Card = styled.div`
	width: 200px;
	height: 300px;
	background: #eee;
	border-radius: 8px;
	animation: pulse 1.5s infinite ease-in-out;

	@keyframes pulse {
		0% {
			background-color: #eee;
		}
		50% {
			background-color: #ddd;
		}
		100% {
			background-color: #eee;
		}
	}
`;

const SkeletonCard = () => <Card />;

export default SkeletonCard;
