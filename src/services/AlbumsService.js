import {instance} from "./instance";

function getAlbums() {
  return instance.request({
    url: "/albums",
    method: "GET"
  });
}

export {
  getAlbums
}