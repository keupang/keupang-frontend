export const validateEmail = (emailLocal: string, domain: string): boolean => {
	return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
		`${emailLocal}@${domain}`
	);
};

export const validatePassword = (password: string): boolean => {
	return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(
		password
	);
};

export const validatePhone = (phone: string): boolean => {
	return /^[0-9]{10,11}$/.test(phone);
};

export const validateName = (name: string): boolean => {
	return /^[가-힣a-zA-Z\s]{2,50}$/.test(name);
};
