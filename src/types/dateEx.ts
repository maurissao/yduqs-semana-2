export class DateEx extends Date {
    public Add(value: number): DateEx {
        this.setDate(this.getDate() + value);
        return this;
    }
}
