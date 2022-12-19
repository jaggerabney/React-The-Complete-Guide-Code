import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Mount_Rainier_from_west.jpg",
    address: "39000 State Route 706 E, Ashford, WA 98304",
    description: "We met at the base of Mount Rainier!",
  },
  {
    id: "m2",
    title: "Second meetup!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dc/MSH82_st_helens_plume_from_harrys_ridge_05-19-82.jpg",
    address: "3029 Spirit Lake Hwy, Castle Rock, WA 98611",
    description: "Then we met at Mount Saint Helens!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
