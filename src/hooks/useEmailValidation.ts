import { useState, useEffect } from 'react';
import { validateEmail } from '../utils/validation';

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
		setIsEmailValid(validateEmail(emailLocal, domain));
		setEmail(`${emailLocal}@${domain}`);
	}, [emailLocal, emailDomain, customEmailDomain, isCustomDomain]);

	return { isEmailValid, email };
};
