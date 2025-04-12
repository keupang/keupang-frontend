import { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { SignupFormData } from '../../pages/SignupPage/components/SignupForm';

export const useCustomDomain = (setValue: UseFormSetValue<SignupFormData>) => {
	const [isCustomDomain, setIsCustomDomain] = useState(false);

	const handleDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		setIsCustomDomain(selectedValue === 'custom');
		setValue('emailDomain', selectedValue);
	};

	return { isCustomDomain, handleDomainChange };
};

export type CustomDomainHookType = {
	isCustomDomain: boolean;
	handleDomainChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
