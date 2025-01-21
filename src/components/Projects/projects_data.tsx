import { Project } from "../../types/project";

const projectData: Project[] = [
  {
    id: 2,
    title: "L1 Orderbook",
    text: "An orderbook written in C++ that allows the real time visualization of market data, using websockets to maintain low-latency updates for data. Right now it's configured to use the Coinbase api, given how expensive feed data for actual financial instruments are. Currently I'm working on adding a order matching system in order to learn about how markets fufill orders and trades. Uses multithreading to handle both listening to the websocket connection and for writing to the orderbook.",
    link: "http://github.com/jackdzi/feederizer",
    image: "/orderbook.jpg"
  },
  {
    id: 4,
    title: "Feederizer",
    text: "A RSS feed aggregator written in Golang that implements both a backend deployable through docker and a terminal UI component that handles viewing the feeds. The backend handles api calls and interacts with a sqlite3 database. The UI is easily configurable through a toml file, and can concurrently run a server proccess if one is not deployed through docker. The UI component is written using BubbleTea, a library inspired by Elm, which I really enjoyed using as I learned a lot about program design/functional programming.",
    link: "http://github.com/jackdzi/feederizer",
    image: "/rss.jpg",
  },
  {
    id: 1,
    title: "CSV Analyzer",
    text: "A data visualization application that converts text columns from a CSV file into embeddings within a vector space using a transformer language model. It clusters similar vectors (CSV rows) via K-means clustering. Utilizing the UMAP algorithm, these embeddings are dimensionally reduced to two dimensions in order to be plotted. Users can explore rows within each cluster, showing how groupings contain related 'ideas'. Uses a pre-trained Hugging Face model for text embedding, Flask for backend server hosting, and React for the frontend interface. Currently trying to implement a way to find the 'most significant' rows of a cluster in order to ease viewing for big datasets, probably using PCA.",
    link: "http://jackdzi.github.io/startpage",
    image: "/csvanalyzer.jpg",
  },
  {
    id: 3,
    title: "Simple CNN",
    text: "A convolutional neural network written in C++ that classifies images by number based on the MNIST dataset, all using the standard library. The model class constructor allows for different type of models to be created, giving full control over how it works. Implements many different optimizations such as a batch gradient option, a momentum/velocity option, learning rate decay, and randomized pixel dropout. The website is hosted using a simple javascript backend which connects the C++ components to the frontend, which is written in Typescript, using the React framework. Great project to learn about the basic algorithms behind modern MLP and convolutional models.",
    link: "http://github.com/jackdzi/SimpleCNN",
    image: "/cnn.jpg",
  },
  // {
  //   id: 2,
  //   title: "Carrea Website",
  //   text: "A website I'm working on for a club I'm in.",
  //   link: "http://ricecarrera.vercel.app",
  //   image: "",
  // },
];
export default projectData;
