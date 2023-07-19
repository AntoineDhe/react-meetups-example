import { useHistory } from "react-router-dom/cjs/react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetup() {
  const history = useHistory();
  function onAddMeetupHandler(data) {
    fetch(
      "https://react-getting-started-9fe37-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1> New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
