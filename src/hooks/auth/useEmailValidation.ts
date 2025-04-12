import { useState, useEffect } from 'react';
import { validateEmail } from '../../utils/validation/validation';

export const useEmailValidation = (
	emailLocal: string,
	emailDomain: string,
	customEmailDomain: string,
	isCustomDomain: boolean
) => {
	const [isEmailValid, setIsEmailValid] = useState(false);
	const [email, setEmail] = useState('');

	useEffect(() => {
		const domain = isCustomDomain ? customEmailDomain : emailDomain;
		if (emailLocal !== '' && domain !== '') {
			setIsEmailValid(validateEmail(emailLocal, domain));
			setEmail(`${emailLocal}@${domain}`);
		}
	}, [emailLocal, emailDomain, customEmailDomain, isCustomDomain]);

	return { isEmailValid, email };
};
