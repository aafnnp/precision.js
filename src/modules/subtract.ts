/**
 * 减法函数
 * @param args 需要相减的数字列表，第一个数字为被减数
 * @returns 相减后的结果
 */
import calculatePrecision from './caculatePrecision';
import round from './round';

export default function subtract(...args: number[]): number {
  const precision = calculatePrecision(args);
  const diff = args.reduce((acc, val) => {
    return acc - (val ?? 0);
  });
  return round(diff, precision);
}
