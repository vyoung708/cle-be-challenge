// got this from https://stackoverflow.com/questions/23437476/in-typescript-how-to-check-if-a-string-is-numeric
export function isNumber(value: string): boolean {
    return ((value != null) && 
    (value !== '') && 
    !isNaN(Number(value)));
}