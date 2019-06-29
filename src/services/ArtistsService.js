import { instance } from "./instance";

export default class ArtistsService {
  static getArtists() {
    return instance.request({
      url: "/artists",
      method: "GET"
    });
  }

  static getArtistById(id) {
    return instance.request({
      url: "/artists/" + id,
      method: "GET"
    });
  }
}
