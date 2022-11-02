export const getData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=20");

    const { results } = await response.json();

    return { data: results, error: false };
  } catch (error) {
    return { data: [], error };
  }
};
