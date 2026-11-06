export const emotionMusicProject = {
  id: "emotion-music",
  slug: "emotion-music",
  aliases: ["emotion-music"],
  title: "Emotion-Driven Beats — Emotion-Aware Music Recommendation",
  shortTitle: "Emotion-Driven Beats",
  subtitle: "Computer Vision Facial Signal Processing & Spotify Audio Feature Mapping",
  category: "Affective Computing & Audio Recommendation",
  role: "Full-Stack & ML Engineer",
  priority: 5,
  isFlagship: false,
  status: "Completed & Deployed",
  tagline: "An interactive full-stack music recommendation application that analyzes webcam facial signals, maps empirical emotion profiles to musical mood dimensions, and recommends tracks through Spotify integration with feedback-driven adaptation.",
  description: "An interactive full-stack music recommendation application that analyzes webcam facial signals, maps empirical emotion profiles to musical mood dimensions, and recommends tracks through Spotify integration with feedback-driven adaptation.",
  
  links: {
    live: "https://emotion-music-system.vercel.app/",
    github: "https://github.com/shubh201203/emotion-music-system",
    docs: "https://emotion-music-system-unge.onrender.com/docs"
  },

  problemStatement: {
    inquiries: "How can user emotive states be detected unobtrusively via standard webcams without heavy GPU requirements, and how can discrete affective states be transformed into continuous musical acoustic features (valence, energy, tempo) for real-time track curation?",
    commercialImpact: "Heavy deep learning emotion frameworks require substantial GPU memory that crashes free-tier cloud containers (e.g. Render 512MB RAM caps). This project implements a lightweight statistical signal analyzer that runs reliably in production while preserving real-time recommendation responsiveness."
  },

  verifiedMetrics: {
    moodDimensions: {
      value: "3 Dimensions",
      label: "Acoustic Mapping",
      desc: "Valence (0.0–1.0), Energy (0.0–1.0), Tempo (60–140 BPM)"
    },
    engineType: {
      value: "OpenCV Signal",
      label: "Production Engine",
      desc: "Lightweight statistical pixel analyzer optimized for cloud memory constraints"
    },
    musicSource: {
      value: "Spotify API",
      label: "Audio Catalog",
      desc: "Client Credentials integration with 30s previews"
    },
    feedbackLoop: {
      value: "Adaptive",
      label: "Genre Pivoting",
      desc: "MongoDB feedback loop shifting genres on repeat dislikes"
    }
  },

  deliverables: [
    {
      num: "01",
      title: "Affective Facial Signal Extraction",
      tech: "Python · OpenCV · NumPy",
      desc: "In-memory Base64 image decoding, face cropping, and statistical luminance/warmth analysis running within strict 85MB cloud RAM constraints."
    },
    {
      num: "02",
      title: "Mathematical Acoustic Mapping",
      tech: "Python · Deterministic Formulas",
      desc: "Rule-based engine mapping discrete emotional profiles to continuous Spotify audio coordinates (target valence, target energy, target tempo)."
    },
    {
      num: "03",
      title: "Spotify Recommendation Pipeline",
      tech: "FastAPI · Spotify Web API · Async HTTP",
      desc: "Authenticated client credentials pipeline querying Spotify's recommendation endpoint with compound genre and mood parameters."
    }
  ],

  architectureSteps: [
    { step: "01", title: "Webcam Frame Capture", tool: "React & MediaDevices", desc: "Captures compressed JPEG video frames and transmits them asynchronously to the FastAPI backend." },
    { step: "02", title: "Facial Signal Analysis", tool: "OpenCV & NumPy", desc: "Detects facial bounding boxes and extracts luminance and chromatic distribution matrices without heavy neural weights." },
    { step: "03", title: "Mood Parameter Synthesis", tool: "Python Heuristics", desc: "Transforms signal scores into target musical valence, energy, and tempo seed vectors." },
    { step: "04", title: "Spotify Dispatch & Cache", tool: "FastAPI & Spotify API", desc: "Queries Spotify recommendation endpoints and serves playable track listings with album artwork and preview URLs." }
  ],

  methodology: {
    categoryLabel: "Affective Parameter Mapping • Audio Synthesis",
    badgeLabel: "Acoustic Transformer",
    codeLanguage: "python",
    codeSnippet: `def map_emotion_to_acoustic_features(detected_emotion: str) -> dict:
    """
    Transforms detected emotional state into continuous Spotify audio parameters:
    - Valence: Musical positiveness (0.0 to 1.0)
    - Energy: Perceptual intensity and activity (0.0 to 1.0)
    - Tempo: Approximate beats per minute (BPM)
    """
    EMOTION_ACOUSTIC_PROFILES = {
        "happy":     {"target_valence": 0.85, "target_energy": 0.80, "target_tempo": 120, "seed_genres": ["pop", "dance"]},
        "sad":       {"target_valence": 0.20, "target_energy": 0.25, "target_tempo": 75,  "seed_genres": ["acoustic", "indie"]},
        "energetic": {"target_valence": 0.75, "target_energy": 0.95, "target_tempo": 135, "seed_genres": ["edm", "rock"]},
        "calm":      {"target_valence": 0.60, "target_energy": 0.30, "target_tempo": 85,  "seed_genres": ["ambient", "chill"]},
        "neutral":   {"target_valence": 0.50, "target_energy": 0.50, "target_tempo": 105, "seed_genres": ["indie", "pop"]}
    }
    return EMOTION_ACOUSTIC_PROFILES.get(detected_emotion, EMOTION_ACOUSTIC_PROFILES["neutral"])`,
    explanation: "Mapping discrete emotion classes into multi-dimensional acoustic space allows continuous integration with Spotify's audio recommendation algorithm."
  },

  // No dashboard screenshots - Gallery is omitted!
  dashboardScreenshots: [],

  findings: [
    {
      num: "01",
      title: "Zero-Crash Production Footprint",
      metric: "85MB RAM Usage",
      desc: "Replacing heavy neural weights with an OpenCV statistical analyzer reduced container memory footprint by over 90%, eliminating container crash restarts on Render."
    },
    {
      num: "02",
      title: "Low Latency Recommendation Pipeline",
      metric: "Sub-300ms Processing",
      desc: "Eliminating GPU dependencies accelerated image-to-recommendation roundtrips to sub-300ms, creating a responsive real-time user experience."
    },
    {
      num: "03",
      title: "Reinforcement-Style Genre Shifting",
      metric: "2-Skip Adaptation",
      desc: "MongoDB feedback logging identified user skip signals and shifted seed genre parameters after two consecutive dislikes to prevent repetitive recommendations."
    }
  ],

  resultsAndDecisions: {
    decisionsEnabled: [
      "Deployed full-stack application with React on Vercel and FastAPI backend on Render.",
      "Configured OpenAPI Swagger documentation with complete endpoint parameter specifications.",
      "Engineered graceful fallback pipeline delivering cached mock audio metadata if Spotify API quotas are reached."
    ],
    technicalLimitations: [
      "Webcam illumination variations (extreme shadows or glare) can reduce facial detection reliability.",
      "30-second audio previews are subject to regional Spotify catalog licensing availability.",
      "Uses lightweight statistical visual analyzer in production for zero-crash hosting; historical DeepFace CNN model is preserved in repository history for local high-compute environments."
    ]
  },

  techStack: [
    "React",
    "Vite",
    "FastAPI",
    "Python",
    "OpenCV",
    "NumPy",
    "MongoDB",
    "Spotify Web API",
    "Tailwind CSS"
  ]
};
