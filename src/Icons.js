import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/styles/hljs";

var icons = [
  {
    id: 1,
    icon: "vg-captain",
    name: "Captain"
  },
  {
    icon: "vg-carry",
    name: "Carry"
  },
  {
    icon: "vg-jungler",
    name: "Jungler"
  },
  {
    icon: "vg-weapon",
    name: "Weapon"
  },
  {
    icon: "vg-crystal",
    name: "Crystal"
  },
  {
    icon: "vg-support",
    name: "Support"
  },
  {
    icon: "vg-happy-1",
    name: "Happy 1"
  },
  {
    icon: "vg-happy-2",
    name: "Happy 2"
  },
  {
    icon: "vg-happy-3",
    name: "Happy 3"
  },
  {
    icon: "vg-sad-1",
    name: "Sad 1"
  },
  {
    icon: "vg-sad-2",
    name: "Sad 2"
  },
  {
    icon: "vg-sad-3",
    name: "Sad 3"
  },
  {
    icon: "vg-thumbs-up-1",
    name: "Thumbs Up 1"
  },
  {
    icon: "vg-thumbs-up-2",
    name: "Thumbs Up 2"
  },
  {
    icon: "vg-thumbs-up-3",
    name: "Thumbs Up 3"
  },
  {
    icon: "vg-beer-1",
    name: "Beer 1"
  },
  {
    icon: "vg-beer-2",
    name: "Beer 2"
  },
  {
    icon: "vg-beer-3",
    name: "Beer 3"
  },
  {
    icon: "vg-kraken",
    name: "Kraken"
  },
  {
    icon: "vg-blackclaw",
    name: "Blackclaw"
  },
  {
    icon: "vg-ghostwing",
    name: "Ghostwing"
  },
  {
    icon: "vg-vain-crystal",
    name: "Vain Crystal"
  },
  {
    icon: "vg-turret",
    name: "Turret"
  },
  {
    icon: "vg-minion",
    name: "Minion"
  },
  {
    icon: "vg-coin",
    name: "Coin"
  },
  {
    icon: "vg-blitz-coin",
    name: "Blitz Coin"
  },
  {
    icon: "vg-skull",
    name: "Skull"
  },
  {
    icon: "vg-recommended-shield",
    name: "Recommended Shield"
  },
  {
    icon: "vg-weapon-shield",
    name: "Weapon Shield"
  },
  {
    icon: "vg-abilities-shield",
    name: "Abilities Shield"
  },
  {
    icon: "vg-defense-shield",
    name: "Defense Shield"
  },
  {
    icon: "vg-utility-shield",
    name: "Utility Shield"
  },
  {
    icon: "vg-other-shield",
    name: "Other Shield"
  },
  {
    icon: "vg-top-lane",
    name: "Top Lane"
  },
  {
    icon: "vg-mid-lane",
    name: "Mid Lane"
  },
  {
    icon: "vg-bot-lane",
    name: "Bot Lane"
  },
  {
    icon: "vg-target",
    name: "Target"
  },
  {
    icon: "vg-target-outline",
    name: "Target Outline"
  },
  {
    icon: "vg-en-route",
    name: "En Route"
  },
  {
    icon: "vg-en-route-outline",
    name: "En Route Outline"
  },
  {
    icon: "vg-caution",
    name: "Caution"
  },
  {
    icon: "vg-caution-outline",
    name: "Caution Outline"
  },
  {
    icon: "vg-question",
    name: "Question"
  },
  {
    icon: "vg-question-outline",
    name: "Question Outline"
  },
  {
    icon: "vg-meet",
    name: "Meet"
  },
  {
    icon: "vg-meet-outline",
    name: "Meet Outline"
  },
  {
    icon: "vg-offense",
    name: "Offense"
  },
  {
    icon: "vg-defense",
    name: "Defense"
  },
  {
    icon: "vg-utility",
    name: "Utility"
  },
  {
    icon: "vg-mobility",
    name: "Mobility"
  },
  {
    icon: "vg-rank-1",
    name: "Rank 1"
  },
  {
    icon: "vg-rank-2",
    name: "Rank 2"
  },
  {
    icon: "vg-rank-3",
    name: "Rank 3"
  },
  {
    icon: "vg-rank-4",
    name: "Rank 4"
  },
  {
    icon: "vg-rank-5",
    name: "Rank 5"
  },
  {
    icon: "vg-rank-6",
    name: "Rank 6"
  },
  {
    icon: "vg-rank-7",
    name: "Rank 7"
  },
  {
    icon: "vg-rank-8",
    name: "Rank 8"
  },
  {
    icon: "vg-rank-9",
    name: "Rank 9"
  },
  {
    icon: "vg-rank-10",
    name: "Rank 10"
  }
];

const iconsMarkup = icons.map(obj => {
  let iconString = `h1 d-block mb-0 example-icon ${obj.icon}`;
  const codeString = `<i class=${obj.icon}></i>`;

  return (
    <section key={obj.icon} className="col-md-6 col-lg-4 mb-5">
      <div className={iconString} />
      <div
        className="small mb-2 text-light-gray"
        style={{ textTransform: "uppercase" }}
      >
        {obj.name}
      </div>
      <SyntaxHighlighter language="html" style={monokaiSublime}>
        {codeString}
      </SyntaxHighlighter>
    </section>
  );
});

export default class Icons extends React.Component {
  render() {
    return <div className="row justify-content-center pt-5">{iconsMarkup}</div>;
  }
}