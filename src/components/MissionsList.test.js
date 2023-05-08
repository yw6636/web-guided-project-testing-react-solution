import React from 'react'
import MissionsList from './MissionsList'
import { render, screen } from '@testing-library/react'

const missions = [
  {
    mission_name:'Thaicom',
    mission_id:'9D1B7E0'
  },
  {
    mission_name:'Telstar',
    mission_id:'F4F83DE'
  }
]



test('missions list shows data when rerender with new missions data', () => {
  const { rerender } = render(<MissionsList errors="" missions={[]}/>)
  let missionsObjects = screen.queryAllByTestId('mission');
  expect(missionsObjects).toHaveLength(0);

  rerender(<MissionsList errors="" missions={missions}/>);
  missionsObjects = screen.queryAllByTestId('mission');
  expect(missionsObjects).toHaveLength(2);
})





// import React from "react";
// import { render, screen } from "@testing-library/react";
// import MissionsList from "./MissionsList";

// // TODO: test the mounting state for the component

// const missions = [
//   {
//     mission_name: "Thaicom",
//     mission_id: "9D1B7E0"
//   },
//   {
//     mission_name: "Telstar",
//     mission_id: "F4F83DE"
//   }
// ];

// test("Missions list shows data when rerendered with new missions data", () => {
//   const { rerender } = render(
//     <MissionsList error="" missions={[]} />
//   );

//   let missionObjects = screen.queryAllByTestId("mission");
//   expect(missionObjects).toStrictEqual([]);
//   expect(missionObjects).toHaveLength(0);

//   rerender(<MissionsList error="" missions={missions} />);
//   missionObjects = screen.queryAllByTestId("mission");
//   expect(missionObjects).toHaveLength(2);
// });
