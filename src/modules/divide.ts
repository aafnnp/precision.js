/**
 * 除法函数
 * @param args 需要相除的数字列表，第一个数字为被除数
 * @returns 相除后的结果
 */
import calculatePrecision from './caculatePrecision';
import round from './round';
export default function divide(...args: number[]): number {
  const precision = calculatePrecision(args);
  const quotient = args.reduce((acc, val) => {
    return acc / (val ?? 1);
  });
  return round(quotient, precision);
}
