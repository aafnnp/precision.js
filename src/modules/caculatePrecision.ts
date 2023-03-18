export default function calculatePrecision(args: number[]): number {
  let precision = 0;
  args.forEach((arg) => {
    const decimal = arg.toString().split('.')[1];
    if (decimal) {
      precision = Math.max(precision, decimal.length);
    }
  });
  return precision;
}
