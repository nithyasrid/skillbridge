import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, BadgeCheck, BarChart3, BookOpen, BriefcaseBusiness,
  CheckCircle2, ChevronRight, Code2, Github, GraduationCap, LayoutDashboard,
  Link2, Menu, Network, Search, ShieldCheck, Sparkles, Target, UserRound,
  X, Zap
} from "lucide-react";
import "./styles.css";

const initialSkills = [
  { name: "SQL", level: 92, evidence: 4, color: "violet" },
  { name: "Java", level: 86, evidence: 5, color: "blue" },
  { name: "Python", level: 84, evidence: 4, color: "cyan" },
  { name: "Kafka", level: 76, evidence: 3, color: "pink" },
  { name: "Spark", level: 72, evidence: 2, color: "orange" },
  { name: "Spring Boot", level: 78, evidence: 3, color: "green" }
];

const projects = [
  {
    name: "ShopFlow",
    type: "E-commerce Data Platform",
    description: "Real-time commerce data platform with ingestion, transformation and analytics.",
    skills: ["Java", "SQL", "Kafka", "Spark", "Spring Boot"],
    evidence: [
      ["Kafka", "Producer → Topic → Consumer pipeline"],
      ["SQL", "PostgreSQL schema + analytical queries"],
      ["Spark", "PySpark transformation pipeline"],
      ["Java", "Spring Boot REST services"]
    ]
  },
  {
    name: "CargoPulse 2.0",
    type: "Supply Chain Intelligence",
    description: "Data platform for shipment visibility, transformation and operational analytics.",
    skills: ["Python", "SQL", "Airflow", "BigQuery", "Docker"],
    evidence: [
      ["Python", "ETL transformation modules"],
      ["SQL", "Warehouse queries and data models"],
      ["Airflow", "Scheduled pipeline orchestration"],
      ["Docker", "Containerized services"]
    ]
  },
  {
    name: "MediTrust",
    type: "Healthcare Data Reliability",
    description: "Pipeline concept focused on reliable hospital data and patient-safety analytics.",
    skills: ["Python", "Spark", "Kafka", "Airflow", "BigQuery"],
    evidence: [
      ["Python", "Data validation and transformation"],
      ["Spark", "Distributed processing"],
      ["Kafka", "Streaming ingestion"],
      ["Airflow", "Workflow orchestration"]
    ]
  }
];

function App() {
  const [page, setPage] = useState("home");
  const [menu, setMenu] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [repo, setRepo] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [customProject, setCustomProject] = useState(null);

  const allProjects = useMemo(
    () => customProject ? [customProject, ...projects] : projects,
    [customProject]
  );

  function analyzeRepo() {
    if (!repo.trim()) return;
    setAnalyzing(true);
    setTimeout(() => {
      const name = repo.split("/").filter(Boolean).pop()?.replace(/[-_]/g, " ") || "New Project";
      setCustomProject({
        name: name.replace(/\b\w/g, c => c.toUpperCase()),
        type: "GitHub Project Analysis",
        description: "SkillBridge analyzed the submitted project and mapped technologies to evidence.",
        skills: ["Java", "SQL", "Python", "Git", "REST APIs"],
        evidence: [
          ["Java", "Source files and application structure detected"],
          ["SQL", "Database queries/schema evidence detected"],
          ["Python", "Python modules detected"],
          ["Git", "Repository history and project structure"],
        ]
      });
      setAnalyzing(false);
      setPage("dashboard");
    }, 1400);
  }

  return (
    <div className="app">
      <header className="nav">
        <button className="brand" onClick={() => setPage("home")}>
          <span className="brandMark"><Sparkles size={18}/></span>
          <span>Skill<span>Bridge</span></span>
        </button>

        <nav className={menu ? "navLinks open" : "navLinks"}>
          <button onClick={() => {setPage("home");setMenu(false)}}>Home</button>
          <button onClick={() => {setPage("dashboard");setMenu(false)}}>Student</button>
          <button onClick={() => {setPage("projects");setMenu(false)}}>Projects</button>
          <button onClick={() => {setPage("recruiter");setMenu(false)}}>Recruiter</button>
        </nav>

        <div className="navActions">
          <button className="ghostBtn" onClick={() => setPage("recruiter")}>View Passport</button>
          <button className="primaryBtn small" onClick={() => setPage("analyze")}>Analyze Project <ArrowRight size={15}/></button>
        </div>
        <button className="mobileMenu" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
      </header>

      {page === "home" && <Home setPage={setPage}/>}
      {page === "dashboard" && <Dashboard skills={initialSkills} projects={allProjects} onProject={(p)=>{setSelectedProject(p);setPage("evidence")}}/>}
      {page === "projects" && <Projects projects={allProjects} onProject={(p)=>{setSelectedProject(p);setPage("evidence")}}/>}
      {page === "evidence" && <Evidence project={selectedProject} setPage={setPage}/>}
      {page === "analyze" && <Analyze repo={repo} setRepo={setRepo} analyzing={analyzing} analyze={analyzeRepo} setPage={setPage}/>}
      {page === "recruiter" && <Recruiter skills={initialSkills} projects={allProjects} onProject={(p)=>{setSelectedProject(p);setPage("evidence")}}/>}

      <footer>
        <div className="brand footerBrand"><span className="brandMark"><Sparkles size={16}/></span>SkillBridge</div>
        <span>Project → Evidence → Skills → Opportunity</span>
      </footer>
    </div>
  );
}

