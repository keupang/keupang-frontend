// components/EmptyModal.tsx
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import Empty from './Empty';

interface EmptyModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	description?: string;
}

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.4);
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ModalContent = styled.div`
	background-color: #fff;
	padding: 40px;
	border-radius: 12px;
	box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
	max-width: 500px;
	width: 90%;
`;

const EmptyModal = ({
	isOpen,
	onClose,
	title,
	description,
}: EmptyModalProps) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<Overlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<Empty title={title} description={description} />
			</ModalContent>
		</Overlay>,
		document.body
	);
};

export default EmptyModal;
