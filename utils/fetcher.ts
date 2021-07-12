export const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error: any = new Error("An error occurred whilst fetching data!");

    error.info = await res.json();
    error.status = res.status;
    console.log(error);
    throw error;
  }

  return res.json();
};
