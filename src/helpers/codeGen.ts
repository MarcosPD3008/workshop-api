export const GenerateCode = (name: string, lastName: string): string => {
    const startWith = "SX";
    return startWith + name.slice(0, 3).toUpperCase() + lastName.slice(0, 3).toUpperCase();
}