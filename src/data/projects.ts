export interface Project {
  slug: string;
  title: string;
  type: string;
  shortDesc: string;
  longDesc: string;
  techStack: string[];
  githubLink: string;
  screenshots: string[];
}

// Ensure you replace these placeholders with your real info
export const projects: Project[] = [
  {
    slug: "saas-churn-prediction-api",
    title: "SaaS Churn Predictor",
    type: "Data Science & API Development",
    shortDesc: "Modelo predictivo de Machine Learning balanceado con SMOTE y desplegado como una API REST con FastAPI para detectar clientes de telecomunicaciones en riesgo de abandono.",
    longDesc: "Este proyecto abarca el ciclo de vida completo de un producto de datos, conectando el análisis estadístico con la ingeniería de software. Inició con un Análisis Exploratorio de Datos (EDA) que reveló que variables como los cargos mensuales (MonthlyCharges), la antigüedad (tenure) y el servicio de Fibra Óptica eran determinantes en la fuga de clientes. Para la predicción, se implementó un algoritmo RandomForestClassifier. Tras detectar un fuerte desbalance de clases que ocultaba a los clientes enojados, se aplicó la técnica de sobremuestreo SMOTE, logrando disparar la exhaustividad (Recall) del modelo de un 46% a un 71% en datos reales de prueba. Finalmente, el modelo fue serializado e integrado en un backend construido con FastAPI y Pydantic. La API resultante valida payloads JSON, reconstruye dinámicamente la matriz de variables categóricas (One-Hot Encoding) y devuelve predicciones en milisegundos, lista para integrarse en cualquier CRM o dashboard empresarial.",
    techStack: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "Pandas",
      "imbalanced-learn (SMOTE)",
      "Seaborn",
      "Joblib",
      "Pydantic",
      "Docker"
    ],
    githubLink: "https://github.com/juanjo",
    screenshots: [
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1200&auto=format&fit=crop"
    ],
  },
  {
    slug: "fintech-dashboard",
    title: "NeoBank Dashboard",
    type: "Backend Architecture",
    shortDesc: "Real-time financial tracking and charting.",
    longDesc: "Developing a robust financial tracking system requires handling thousands of concurrent websocket connections to deliver live stock data without latency. The architecture involves a microservices approach built on Rust and Node.js.\n\nTo ensure scalability, we implemented an event-driven design pattern using Redis queues, allowing the frontend to immediately render highly responsive D3 charts upon connection.",
    techStack: ["Node.js", "Rust", "WebSockets", "Redis"],
    githubLink: "https://github.com/juanjo",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    ],
  },
  {
    slug: "drone-controller",
    title: "DJI Fleet Controller",
    type: "Fullstack Development",
    shortDesc: "Enterprise drone fleet management platform.",
    longDesc: "Managing a decentralized fleet of drones requires a precise and secure command protocol. This platform allows operators to dispatch, monitor, and retrieve telemetry data from multiple drones simultaneously through a web interface.\n\nSecurity is paramount; all communications are encrypted with AES-256 and routed through dedicated endpoints on AWS IoT Core to ensure zero tampering with flight paths.",
    techStack: ["Astro", "AWS IoT", "Django", "PostgreSQL"],
    githubLink: "https://github.com/juanjo",
    screenshots: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop"
    ],
  },
  {
    slug: "med-tracker",
    title: "MedTrack Mobile",
    type: "Mobile App Development",
    shortDesc: "Offline-first medical adherence application.",
    longDesc: "Patients often forget to take life-saving medication. MedTrack is an offline-first mobile application focused on high accessibility and an incredibly simple user interface for the elderly.\n\nThe codebase is heavily optimized Kotlin, utilizing local SQLite databases to ensure alarms trigger even without an internet connection, and synchronizing silently with Firebase once connectivity is restored.",
    techStack: ["Kotlin", "Android", "Firebase", "SQLite"],
    githubLink: "https://github.com/juanjo",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1200&auto=format&fit=crop"
    ],
  },
  {
    slug: "geo-mapper",
    title: "GeoSpatial Mapper",
    type: "Geospatial Engineering",
    shortDesc: "High-performance rendering of urban topographies.",
    longDesc: "Rendering millions of data points on a browser map usually crashes standard frameworks. GeoSpatial Mapper utilizes Mapbox GL JS combined with custom WebGL layers to render complex 3D topographical data seamlessly.\n\nThe project incorporates dynamic filtering algorithms on the frontend, shifting the computational load to the user's GPU and allowing for 60fps panning across busy metropolitan datasets.",
    techStack: ["Mapbox GL JS", "TypeScript", "React"],
    githubLink: "https://github.com/juanjo",
    screenshots: [
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1662991039860-394bf3c9ac31?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop"
    ],
  },
  {
    slug: "ai-assistant",
    title: "Terminal AI",
    type: "AI Integration",
    shortDesc: "CLI tool leveraging Gemini and Claude.",
    longDesc: "A productivity powerhouse disguised as a simple command-line tool. Terminal AI bridges the gap between raw development environments and large language models, allowing engineers to query contextually aware suggestions directly in their terminal.\n\nIt interfaces simultaneously with Gemini and Claude APIs, parsing local git diffs to generate perfect commit messages and flag potential syntax flaws before building.",
    techStack: ["Go", "Gemini API", "Claude API", "Bash"],
    githubLink: "https://github.com/juanjo",
    screenshots: [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
    ],
  },
];
