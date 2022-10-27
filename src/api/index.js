export const getDataAPI = async () => {
  try {
    const response = await fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b3ce192b6a683039e79389620bdd2a2e&hash=e553d9dd0a483a2e730d5e6d3c8b3239"
    );

    const { data } = await response.json();

    return { data, error: false };
  } catch (error) {
    return { data: [], error };
  }
};
