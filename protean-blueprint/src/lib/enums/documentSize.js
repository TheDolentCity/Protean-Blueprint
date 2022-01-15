export class DocumentSize {
	static A4 = new DocumentSize('A4');
	static Letter = new DocumentSize('Letter');
	static Poster = new DocumentSize('Poster');
	static Square = new DocumentSize('Square');

	constructor(name) {
			this.name = name;
	}
}