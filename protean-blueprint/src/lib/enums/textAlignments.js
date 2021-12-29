export class TextAlignments {
    static Left = new TextAlignments('Left');
    static Right = new TextAlignments('Right');
    static Center = new TextAlignments('Center');
    static Justify = new TextAlignments('Justify');

    constructor(name) {
        this.name = name;
    }
}