import React, { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Box,
  CheckCircle2,
  Cloud,
  Code2,
  ExternalLink,
  FileDown,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  Rocket,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  Wrench,
  X,
} from "lucide-react";
import { projects, skills, credentials, roadmap, learningNotes } from "./data/projects.js";

const GITHUB = "https://github.com/Pravesh880082";
const LINKEDIN = "https://www.linkedin.com/in/pravesh-kumar-63b625372";
const EMAIL = "pkspravesh03@gmail.com";
const RESUME = "/resume.pdf";

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function ArchitectureFlow({ items }) {
  return (
    <div className="architecture-flow">
      {items.map((item, index) => (
        <React.Fragment key={`${item}-${index}`}>
          <div className="architecture-node">
            <span className="architecture-node-number">{String(index + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </div>
          {index < items.length - 1 && <ArrowRight className="architecture-arrow" size={17} aria-hidden="true" />}
        </React.Fragment>
      ))}
    </div>
  );
}

function ExternalLinkLabel({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

function ProjectIcon({ id }) {
  if (id === "gitops") return <Server size={23} aria-hidden="true" />;
  if (id === "cloud-native") return <Cloud size={23} aria-hidden="true" />;
  return <Workflow size={23} aria-hidden="true" />;
}

function App() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState("gitops");
  const [terminalCommand, setTerminalCommand] = useState("kubectl get pods");
  const categories = ["All", "Kubernetes", "Containers", "CI/CD"];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (filter === "All") return true;
      const searchable = `${project.title} ${project.category} ${project.stack.join(" ")}`.toLowerCase();
      if (filter === "Kubernetes") return /kubernetes|k3s|gitops/.test(searchable);
      if (filter === "Containers") return /docker|container|postgres/.test(searchable);
      return /ci\/cd|github actions|automation/.test(searchable);
    });
  }, [filter]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Pravesh home">
          <span className="brand-mark">P<span>.</span></span>
          <span>Pravesh Kumar</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {[["About", "#about"], ["Projects", "#projects"], ["Workflow", "#architecture"], ["Terminal", "#terminal-lab"], ["Toolkit", "#skills"], ["Learning", "#journey"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href={RESUME} target="_blank" rel="noreferrer">
            Resume <FileDown size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section id="home" className="hero">
          <div className="hero-grid-glow glow-one" aria-hidden="true" />
          <div className="hero-grid-glow glow-two" aria-hidden="true" />
          <div className="hero-content">
            <div className="availability"><span className="pulse" /> OPEN TO DEVOPS / CLOUD INTERNSHIPS</div>
            <p className="hero-kicker">HELLO, I'M PRAVESH KUMAR</p>
            <h1>From source code to cloud.<br /><span>One deployment at a time.</span></h1>
            <p className="hero-copy">
              I build and troubleshoot hands-on projects with AWS, Docker, GitHub Actions, Terraform fundamentals, and Kubernetes. I learn by shipping, debugging real setup issues, and documenting what works.
            </p>
            <div className="hero-techs" aria-label="Core technologies">
              {["AWS EC2", "Docker", "GitHub Actions", "Kubernetes / k3s", "Terraform"].map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="button button-outline" href={RESUME} target="_blank" rel="noreferrer"><FileDown size={17} aria-hidden="true" /> View resume</a>
            </div>
            <div className="hero-links" aria-label="Contact and profile links">
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={`mailto:${EMAIL}`}><Mail size={17} aria-hidden="true" /> Email</a>
            </div>
          </div>

          <div className="pipeline-card" aria-label="Conceptual project workflow">
            <div className="pipeline-card-top">
              <div className="terminal-dots" aria-hidden="true"><i /><i /><i /></div>
              <span>PROJECT WORKFLOW</span>
              <span className="pipeline-label">CONCEPTUAL</span>
            </div>
            <div className="pipeline-intro">
              <span className="pipeline-icon"><GitBranch size={19} aria-hidden="true" /></span>
              <div><strong>kubernetes-gitops-platform</strong><p>Code → image → cluster</p></div>
            </div>
            <div className="pipeline-steps">
              <div className="pipeline-step"><span className="pipeline-step-number">01</span><span className="pipeline-step-icon"><Github size={18} aria-hidden="true" /></span><div><strong>GitHub</strong><small>Commit & version control</small></div><span className="pipeline-chip">SOURCE</span></div>
              <div className="pipeline-connector" aria-hidden="true" />
              <div className="pipeline-step"><span className="pipeline-step-number">02</span><span className="pipeline-step-icon"><Workflow size={18} aria-hidden="true" /></span><div><strong>GitHub Actions</strong><small>Build & deployment workflow</small></div><span className="pipeline-chip">CI/CD</span></div>
              <div className="pipeline-connector" aria-hidden="true" />
              <div className="pipeline-step"><span className="pipeline-step-number">03</span><span className="pipeline-step-icon"><Box size={18} aria-hidden="true" /></span><div><strong>Docker Hub</strong><small>Container image registry</small></div><span className="pipeline-chip">IMAGE</span></div>
              <div className="pipeline-connector" aria-hidden="true" />
              <div className="pipeline-step"><span className="pipeline-step-number">04</span><span className="pipeline-step-icon"><Server size={18} aria-hidden="true" /></span><div><strong>AWS EC2 + k3s</strong><small>Two-replica app deployment</small></div><span className="pipeline-chip pipeline-chip-green">DEPLOY</span></div>
            </div>
            <div className="pipeline-card-footer"><span><CheckCircle2 size={15} aria-hidden="true" /> Built through hands-on practice</span><span>3 PROJECTS</span></div>
            <p className="pipeline-disclaimer">Simplified view of the project workflow — not live cluster telemetry.</p>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} aria-hidden="true" /> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="section about-section">
          <SectionHeading eyebrow="01 / ABOUT ME" title="Curious by nature. Practical by habit." copy="I'm working toward an entry-level DevOps or cloud role through hands-on projects, focused practice, and clear technical documentation." />
          <div className="about-grid">
            <div className="about-note">
              <div className="quote-mark">“</div>
              <p>Learn → Build → Break → Debug → Fix → Understand.</p>
              <span>My approach to learning DevOps</span>
              <div className="about-note-bottom"><Wrench size={17} aria-hidden="true" /> Debugging is part of the build.</div>
            </div>
            <div className="about-detail">
              <h3>How I approach engineering</h3>
              <p>I like understanding the full path from source code to a running service: version control, container builds, infrastructure, deployment, and troubleshooting. I focus on fundamentals and repeatable steps rather than overstating my experience.</p>
              <div className="about-pill-row">
                <span><CheckCircle2 size={15} aria-hidden="true" /> Hands-on project practice</span>
                <span><BookOpen size={15} aria-hidden="true" /> Documentation-first learning</span>
                <span><ShieldCheck size={15} aria-hidden="true" /> Security-aware fundamentals</span>
              </div>
              <div className="mini-stats">
                <div><strong>03</strong><span>Hands-on projects</span></div>
                <div><strong>02</strong><span>k3s replicas configured</span></div>
                <div><strong>2028</strong><span>Expected graduation</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <SectionHeading eyebrow="02 / PROJECT CASE STUDIES" title="Show the work. Explain the decisions." copy="Explore the repositories, implementation notes, and troubleshooting lessons behind each build. These are personal learning projects — not claimed production experience." />
          <div className="project-toolbar">
            <div className="filters" role="group" aria-label="Filter projects">
              {categories.map((category) => (
                <button key={category} type="button" className={filter === category ? "filter active" : "filter"} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>
              ))}
            </div>
            <span className="project-count">{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}</span>
          </div>
          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <article className={`project-card ${project.id === "gitops" ? "project-card-featured" : ""}`} key={project.id}>
                <div className="project-card-top"><span className="project-index">CASE {String(index + 1).padStart(2, "0")}</span><span className="project-status"><span /> HANDS-ON BUILD</span></div>
                <div className="project-icon"><ProjectIcon id={project.id} /></div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.stack.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
                <div className="project-links">
                  <ExternalLinkLabel href={project.github}><Github size={16} aria-hidden="true" /> Repository</ExternalLinkLabel>
                  <button className="text-button" type="button" aria-expanded={expanded === project.id} onClick={() => setExpanded(expanded === project.id ? "" : project.id)}>
                    {expanded === project.id ? "Hide case study" : "Read case study"} <ArrowDown size={14} aria-hidden="true" />
                  </button>
                </div>
                {expanded === project.id && (
                  <div className="case-study">
                    <div><h4>Goal / problem</h4><p>{project.problem}</p></div>
                    <div><h4>What I implemented</h4><ul>{project.implementation.map((item) => <li key={item}>{item}</li>)}</ul></div>
                    <div><h4>What I learned</h4><p>{project.learning}</p></div>
                    {project.image && (
                      <figure className="project-evidence">
                        <a href={project.image.src} target="_blank" rel="noreferrer" aria-label="Open full-size project evidence image">
                          <img src={project.image.src} alt={project.image.alt} loading="lazy" />
                        </a>
                        <figcaption>{project.image.caption}</figcaption>
                      </figure>
                    )}
                    <div className="case-links">
                      {project.actions && <ExternalLinkLabel href={project.actions}><Workflow size={15} aria-hidden="true" /> Workflow runs</ExternalLinkLabel>}
                      {project.registry && <ExternalLinkLabel href={project.registry}><Box size={15} aria-hidden="true" /> Docker image</ExternalLinkLabel>}
                    </div>
                    <div className="case-flow-label"><Network size={15} aria-hidden="true" /> WORKFLOW OVERVIEW</div>
                    <ArchitectureFlow items={project.flow} />
                    <p className="case-note">Workflow is a simplified overview. Check the repository for the current implementation and run instructions.</p>
                  </div>
                )}
              </article>
            ))}
          </div>
          <div className="project-bottom-note"><Code2 size={17} aria-hidden="true" /><p><strong>My rule:</strong> show what I built, explain what broke, and be clear about what I'm still learning.</p><a href={GITHUB} target="_blank" rel="noreferrer">Explore all repositories <ArrowUpRight size={15} aria-hidden="true" /></a></div>
        </section>

        <section id="architecture" className="section architecture-section">
          <SectionHeading eyebrow="03 / SYSTEM THINKING" title="Follow the deployment path." copy="A clear picture of how source code, automation, images, and runtime environments connect is just as important as knowing the tools." />
          <div className="architecture-grid">
            <article className="architecture-card">
              <div className="architecture-card-head"><span className="architecture-icon"><Workflow size={20} aria-hidden="true" /></span><div><h3>CI/CD to Kubernetes</h3><p>Automated image publishing and K3s deployment practice</p></div></div>
              <ArchitectureFlow items={["GitHub", "GitHub Actions", "Docker Hub", "AWS EC2 / k3s", "FastAPI service"]} />
              <div className="architecture-caption">Kubernetes GitOps Platform</div>
              <a className="architecture-link" href="https://github.com/Pravesh880082/kubernetes-gitops-platform/actions" target="_blank" rel="noreferrer">Inspect workflow runs <ArrowUpRight size={14} aria-hidden="true" /></a>
            </article>
            <article className="architecture-card">
              <div className="architecture-card-head"><span className="architecture-icon"><Network size={20} aria-hidden="true" /></span><div><h3>Application + database</h3><p>Separate containers communicating over a Docker network</p></div></div>
              <ArchitectureFlow items={["FastAPI code", "Docker image", "App container", "Docker network", "PostgreSQL"]} />
              <div className="architecture-caption">Cloud-Native DevOps Platform</div>
              <a className="architecture-link" href="https://github.com/Pravesh880082/cloud-native-devops-platform" target="_blank" rel="noreferrer">Inspect source code <ArrowUpRight size={14} aria-hidden="true" /></a>
            </article>
          </div>
          <div className="evidence-panel">
            <div className="evidence-heading"><div className="evidence-heading-icon"><Terminal size={21} aria-hidden="true" /></div><div><span className="eyebrow">REAL PROJECT EVIDENCE</span><h3>Not just a diagram.</h3><p>A saved GitHub Actions run from my CI/CD project shows a successful Docker image build. Open the workflow history to inspect the repository yourself.</p></div></div>
            <div className="evidence-image-wrap">
              <a href="https://github.com/Pravesh880082/devops-cicd-project/actions" target="_blank" rel="noreferrer" className="evidence-image-link" aria-label="Open CI/CD project GitHub Actions workflow history">
                <img src="https://raw.githubusercontent.com/Pravesh880082/devops-cicd-project/main/Screenshot%202026-09-06%20100329.png" alt="GitHub Actions page showing a successful Docker CI pipeline run in the DevOps CI/CD project" loading="lazy" />
              </a>
              <div className="evidence-image-caption"><span><CheckCircle2 size={16} aria-hidden="true" /> Evidence captured in the project repository</span><a href="https://github.com/Pravesh880082/devops-cicd-project/actions" target="_blank" rel="noreferrer">View workflow history <ArrowUpRight size={14} aria-hidden="true" /></a></div>
            </div>
            <div className="evidence-links">
              <a href="https://github.com/Pravesh880082/kubernetes-gitops-platform/actions" target="_blank" rel="noreferrer"><Workflow size={17} aria-hidden="true" /><span><strong>Kubernetes deployment workflow</strong><small>Inspect the automation repository</small></span><ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="https://hub.docker.com/r/pravesh880082/kubernetes-gitops-platform" target="_blank" rel="noreferrer"><Box size={17} aria-hidden="true" /><span><strong>Published container image</strong><small>Docker Hub image repository</small></span><ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
            <p className="case-note">The embedded screenshot is hosted in the public CI/CD project repository. No live cluster status or uptime is implied.</p>
          </div>
        </section>

        <section id="terminal-lab" className="section terminal-lab-section">
          <SectionHeading eyebrow="04 / INTERACTIVE LAB" title="A tiny terminal, a practical mindset." copy="Explore example commands related to my learning projects. This is a safe, simulated terminal — it does not connect to or change any real server." />
          <div className="terminal-lab-card">
            <div className="terminal-lab-top"><div className="terminal-dots" aria-hidden="true"><i /><i /><i /></div><span>pravesh@devops-lab: ~</span><span className="terminal-demo-label">SIMULATED OUTPUT</span></div>
            <div className="terminal-lab-body">
              <div className="terminal-command-picker" role="group" aria-label="Choose a sample terminal command">
                {["kubectl get pods", "docker ps", "terraform plan", "git status"].map((command) => <button key={command} type="button" className={terminalCommand === command ? "terminal-command active" : "terminal-command"} onClick={() => setTerminalCommand(command)}>{command}</button>)}
              </div>
              <div className="terminal-output" aria-live="polite">
                <div><span className="terminal-prompt">$</span> {terminalCommand}</div>
                {terminalCommand === "kubectl get pods" && <pre>{`NAME                                READY   STATUS    RESTARTS
gitops-api-deployment-7c9d...      1/1     Running   0
gitops-api-deployment-7c9d...      1/1     Running   0`}</pre>}
                {terminalCommand === "docker ps" && <pre>{`CONTAINER       IMAGE          STATUS
devops-app      app:latest     Up
devops-db       postgres:16    Up`}</pre>}
                {terminalCommand === "terraform plan" && <pre>{`Example only — no resources changed.
Plan: review proposed changes before applying.
Always inspect cost and cleanup steps first.`}</pre>}
                {terminalCommand === "git status" && <pre>{`On branch main
Your working tree should be checked before committing.
Use git diff to review changes.`}</pre>}
                <p className="terminal-safety-note"><ShieldCheck size={14} aria-hidden="true" /> Example output for learning; not a live system connection.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <SectionHeading eyebrow="05 / TOOLKIT" title="A practical, growing toolkit." copy="Skills are grouped by where I've applied them, not by a claim of mastery. Hands-on depth will grow through repeated practice." />
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.category}>
                <div className="skill-card-top"><span className="skill-number">0{index + 1}</span><span className="skill-level">{group.level}</span></div>
                <h3>{group.category}</h3>
                <div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="credentials-wrap">
            <div className="credentials-heading"><span className="credentials-icon"><Award size={21} aria-hidden="true" /></span><div><span className="eyebrow">LEARNING & CREDENTIALS</span><h3>Keep learning visible. Keep labels accurate.</h3></div></div>
            <div className="credentials-grid">
              {credentials.map((credential) => (
                <article className="credential-card" key={credential.title}>
                  <span className="credential-type">{credential.type}</span>
                  <h4>{credential.title}</h4>
                  <p className="credential-issuer">{credential.issuer}</p>
                  <p>{credential.note}</p>
                  {credential.url ? <a href={credential.url} target="_blank" rel="noreferrer">View credential <ExternalLink size={13} aria-hidden="true" /></a> : <span className="credential-unlinked">Public credential link not added</span>}
                </article>
              ))}
            </div>
            <p className="small-note">Workshops and learning activities are not presented as formal DevOps certifications.</p>
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <SectionHeading eyebrow="06 / LEARNING JOURNEY" title="Keep progress visible." copy="A short record of hands-on practice and the next milestones I'm working toward for an entry-level DevOps / cloud role." />
          <div className="timeline">
            {learningNotes.map((note, index) => (
              <article className="timeline-item" key={`${note.title}-${index}`}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-date">{note.date}</div>
                <div className="timeline-content"><h3>{note.title}</h3><p>{note.text}</p></div>
              </article>
            ))}
          </div>
          <div className="roadmap">
            <div className="roadmap-title"><span className="roadmap-icon"><Rocket size={20} aria-hidden="true" /></span><div><h3>Next learning milestones</h3><p>Planned practice — not completed achievements.</p></div></div>
            <div className="roadmap-grid">
              {roadmap.map((item, index) => <article className="roadmap-card" key={item.title}><span>{item.stage} · 0{index + 1}</span><h4>{item.title}</h4><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-orb" aria-hidden="true" />
          <span className="eyebrow">06 / CONTACT</span>
          <h2>Let's build something<br /><span>reliable together.</span></h2>
          <p>I'm looking for DevOps and cloud internships where I can contribute, keep learning, and work with engineers who care about reliable delivery.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${EMAIL}?subject=DevOps%20Internship%20Opportunity`}><Mail size={17} aria-hidden="true" /> Email me</a>
            <a className="button button-outline" href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /> View GitHub</a>
          </div>
          <div className="contact-socials">
            <a href={`mailto:${EMAIL}`}><Mail size={17} aria-hidden="true" /> {EMAIL}</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn profile <ArrowUpRight size={13} aria-hidden="true" /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">P<span>.</span></span><span>Pravesh Kumar</span></a>
        <span>Built with curiosity. Improved through debugging.</span>
        <a className="back-to-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
