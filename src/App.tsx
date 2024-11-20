import styled from '@emotion/styled';

const Button = styled.button`
	background-color: #3498db;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #2980b9;
	}
`;

const App = () => {
	return (
		<div>
			<Button>Click Me</Button>
		</div>
	);
};

export default App;
