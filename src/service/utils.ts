import fs from "fs";
import csv from "csv-parser";

export function transformKeysToCamelCase<T>(obj: T): ([ key, value ]: [string, any]) => void {
    return ([ key, value ]) => {
        const newKey = key.toLowerCase().replace(/\s(\w)/g, (_: string, firstPattern: string) => firstPattern.toUpperCase());
        if (newKey !== key) {
            delete obj[key];
            obj[newKey] = value;
        }
    };
}

export async function csvToJson<T>(filePath: string): Promise<T[]> {
    const results: T[] = [];

    try {
        const stream = fs.createReadStream(filePath)
                .pipe(csv())

        for await (const data of stream) {
            Object.entries(data).forEach(transformKeysToCamelCase(data));
            results.push(data);
        }

        return results;
    } catch (error) {
        throw error;
    }
}