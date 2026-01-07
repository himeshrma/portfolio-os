const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [];

const techStack = [
  {
    category: "Languages",
    items: ["C++", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "GSAP", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Web3",
    items: ["Solidity", "Web3.js", "Ethers.js", "Hardhat", "Foundry"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    category: "Design & UI",
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#010336",
    link: "https://github.com/himeshrma",
  },
  {
    id: 2,
    text: "Behance",
    icon: "/icons/atom.svg",
    bg: "#003ECB",
    link: "https://www.behance.net/5767bd71",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#000000",
    link: "https://x.com/himeshrma",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0A66C2",
    link: "http://linkedin.com/in/himesh-sharma-50a20126a",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
  {
    id: 5,
    img: "/images/gal5.png",
  },
  {
    id: 6,
    img: "/images/gal6.png",
  },
  {
    id: 7,
    img: "/images/gal7.png",
  },
  {
    id: 8,
    img: "/images/gal8.png",
  },
  {
    id: 9,
    img: "/images/gal9.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Subscription Detection system",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-1", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Subscripion API.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Subscription Detection system is a backend-focused application designed to manage and monitor recurring subscriptions through automated workflows.",
            "It eliminates manual tracking by detecting subscription expirations, handling renewal logic, and updating subscription states programmatically.",
            "The system is built around secure REST APIs with authentication, structured data models, and background jobs for time-based subscription checks.",
            "It emphasizes production-ready backend practices such as clean architecture, centralized error handling, and reliable business logic execution.",
          ],
        },
        {
          id: 2,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/himeshrma/subscription-detection-api",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "view.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "",
        },
        {
          id: 5,
          name: "Live.view",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // // ▶ Project 2
    // {
    //   id: 6,
    //   name: "AI Resume Analyzer",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-52 right-80",
    //   windowPosition: "top-[20vh] left-7",
    //   children: [
    //     {
    //       id: 1,
    //       name: "AI Resume Analyzer Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 right-10",
    //       description: [
    //         "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
    //         "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
    //         "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
    //         "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "ai-resume-analyzer.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
    //       position: "top-20 left-20",
    //     },
    //     {
    //       id: 4,
    //       name: "ai-resume-analyzer.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 left-80",
    //       imageUrl: "/images/project-2.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 left-5",
    //     },
    //   ],
    // },

    // ▶ Project 2
    {
      id: 6,
      name: "Portfolio Webpapp",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-5",
      children: [
        {
          id: 1,
          name: "Portfolio.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-60",
          description: [
            "The Portfolio Website is a frontend application built with a strong focus on application logic and state management rather than visual presentation.",
            "It implements a centralized global state to manage window behavior such as opening, closing, minimizing, and focus handling across multiple components.",
            "Instead of isolated UI states, the project models window interactions as shared application state, ensuring predictable behavior and scalability.",
            "The system is structured to simulate real desktop-like workflows, emphasizing clean state transitions, component communication, and maintainable logic design.",
          ],
        },
        {
          id: 2,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/himeshrma/portfolio-os",
          position: "top-52 left-0",
        },

        {
          id: 4,
          name: "Portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "url",
          position: "top-10 left-0",
          href: "https://www.figma.com/design/NOM4uAPkj5BA0CSMnjYrx8/Untitled?node-id=1-5000&t=OUOaWKFHE0zRIXS7-1",
        },
        {
          id: 5,
          name: "live.view",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://portfolio-os-taupe.vercel.app/",
          position: "top-50 left-40",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Reel",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-12",
      children: [
        {
          id: 1,
          name: "Food Reel App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Food Reel application is a full-stack system designed to support short-form food video content similar to an Instagram-style content feed.",
            "The backend is built around a clear domain model with separate schemas for users and content creators, where creators represent restaurants uploading food-related video content.",
            "It implements structured APIs to handle content creation, access control, and data flow between creators and consumers in a scalable manner.",
            "A minimal mobile-first frontend is integrated to consume backend APIs, with the primary focus placed on backend architecture, data modeling, and business logic.",
          ],
        },
        {
          id: 2,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/himeshrma/Food-reel-app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/himi.jpeg",
    },
    // {
    //   id: 2,
    //   name: "casual-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-28 right-72",
    //   imageUrl: "/images/adrian-2.jpg",
    // },
    // {
    // id: 3,
    // name: "conference-me.png",
    // icon: "/images/image.png",
    // kind: "file",
    // fileType: "img",
    // position: "top-52 left-80",
    // imageUrl: "/images/adrian-3.jpeg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/himi.jpeg",
      description: [
        "Hi, I’m Himesh, a software developer focused on building reliable, scalable, and well-structured web applications,",
        "I work primarily with JavaScript, React, Next.js, Node.js, and modern web tooling to develop end-to-end features,",
        "I enjoy solving real-world problems through clean logic, strong fundamentals, and maintainable code,",
        "I prioritize performance, code readability, and system reliability while writing production-grade applications,",
        "Currently focused on strengthening DSA, core CS fundamentals, and building impactful projects in preparation for SDE roles",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
