export class BlockType {
    static SectionFull = new BlockType('SectionFull');
    static SectionHalf = new BlockType('SectionHalf');
    static Header1 = new BlockType('Header1');
    static Header2 = new BlockType('Header2');
    static Header3 = new BlockType('Header3');
    static Header4 = new BlockType('Header4');
    static Paragraph = new BlockType('Paragraph');

    constructor(name) {
        this.name = name;
    }
}