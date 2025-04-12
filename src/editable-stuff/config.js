// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Edward",
  middleName: "",
  lastName: "Quarm",
  message: " | Machine Learning Engineer | Optimization Scientist | Software Engineer | AI Consultant |",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/edwardquarm",
    },
    
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/ed_quarm/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/edward-quarm/",
    },
    
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/picture.jpg"),
  imageSize: 375,
  message:
    "Hello! My name is Edward Quarm and I am a Senior Software Engineer at Red Hat OpenShift AI (RHOAI) in the Model Serving Runtimes Team. I have 5+ years of experience building scalable Generative AI systems (Text, Image and Audio) using Open-source software on cloud environments (AWS , Azure and Google Cloud).",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "edwardquarm", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const publications = {
  show: true,
  heading: "Publications",
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Kubernetes (Istio, ArgoCD, KServe, Ray, GPUs)", value: 100 },
    { name: "Python (CNNs, PyTorch, TensorFlow)", value: 100 },
    { name: "Runtime (Triton, TorchServe, FastAPI, OpenVINO)", value: 100 },
    { name: "Large Language Models (RAGs, Agents, VLLM, Tuning)", value: 100 },
    { name: "AWS, GCP, Azure", value: 100 },
    { name: "Kubeflow Pipelines", value: 100 },
    { name: "SQL", value: 100 },
    { name: "Oracle APEX", value: 90 },
    
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking to collaborate on open-source projects! If you're interested, have any questions, or you just want to say hi, please feel free to email me at",
  email: "equarmjnr@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Software Engineer OpenShift AI',
      companylogo: require('../assets/img/redhat.png'),
      date: 'February 2025 – Present',
    },
    {
      role: 'Machine Learning Engineer',
      companylogo: require('../assets/img/lore.png'),
      date: 'September 2022 – February 2025',
    },
    {
      role: 'Data Scientist Print Quality',
      companylogo: require('../assets/img/Xerox-logo.png'),
      date: 'January 2022 – September 2022',
    },
    {
      role: 'Optimization Intern',
      companylogo: require('../assets/img/pnnl.jpg'),
      date: 'June 2021 – September 2021',
    },
    {
      role: 'Machine Learning Intern',
      companylogo: require('../assets/img/enstoa.png'),
      date: 'June 2019 – August 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, publications, leadership, getInTouch, experiences };
