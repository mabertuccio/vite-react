import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Welcome from "./components/Welcome.jsx";
// import Button from "./components/Button.jsx";
// import Page from "./components/Page.jsx";
// import { LikeButton } from "./components/LikeButton.jsx";
import { ToDoList } from "./components/ToDoList.jsx";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);
