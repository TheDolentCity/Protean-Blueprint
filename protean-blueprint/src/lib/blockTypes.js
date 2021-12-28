export class BlockTypes {
    static Root = new BlockTypes('Root');
    static Section = new BlockTypes('Section');
    static Text = new BlockTypes('Text');

    constructor(name) {
        this.name = name;
    }
}