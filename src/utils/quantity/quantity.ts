export const clampQuantity = (value: number, min = 1, max = 10) =>
	Math.max(min, Math.min(value, max));

export const parseQuantityInput = (
	e: React.ChangeEvent<HTMLInputElement>,
	setter: (val: number) => void,
	min = 1,
	max = 10
) => {
	const value = Number(e.target.value);
	if (!isNaN(value) && value >= min && value <= max) {
		setter(value);
	}
};
