export class TextCapitals {
	static NormalCase = new TextCapitals('NormalCase');
	static Uppercase = new TextCapitals('Uppercase');
	static Lowercase = new TextCapitals('Lowercase');
	static Capitalize = new TextCapitals('Capitalize');

	constructor(name) {
		this.name = name;
	}
}