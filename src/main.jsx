import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Welcome from "./components/Welcome.jsx";
// import Button from "./components/Button.jsx";
// import Page from "./components/Page.jsx";
// import { LikeButton } from "./components/LikeButton.jsx";
// import { ToDoList } from "./components/ToDoList.jsx";
// import { Card } from "./components/Card.jsx";
// import { BlogSpot } from "./components/BlogPost.jsx";
// import { MatchName } from "./components/MatchName.jsx";
// import { MatchLength } from "./components/MatchLength.jsx";
// import { InputValidation } from "./components/InputValidation.jsx";
// import { UncontrolledCheckbox } from "./components/UncontrolledCheckbox.jsx";
import { ControlledCheckboxList } from "./components/ControlledCheckboxList.jsx";
/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Welcome name="Matias" lastName="Bertuccio" />
  </React.StrictMode>
);
*/

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Button className="button-red" onClick={() => alert("Hello!")}>
      Click Here!
    </Button>
  </React.StrictMode>
);
*/

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page
      title="My Diary"
      articles={[
        { title: "Day 1", body: "Today I saw a squirrel" },
        {
          title: "Day 2",
          body: "Today I saw another squirrel, but maybe it's the same",
        },
      ]}
    />
  </React.StrictMode>
);
*/

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LikeButton />
  </React.StrictMode>
);
*/

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);
*/

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Card
      img="https://avatars.githubusercontent.com/u/129182481?v=4"
      name="Matias Bertuccio"
      title="Student"
      paragraphs="Hello, World!"
    />
  </React.StrictMode>
);
*/

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogSpot
      title="Squirrels in Argentina."
      paragraphs={[
        "Today I saw a squirrel.",
        "The squirrel was black, larger than other squirrels, had many big teeth, and was always walking on all fours, wagging its tail.",
        "I think it might have been a dog, since there are no squirrels in Argentina.",
      ]}
    />
  </React.StrictMode>
);
*/

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MatchName name="Matias" />
  </React.StrictMode>
);
*/

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MatchLength minLength="10" />
  </React.StrictMode>
);
*/

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InputValidation />
  </React.StrictMode>
);
*/

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UncontrolledCheckbox name="it's Summer?" initialValue={false} />
  </React.StrictMode>
);
*/
/*
Note: I had a small bug at the beginning. 
When trying to render the component, the value was always true because I was assigning the boolean prop incorrectly, like this: initialValue = "false". 
This is because the value is interpreted as a string, not a boolean.
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ControlledCheckboxList
      items={{ ["Go"]: false, ["Java"]: true, ["JavaScript"]: false }}
    />
  </React.StrictMode>
);
