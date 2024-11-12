/** 
 * Encuentra el primer par de números en el array `M` cuya suma sea igual a `N`.
 * @param M - Array de números enteros (no vacío).
 * @param N - Suma objetivo.
 * @returns Array con el primer par de números que suman `N`, o `null` si no existe.
 */
export function findSubsetWithSum(M: number[], N: number): [number, number] | null {
    const seenNumbers = new Set<number>();

    for (const number of M) {
        const complement = N - number;
        if (seenNumbers.has(complement)) {
            return [complement, number];
        }
        seenNumbers.add(number);
    }

    return null;
}
