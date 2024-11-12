"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findSubset_1 = require("../findSubset");
describe('findSubsetWithSum', () => {
    it('debe devolver el primer par de números que suman N', () => {
        const M = [2, 5, 8, 14, 0];
        const N = 10;
        const result = (0, findSubset_1.findSubsetWithSum)(M, N);
        expect(result).toEqual([2, 8]);
    });
    it('debe devolver null si no hay ningún par que sume N', () => {
        const M = [1, 3, 5, 7];
        const N = 15;
        const result = (0, findSubset_1.findSubsetWithSum)(M, N);
        expect(result).toBeNull();
    });
    it('debe devolver el primer par de números que suman N (caso de números negativos)', () => {
        const M = [-2, 5, 8, -3, 0];
        const N = 3;
        const result = (0, findSubset_1.findSubsetWithSum)(M, N);
        expect(result).toEqual([-2, 5]);
    });
});
