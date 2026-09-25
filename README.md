# SkillBridge MVP

Turn student projects into proof of skill.**

DEMO:

https://sprightly-paprenjak-8953e4.netlify.app/

SkillBridge is an education innovation platform that transforms college projects into **evidence-backed skill portfolios**. Instead of showing recruiters only a resume, project title, and GitHub link, SkillBridge connects each claimed skill to evidence from the project.

 🎯 Problem

Students build many projects during college, but recruiters often cannot clearly understand:

- What skills the student actually demonstrated
- How deeply those skills were used
- Which technologies were implemented
- What evidence supports the student's skill claims

A project usually becomes:

Project → GitHub Link → Resume Bullet

SkillBridge changes this into:

Project → Evidence → Skill Map → Skill Passport

💡 Solution

SkillBridge analyzes a student's project and creates a structured Skill Passport.

 Core Flow


Student Project
       ↓
Project Analysis
       ↓
Technology Detection
       ↓
Evidence Mapping
       ↓
Skill Assessment
       ↓
Skill Passport
       ↓
Recruiter View


## ✨ Key Features

### 👨‍🎓 Student Dashboard

Students can view:

* Demonstrated skills
* Skill proficiency
* Number of projects
* Evidence points
* Project history

### 🔍 Project Analyzer

Students can submit a GitHub repository and generate a project-based skill profile.

### 🧩 Project → Skill → Evidence Mapping

Every skill is connected to project evidence.

Example:

```text
Kafka
 ├── Producer implemented
 ├── Topic configured
 └── Consumer implemented

SQL
 ├── PostgreSQL schema
 ├── Complex queries
 └── Data transformation
```

### 🪪 Skill Passport

A student's projects are converted into a continuously growing profile of demonstrated capabilities.

### 💼 Recruiter View

Recruiters can see:

* Candidate skills
* Skill levels
* Supporting projects
* Evidence behind each skill
* Technology experience

## 🏗️ Tech Stack

* React
* Vite
* JavaScript
* CSS
* Lucide React
* Netlify

The current MVP uses a simulated project-analysis flow, so **no API keys are required**.

## 📁 Project Structure

```text
skillbridge/
│
├── package.json
├── index.html
├── vite.config.js
├── netlify.toml
├── README.md
│
└── src/
    ├── main.jsx
    └── styles.css
```

## 🚀 Run Locally

Clone or download the project.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite.

## 🌐 Build for Netlify

Create the production build:

```bash
npm run build
```

### Netlify Configuration

```text
Build command:
npm run build

Publish directory:
dist
```

The included `netlify.toml` already contains the required configuration.

## 🔮 Future Development

SkillBridge can be extended with:

* GitHub API integration
* AI-powered code and README analysis
* Automatic skill extraction
* Evidence confidence scoring
* Student authentication
* College dashboards
* Recruiter search
* Skill verification workflows
* Shareable Skill Passport URLs
* Internship/job skill matching
* Industry skill-gap analytics

## 🌍 Vision

SkillBridge aims to shift student evaluation from:

> **"What did you study?"**

and

> **"What projects did you build?"**

to:

> **"What skills can you actually demonstrate?"**

## 🏆 Hackathon Concept

**Challenge:** Graphiques Innovation Challenge

**Theme:** Education & Learning

**Concept:** Convert college projects into verified, evidence-backed skill portfolios that employers can understand.

## 👩‍💻 Project

**SkillBridge**

**Project tagline:**

> *Your projects are more than projects. They're proof of what you can do.*

```
```

A Vite + React frontend prototype for the Graphiques Innovation Challenge.

## Run locally
```bash
npm install
npm run dev
```

## Build for Netlify
```bash
npm run build
```

Netlify settings:
- Build command: `npm run build`
- Publish directory: `dist`

The current repository analyzer is a demo flow. It does not call GitHub or an AI API, so it can be deployed without API keys.
