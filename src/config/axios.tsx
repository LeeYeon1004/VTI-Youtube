import axios from "axios";

export const getMovies = async () => {
  try {
    const response = await axios.get(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=US&key=AIzaSyBaLQ37ZsPSqHjZKI47ocjiC5NuWTEWwsA"
    );
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
};
export const getApiSearch = async (key: string) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${key}&type=video&key=AIzaSyBaLQ37ZsPSqHjZKI47ocjiC5NuWTEWwsA`
    );
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
};
