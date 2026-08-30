import { Project, ProjectSource } from "@/types/projects";
import { Locale } from "@/types/site";

export const projects: ProjectSource[] = [
  {
    id: "proj-1",
    slug: "youth-tech-skills-hub",
    focusArea: "youth",
    status: "active",
    verified: true,
    coverImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    ],
    date: "2024 - Present",
    locales: {
      en: {
        title: "Youth Digital Competency & Innovation Lab",
        location: "Accra, Nairobi & Berlin",
        country: "Bilateral",
        summary:
          "Hands-on coding, open-hardware prototyping, and digital mentorship bridging young African tech innovators with German technology hubs and open-source communities.",
        challenge:
          "Young African innovators often lack access to specialized hardware labs, international peer mentorship, and global tech pipelines.",
        approach:
          "We structure bilateral sprint programs, open workstation donations, and weekly remote pair-programming with experienced software engineers in Germany.",
        activities: [
          "Weekly live pair-programming and technical mentoring sessions",
          "Refurbished digital workstation distribution to regional learning centers",
          "Joint bilateral hackathons and startup prototype incubators",
        ],
        partners: ["African Tech Hubs", "German Diaspora Mentors Network"],
      },
      de: {
        title: "Innovationslabor für digitale Jugendkompetenz",
        location: "Accra, Nairobi & Berlin",
        country: "Bilateral",
        summary:
          "Praxisnahes Programmieren, Hardware-Prototyping und digitales Mentoring zwischen afrikanischen Nachwuchstalenten und deutschen Tech-Communities.",
        challenge:
          "Junge afrikanische Entwickler haben oft eingeschränkten Zugang zu moderner Hardware, Fachmentoring und internationalen Tech-Netzwerken.",
        approach:
          "Wir organisieren bilaterale Coding-Sprints, spenden aufbereitete Arbeitsstationen und ermöglichen regelmäßiges Pair-Programming mit deutschen Experten.",
        activities: [
          "Wöchentliche Live-Mentoring- und Programmiersitzungen",
          "Bereitstellung aufbereiteter Computer für regionale Lernzentren",
          "Gemeinsame bilaterale Hackathons und Prototypen-Inkubation",
        ],
        partners: [
          "Afrikanische Tech-Hubs",
          "Deutsches Diaspora-Mentorennetzwerk",
        ],
      },
      fr: {
        title: "Laboratoire d'Innovation & Compétences Numériques des Jeunes",
        location: "Accra, Nairobi & Berlin",
        country: "Bilatéral",
        summary:
          "Apprentissage du code, prototypage matériel et mentorat numérique reliant les jeunes innovateurs africains aux écosystèmes technologiques allemands.",
        challenge:
          "Les jeunes développeurs africains rencontrent des difficultés d'accès aux équipements spécialisés et aux réseaux professionnels internationaux.",
        approach:
          "Nous structurons des programmes intensifs, des dons d'équipements reconditionnés et du mentorat hebdomadaire avec des ingénieurs en Allemagne.",
        activities: [
          "Sessions hebdomadaires de mentorat technique et programmation en direct",
          "Distribution de postes informatiques reconditionnés aux centres de formation",
          "Hackathons bilatéraux conjoints et incubation de prototypes",
        ],
        partners: [
          "Pôles Technologiques Africains",
          "Réseau de Mentors de la Diaspora",
        ],
      },
    },
  },
  {
    id: "proj-2",
    slug: "clean-water-community-wellbeing",
    focusArea: "environment",
    status: "active",
    verified: true,
    coverImage:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    ],
    date: "2024 - Present",
    locales: {
      en: {
        title: "Solar-Powered Community Water & Health Resilience",
        location: "West Africa Partner Region",
        country: "Africa",
        summary:
          "Deploying community-managed solar-powered water filtration systems reducing waterborne illnesses in underserved clinics, schools, and grassroots settlements.",
        challenge:
          "Unreliable electricity and contaminated ground water sources cause preventable health crises across rural community clinics and schools.",
        approach:
          "Installing autonomous photovoltaic water filtration systems maintained by trained local water committees.",
        activities: [
          "Solar pumping unit installations across rural community clinics",
          "Community water maintenance and sanitation committee training",
          "Preventive health and hygiene workshops for local families",
        ],
        partners: ["Community Leadership Councils", "Solar Engineers Network"],
      },
      de: {
        title: "Solarbetriebene Wasseraufbereitung & Gesundheitsresilienz",
        location: "Partnerregion Westafrika",
        country: "Afrika",
        summary:
          "Installation solarbetriebener Wasserfiltrationssysteme zur Reduktion von Infektionskrankheiten in ländlichen Gesundheitsstationen und Schulen.",
        challenge:
          "Netzunabhängige ländliche Krankenstationen leiden häufig unter verunreinigtem Wasser und unzuverlässiger Energieversorgung.",
        approach:
          "Aufbau autarker Photovoltaik-Wasserreinigungsanlagen, die von geschulten lokalen Dorfkomitees eigenständig gewartet werden.",
        activities: [
          "Installation von Solarpumpen in ländlichen Basisgesundheitszentren",
          "Ausbildung lokaler Wasserkomitees in Wartung und Hygiene",
          "Präventionsworkshops zur Trinkwasserhygiene für Familien vor Ort",
        ],
        partners: ["Lokale Ältestenräte", "Netzwerk Solar-Ingenieure"],
      },
      fr: {
        title: "Eau Potable Solaire & Résilience Sanitaire Communautaire",
        location: "Région Partenaire d'Afrique de l'Ouest",
        country: "Afrique",
        summary:
          "Déploiement de systèmes de filtration d'eau solaires gérés par les communautés pour réduire les maladies hydriques dans les centres de soins ruraux.",
        challenge:
          "Le manque d'eau potable et les coupures d'électricité fragilisent les dispensaires et écoles en milieu rural.",
        approach:
          "Installation de stations solaires autonomes de purification de l'eau gérées durablement par des comités locaux formés.",
        activities: [
          "Installation d'unités de pompage solaire dans les dispensaires ruraux",
          "Formation des comités communautaires à la maintenance et à l'hygiène",
          "Ateliers de sensibilisation à la prévention sanitaire pour les familles",
        ],
        partners: ["Conseils Communautaires", "Réseau d'Ingénieurs Solaires"],
      },
    },
  },
  {
    id: "proj-3",
    slug: "vocational-education-exchange",
    focusArea: "education",
    status: "active",
    verified: true,
    coverImage:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    ],
    date: "2024 - Present",
    locales: {
      en: {
        title: "Dual Vocational Education & Clean Energy Transfer",
        location: "Kigali, Dakar & Munich",
        country: "Bilateral",
        summary:
          "Adapting Germany's proven dual-education vocational model to African technical institutes for renewable energy, solar installations, and electrical engineering trades.",
        challenge:
          "Technical vocational curricula often lack practical on-the-job training in rapidly emerging renewable energy trades.",
        approach:
          "Co-developing dual apprenticeship standards between German chambers of crafts and African vocational centers.",
        activities: [
          "Curriculum alignment with international clean energy trade standards",
          "Train-the-trainer masterclasses on photovoltaic system engineering",
          "Apprenticeship placements with verified local clean-tech enterprises",
        ],
        partners: [
          "Technical Training Centers",
          "German Chamber of Crafts Network",
        ],
      },
      de: {
        title: "Duale Berufsausbildung & Transfer Erneuerbarer Energien",
        location: "Kigali, Dakar & München",
        country: "Bilateral",
        summary:
          "Übertragung des deutschen dualen Ausbildungssystems auf afrikanische Fachschulen für Solartechnik, Elektrotechnik und erneuerbare Energien.",
        challenge:
          "Klassische Lehrpläne sind oft zu theorieorientiert für den schnell wachsenden Sektor der erneuerbaren Energien.",
        approach:
          "Entwicklung dualer Ausbildungsstandards in enger Zusammenarbeit zwischen deutschen Handwerkskammern und afrikanischen Berufszentren.",
        activities: [
          "Lehrplananpassung an internationale Standards der Solartechnik",
          "Ausbilder-Workshops (Train-the-Trainer) für Photovoltaik-Installationen",
          "Vermittlung von Ausbildungsplätzen bei verifizierten Solarbetrieben vor Ort",
        ],
        partners: [
          "Technische Fachschulen",
          "Netzwerk deutscher Handwerkskammern",
        ],
      },
      fr: {
        title: "Formation Professionnelle Duale & Énergies Renouvelables",
        location: "Kigali, Dakar & Munich",
        country: "Bilatéral",
        summary:
          "Adaptation du modèle allemand de formation en alternance aux instituts techniques africains pour les métiers du photovoltaïque et de l'électrotechnique.",
        challenge:
          "Les formations professionnelles manquent souvent de volet pratique face à l'essor rapide de la transition énergétique.",
        approach:
          "Co-développement de référentiels d'apprentissage en alternance entre chambres de métiers allemandes et centres de formation africains.",
        activities: [
          "Harmonisation des programmes avec les standards techniques internationaux",
          "Formation de formateurs en ingénierie et pose de panneaux solaires",
          "Placement d'apprentis auprès d'entreprises locales du secteur solaire",
        ],
        partners: [
          "Centres de Formation Technique",
          "Réseau des Chambres de Métiers Allemandes",
        ],
      },
    },
  },
];

export function getLocalizedProjects(locale: Locale): Project[] {
  return projects.map((p) => {
    const loc = p.locales[locale] || p.locales.en;
    return {
      id: p.id,
      slug: p.slug,
      focusArea: p.focusArea,
      status: p.status,
      verified: p.verified,
      coverImage: p.coverImage,
      gallery: p.gallery,
      media: p.media,
      date: p.date,
      locales: p.locales,
      ...loc,
    };
  });
}

export function getLocalizedProject(
  slug: string,
  locale: Locale
): Project | undefined {
  const all = getLocalizedProjects(locale);
  return all.find((p) => p.slug === slug && p.verified);
}
