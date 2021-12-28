export class TextTypes {
    static H1 = new TextTypes('H1');
    static H2 = new TextTypes('H2');
    static H3 = new TextTypes('H3');
    static H4 = new TextTypes('H4');
    static H5 = new TextTypes('H5');
    static H6 = new TextTypes('H6');
    static P = new TextTypes('P');

    constructor(name) {
        this.name = name;
    }
}