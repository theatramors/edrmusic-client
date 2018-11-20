import AlbumDetails from "../components/AlbumDetails";
import Albums from "../components/Albums";
import ArtistDetails from "../components/ArtistDetails";
import Artists from "../components/Artists";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";
import Songs from "../components/Songs";
import UserDetails from "../components/UserDetails";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/tracks",
    exact: true,
    component: Songs
  },
  {
    path: "/artists",
    exact: true,
    component: Artists
  },
  {
    path: "/artists/:id",
    exact: true,
    component: ArtistDetails
  },
  {
    path: "/albums",
    exact: true,
    component: Albums
  },
  {
    path: "/albums/:id",
    exact: true,
    component: AlbumDetails
  },
  {
    path: "/users/:username",
    exact: false,
    component: UserDetails
  },
  {
    component: PageNotFound
  }
];
