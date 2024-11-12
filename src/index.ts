import { findSubsetWithSum } from './findSubset';

const M = [2, 5, 8, 14, 0];
const N = 10;

const result = findSubsetWithSum(M, N);

if (result) {
    console.log(`El primer par de números que suman ${N} es: [${result[0]}, ${result[1]}]`);
} else {
    console.log(`No se encontró un par de números que sumen ${N}`);
}
