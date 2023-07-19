import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if (favoritesCtx.favorites.length === 0) {
    content = <p>No favorites</p>;
  } else {
    content = (
      <section>
        <h1>My Favorites</h1>
        <MeetupList meetups={favoritesCtx.favorites} />
      </section>
    );
  }
  return content;
}

export default Favorites;
