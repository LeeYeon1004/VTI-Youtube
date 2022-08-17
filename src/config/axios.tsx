import axios from "axios";

export const request = async () => {
  const res = await axios.get(
    "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLDCnzszalqD3vAc8670Zf011n9uNz_LWw&key=AIzaSyDGZB0y9n1Tbwqc4wTQwoZs3IzjRiEfktQ"
  );
  console.log(res.data.items);
};
