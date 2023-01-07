import "./styles.css";
import { useState } from "react";
var webSeriesDatabase = {
  Action: [
    {
      name: "The Boys",
      Rating: "8.7/10",
      Description:
        "The Boys is set in a universe where superpowered individuals, called Supes, are recognized as heroes by the general public and work for a powerful corporation known as Vought International that markets and monetizes them."
    },
    {
      name: "Mirzapur",
      Rating: "8.5/10",
      Description:
        "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur. His son, Munna, is an unworthy, power-hungry heir who will stop at nothing to inherit his father's legacy."
    },
    {
      name: "The family man",
      Rating: "8.7/10",
      Description:
        "The Family Man follows the story of Srikant Tiwari, who works as a senior officer in the Threat Analysis and Surveillance Cell (TASC), along with his best friend and colleague JK Talpade, which is a part of the National Investigation Agency (NIA) of India."
    }
  ],
  Mystery: [
    {
      name: "Stranger Things",
      Rating: "8.7/10",
      Description:
        "Stranger Things is set in the fictional rural town of Hawkins, Indiana, during the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy, but secretly does experiments into the paranormal and supernatural, including those that involve human test subjects."
    },
    {
      name: "Wednesday",
      Rating: "8.3/10",
      Description:
        "Wednesday Addams is expelled from her school after dumping live piranhas into the school's pool in retaliation for the boys' water polo team bullying her brother, Pugsley."
    }
  ],
  Drama: [
    {
      name: "Peaky blinders",
      Rating: "8.8/10",
      Description:
        "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities."
    },
    {
      name: "Squid Game",
      Rating: "8/10",
      Description:
        "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly."
    },
    {
      name: "The 100",
      Rating: "7.6/10",
      Description:
        "A nuclear conflict has decimated civilisation. A century later, a spaceship accommodating humanity's lone survivors dispatch 100 juvenile delinquents back to the Earth to determine its habitability."
    }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("Action");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Web Series Recommendation</h1>

      <div>
        {Object.keys(webSeriesDatabase).map((genre) => {
          return (
            <button
              onClick={() => {
                genreClickHandler(genre);
              }}
              style={{
                cursor: "pointer",
                padding: "0.5rem",
                margin: "0.2rem",
                border: "1px solid black",
                backgroundColor: "salmon",
                color: "whitesmoke",

                fontWeight: "bold"
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div style={{ textAlign: "left", width: "50%" }}>
        <ul>
          {webSeriesDatabase[selectedGenre].map((web) => (
            <li
              key={web.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid black",
                width: "80%",
                margin: "10% 60%",
                borderRadius: "0.7rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {web.name}</div>
              <hr />
              <div style={{ fontSize: "larger" }}> {web.Description}</div>
              <hr />
              <div style={{ fontSize: "smaller" }}>Ratings: {web.Rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
