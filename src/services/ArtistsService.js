import {instance} from "./instance";

function getArtists() {
  return instance.request({
    url: "/artists",
    method: "GET"
  });
}

function getArtistById(id) {
  return instance.request({
    url: "/artists/" + id,
    method: "GET"
  });
}

export {
  getArtists,
  getArtistById
}
