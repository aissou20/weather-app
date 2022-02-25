/*export default {
    formatToDate(unixDate: number) :number{
        const date = new Date(1000 * unixDate);
        return date.getHours();
    }
}*/
export default {
    convertUnixTimestampToHours(timestamp: number): number {
        return new Date(1000 * timestamp).getHours();
    }
}