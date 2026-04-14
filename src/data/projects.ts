const ASSETS_S3 = import.meta.env.PUBLIC_ASSETS_S3;

export interface LocalizedString {
  en: string;
  es: string;
}

export interface Project {
  slug: string;
  title: LocalizedString;
  type: LocalizedString;
  shortDesc: LocalizedString;
  longDesc: LocalizedString;
  techStack: string[];
  githubLinks: { label: LocalizedString; url: string }[];
  screenshots: string[];
  initImage: string;
}

export const projects: Project[] = [
  {
    slug: "saas-churn-prediction-api",
    title: { en: "SaaS Churn Predictor", es: "Predictor de Churn SaaS" },
    type: { en: "Data Science & API Development", es: "Ciencia de Datos & Desarrollo de API" },
    shortDesc: {
      en: "Machine Learning predictive model balanced with SMOTE and deployed as a REST API using FastAPI to detect telecommunications customers at risk of churn.",
      es: "Modelo predictivo de Machine Learning balanceado con SMOTE y desplegado como una API REST usando FastAPI para detectar clientes de telecomunicaciones en riesgo de abandono (churn).",
    },
    longDesc: {
      en: "This project encompasses the full lifecycle of a data product, bridging statistical analysis with software engineering. It began with an Exploratory Data Analysis (EDA) that revealed variables such as MonthlyCharges, tenure, and Fiber Optic service as key drivers of customer churn. A RandomForestClassifier algorithm was implemented for prediction. After detecting a strong class imbalance that hid dissatisfied customers, the SMOTE oversampling technique was applied, successfully boosting the model's Recall from 46% to 71% on real test data. Finally, the model was serialized and integrated into a backend built with FastAPI and Pydantic. The resulting API validates JSON payloads, dynamically reconstructs the categorical variable matrix (One-Hot Encoding), and returns predictions in milliseconds, ready to be integrated into any CRM or business dashboard.",
      es: "Este proyecto abarca el ciclo de vida completo de un producto de datos, trazando un puente entre análisis estadístico e ingeniería de software. Inició con un Análisis Exploratorio de Datos (EDA) que reveló variables como 'MonthlyCharges', permanencia y servicio de Fibra Óptica como factores determinantes de la fuga de clientes. Se implementó un algoritmo RandomForestClassifier para la predicción. Tras detectar un desbalance de clases que ocultaba a los clientes insatisfechos, se aplicó la técnica de sobremuestreo SMOTE, lo que incrementó con éxito el Recall del modelo del 46% al 71% en datos reales de prueba. Finalmente, el modelo fue serializado e integrado en un backend con FastAPI y Pydantic. La API resultante valida las peticiones JSON, reconstruye dinámicamente la matriz de variables categóricas (One-Hot Encoding) y devuelve las predicciones en milisegundos, lista para integrarse en cualquier CRM.",
    },
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
      { label: { en: "Backend API", es: "API Backend" }, url: "https://github.com/JuanPi0205/saas-churn-prediction-API/tree/main" },
      { label: { en: "Data Model", es: "Modelo de Datos" }, url: "https://github.com/JuanPi0205/saas-churn-prediction-LM" }
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
    title: { en: "Autoctonos", es: "Autóctonos" },
    type: { en: "Full-Stack Development & Tech Consulting", es: "Desarrollo Full-Stack & Consultoría TI" },
    shortDesc: {
      en: "E-commerce platform developed with Astro and Django. It features a strategic payment integration with PayU, selected after a business analysis to maximize the client's profitability.",
      es: "Plataforma e-commerce desarrollada con Astro y Django. Cuenta con integración estratégica de pagos vía PayU, seleccionada bajo analítica de negocio para maximizar la rentabilidad del cliente.",
    },
    longDesc: {
      en: "Collaborative development of a comprehensive e-commerce platform designed to boost the digitalization and sale of traditional baked goods and typical products from the Boyacá region. To ensure a seamless user experience and exceptionally fast SEO, the frontend was built using Astro, while all business logic, product catalog, and the admin panel were orchestrated with a robust Django backend.\n\nBeyond technical execution, my role involved direct business consulting. The client needed to integrate digital payment methods, but with a critical constraint: the profit margins for artisanal products are tight, making high transaction fees unviable. To solve this, I delved into the business's financial operations, conducted an exhaustive research of payment gateways in the Colombian market, and determined that PayU was the optimal choice based on its cost structure. We led the full integration of the PayU API, ensuring secure transactions while protecting the local business's profitability. The result is a complete, scalable technological solution that is, above all, empathetic to the client's financial reality.",
      es: "Desarrollo colaborativo de una plataforma de e-commerce integral diseñada para impulsar la venta digital de amasijos y productos autóctonos de la región de Boyacá. Para garantizar una experiencia de usuario fluida y un SEO excepcionalmente rápido, el frontend se construyó con Astro, mientras que toda la lógica de negocio, catálogo de productos y panel administrativo fueron orquestados en un robusto backend con Django.\n\nMás allá de la ejecución técnica, mi rol involucró consultoría estratégica de negocios. El cliente necesitaba digitalizar sus cobros, con una limitante crítica: los márgenes de productos artesanales son ajustados, por lo que comisiones altísimas eran inviables. Realicé un estudio de las operaciones financieras e investigué el mercado colombiano de pasarelas de pago, determinando que PayU era la elección óptima. Lideramos la integración técnica de su API, asegurando transacciones seguras mientras protegíamos la utilidad del comercio. El resultado fue una solución escalable y empática con la realidad financiera del cliente particular."
    },
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
    title: { en: "HacksToolsCol High-Concurrency E-Commerce: Cybersecurity & Hardware (Work In Progress)", es: "HacksToolsCol E-Commerce de Alta Concurrencia: Ciberseguridad & Hardware (En progreso)" },
    type: { en: "Data-Driven Architecture & Full-Stack Development", es: "Arquitectura Data-Driven & Desarrollo Full-Stack" },
    shortDesc: {
      en: "Scalable platform (WIP) for the cybersecurity ecosystem in Medellín. Designed with Astro and Django to handle high projected traffic, integrating Apple Pay for a frictionless checkout.",
      es: "Plataforma escalable (WIP) para el ecosistema de ciberseguridad en Medellín. Diseñada con Astro y Django para soportar gran tráfico, integrando Apple Pay para cobros sin fricción.",
    },
    longDesc: {
      en: "I am currently leading the architecture and active development (in the construction phase) of a highly specialized hacking e-commerce platform based in Medellín, focused on selling hardware and tools for cybersecurity professionals and penetration testers.\n\nWhat makes this project exceptional is its data-driven conception. Before writing the first line of code, I executed data analysis and market forecasting that revealed an unusually high projected traffic and concurrency volume for this niche. This business intelligence dictated the architecture from day zero: the system could not be a traditional e-commerce; it had to be prepared to scale massively.\n\nTo support this operational load, I structured the frontend using Astro's island architecture, backed by a robust and resilient backend in Django. Understanding that the end-user is a highly technical profile with strict privacy demands, I discarded traditional, slow payment flows and orchestrated a direct integration with the Apple Pay API. This project reflects my ability to anticipate bottlenecks through data analysis and build platforms ready to scale before going into production.",
      es: "Actualmente lidero la arquitectura y desarrollo activo de un e-commerce basado en Medellín especializado en el mundo del hacking, orientado a la venta de herramientas y hardware para profesionales en ciberseguridad (pentesting).\n\nLo que hace a este proyecto diferencial es su concepción guiada por datos. Antes de escribir la primera línea de código, ejecuté simulaciones y previsiones de mercado que expusieron un inusual nivel de tráfico y concurrencia proyectada para este nicho. Esta inteligencia de negocio dictó la arquitectura: el sistema no podía ser un e-commerce tradicional y monolítico.\n\nEstructuré el frontend usando la arquitectura de islas de Astro, soportado por la resiliencia en backend de Django. Entendiendo que el usuario final tiene exigencias estrictas de privacidad (y perfil técnico), prescindí de flujos de pagos convencionales y orquesté la integración directa con la API de Apple Pay. Este proyecto evidencia mi habilidad de analizar cuellos de botella con datos antes de entrar a producción."
    },
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
    title: { en: "RESTful API - Lease Policy and Risk Management", es: "API RESTful - Gestión de Pólizas y Riesgos de Arrendamiento" },
    type: { en: "Backend Development & Software Architecture", es: "Desarrollo Backend & Arquitectura de Software" },
    shortDesc: {
      en: "Spring Boot system structured under Hexagonal Architecture. It implements resilience patterns (Circuit Breaker) and secure transacting (Outbox) for integration with legacy systems.",
      es: "API robusta en Spring Boot bajo Arquitectura Hexagonal. Implementa alta resiliencia (Circuit Breaker) y transacciones seguras (Patrón Outbox) para integrarse con sistemas legados Core.",
    },
    longDesc: {
      en: "Development of a robust RESTful API aimed at managing the lifecycle of lease policies and their associated risks. The project was structured under the principles of Hexagonal Architecture (Ports and Adapters) with the primary goal of strictly isolating business rules from external infrastructure and the underlying framework.\n\nOne of the most prominent architectural challenges was protecting and managing incoming traffic by simulating a distributed architecture. To avoid coupling security logic within the controllers, perimeter interception was implemented to simulate API Gateway behavior. This was achieved by designing a global security filter (`ApiKeyFilter`) in the configuration layer that statelessly intercepts and validates authorization headers (`x-api-key`) across all HTTP requests, emulating M2M (Machine-to-Machine) security standards.\n\nFor handling external integrations (a simulated legacy CORE system), the platform implements a resilient communication strategy. The Outbox Pattern was integrated to guarantee zero event loss, saving notification intents in the same database transaction (PostgreSQL) as the main entity. Furthermore, the outbound adapter to the CORE is protected by a Circuit Breaker (Resilience4j), preventing thread exhaustion and cascading failures when the external system experiences latency or downtime. The entire environment was containerized using Docker and Docker Compose to ensure immediate portability and deployment.",
      es: "Desarrollo de una sólida API RESTful diseñada para administrar el ciclo de vida de las pólizas de arrendamiento y sus riesgos. El proyecto se estructuró sobre Arquitectura Hexagonal (Puertos y Adaptadores) con el objetivo de aislar férreamente las reglas de negocio de cualquier acoplamiento con la infraestructura externa o el framework subyacente de Spring.\n\nEl mayor reto arquitectónico radicó en la gestión del tráfico y la orquestación distribuida. Para no contaminar los controladores con lógicas de seguridad, se elaboró un perímetro de intercepción para emular un comportamiento API Gateway real. Por este motivo, se codificó un filtro de seguridad global (`ApiKeyFilter`) capaz de captar y validar los headers de autenticación (`x-api-key`) en el 100% de los requests entrantes, logrando un estándar de seguridad M2M.\n\nDel lado de la integración externa (simulando reportes a un sistema CORE legado), se materializó el Patrón Outbox, salvando en la base de datos (PostgreSQL), la confirmación paralela ante caídas imprevistas. El punto de salida hacia el sistema externo cuenta con un sofisticado Circuit Breaker modelado en Resilience4j, el cual cancela las transmisiones fallidas evadiendo efectos en cadena ante demoras masivas en el tercero. Por último, todo el esquema corre dockerizado para soportar alta portabilidad y testeos aislados."
    },
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
      { label: { en: "View on GitHub", es: "Ver en GitHub" }, url: "https://github.com/JuanPi0205/prueba-tecnica-polizas" }
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
    title: { en: "Banco Finandina – App Onboarding", es: "Banco Finandina – Onboarding App" },
    type: { en: "Mobile App", es: "Aplicación Móvil" },
    shortDesc: {
      en: "Animated onboarding screen for the Banco Finandina mobile app, developed as a technical test.",
      es: "Prototipo de aplicación Flutter y onboarding animado para simular las funcionalidades de Banco Finandina.",
    },
    longDesc: {
      en: "Flutter application that replicates the onboarding flow of the Banco Finandina app. It features 7 swipeable screens with custom images, SVG illustrations, and unique backgrounds per slide. It includes navigation with PageView, progress indicators (dots), a 'Skip' button, and a final animated CTA ('Unleash your banking'). Each slide communicates a key bank feature: product management, payments, transfers, mobile banking, and QR payments.",
      es: "Prueba técnica consistente en una réplica interactiva en Flutter enfocada en el flujo inicial ('onboarding') para la app del Banco Finandina. Incluye múltiples vistas animadas con vectores SVG, detectando gestos del usuario ('swipe') mediante el sistema PageView nativo. Se generaron fondos con un control dinámico de botones de acción ('Omitir' / 'Terminar') dependientes de la interfaz. Representó un estudio veloz sobre el manejo del framework Flutter para crear un nivel altísimo de reactividad en celulares iOS/Android.",
    },
    techStack: ["Flutter", "Dart", "flutter_svg"],
    githubLinks: [
      { label: { en: "View on GitHub", es: "Ver en GitHub" }, url: "https://github.com/JuanPi0205/InterviewMagneto" }
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