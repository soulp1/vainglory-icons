import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/styles/hljs';




var icons = [
	{
		id: 1,
		icon : "vg-captain",
		name : "Captain"
	},
	{
		id: 2,
		icon : "vg-carry",
		name : "Carry"
	},
	{
		id: 3,
		icon : "vg-jungler",
		name : "Jungler"
	},
	{
		id: 4,
		icon : "vg-weapon",
		name : "Weapon"
	},
	{
		id: 5,
		icon : "vg-crystal",
		name : "Crystal"
	},
	{
		id: 6,
		icon : "vg-support",
		name : "Support"
	},
	{
		id: 7,
		icon : "vg-happy-1",
		name : "Happy 1"
	},
	{
		id: 8,
		icon : "vg-happy-2",
		name : "Happy 2"
	},
	{
		id: 9,
		icon : "vg-happy-3",
		name : "Happy 3"
	},
	{
		id: 10,
		icon : "vg-sad-1",
		name : "Sad 1"
	},
	{
		id: 11,
		icon : "vg-sad-2",
		name : "Sad 2"
	},
	{
		id: 12,
		icon : "vg-sad-3",
		name : "Sad 3"
	},
	{
		id: 13,
		icon : "vg-thumbs-up-1",
		name : "Thumbs Up 1"
	},
	{
		id: 14,
		icon : "vg-thumbs-up-2",
		name : "Thumbs Up 2"
	},
	{
		id: 15,
		icon : "vg-thumbs-up-3",
		name : "Thumbs Up 3"
	},
	{
		id: 16,
		icon : "vg-beer-1",
		name : "Beer 1"
	},
	{
		id: 17,
		icon : "vg-beer-2",
		name : "Beer 2"
	},
	{
		id: 18,
		icon : "vg-beer-3",
		name : "Beer 3"
	},
	{
		id: 19,
		icon : "vg-kraken",
		name : "Kraken"
	},
	{
		id: 20,
		icon : "vg-blackclaw",
		name : "Blackclaw"
	},
	{
		id: 21,
		icon : "vg-ghostwing",
		name : "Ghostwing"
	},
	{
		id: 22,
		icon : "vg-vain-crystal",
		name : "Vain Crystal"
	},
	{
		id: 23,
		icon : "vg-turret",
		name : "Turret"
	},
	{
		id: 24,
		icon : "vg-minion",
		name : "Minion"
	},
	{
		id: 25,
		icon : "vg-coin",
		name : "Coin"
	},
	{
		id: 26,
		icon : "vg-blitz-coin",
		name : "Blitz Coin"
	},
	{
		id: 27,
		icon : "vg-skull",
		name : "Skull"
	},
	{
		id: 28,
		icon : "vg-recommended-shield",
		name : "Recommended Shield"
	},
	{
		id: 29,
		icon : "vg-weapon-shield",
		name : "Weapon Shield"
	},
	{
		id: 30,
		icon : "vg-abilities-shield",
		name : "Abilities Shield"
	},
	{
		id: 31,
		icon : "vg-defense-shield",
		name : "Defense Shield"
	},
	{
		id: 32,
		icon : "vg-utility-shield",
		name : "Utility Shield"
	},
	{
		id: 33,
		icon : "vg-other-shield",
		name : "Other Shield"
	},
	{
		id: 34,
		icon : "vg-top-lane",
		name : "Top Lane"
	},
	{
		id: 35,
		icon : "vg-mid-lane",
		name : "Mid Lane"
	},
	{
		id: 36,
		icon : "vg-bot-lane",
		name : "Bot Lane"
	},
	{
		id: 37,
		icon : "vg-target",
		name : "Target"
	},
	{
		id: 38,
		icon : "vg-target-outline",
		name : "Target Outline"
	},
	{
		id: 39,
		icon : "vg-en-route",
		name : "En Route"
	},
	{
		id: 40,
		icon : "vg-en-route-outline",
		name : "En Route Outline"
	},
	{
		id: 41,
		icon : "vg-caution",
		name : "Caution"
	},
	{
		id: 42,
		icon : "vg-caution-outline",
		name : "Caution Outline"
	},
	{
		id: 43,
		icon : "vg-question",
		name : "Question"
	},
	{
		id: 44,
		icon : "vg-question-outline",
		name : "Question Outline"
	},
	{
		id: 45,
		icon : "vg-meet",
		name : "Meet"
	},
	{
		id: 46,
		icon : "vg-meet-outline",
		name : "Meet Outline"
	},
	{
		id: 47,
		icon : "vg-offense",
		name : "Offense"
	},
	{
		id: 48,
		icon : "vg-defense",
		name : "Defense"
	},
	{
		id: 49,
		icon : "vg-utility",
		name : "Utility"
	},
	{
		id: 50,
		icon : "vg-mobility",
		name : "Mobility"
	},
	{
		id: 51,
		icon : "vg-rank-1",
		name : "Rank 1"
	},
	{
		id: 52,
		icon : "vg-rank-2",
		name : "Rank 2"
	},
	{
		id: 53,
		icon : "vg-rank-3",
		name : "Rank 3"
	},
	{
		id: 54,
		icon : "vg-rank-4",
		name : "Rank 4"
	},
	{
		id: 55,
		icon : "vg-rank-5",
		name : "Rank 5"
	},
	{
		id: 56,
		icon : "vg-rank-6",
		name : "Rank 6"
	},
	{
		id: 57,
		icon : "vg-rank-7",
		name : "Rank 7"
	},
	{
		id: 58,
		icon : "vg-rank-8",
		name : "Rank 8"
	},
	{
		id: 59,
		icon : "vg-rank-9",
		name : "Rank 9"
	},
	{
		id: 60,
		icon : "vg-rank-10",
		name : "Rank 10"
	}
];


const iconsMarkup = icons.map( obj => { 
  let iconString = "h1 d-block mb-0 example-icon " + obj['icon'];
  const codeString = '<i class="' + obj['icon'] + '"></i>';
  return (
    <section key={obj['id']} className="col-md-6 col-lg-4 mb-5">
	  <div className={iconString} />
	  <div className="small mb-2 text-light-gray">{obj['name'].toUpperCase()}</div>
	  <SyntaxHighlighter language='html' style={monokaiSublime}>{codeString}</SyntaxHighlighter>
    </section>
  )
});


export default class Icons extends React.Component {
  render() {
    return (
      <div className="row justify-content-center pt-5">{iconsMarkup}</div>
    )
  }
};
