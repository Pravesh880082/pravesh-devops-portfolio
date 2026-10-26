// Keep every claim aligned with the public repository. Add live demos only after testing them.
export const projects = [
  {
    id: "gitops",
    title: "Kubernetes GitOps Platform",
    category: "Kubernetes · CI/CD",
    description: "A FastAPI service containerized with Docker and deployed to a two-replica K3s deployment on AWS EC2. GitHub Actions automates image publishing and deployment practice.",
    stack: ["AWS EC2", "Docker", "Kubernetes / k3s", "GitHub Actions", "FastAPI", "Traefik"],
    github: "https://github.com/Pravesh880082/kubernetes-gitops-platform",
    actions: "https://github.com/Pravesh880082/kubernetes-gitops-platform/actions",
    registry: "https://hub.docker.com/r/pravesh880082/kubernetes-gitops-platform",
    problem: "Practise the path from an application code change to a running Kubernetes service, while learning how image publishing, deployment configuration, and cluster resources affect delivery.",
    implementation: [
      "Built a small FastAPI app with root, health, and information endpoints.",
      "Built and published a Docker image to Docker Hub.",
      "Configured a Kubernetes Deployment with two replicas, a Service, and ingress practice on K3s running on AWS EC2.",
      "Set up GitHub Actions workflows and worked through image-pull and disk-capacity issues during deployment.",
    ],
    learning: "Image tags and registry authentication, Kubernetes Deployments and Services, ingress routing, workflow troubleshooting, and checking pod events and node capacity before assuming an application bug.",
    flow: ["GitHub", "GitHub Actions", "Docker Hub", "AWS EC2 / k3s", "FastAPI service"],
    featured: true,
  },
  {
    id: "cloud-native",
    title: "Cloud-Native DevOps Platform",
    category: "Containers · Application",
    description: "A FastAPI task API and PostgreSQL database running as separate Docker containers, with a dedicated network and CI/CD practice for an AWS EC2 environment.",
    stack: ["AWS EC2", "Docker", "FastAPI", "PostgreSQL", "GitHub Actions", "Linux"],
    github: "https://github.com/Pravesh880082/cloud-native-devops-platform",
    actions: "https://github.com/Pravesh880082/cloud-native-devops-platform/actions",
    registry: "https://hub.docker.com/r/pravesh880082/cloud-native-devops-platform",
    problem: "Learn how a backend service and database can run independently, communicate over a dedicated Docker network, and move through a repeatable build-and-deploy workflow.",
    implementation: [
      "Built a FastAPI task-manager API with health and task-related routes.",
      "Built the application image and ran PostgreSQL as a separate container.",
      "Connected the app and database through a dedicated Docker network.",
      "Practised GitHub Actions, Docker Hub publishing, EC2 deployment, and debugging application startup logs.",
    ],
    learning: "Container lifecycle management, application/database separation, Docker networking, environment configuration, port mapping, and reading logs to investigate startup issues.",
    flow: ["Application code", "Docker build", "FastAPI container", "Docker network", "PostgreSQL"],
    featured: true,
  },
  {
    id: "cicd",
    title: "DevOps CI/CD Project",
    category: "CI/CD · Containers",
    description: "A static web application packaged with Docker and Nginx, with GitHub Actions used to practise building and deploying to an AWS EC2 host over SSH.",
    stack: ["Git", "GitHub Actions", "Docker", "Nginx", "AWS EC2", "SSH"],
    github: "https://github.com/Pravesh880082/devops-cicd-project",
    actions: "https://github.com/Pravesh880082/devops-cicd-project/actions",
    image: {
      src: "https://raw.githubusercontent.com/Pravesh880082/devops-cicd-project/main/Screenshot%202026-09-06%20100329.png",
      alt: "GitHub Actions page showing a successful Docker CI pipeline run for the DevOps CI/CD project",
      caption: "A saved GitHub Actions run from the public repository. Open it to inspect the workflow history.",
    },
    problem: "Move beyond running a site manually by practising a repeatable process that packages a web application and deploys it to a cloud virtual machine.",
    implementation: [
      "Containerized a static web application with Docker and Nginx.",
      "Created a GitHub Actions workflow to build the Docker image on a code push.",
      "Practised SSH-based deployment to an AWS EC2 environment.",
      "Saved project screenshots and documented the workflow in the repository README.",
    ],
    learning: "Container port mapping, SSH-based deployment concepts, GitHub Actions workflow debugging, Nginx as a web server, and checking the running service after deployment.",
    flow: ["Git push", "GitHub Actions", "Docker image", "AWS EC2", "Nginx web app"],
    featured: true,
  },
];

export const skills = [
  { category: "Cloud fundamentals", level: "Practising", items: ["AWS", "EC2", "S3", "IAM basics", "AWS Cloud Quest practice"] },
  { category: "Containers & orchestration", level: "Hands-on labs", items: ["Docker", "Images & containers", "Docker networking", "Kubernetes / k3s", "Deployments & Services"] },
  { category: "Automation & IaC", level: "Building projects", items: ["GitHub Actions", "CI/CD fundamentals", "Terraform fundamentals", "GitOps concepts"] },
  { category: "Linux & networking", level: "Fundamentals", items: ["Ubuntu", "Linux CLI", "Ports & processes", "DNS lookup", "Networking basics", "Nmap basics"] },
  { category: "Development & tooling", level: "Foundational", items: ["Git & GitHub", "Python", "FastAPI", "HTML", "CSS", "JavaScript basics", "PostgreSQL basics"] },
];

// Workshops and learning activities are intentionally not labelled as formal certifications.
export const credentials = [
  { title: "AWS Cloud Quest: Cloud Practitioner", issuer: "AWS Skill Builder", type: "Learning activity", note: "Hands-on learning activity; not presented as an AWS certification.", url: "" },
  { title: "Getting Started with Artificial Intelligence", issuer: "IBM SkillsBuild", type: "Learning credential", note: "Introductory AI learning. A public credential link can be added after verification.", url: "" },
  { title: "Be10X AI Workshop", issuer: "Be10X", type: "Workshop", note: "Workshop participation; not a DevOps certification.", url: "" },
  { title: "Master Camp — Resume / LinkedIn Building", issuer: "Master Camp", type: "Career workshop", note: "Career-profile learning activity.", url: "" },
];

export const roadmap = [
  { stage: "Current focus", title: "Make deployments repeatable", text: "Keep improving Docker, GitHub Actions, Kubernetes manifests, and troubleshooting notes in the existing projects." },
  { stage: "Next", title: "Strengthen Infrastructure as Code", text: "Build a small Terraform setup with clear variables, outputs, and a documented cleanup process to avoid unnecessary cloud costs." },
  { stage: "Next", title: "Add observability and security basics", text: "Practise application logs, health checks, least-privilege IAM, secret handling, and a simple monitoring approach." },
  { stage: "Ongoing", title: "Document evidence", text: "Add real screenshots, architecture notes, and tested run instructions to each repository as features are verified." },
];

export const learningNotes = [
  { date: "2026", title: "Kubernetes and GitHub Actions", text: "Practised deploying a containerized FastAPI app to K3s, publishing an image, and troubleshooting workflow and pod issues." },
  { date: "2026", title: "Cloud-native containers", text: "Practised running an application and PostgreSQL in separate Docker containers connected through a dedicated network." },
  { date: "2026", title: "AWS and Terraform labs", text: "Worked through EC2-based infrastructure practice and learned to check instance access, disk usage, and deployment prerequisites." },
];
