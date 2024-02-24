/**
 *
 * TODO: PENDING API CALL FOR SPOTIFY CURRENT PLAYING
 */
const getAccesToken = async () => {
  const clientId = "key";
  const clientSecret = "key";

  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
    body: "grant_type=client_crendentials",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.access_token);
      return data.access_token;
    });

  return null;
};

export const fetchCurrentPlaying = async () => {
  const accessToken = await getAccesToken();
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch current playing song: ${res.statusText}`);
  }

  const song = await res.json();
  return song;
};
