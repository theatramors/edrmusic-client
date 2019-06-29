import { instance } from "./instance";

export default class AlbumsService {
  static getAlbums() {
    return instance.request({
      url: "/albums",
      method: "GET"
    });
  }

  static getAlbumById(id) {
    return instance.request({
      url: "/albums/" + id,
      method: "GET"
    });
  }
}
