import { instance } from "./instance";

export default class UsersService {
  static getUserByUsername(username) {
    return instance.request({
      url: "/users/" + username,
      method: "GET"
    });
  }
}
