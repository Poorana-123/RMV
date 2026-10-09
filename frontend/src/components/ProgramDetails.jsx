import { useParams, Link } from "react-router-dom";
import "../styles/ProgramDetails.css";

const programs = [
  {
    id: 1,
    title: "Website Development",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "3 Months",
    description:
      "Design, build and launch fast, responsive business websites — live on a real domain.",
    overview:
      "Build what businesses pay for — from a first website to professional business websites.",
    learn: [
      "HTML5, CSS3 & responsive layouts",
      "JavaScript essentials & interactivity",
      "WordPress & builders for client sites",
      "Domains, hosting, SSL & launch",
    ],
    tools: [
      "VS Code",
      "HTML",
      "CSS",
      "JavaScript",
      "WordPress",
      "Netlify",
      "Figma",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },

  {
    id: 2,
    title: "Web App Development",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    level: "Intermediate",
    duration: "4 Months",
    description:
      "Build full-stack web apps with logins, databases and APIs — the kind companies hire for.",
    overview:
      "Learn to develop full-stack web applications using modern frontend, backend and database technologies.",
    learn: [
      "React front-ends & state",
      "Node.js & Express",
      "REST APIs",
      "MongoDB & MySQL databases",
      "Authentication, deployment & cloud basics",
    ],
    tools: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Postman",
      "MongoDB",
      "Vercel",
      "AWS basics",
    ],
  },

  {
    id: 3,
    title: "Mobile App Development",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    level: "Intermediate",
    duration: "4 Months",
    description:
      "Create Android and iOS apps from one codebase and publish them to the stores.",
    overview:
      "Learn mobile application development and prepare apps for publication on Android and iOS.",
    learn: [
      "Flutter & Dart fundamentals",
      "Screens, navigation & state",
      "Firebase, APIs & push notifications",
      "Testing, release builds & publishing",
    ],
    tools: [
      "Flutter",
      "Dart",
      "Firebase",
      "Android Studio",
      "React Native (intro)",
      "Play Console",
    ],
  },

  {
    id: 4,
    title: "Data Analyst",
    category: "Data & Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "3 Months",
    description:
      "Turn raw data into clear answers using spreadsheets, SQL, Python and dashboards.",
    overview:
      "Develop practical data analysis skills to identify patterns, understand trends and support business decisions.",
    learn: [
      "Advanced Excel: formulas, pivots & lookups",
      "SQL for querying & joining data",
      "Python (Pandas) for cleaning & analysis",
      "Statistics & storytelling with data",
    ],
    tools: [
      "Excel",
      "Google Sheets",
      "Pandas",
      "Jupyter",
      "SQL",
      "Power BI",
      "Python",
    ],
  },

  {
    id: 5,
    title: "Business Intelligence Analyst",
    category: "Data & Analytics",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    level: "Intermediate",
    duration: "4 Months",
    description:
      "Scrape data, model it and build dashboards that decision-makers rely on.",
    overview:
      "Learn how to collect, transform, model and visualise data to create meaningful business insights.",
    learn: [
      "Data visualisation & dashboards",
      "Data scraping from websites & APIs",
      "Data modelling: star schema & DAX",
      "ETL pipelines & AI-assisted insights",
    ],
    tools: [
      "Power BI",
      "Tableau",
      "Power Query",
      "Looker Studio",
      "BeautifulSoup",
      "Scrapy",
      "Selenium",
    ],
  },

  {
    id: 6,
    title: "Blockchain Developer (Solidity)",
    category: "Data & Blockchain",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    level: "Advanced",
    duration: "4 Months",
    description:
      "Write, test and deploy smart contracts and connect them to real decentralised apps.",
    overview:
      "Explore blockchain development and learn to build secure smart contracts and decentralised applications.",
    learn: [
      "Blockchain, Ethereum & EVM basics",
      "Solidity contracts, ERC-20 & ERC-721",
      "Testing, security & gas optimisation",
      "dApp front-ends with wallets",
    ],
    tools: [
      "Solidity",
      "Remix",
      "MetaMask",
      "Hardhat",
      "Ethers.js",
      "Foundry",
      "OpenZeppelin",
    ],
  },

  {
    id: 7,
    title: "AI Agent Development",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    level: "Advanced",
    duration: "4 Months",
    description:
      "Build AI agents that reason, use tools and automate real business workflows.",
    overview:
      "Learn to create AI-powered agents that connect language models with tools, data sources and automated workflows.",
    learn: [
      "LLM APIs, prompting & structured outputs",
      "RAG with vector databases",
      "Tool-using & multi-agent systems",
      "Workflow automation & deployment",
    ],
    tools: [
      "Python",
      "OpenAI API",
      "LangChain",
      "Claude API",
      "LangGraph",
      "Make",
      "Chroma",
      "n8n",
    ],
  },

  {
    id: 8,
    title: "AI Utilities & Automation",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "2 Months",
    description:
      "Use generative AI to create content and market faster — no coding needed.",
    overview:
      "Learn to use generative AI tools for content creation, visual design, video production and marketing workflows.",
    learn: [
      "AI image generation & editing",
      "AI video generation & voiceovers",
      "Prompt engineering for every task",
      "LLM marketing: AI-powered campaigns",
    ],
    tools: [
      "ChatGPT",
      "Claude",
      "Midjourney",
      "Gemini",
      "Runway",
      "ElevenLabs",
      "Canva AI",
    ],
  },

  {
    id: 9,
    title: "Search & Growth Marketing",
    category: "Marketing & Business",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "3 Months",
    description:
      "Master Google Search, ads, social media, app store and AI-answer visibility.",
    overview:
      "Build digital marketing skills to improve online visibility, attract audiences and measure campaign performance.",
    learn: [
      "SEO: on-page, technical & local",
      "SEM: Google Ads campaigns",
      "SMM: Instagram, LinkedIn & YouTube",
      "ASO & LLM optimisation",
    ],
    tools: [
      "Search Console",
      "Semrush",
      "Google Ads",
      "Ahrefs",
      "GA4",
      "Meta Ads",
      "App Store Connect",
    ],
  },

  {
    id: 10,
    title: "Sales & Marketing",
    category: "Marketing & Business",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "3 Months",
    description:
      "Learn how IT companies win clients, from finding leads to closing deals and delivery.",
    overview:
      "Develop practical sales, marketing and project coordination skills for IT businesses and freelance work.",
    learn: [
      "Digital marketing & lead generation",
      "IT inbound & outbound sales, closures",
      "Project management for IT projects",
      "CRM, lead sourcing & freelance tools",
    ],
    tools: [
      "HubSpot",
      "Zoho CRM",
      "Sales Navigator",
      "Fiverr",
      "Apollo.io",
      "Jira",
      "Trello",
      "Upwork",
    ],
  },

  {
    id: 11,
    title: "Game Design",
    category: "Creative",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    level: "Intermediate",
    duration: "4 Months",
    description:
      "Design and build playable 2D and 3D games, from concept to a published build.",
    overview:
      "Explore game design, development and visual creation while building playable projects for different platforms.",
    learn: [
      "Game design & level design",
      "Unity with C# scripting",
      "3D modelling & animation basics",
      "Publishing to mobile & PC",
    ],
    tools: [
      "Unity",
      "C#",
      "Blender",
      "Unreal Engine (intro)",
      "Aseprite",
    ],
  },

  {
    id: 12,
    title: "Graphic & Creative Art Design",
    category: "Creative",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "3 Months",
    description:
      "Create brand identities, social creatives and digital art that clients pay for.",
    overview:
      "Learn visual design fundamentals and create professional graphics for brands, digital platforms and print.",
    learn: [
      "Design principles, colour & typography",
      "Logos, branding & print design",
      "Social media creatives & UI basics",
      "Digital illustration & portfolio",
    ],
    tools: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Procreate",
    ],
  },
];

