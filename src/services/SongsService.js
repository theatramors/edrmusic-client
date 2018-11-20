import {instance} from "./instance";

export default class SongsService {
  static getSongs() {
    return instance.request({
      url: "/songs",
      method: "GET"
    });
  }
}
