export interface SuccessType<T> {
	code: number;
	status: number;
	message: string;
	content: {
		detail: string;
		help: string;
	};
	data: T;
}
