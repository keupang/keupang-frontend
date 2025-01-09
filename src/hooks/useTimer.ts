import { useState, useEffect } from 'react';

export const useTimer = (initialTime: number) => {
	const [timeLeft, setTimeLeft] = useState(initialTime);
	const [isTimerExpired, setIsTimerExpired] = useState(false);

	useEffect(() => {
		if (timeLeft <= 0) {
			setIsTimerExpired(true);
			return;
		}
		const timer = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1000);
		return () => clearInterval(timer);
	}, [timeLeft]);

	return { timeLeft, isTimerExpired, setTimeLeft, setIsTimerExpired };
};
