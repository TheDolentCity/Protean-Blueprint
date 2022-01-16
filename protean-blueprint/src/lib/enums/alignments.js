export class Alignments {
	static Start = new Alignments('Start');
	static Center = new Alignments('Center');
	static End = new Alignments('End');
	static Top = new Alignments('Top');
	static Middle = new Alignments('Middle');
	static Bottom = new Alignments('Bottom');

	constructor(name) {
		this.name = name;
	}
}