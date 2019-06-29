import AlbumDetails from "../components/AlbumDetails";
import Albums from "../components/Albums";
import ArtistDetails from "../components/ArtistDetails";
import Artists from "../components/Artists";
import Home from "../components/Home";
import LoginForm from "../components/LoginForm";
import PageNotFound from "../components/PageNotFound";
import Songs from "../components/Songs";
import Tickets from "../components/Tickets/Tickets";
import UserDetails from "../components/UserDetails";

const config = {
  routes: [
    {
      inLayout: true,
      path: "/",
      exact: true,
      component: Home
    },
    {
      inLayout: false,
      path: '/login',
      exact: true,
      component: LoginForm
    },
    {
      inLayout: true,
      path: '/tickets',
      exact: true,
      component: Tickets
    },
    {
      inLayout: true,
      path: "/tracks",
      exact: true,
      component: Songs
    },
    {
      inLayout: true,
      path: "/artists",
      exact: true,
      component: Artists
    },
    {
      inLayout: true,
      path: "/artists/:id",
      exact: true,
      component: ArtistDetails
    },
    {
      inLayout: true,
      path: "/albums",
      exact: true,
      component: Albums
    },
    {
      inLayout: true,
      path: "/albums/:id",
      exact: true,
      component: AlbumDetails
    },
    {
      inLayout: true,
      path: "/users/:username",
      exact: false,
      component: UserDetails
    },
    {
      inLayout: true,
      component: PageNotFound
    }
  ]
};

export {
  config
}
