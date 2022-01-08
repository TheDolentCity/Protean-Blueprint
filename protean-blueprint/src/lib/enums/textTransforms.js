export class TextTransforms {
	static NormalCase = new TextTransforms('NormalCase');
	static Uppercase = new TextTransforms('Uppercase');
	static Lowercase = new TextTransforms('Lowercase');
	static Capitalize = new TextTransforms('Capitalize');

	constructor(name) {
		this.name = name;
	}
}