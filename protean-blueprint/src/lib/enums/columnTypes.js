export class ColumnTypes {
    static Full = new ColumnTypes('Full');
    static Half = new ColumnTypes('Half');
    static Third = new ColumnTypes('Third');
    static Fourth = new ColumnTypes('Fourth');

    constructor(name) {
        this.name = name;
    }
}