function ProgramDetails() {
  const { id } = useParams();

  const program = programs.find((item) => item.id === Number(id));

  if (!program) {
    return (
      <main className="program-not-found">
        <h1>Program not found</h1>
        <Link to="/courses">Back to Programs</Link>
      </main>
    );
  }

  return (
    <main className="program-details-page">
      <section className="program-details-hero">
        <div className="program-details-copy">
          <Link to="/courses" className="program-back-link">
            ← All Programs
          </Link>

          <span className="program-details-eyebrow">
            {program.category.toUpperCase()}
          </span>

          <h1>{program.title}</h1>

          <p>{program.overview}</p>

          <div className="program-details-meta">
            <span>
              <small>LEVEL</small>
              <strong>{program.level}</strong>
            </span>

            <span>
              <small>DURATION</small>
              <strong>{program.duration}</strong>
            </span>
          </div>

          <Link
            to={`/contact?program=${encodeURIComponent(program.title)}`}
            className="program-enroll-button"
          >
            Enroll Now <span>↗</span>
          </Link>
        </div>

        <div className="program-details-image">
          <img
            src={program.image}
            alt={program.title}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <span>RMV ACADEMY</span>
        </div>
      </section>

      <section className="program-details-content">
        <div className="program-learn-panel">
          <span className="details-label">YOUR LEARNING JOURNEY</span>
          <h2>What you'll learn</h2>

          <div className="program-learning-list">
            {program.learn.map((item, index) => (
              <div className="program-learning-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <b>↗</b>
              </div>
            ))}
          </div>
        </div>

        <aside className="program-tools-panel">
          <span className="details-label">PRACTICAL TOOLKIT</span>
          <h2>Tools you'll use</h2>

          <div className="program-tools-list">
            {program.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <div className="program-tools-note">
            <span>RMV ACADEMY</span>
            <p>Learn. Practice. Build. Grow.</p>
          </div>
        </aside>
      </section>

      <section className="program-details-cta">
        <div>
          <span>READY TO GET STARTED?</span>
          <h2>
            Turn your interest
            <br />
            into a <em>skill.</em>
          </h2>
        </div>

        <Link
          to={`/contact?program=${encodeURIComponent(program.title)}`}
        >
          Enroll Now <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

export default ProgramDetails;