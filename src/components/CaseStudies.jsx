import { useState } from 'react'
import { motion } from 'framer-motion'
import CaseStudyCard from './CaseStudyCard'
import ProjectModal from './ProjectModal'

const projects = [
  {
    name: 'Skora',
    type: 'B2B SaaS',
    color: 'purple',
    image: '/images/skora.png',
    description:
      'A B2B college counseling management platform designed to streamline counselor workflows and student tracking. Successfully incubated via a formal partnership with the Jordan Applied Technology Center (JATC) after a blind enterprise pitch.',
    stack: [
      'Next.js', 'React', 'Neon PostgreSQL', 'Drizzle ORM',
      { label: 'Clerk Auth', colorClass: 'tag-neutral' },
      'Redis',
      { label: 'Groq AI', colorClass: 'tag-neutral' },
      { label: 'Stripe', colorClass: 'tag-neutral' },
    ],
    metrics: [
      'Integrated Groq AI for low-latency client communication tools',
      'Scaled infrastructure to support multiple active Stripe subscription tiers ($49–$199/mo)',
      <a href="https://codeelevation.org" target="_blank" rel="noopener noreferrer" style="color:rgba(139,92,246,0.8);text-decoration:underline;text-underline-offset:2px">Built and launched the core engine live for 30+ students at Code Elevation hackathon</a>,
    ],
    architecture: {
      summary: 'Architected as a full-stack Next.js application with a serverless PostgreSQL backend, real-time Redis caching layer, and AI-powered communication tools via Groq.',
      highlights: [
        'Drizzle ORM for type-safe database queries against Neon PostgreSQL with connection pooling',
        'Clerk Auth handles multi-tenant authentication with organization-based access control',
        'Redis caching layer reduces latency for frequently accessed counselor-student data',
        'Groq AI integration powers low-latency communication suggestions and automated follow-ups',
        'Stripe subscription tiers ($49/$99/$199 per month) with feature gating per plan',
      ],
    },
    liveUrl: 'https://skoraadmit.com',
    githubUrl: 'https://github.com/businessfawcett-cloud/skora',
  },
  {
    name: 'CatchAndTrade',
    type: 'Marketplace',
    color: 'cyan',
    image: '/images/catch-and-trade.png',
    description:
      'A high-performance monorepo trading card marketplace engineered for the TCG community, featuring real-time card scanning and instant grading.',
    stack: [
      'Next.js', 'React',       { label: 'Supabase PostgreSQL', colorClass: 'tag-neutral' },
      { label: 'Tesseract.js OCR', colorClass: 'tag-neutral' },
      'Google OAuth', 'TailwindCSS',
    ],
    metrics: [
      'Designed a database architecture tracking 20,000+ unique collectibles',
      'Achieved optimized, sub-200ms query response times',
      'Integrated client-side OCR scanning engine to process physical cards seamlessly',
    ],
    architecture: {
      summary: 'Built as a monorepo with a Next.js frontend and Supabase backend, featuring real-time OCR card scanning and a deeply optimized database schema for sub-200ms queries across 20k+ collectibles.',
      highlights: [
        'Supabase PostgreSQL with strategic indexing and materialized views for fast card lookups',
        'Tesseract.js OCR runs entirely client-side — no server costs for card scanning',
        'Database schema optimized for the TCG domain: cards, variants, condition grading, price history',
        'Google OAuth for frictionless authentication with rate-limited API access',
        'Sub-200ms query performance through composite indexes and denormalized price snapshots',
      ],
    },
    liveUrl: 'https://catchandtrade.com',
    githubUrl: 'https://github.com/businessfawcett-cloud/catch-and-trade',
  },
  {
    name: 'MyNexusAI',
    type: 'AI SaaS',
    color: 'green',
    image: '/images/mynexusai.png',
    description:
      'A production customer support SaaS and enterprise receptionist platform capable of handling automated, real-time voice and text multi-channel communication.',
    stack: [
      'Node.js', 'pgvector', 'ChromaDB',
      { label: 'OpenRouter API', colorClass: 'tag-neutral' },
      { label: 'Twilio Voice/SMS', colorClass: 'tag-neutral' },
      { label: 'ElevenLabs', colorClass: 'tag-neutral' },
      { label: 'AssemblyAI', colorClass: 'tag-neutral' },
    ],
    metrics: [
      'Configured a robust Retrieval-Augmented Generation (RAG) pipeline for domain-specific knowledge extraction',
      'Implemented multi-LLM fallback routing via OpenRouter to ensure 100% uptime',
      'Scaled to active production users across tiered models ($29–$299/mo)',
    ],
    architecture: {
      summary: 'A multi-channel AI receptionist platform combining RAG pipelines, real-time voice processing, and intelligent LLM routing for enterprise-grade customer support automation.',
      highlights: [
        'RAG pipeline uses pgvector (PostgreSQL) + ChromaDB for hybrid vector search across domain knowledge bases',
        'OpenRouter API provides multi-LLM fallback routing — if one model fails, another takes over instantly',
        'Twilio Voice/SMS handles inbound and outbound multi-channel communication',
        'ElevenLabs for ultra-realistic voice synthesis, AssemblyAI for real-time speech-to-text transcription',
        'Tiered pricing ($29/$99/$299 per month) with usage-based limits per plan',
      ],
    },
    liveUrl: 'https://mynexusai.org',
    githubUrl: 'https://github.com/businessfawcett-cloud/mynexus-ai',
  },
  {
    name: 'Alvien',
    type: 'B2B BI SaaS',
    color: 'orange',
    image: '/images/alvien.png',
    description:
      'A B2B business intelligence and competitor analysis SaaS that automates the extraction of public market data to generate structured strategic briefs.',
    stack: [
      'Python', 'FastAPI',
      { label: 'Firecrawl API', colorClass: 'tag-neutral' },
      { label: 'Groq LLMs', colorClass: 'tag-neutral' },
      'TailwindCSS',
    ],
    metrics: [
      'Automates real-time extraction from competitor domains via Firecrawl API, bypassing anti-scraping protections',
      'Converts unstructured web data into structured JSON tokens processed by Groq LLMs',
      'Near-zero latency strategic brief generation from raw public market data',
    ],
    architecture: {
      summary: 'A lightweight Python/FastAPI backend orchestrating a two-stage pipeline: Firecrawl for intelligent web scraping, then Groq LLMs for real-time structured brief generation.',
      highlights: [
        'Firecrawl API intelligently bypasses anti-scraping measures and parses semantic HTML into clean markdown',
        'Groq LLMs provide near-instantaneous inference for converting scraped data into structured business briefs',
        'FastAPI async endpoints handle concurrent scraping jobs with minimal resource overhead',
        'Pipeline designed for idempotent re-scraping — incremental updates without duplicating data',
        'Outputs structured strategic briefs ready for dashboards, reports, or downstream analytics',
      ],
    },
    liveUrl: 'https://alvien.onrender.com',
    githubUrl: 'https://github.com/businessfawcett-cloud/alvien',
  },
  {
    name: 'Code Elevation',
    type: 'Youth Tech Initiative',
    color: 'pink',
    image: '/images/code-elevation.png',
    description:
      'A regional youth technology initiative and competitive hackathon founded to bridge the gap between high school students and professional software engineering workflows. Designed to foster high-agency technical execution among student developers.',
    stack: [
      'Next.js', 'React', 'Neon PostgreSQL', 'Drizzle ORM',
      'Cold Outreach Strategy', 'Corporate Sponsorship',
    ],
    metrics: [
      'Scaled the regional initiative to support 30+ active student participants and competitors',
      'Executed cold outreach campaigns to secure Pluralsight and CHG Healthcare as headline corporate sponsors',
      'Negotiated and managed a $1,650 cash prize pool alongside professional developer software license donations',
    ],
    architecture: {
      summary: 'Orchestrated end-to-end event logistics, engineered the web presence, and managed cross-functional corporate relations. Built and presented a live full-stack Next.js/PostgreSQL SaaS architecture demo to train participants in modern production frameworks.',
      highlights: [
        'Engineered the full web presence using Next.js, Neon PostgreSQL, and Drizzle ORM for event registration and management',
        'Cold outreach campaigns targeted enterprise tech companies — secured Pluralsight and CHG Healthcare as headline sponsors',
        'Managed a $1,650 cash prize pool with additional professional software license donations from corporate partners',
        'Designed and presented a live, end-to-end full-stack architecture demonstration during the hackathon',
        'Built cross-functional relationships bridging high school education with real-world software engineering workflows',
      ],
    },
    liveUrl: 'https://codeelevation.org',
    githubUrl: 'https://github.com/businessfawcett-cloud/code-elevation',
  },
]

export default function CaseStudies() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="case-studies" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Case Studies</p>
        <h2 className="section-title">Engineering in Production</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 28 }}>
        {projects.map((project, i) => (
          <CaseStudyCard key={project.name} project={project} index={i} onViewDetails={setSelectedProject} />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
