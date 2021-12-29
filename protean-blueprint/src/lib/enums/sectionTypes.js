export class SectionTypes {
    static Full = new SectionTypes('Full');
    static Half = new SectionTypes('Half');
    static Third = new SectionTypes('Third');
    static Fourth = new SectionTypes('Fourth');

    constructor(name) {
        this.name = name;
    }
}