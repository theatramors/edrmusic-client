import AlbumsService from "../services/AlbumsService";

const componentDidMount = () => {
  document.title = "Albums";

  return dispatch => {
    AlbumsService.getAlbums().then(answer => {

    });
  };
};

export default {
  componentDidMount
}