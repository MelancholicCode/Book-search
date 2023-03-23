export const getBooks = async <T> (url: string | null, ...params: string[]): Promise<T | undefined> => {
  try {
    if (!url) {
      return;
    }
    const res: Response = await fetch(`${url}${params.join()}`);
    const data: Promise<T | undefined> = res.json();

    return data;
  } catch (err) {
    throw err;
  }
}