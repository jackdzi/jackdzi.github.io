import { Project } from "../../types/project";

const projectData: Project[] = [
  {
    id: 3,
    title: "Simple CNN",
    text: "A simple convolutional neural network written from scratch in C++ that classifies images by number based on the MNIST dataset.",
    link: "http://github.com/jackdzi/SimpleCNN",
  },
  {
    id: 1,
    title: "Startpage",
    text: "A simple startpage containing links to websites I use frequently to enhance my productivity.",
    link: "http://jackdzi.github.io/startpage",
  },
  {
    id: 4,
    title: "RSS TUI",
    text: "RSS aggregator that can be deployed using docker, along with a terminal UI for viewing the feed.",
    link: "http://github.com/jackdzi/feederizer"
  },
  {
    id: 2,
    title: "Carrea Website",
    text: "A website I'm working on for a club I'm in.",
    link: "http://ricecarrera.vercel.app",
  },
];
export default projectData;