function Home({setPage}) {
  return <main>
    <section className="hero">
      <div className="heroCopy">
        <div className="eyebrow"><span className="pulse"></span> Education innovation • Skill evidence</div>
        <h1>Turn student projects into <em>proof of skill.</em></h1>
        <p className="heroText">
          SkillBridge connects what students build with the skills they can demonstrate —
          creating a clearer language between students, colleges and recruiters.
        </p>
        <div className="heroBtns">
          <button className="primaryBtn" onClick={()=>setPage("analyze")}>Build My Skill Passport <ArrowRight size={17}/></button>
          <button className="secondaryBtn" onClick={()=>setPage("dashboard")}>Explore Demo</button>
        </div>
        <div className="miniStats">
          <span><BadgeCheck/> Evidence-based</span>
          <span><ShieldCheck/> Skill mapped</span>
          <span><Zap/> Recruiter ready</span>
        </div>
      </div>
      <div className="heroVisual">
        <div className="orbitCard cardBack"></div>
        <div className="passportCard">
          <div className="passportTop">
            <div className="avatar">NS</div>
            <div><small>SKILL PASSPORT</small><h3>Nithya Sri</h3><p>Software & Data Engineering</p></div>
            <BadgeCheck className="verified"/>
          </div>
          <div className="skillRows">
            {initialSkills.slice(0,4).map(s=><div className="skillRow" key={s.name}>
              <div><span>{s.name}</span><b>{s.level}%</b></div>
              <div className="progress"><i style={{width:`${s.level}%`}}></i></div>
            </div>)}
          </div>
          <div className="passportFoot"><span><Code2 size={14}/> 3 projects</span><span><Link2 size={14}/> 18 evidence links</span></div>
        </div>
        <div className="floatingChip"><CheckCircle2 size={16}/> Evidence verified</div>
      </div>
    </section>

    <section className="section">
      <div className="sectionHead"><div><div className="eyebrow">THE GAP</div><h2>Projects are everywhere.<br/><span>Proof of skill isn't.</span></h2></div>
        <p>Students build impressive projects, but recruiters often see only a title, a GitHub link and a few resume bullets. SkillBridge makes the evidence visible.</p>
      </div>
      <div className="problemGrid">
        <InfoCard icon={<GraduationCap/>} title="For students" text="Translate projects into a structured, growing record of demonstrable skills."/>
        <InfoCard icon={<BriefcaseBusiness/>} title="For recruiters" text="See skills with project evidence instead of relying only on keywords."/>
        <InfoCard icon={<Network/>} title="For colleges" text="Connect coursework and project outcomes to real-world capability."/>
      </div>
    </section>

    <section className="flowSection">
      <div className="eyebrow">THE SKILLBRIDGE MODEL</div>
      <h2>From project to opportunity.</h2>
      <div className="flow">
        {[
          ["01","PROJECT","What you built",<Code2/>],
          ["02","EVIDENCE","What you actually did",<Target/>],
          ["03","SKILL MAP","What you can demonstrate",<BarChart3/>],
          ["04","PASSPORT","How employers see it",<BadgeCheck/>]
        ].map((x,i)=><React.Fragment key={x[0]}>
          <div className="flowItem"><span>{x[0]}</span>{x[3]}<b>{x[1]}</b><small>{x[2]}</small></div>
          {i<3 && <ChevronRight className="flowArrow"/>}
        </React.Fragment>)}
      </div>
    </section>
  </main>
}

