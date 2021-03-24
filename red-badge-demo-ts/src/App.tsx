import React from "react";
import PropsExample from "./components/PropsExample";
import PropsMappingExample from "./components/PropsMapping";

function App() {
  const visitedPlaces = ["Puerto Rico", "Bahamas", "Honduras", "Belize", "Cayman Islands", "Dominican Republic"];
  return (
    <div>
      <PropsExample name="Tom" business="MySpace" />
      <PropsMappingExample visited={visitedPlaces} />
    </div>
  );
}

export default App;
