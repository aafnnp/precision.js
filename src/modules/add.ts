/**
 * 加法函数
 * @param args 需要相加的数字列表
 * @returns 相加后的结果
 */
import calculatePrecision from './caculatePrecision';
import round from './round';
export default function add(...args: number[]): number {
  const precision = calculatePrecision(args);
  const sum = args.reduce((acc, val) => {
    return acc + (val ?? 0);
  }, 0);
  return round(sum, precision);
}