function InfoCard({icon,title,text}) {
  return <div className="infoCard"><div className="iconBox">{icon}</div><h3>{title}</h3><p>{text}</p><span className="learn">How it works <ArrowRight size={14}/></span></div>
}

function Dashboard({skills,projects,onProject}) {
  return <main className="dashboard pagePad">
    <PageTitle eyebrow="STUDENT DASHBOARD" title="Your skills, backed by evidence." text="A living skill profile built from what you have actually created."/>
    <div className="metricGrid">
      <Metric title="Projects" value={projects.length} icon={<Code2/>} sub="Projects mapped"/>
      <Metric title="Skills" value="12" icon={<BarChart3/>} sub="Demonstrated skills"/>
      <Metric title="Evidence" value="18" icon={<Link2/>} sub="Evidence points"/>
      <Metric title="Profile" value="86%" icon={<BadgeCheck/>} sub="Completeness"/>
    </div>
    <div className="twoCol">
      <section className="panel">
        <PanelHead title="Skill map" action="View full passport"/>
        <div className="bigSkills">{skills.map(s=><SkillBar key={s.name} skill={s}/>)}</div>
      </section>
      <section className="panel">
        <PanelHead title="Recent projects"/>
        <div className="projectList">{projects.map(p=><button className="projectItem" key={p.name} onClick={()=>onProject(p)}>
          <span className="projectIcon"><Code2 size={17}/></span><span><b>{p.name}</b><small>{p.type}</small></span><ChevronRight/>
        </button>)}</div>
      </section>
    </div>
  </main>
}

function Metric({title,value,icon,sub}) {
  return <div className="metric"><div className="metricIcon">{icon}</div><div><small>{title}</small><strong>{value}</strong><span>{sub}</span></div></div>
}
function SkillBar({skill}) {
  return <div className="bigSkill"><div><span>{skill.name}</span><small>{skill.evidence} evidence points</small><b>{skill.level}%</b></div><div className="progress"><i className={skill.color} style={{width:`${skill.level}%`}}></i></div></div>
}
function PanelHead({title,action}) {
  return <div className="panelHead"><h3>{title}</h3>{action && <span>{action} <ArrowRight size={14}/></span>}</div>
}
function PageTitle({eyebrow,title,text}) {
  return <div className="pageTitle"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{text}</p></div>
}

function Projects({projects,onProject}) {
  return <main className="pagePad">
    <PageTitle eyebrow="PROJECT EVIDENCE" title="Everything you build becomes evidence." text="Select a project to see how SkillBridge translates implementation into demonstrated skills."/>
    <div className="cardsGrid">{projects.map((p,i)=><div className="projectCard" key={p.name}>
      <div className="projectCardTop"><span className="number">0{i+1}</span><span className="tag">{p.skills.length} skills</span></div>
      <h3>{p.name}</h3><small>{p.type}</small><p>{p.description}</p>
      <div className="tagList">{p.skills.map(s=><span key={s}>{s}</span>)}</div>
      <button className="textBtn" onClick={()=>onProject(p)}>View evidence <ArrowRight size={15}/></button>
    </div>)}</div>
  </main>
}

