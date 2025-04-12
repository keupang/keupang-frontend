import ReactDOM from 'react-dom';
import Empty from './components/Empty/Empty';
import { Overlay, ModalContent } from './EmptyModal.styles';

interface EmptyModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	description?: string;
}

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
