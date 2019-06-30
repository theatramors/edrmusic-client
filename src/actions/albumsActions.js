import axios from 'axios';

const componentDidMount = () => {
  document.title = "Albums";

  return dispatch => {
    axios.get('/albums').then(answer => {

    });
  };
};

export default {
  componentDidMount
}