function Evidence({project,setPage}) {
  return <main className="pagePad">
    <button className="backBtn" onClick={()=>setPage("projects")}>← Back to projects</button>
    <PageTitle eyebrow="EVIDENCE MAP" title={project.name} text={project.description}/>
    <div className="evidenceLayout">
      <section className="panel evidenceMain">
        <PanelHead title="Project → skill evidence"/>
        {project.evidence.map(([skill,desc])=><div className="evidenceRow" key={skill}>
          <div className="evidenceSkill"><span className="check"><CheckCircle2 size={17}/></span><b>{skill}</b></div>
          <div><p>{desc}</p><small>Linked to project implementation</small></div>
          <span className="verifiedText"><BadgeCheck size={15}/> Mapped</span>
        </div>)}
      </section>
      <aside className="panel passportMini">
        <div className="passportMiniTop"><div className="avatar">NS</div><BadgeCheck/></div>
        <small>SKILL PASSPORT</small><h3>Nithya Sri</h3><p>Evidence-backed profile</p>
        <div className="divider"></div>
        {project.skills.map(s=><div className="miniSkill" key={s}><span>{s}</span><CheckCircle2 size={15}/></div>)}
      </aside>
    </div>
  </main>
}

function Analyze({repo,setRepo,analyzing,analyze,setPage}) {
  return <main className="pagePad analyzePage">
    <PageTitle eyebrow="PROJECT ANALYZER" title="Turn a GitHub project into a skill map." text="Paste a public repository URL. This demo generates an evidence-backed Skill Passport view."/>
    <div className="analyzer">
      <div className="analyzerIcon"><Github size={27}/></div>
      <h2>Analyze your repository</h2>
      <p>For this MVP, the analysis is simulated so you can demonstrate the complete product journey without requiring API keys.</p>
      <label>GitHub repository URL</label>
      <div className="repoInput"><Github size={19}/><input value={repo} onChange={e=>setRepo(e.target.value)} placeholder="https://github.com/username/project"/><button onClick={analyze} disabled={analyzing}>{analyzing ? "Analyzing..." : "Analyze"}</button></div>
      <div className="demoHint"><Sparkles size={16}/><span>Try: <button onClick={()=>setRepo("https://github.com/nithyasri/shopflow")}>ShopFlow demo repository</button></span></div>
      <div className="analyzerSteps">
        <span><CheckCircle2/> Detect technologies</span><span><CheckCircle2/> Map evidence</span><span><CheckCircle2/> Generate passport</span>
      </div>
    </div>
    <button className="backBtn center" onClick={()=>setPage("dashboard")}>Explore the demo dashboard →</button>
  </main>
}

function Recruiter({skills,projects,onProject}) {
  return <main className="pagePad recruiterPage">
    <div className="recruiterBanner"><div><div className="eyebrow">RECRUITER VIEW</div><h1>See capability, not just keywords.</h1><p>SkillBridge gives employers a project-backed view of what a candidate can demonstrate.</p></div><div className="verifiedBadge"><BadgeCheck/> Evidence-backed profile</div></div>
    <div className="candidate">
      <div className="candidateHead"><div className="avatar large">NS</div><div><h2>Nithya Sri</h2><p>ECE • Software & Data Engineering</p><span><MapPinDot/> Coimbatore, India</span></div><button className="primaryBtn small">Contact candidate</button></div>
      <div className="candidateBody">
        <section><PanelHead title="Demonstrated skills"/>{skills.map(s=><SkillBar key={s.name} skill={s}/>)}</section>
        <section><PanelHead title="Project evidence"/>{projects.map(p=><button className="projectItem" key={p.name} onClick={()=>onProject(p)}><span className="projectIcon"><Code2/></span><span><b>{p.name}</b><small>{p.skills.join(" • ")}</small></span><ChevronRight/></button>)}</section>
      </div>
    </div>
  </main>
}

function MapPinDot() { return <span className="pin">●</span> }

createRoot(document.getElementById("root")).render(<App />);
