import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [loading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    fetch(
      "https://react-getting-started-9fe37-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = { id: key, ...data[key] };
          meetups.push(meetup);
        }
        setLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (loading) {
    return <div>Meetups are loading...</div>;
  }

  return (
    <section>
      <h1> AllMeetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
