const estimateInitialSize = () => {
	const itemHeight = 300;
	const gap = 16;
	const rows = Math.ceil(window.innerHeight / (itemHeight + gap));
	const columns = Math.floor(window.innerWidth / 220);
	return rows * columns;
};

export default estimateInitialSize;
