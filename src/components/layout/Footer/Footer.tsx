import React from 'react';
import { FooterContainer, FooterLinks, FooterText } from './Footer.styles';

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<FooterText>
				© 2025 Lee Tae Heon, Choi Jong Hak. All rights reserved.
			</FooterText>
			<FooterLinks>
				<a
					href='https://github.com/keupang'
					target='_blank'
					rel='noopener noreferrer'>
					GitHub
				</a>
			</FooterLinks>
		</FooterContainer>
	);
};

export default Footer;
