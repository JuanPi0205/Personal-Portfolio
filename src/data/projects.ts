const ASSETS_S3 = import.meta.env.PUBLIC_ASSETS_S3;

export interface Project {
  slug: string;
  title: string;
  type: string;
  shortDesc: string;
  longDesc: string;
  techStack: string[];
  githubLinks: { label: string; url: string }[];
  screenshots: string[];
  initImage: string;
}

export const projects: Project[] = [
  {
    slug: "saas-churn-prediction-api",
    title: "SaaS Churn Predictor",
    type: "Data Science & API Development",
    shortDesc:
      "Machine Learning predictive model balanced with SMOTE and deployed as a REST API using FastAPI to detect telecommunications customers at risk of churn.",
    longDesc:
      "This project encompasses the full lifecycle of a data product, bridging statistical analysis with software engineering. It began with an Exploratory Data Analysis (EDA) that revealed variables such as MonthlyCharges, tenure, and Fiber Optic service as key drivers of customer churn. A RandomForestClassifier algorithm was implemented for prediction. After detecting a strong class imbalance that hid dissatisfied customers, the SMOTE oversampling technique was applied, successfully boosting the model's Recall from 46% to 71% on real test data. Finally, the model was serialized and integrated into a backend built with FastAPI and Pydantic. The resulting API validates JSON payloads, dynamically reconstructs the categorical variable matrix (One-Hot Encoding), and returns predictions in milliseconds, ready to be integrated into any CRM or business dashboard.",
    techStack: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "Pandas",
      "imbalanced-learn (SMOTE)",
      "Seaborn",
      "Joblib",
      "Pydantic",
      "Docker",
    ],
    githubLinks: [
      { label: "Backend API", url: "https://github.com/JuanPi0205/saas-churn-prediction-API/tree/main" },
      { label: "Data Model", url: "https://github.com/JuanPi0205/saas-churn-prediction-LM" }
    ],
    screenshots: [
      `${ASSETS_S3}/projectChurn/Saas-churn-Prediction-API.png`,
      `${ASSETS_S3}/projectChurn/Saas-churn-Prediction.png`,
      `${ASSETS_S3}/projectChurn/Saas-churn-Prediction2.png`,
      `${ASSETS_S3}/projectChurn/Saas-churn-Prediction-API2.png`,
    ],
    initImage: `${ASSETS_S3}/projectChurn/Init_Saas.png`,
  },
  {
    slug: "ecommerce-productos-autoctonos-boyaca",
    title: "Autoctonos",
    type: "Full-Stack Development & Tech Consulting",
    shortDesc: "E-commerce platform developed with Astro and Django. It features a strategic payment integration with PayU, selected after a business analysis to maximize the client's profitability.",
    longDesc: "Collaborative development of a comprehensive e-commerce platform designed to boost the digitalization and sale of traditional baked goods and typical products from the Boyacá region. To ensure a seamless user experience and exceptionally fast SEO, the frontend was built using Astro, while all business logic, product catalog, and the admin panel were orchestrated with a robust Django backend.\n\nBeyond technical execution, my role involved direct business consulting. The client needed to integrate digital payment methods, but with a critical constraint: the profit margins for artisanal products are tight, making high transaction fees unviable. To solve this, I delved into the business's financial operations, conducted an exhaustive research of payment gateways in the Colombian market, and determined that PayU was the optimal choice based on its cost structure. We led the full integration of the PayU API, ensuring secure transactions while protecting the local business's profitability. The result is a complete, scalable technological solution that is, above all, empathetic to the client's financial reality.",
    techStack: [
      "Astro",
      "Django",
      "Python",
      "JavaScript / TypeScript",
      "API Integrations (PayU)",
      "PostgreSQL",
      "Docker"
    ],
    githubLinks: [],
    screenshots: [
      `${ASSETS_S3}/autoctonos/AutoctonosHero.png`,
      `${ASSETS_S3}/autoctonos/AutoctonosHero2.png`,
      `${ASSETS_S3}/autoctonos/AutoctonosCart.png`,
      `${ASSETS_S3}/autoctonos/AutoctonosProd.png`,
    ],
    initImage: `${ASSETS_S3}/autoctonos/Init_autoctonos.png`,
  },
  {
    slug: "ecommerce-HacksToolsCol",
    title: "HacksToolsCol High-Concurrency E-Commerce: Cybersecurity & Hardware (Work In Progress)",
    type: "Data-Driven Architecture & Full-Stack Development",
    shortDesc: "Scalable platform (WIP) for the cybersecurity ecosystem in Medellín. Designed with Astro and Django to handle high projected traffic, integrating Apple Pay for a frictionless checkout.",
    longDesc: "I am currently leading the architecture and active development (in the construction phase) of a highly specialized hacking e-commerce platform based in Medellín, focused on selling hardware and tools for cybersecurity professionals and penetration testers.\n\nWhat makes this project exceptional is its data-driven conception. Before writing the first line of code, I executed data analysis and market forecasting that revealed an unusually high projected traffic and concurrency volume for this niche. This business intelligence dictated the architecture from day zero: the system could not be a traditional e-commerce; it had to be prepared to scale massively.\n\nTo support this operational load, I structured the frontend using Astro's island architecture, backed by a robust and resilient backend in Django. Understanding that the end-user is a highly technical profile with strict privacy demands, I discarded traditional, slow payment flows and orchestrated a direct integration with the Apple Pay API. This project reflects my ability to anticipate bottlenecks through data analysis and build platforms ready to scale before going into production.",
    techStack: [
      "Astro",
      "Django",
      "Data Analysis & Forecasting",
      "Apple Pay API Integration",
      "Python",
      "TypeScript",
      "PostgreSQL",
      "Docker"
    ],
    githubLinks: [],
    screenshots: [
      `${ASSETS_S3}/hackstool/HackHero.png`,
      `${ASSETS_S3}/hackstool/HackHero2.png`,
      `${ASSETS_S3}/hackstool/HackHero3.png`,
      `${ASSETS_S3}/hackstool/HackShop.png`,
    ],
    initImage: `${ASSETS_S3}/hackstool/Init_Hacks.png`,
  },
  {
    slug: "api-gestion-polizas-arrendamiento-core",
    title: "RESTful API - Lease Policy and Risk Management",
    type: "Backend Development & Software Architecture",
    shortDesc: "Spring Boot system structured under Hexagonal Architecture. It implements resilience patterns (Circuit Breaker) and secure transacting (Outbox) for integration with legacy systems.",
    longDesc: "Development of a robust RESTful API aimed at managing the lifecycle of lease policies and their associated risks. The project was structured under the principles of Hexagonal Architecture (Ports and Adapters) with the primary goal of strictly isolating business rules from external infrastructure and the underlying framework.\n\nOne of the most prominent architectural challenges was protecting and managing incoming traffic by simulating a distributed architecture. To avoid coupling security logic within the controllers, perimeter interception was implemented to simulate API Gateway behavior. This was achieved by designing a global security filter (`ApiKeyFilter`) in the configuration layer that statelessly intercepts and validates authorization headers (`x-api-key`) across all HTTP requests, emulating M2M (Machine-to-Machine) security standards.\n\nFor handling external integrations (a simulated legacy CORE system), the platform implements a resilient communication strategy. The Outbox Pattern was integrated to guarantee zero event loss, saving notification intents in the same database transaction (PostgreSQL) as the main entity. Furthermore, the outbound adapter to the CORE is protected by a Circuit Breaker (Resilience4j), preventing thread exhaustion and cascading failures when the external system experiences latency or downtime. The entire environment was containerized using Docker and Docker Compose to ensure immediate portability and deployment.",
    techStack: [
      "Java 17",
      "Spring Boot 3",
      "PostgreSQL",
      "Docker & Docker Compose",
      "Hexagonal Architecture",
      "Outbox Pattern",
      "Resilience4j (Circuit Breaker)",
      "Spring Data JPA (Hibernate)",
      "Data Transfer Objects (DTO)"
    ],
    githubLinks: [
      { label: "View on GitHub", url: "https://github.com/JuanPi0205/prueba-tecnica-polizas" }
    ],
    screenshots: [
      `${ASSETS_S3}/polizas/PolizasApi1.png`,
      `${ASSETS_S3}/polizas/PolizasApi2.png`,
      `${ASSETS_S3}/polizas/PolizasApi3.png`,
    ],
    initImage: `${ASSETS_S3}/polizas/Init_Polizas.png`,
  },
  {
    slug: "banco-finandina-onboarding",
    title: "Banco Finandina – App Onboarding",
    type: "Mobile App",
    shortDesc: "Animated onboarding screen for the Banco Finandina mobile app, developed as a technical test.",
    longDesc: "Flutter application that replicates the onboarding flow of the Banco Finandina app. It features 7 swipeable screens with custom images, SVG illustrations, and unique backgrounds per slide. It includes navigation with PageView, progress indicators (dots), a 'Skip' button, and a final animated CTA ('Unleash your banking'). Each slide communicates a key bank feature: product management, payments, transfers, mobile banking, and QR payments.",
    techStack: ["Flutter", "Dart", "flutter_svg"],
    githubLinks: [
      { label: "View on GitHub", url: "https://github.com/JuanPi0205/InterviewMagneto" }
    ],
    screenshots: [
      `${ASSETS_S3}/interviewFinandina/Finandina1.png`,
      `${ASSETS_S3}/interviewFinandina/Finandina2.png`,
      `${ASSETS_S3}/interviewFinandina/Finandina3.png`,
      `${ASSETS_S3}/interviewFinandina/Finandina4.png`,
    ],
    initImage: `${ASSETS_S3}/interviewFinandina/Gemini_Generated_Image_p6r3sfp6r3sfp6r3.png`,
  },
];