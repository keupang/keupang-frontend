export class HTTPError extends Error {
	status: number;
	content: { [key: string]: string } | null;
	code?: number;
	response?: any;

	constructor(
		status: number,
		code?: number,
		content?: { [key: string]: string },
		message?: string,
		response?: any
	) {
		super(message);

		this.name = 'HTTPError';
		this.status = status;
		this.content = content || null;
		this.code = code;
		this.response = response;
		Object.setPrototypeOf(this, HTTPError.prototype);
	}
}
