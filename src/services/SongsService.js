import { instance } from "./instance";

export default class SongsService {
  static async getSongs() {
    return instance.request({
      url: "/songs",
      method: "GET"
    });
  }
}
