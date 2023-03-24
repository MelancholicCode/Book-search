export const getBooks = async <T> (url: string | null, ...params: string[]): Promise<T | undefined> => {
  try {
    if (!url) {
      return;
    }
    console.log(1)
    const res: Response = await fetch(`${url}${params.join()}`);
    if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);

    const data: Promise<T | undefined> = res.json();

    return data;
  } catch (err) {
    throw err;
  }
}