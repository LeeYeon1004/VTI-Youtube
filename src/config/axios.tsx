import axios from "axios";

export const getMovies = async () => {
  try {
    const response = await axios.get(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=AIzaSyBaLQ37ZsPSqHjZKI47ocjiC5NuWTEWwsA"
    );
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
};
