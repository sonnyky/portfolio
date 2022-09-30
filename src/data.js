export const projects = [
  {
    title: "Person Following Robot",
    subtitle: "Person Reidentification",
    description:
      "The robot registers the first person that presents a predetermined gesture. It follows the same person based on appearances/clothing. An OAK-D device is used to detect distance to the person and  reidentification with the OpenVino model.",
    image: "../project-1.gif",
    link: "https://youtu.be/YCXxq0GOn2o",
  },
  {
    title: "Sand party",
    subtitle: "Realtime 3D terrain recognition with computer vision",
    description:
      "A projection mapping on white sand using 3D depth cameras and Unity. The sand (terrain) point cloud is processed in realtime, changing the projected textures of water, land, mountains etc. 3D printed AR markers are also available for interactive features.",
    image: "../project-2.gif",
    link: "https://dailytinkerer.blogspot.com/2020/04/interactive-digital-sandbox.html",
  },
  {
    title: "Floor projection mapping (Sensors part)",
    subtitle: "Top view cameras based people detection",
    description:
      "A group of depth cameras attached to the ceiling detect people (height) and disperse the leaves underneath. There are also small animals that appear and disappear when stomped on.",
    image: "../project-3.gif",
    link: "https://dailytinkerer.blogspot.com/2020/04/image-processing-with-intel-realsense_18.html",
  },
  {
    title: "Wall touch screen (Sensors part)",
    subtitle: "LIDAR based touch wall",
    description:
      "The LIDAR is attached to the wall looking down at the floor. It is calibrated to ignore the floor, and if we touch the wall our hands will be registered as an obstacle. This enables us to detect touches.",
    image: "../project-4.gif",
    link: "https://dailytinkerer.blogspot.com/2020/04/word-adventure-gather-letters-to.html",
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesse Hicks",
    company: "Zoozle",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
];

export const skills = [
  "Unity",
  "Computer vision",
  "CPP",
  "React",
  "Node",
  "Machine learning",
];
