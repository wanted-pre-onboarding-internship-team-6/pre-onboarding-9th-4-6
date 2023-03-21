export default function debounce<T extends (...args: any[]) => void>(
  callback: T,
  timeout: number,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: Parameters<T>): void {
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(this, args), timeout);
  };
}
