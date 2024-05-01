export const mockApiCall = <T>(data: T, timeout?: number): Promise<T> =>
  new Promise<T>((resolve) => {
    setTimeout(() => resolve(data), timeout || 1000);
  });

export const mockId = () => Math.floor(Math.random() * 10000000);
