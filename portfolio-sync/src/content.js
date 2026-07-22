/**
 * Projektobjekt-Schema:
 * {
 *   title: string,
 *   tagline: string,
 *   category: string[],
 *   stack: string[],
 *   role?: string,
 *   task?: string,
 *   result?: string,
 *   featured?: boolean,
 *   wip?: boolean,
 *   cover?: string,    // CSS background fuer Fallback-Cover
 *   mediaLabel?: string,
 *   videoUrl?: string,
 *   videoPoster?: string,
 *   videoType?: string,
 *   links?: Array<{ label: string, url: string }>
 * }
 */
export const portfolioData = {
  person: {
    name: "Mika Dierks",
    role: "Junior Developer · C++ / Python / Lua",
    value:
      "Ich baue technische Tools mit Fokus auf reale Nutzbarkeit: Desktop-Apps, KI-Systeme und systemnahe Experimente. KI nutze ich orchestriert (20-80 bis 90-10 Human/AI), nicht als Blind-Copy-Paste.",
    highlights: ["geb. 14.03.2008", "Wermelskirchen, DE", "build-first"],
  },
  projects: [
    {
      title: "MecchaChameleon External",
      tagline:
        "Open-source UE5 External fuer Meccha Chameleon: AOB-Scans, GWorld/GNames-Walks, DXGI+ImGui-Overlay, ESP, Minimap und Combat-Tooling — Memory-Research in C++.",
      category: ["C++", "Systems", "Reverse Engineering", "Games"],
      stack: ["C++", "UE5", "DXGI", "ImGui", "AOB"],
      cover: "linear-gradient(135deg, #0c1222 0%, #1d4ed8 100%)",
      mediaLabel: "MECCHA",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ToldByNun/MecchaChameleon-External-Cheat",
        },
      ],
    },
    {
      title: "Job2CV",
      tagline:
        "Electron-App, die Stellenangebote in deinem Umkreis findet, sie anhand deines Profils bewertet und automatisch personalisierte Lebenslaeufe + Anschreiben generiert. Live unter job2cv.app.",
      category: ["Desktop", "AI"],
      stack: ["Electron", "Node.js", "JavaScript", "LLM APIs"],
      featured: true,
      cover: "linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%)",
      mediaLabel: "JOB2CV",
      videoUrl: "./assets/videos/job2cv-demo.mp4",
      videoType: "video/mp4",
      links: [
        { label: "Live App", url: "https://www.job2cv.app/" },
        { label: "GitHub Profile", url: "https://github.com/ToldByNun" },
      ],
    },
    {
      title: "sentinel",
      tagline:
        "Neural-Net- / Transformer-Training von Grund auf in C++: Attention, Embeddings, LayerNorm, Datasets und Loss — Lernprojekt fuer AI-Internals ohne Framework-Blackbox.",
      category: ["C++", "AI", "Algorithm"],
      stack: ["C++", "Neural Nets", "Transformers"],
      cover: "linear-gradient(135deg, #1e1b4b 0%, #6366f1 100%)",
      mediaLabel: "SENTINEL",
      links: [
        { label: "GitHub", url: "https://github.com/ToldByNun/sentinel" },
      ],
    },
    {
      title: "Chicony AA Algorithm",
      tagline:
        "Educational Recreation eines Aim-Assist-Filters als Visualizer: Overlay zeichnet realen vs. assisted Cursor — ohne Game-Hooks oder Input-Injection.",
      category: ["C++", "Algorithm", "Games"],
      stack: ["C++", "Win32", "Overlay"],
      cover: "linear-gradient(135deg, #7c2d12 0%, #f59e0b 100%)",
      mediaLabel: "CHICONY AA",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ToldByNun/Chicony-AA-Algorithm",
        },
      ],
    },
    {
      title: "kernel-read-driver",
      tagline:
        "Minimaler Kernel-Read-Treiber: IRP_MJ_DEVICE_CONTROL, Hook auf \\Driver\\Beep, version-aware CR3-Extraktion aus PEPROCESS.",
      category: ["C", "Systems", "Kernel"],
      stack: ["C", "Windows Kernel", "IRP"],
      cover: "linear-gradient(135deg, #111827 0%, #374151 100%)",
      mediaLabel: "KERNEL READ",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ToldByNun/kernel-read-driver",
        },
      ],
    },
    {
      title: "Sentic AI",
      tagline:
        "Epistemische KI, die kleine Modelle bis ans Limit pusht: Bayesian Engine, eigene Search Engine, lokale Modelle + Anbindung an OpenAI, Claude, NVIDIA.",
      category: ["AI", "Python"],
      stack: ["Python", "Bayesian", "Local LLMs", "APIs"],
      cover: "linear-gradient(135deg, #581c87 0%, #ec4899 100%)",
      mediaLabel: "SENTIC AI",
      videoUrl: "./assets/videos/sentic-ai-demo.mp4",
      videoType: "video/mp4",
      links: [{ label: "sentic.ai", url: "http://sentic.ai" }],
    },
    {
      title: "IL osu! Play Demo",
      tagline:
        "AI-Agent, der osu! teilweise spielen lernt, mit Imitation Learning statt RL. Fokus auf Datenaufbereitung, stabile Inferenz und Iterationen mit menschlichem Review.",
      category: ["AI", "C++", "Algorithm"],
      stack: ["Imitation Learning", "Python", "C++", "Win32"],
      cover: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
      mediaLabel: "IL OSU",
      videoUrl: "./assets/videos/IL-osu-play-demo.mp4",
      videoType: "video/mp4",
    },
    {
      title: "osu! Aim Assist (PoC)",
      tagline:
        "Proof-of-Concept fuer einen Aim-Algorithmus. Reines Lernprojekt, um Tracking, Prediction und Input-Latency zu verstehen.",
      category: ["C++", "Algorithm"],
      stack: ["C++", "Win32"],
      cover: "linear-gradient(135deg, #be185d 0%, #f59e0b 100%)",
      mediaLabel: "AIM PoC",
      videoUrl: "./assets/videos/osu-aim-demo.mp4",
      videoType: "video/mp4",
    },
    {
      title: "AOB Generator (osu! Demo)",
      tagline:
        "Tooling-Demo fuer Pattern- und AOB-Generierung zur Analyse von Binarmustern in wiederkehrenden Workflows.",
      category: ["C++", "Tooling", "Reverse Engineering"],
      stack: ["C++", "Pattern Scanning", "Win32"],
      cover: "linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)",
      mediaLabel: "AOB GEN",
      videoUrl: "./assets/videos/AOB-generator-osu-demo.mp4",
      videoType: "video/mp4",
    },
    {
      title: "Memory Manipulation ESP (PoC)",
      tagline:
        "Experimenteller ESP-PoC zum Verstaendnis von Memory-Lese-/Schreibpfaden, Datenstrukturen und Overlay-Synchronisierung.",
      category: ["C++", "Systems", "Reverse Engineering"],
      stack: ["C++", "Memory", "Win32"],
      cover: "linear-gradient(135deg, #312e81 0%, #4f46e5 100%)",
      mediaLabel: "MEMORY PoC",
      videoUrl: "./assets/videos/memory-manipulation-esp-poc-demo.mp4",
      videoType: "video/mp4",
    },
    {
      title: "Windows UEFI Bootloader Hook (Demo)",
      tagline:
        "UEFI-Bootloader-Demo (Ring -1 Kontext) zur Untersuchung frueher Hooking-Konzepte in kontrollierter Research-Umgebung.",
      category: ["C++", "UEFI", "Systems"],
      stack: ["C++", "UEFI", "Windows Internals"],
      cover: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
      mediaLabel: "KERNEL HOOK",
      videoUrl: "./assets/videos/windows-kernel-bootloader-hook-demo.mp4",
      videoType: "video/mp4",
    },
    {
      title: "Roblox Ingame Screenrecording Demo",
      tagline:
        "Proof, dass Ingame-Screenrecording ohne externe Tools moeglich ist: eigener Live-Stream des Ingame-Bilds wird direkt auf ein Frame gerendert.",
      category: ["Roblox", "Engine", "Graphics"],
      stack: ["Lua", "Luau", "Realtime Frame Streaming"],
      cover: "linear-gradient(135deg, #14532d 0%, #22c55e 100%)",
      mediaLabel: "INGAME REC",
      videoUrl: "./assets/videos/roblox-ingame-screenrecording-demo.mp4",
      videoType: "video/mp4",
    },
    {
      title: "Rhythia Roblox Demo",
      tagline:
        "ImGui-Library fuer Roblox, um Shader sehr einfach in ImGui-Workflows zu integrieren.",
      category: ["Roblox", "UI", "Graphics"],
      stack: ["Lua", "Luau", "ImGui", "Shader Tooling"],
      cover: "linear-gradient(135deg, #831843 0%, #db2777 100%)",
      mediaLabel: "RHYTHIA",
      videoUrl: "./assets/videos/rhythiaroblox-demo.mp4",
      videoType: "video/mp4",
    },
    {
      title: "Custom Gun Particle Test (Demo)",
      tagline:
        "Framework fuer eine Roblox-Sandbox, um Waffen-Particles (Schuss, Ray, Treffer) voll custom ueber einen ImageBuffer zu rendern.",
      category: ["Roblox", "Framework", "Graphics"],
      stack: ["Lua", "Luau", "ImageBuffer", "Custom Particle Pipeline"],
      cover: "linear-gradient(135deg, #0c4a6e 0%, #0284c7 100%)",
      mediaLabel: "GUN VFX",
      videoUrl: "./assets/videos/custom-gun-particle-test-demo.mp4",
      videoType: "video/mp4",
    },
    {
      title: "Roblox Modular UI Library",
      tagline:
        "Wiederverwendbare UI-Komponentenbibliothek fuer Roblox-Projekte mit konsistentem Styling und schneller Iteration.",
      category: ["Roblox", "UI", "Library"],
      stack: ["Lua", "Luau", "Component Design"],
      cover: "linear-gradient(135deg, #134e4a 0%, #14b8a6 100%)",
      mediaLabel: "UI LIB",
      videoUrl: "./assets/videos/roblox-modular-ui-library-demo.mp4",
      videoType: "video/mp4",
      links: [
        { label: "GitHub", url: "https://github.com/ToldByNun/Ui-Libraries" },
      ],
    },
    {
      title: "Roblox Topo Shader",
      tagline:
        "Topographische Linien-Shader mit writable Image Buffers — hohe Qualitaet und starke Performance in reinem Luau.",
      category: ["Roblox", "Graphics", "Shaders"],
      stack: ["Luau", "ImageBuffer", "Shaders"],
      cover: "linear-gradient(135deg, #365314 0%, #84cc16 100%)",
      mediaLabel: "TOPO",
      videoUrl: "./assets/videos/roblox-toposhader-demo.mp4",
      videoType: "video/mp4",
    },
    {
      title: "osu-parser-cpp",
      tagline:
        "Leichtgewichtiger .osu-Parser in C++ fuer Research und Experimente rund um Beatmap-Daten.",
      category: ["C++", "Tooling"],
      stack: ["C++", "Parsing"],
      cover: "linear-gradient(135deg, #1e3a5f 0%, #38bdf8 100%)",
      mediaLabel: "OSU PARSE",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ToldByNun/osu-parser-cpp",
        },
      ],
    },
    {
      title: "py-arch-x",
      tagline:
        "Kleines CLI-Tool: scannt Python-Codebases per ast und meldet Funktionen, die wahrscheinlich unbenutzt sind.",
      category: ["Python", "Tooling"],
      stack: ["Python", "AST", "CLI"],
      cover: "linear-gradient(135deg, #1e3a2f 0%, #34d399 100%)",
      mediaLabel: "PY-ARCH",
      links: [
        { label: "GitHub", url: "https://github.com/ToldByNun/py-arch-x" },
      ],
    },
    {
      title: "Unified AI Provider Orchestrator",
      tagline:
        "Modulare Python-Abstraktion, um mehrere LLM-Provider ueber eine gemeinsame Schnittstelle zu orchestrieren.",
      category: ["Python", "AI"],
      stack: ["Python", "LLM APIs", "Orchestration"],
      cover: "linear-gradient(135deg, #312e81 0%, #a78bfa 100%)",
      mediaLabel: "AI ORCH",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ToldByNun/Unified-AI-Provider-Orchestrator",
        },
      ],
    },
    {
      title: "Usermode Anticheat",
      tagline:
        "Eigenes Usermode-Anticheat in C++ als Lernprojekt fuer systemnahe Entwicklung, Speicheranalyse und Erkennungsstrategien.",
      category: ["C++", "Security"],
      stack: ["C++", "Win32", "Reverse Engineering"],
      wip: true,
      cover: "linear-gradient(135deg, #064e3b 0%, #14532d 100%)",
      mediaLabel: "ANTICHEAT",
    },
  ],
  skills: {
    Sprachen: ["C", "C++", "Python", "Lua / Luau", "JavaScript"],
    Bereiche: [
      "Desktop Apps",
      "AI / LLMs",
      "Kernel / UEFI",
      "Game RE",
      "Graphics / Shaders",
    ],
    "LLM Orchestration & Prompt Engineering": [
      "Kontextfenster-Management fuer lange Workflows",
      "Prompt-Chaining statt One-Shot Prompts",
      "Schema-basierte JSON-Outputs + Parsing",
      "Output-Validierung mit Fallbacks gegen Halluzinationen",
      "Human-in-the-Loop Review vor kritischen Schritten",
    ],
    Tools: [
      "Electron",
      "Node.js",
      "Win32",
      "Dear ImGui",
      "DXGI",
      "Bayesian Engines",
    ],
  },
  workHistory: [
    {
      title: "sentinel",
      finishedAt: "22.07.2026 21:51",
      summary:
        "C++ Neural-Net-/Transformer-Training von Grund auf: Attention, Embeddings, Datasets, Loss.",
    },
    {
      title: "MecchaChameleon External",
      finishedAt: "03.07.2026 02:04",
      summary:
        "Open-source UE5 External mit AOB, World-Walks, DXGI-Overlay und ESP/Combat-Features.",
    },
    {
      title: "Chicony AA Algorithm",
      finishedAt: "02.07.2026 09:47",
      summary:
        "Educational Aim-Assist-Visualizer (Overlay only) nach dokumentiertem Filter-Verhalten.",
    },
    {
      title: "kernel-read-driver",
      finishedAt: "22.06.2026 19:37",
      summary:
        "Minimaler Kernel-Read-Treiber oeffentlich gemacht: Beep-Hook + version-aware CR3.",
    },
    {
      title: "Job2CV",
      finishedAt: "27.04.2026 11:37",
      summary:
        "Electron-Tool fuer Job-Discovery, Profil-Matching und KI-gestuetzte CV/Anschreiben-Generierung.",
    },
    {
      title: "IL osu! Play Demo",
      finishedAt: "15.04.2026 20:28",
      summary:
        "Imitation-Learning Experiment: KI lernt osu! Inputs teilweise per IL statt RL.",
    },
    {
      title: "Windows UEFI Bootloader Hook (Demo)",
      finishedAt: "08.04.2026",
      summary:
        "UEFI/Ring--1 Research-Demo zu fruehen Boot-Hooking-Konzepten in einer kontrollierten Umgebung.",
    },
    {
      title: "AOB Generator (osu! Demo)",
      finishedAt: "03.04.2026 23:58",
      summary:
        "Tooling fuer AOB-/Pattern-Generierung zur Analyse wiederkehrender Binarmuster.",
    },
    {
      title: "Custom Gun Particle Test (Demo)",
      finishedAt: "28.03.2026 18:39",
      summary:
        "Roblox-Sandbox-Framework fuer voll custom Gun-Particles (Schuss, Ray, Treffer) via ImageBuffer.",
    },
    {
      title: "Rhythia Roblox Demo",
      finishedAt: "25.03.2026 14:41",
      summary:
        "ImGui-basierte Shader-Integration fuer schnelle visuelle Iteration in Roblox-Workflows.",
    },
    {
      title: "Roblox Ingame Screenrecording Demo",
      finishedAt: "20.03.2026 15:46",
      summary:
        "Eigener Ingame-Livestream auf UI-Frame ohne externe Recording-Tools.",
    },
    {
      title: "Memory Manipulation ESP (PoC)",
      finishedAt: "17.03.2026 14:23",
      summary:
        "ESP/Mem-Research zu Datenpfaden, Synchronisierung und Overlay-Verhalten.",
    },
    {
      title: "Sentic AI",
      finishedAt: "21.02.2026 12:17",
      summary:
        "Epistemische KI mit Bayesian Engine, eigener Search und lokaler/Cloud-Modellorchestrierung.",
    },
    {
      title: "osu! Aim Assist (PoC)",
      finishedAt: "14.02.2026 14:23",
      summary:
        "Tracking- und Latency-PoC zur Analyse von Aim-Pipelines in Echtzeit.",
    },
    {
      title: "Roblox Modular UI Library",
      finishedAt: "16.01.2026 18:35",
      summary:
        "Modulare UI-Komponenten fuer Roblox mit wiederverwendbaren Patterns und konsistentem Verhalten.",
    },
  ],
  contact: {
    intro:
      "Offen für Praktikum, Ausbildung oder Junior-Einstieg im Tech-Bereich.",
    email: "mikajoeldierks@gmail.com",
    phone: "+49 16061 59546",
    github: "https://github.com/ToldByNun",
    portfolio: "https://toldbynun.github.io/",
    job2cv: "https://www.job2cv.app/",
  },
};
