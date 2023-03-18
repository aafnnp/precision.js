/**
 * 乘法函数
 * @param args 需要相乘的数字列表
 * @returns 相乘后的结果
 */
import calculatePrecision from './caculatePrecision';
import round from './round';

export default function multiply(...args: number[]): number {
  const precision = calculatePrecision(args);
  const product = args.reduce((acc, val) => {
    return acc * (val ?? 1);
  }, 1);
  return round(product, precision);
}
