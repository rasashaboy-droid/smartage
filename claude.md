# CLAUDE.md
This file provides essential guidance for development in this repository. 

## Project Goal
Create high-converting, professional landing pages for various businesses. The focus is on visual excellence, speed, and functional forms (pop-ups, lead generation).

## Tech Stack & Architecture
- **Primary Tech**: Use HTML5, CSS3, and JavaScript. 
- **Freedom of Implementation**: You are free to choose between a single-file (HTML only) or multi-file (HTML + CSS) structure based on project complexity.
- **Styling**: Prefer **Tailwind CSS** (via CDN for rapid prototyping) to keep code concise and token-efficient.
- **Deployment**: Optimized for **GitHub Pages**. Ensure all paths are relative.

## Performance & Efficiency (Token Optimization)
- **Conciseness**: Write clean, minified-style logic where possible, but keep it readable for yourself.
- **No Over-Engineering**: Do not use heavy frameworks (React/Next.js) unless explicitly asked. Stick to "Vanilla" web tech for maximum speed.
- **Asset Management**: Use reliable CDNs for libraries (e.g., FontAwesome, Google Fonts).

## Core Web Principles
- **Mobile-First**: Always start with the mobile layout. Ensure the site is perfectly responsive on all screen sizes.
- **User Experience (UX)**: Focus on fast loading times, clear Call-to-Action (CTA) buttons, and working forms.
- **Interactivity**: Implement smooth scrolling, functional pop-ups, and form validation using clean JavaScript.

## Execution Rules
- **Functionality First**: The code must be "production-ready" and bug-free. 
- **Self-Correction**: If a feature (like a pop-up) doesn't work on the first try, analyze and fix it before reporting completion.

## Visual Development

### Design Principles
- Comprehensive design skills in `/skills/skill.md`
- When making visual (front-end, UI/UX) changes, always refer to these files for guidance
- Priority order for conflicting instructions:
    1. **User prompts** — always highest authority. Note deviation briefly, then execute.
    2. **CLAUDE.md** — foundational project behaviour.
    3. **context/style-guide.md** — brand identity for this project. Overrides design principles.
  
### Quick Visual Check
IMMEDIATELY after implementing any front-end change:
1. **Identify what changed** - Review the modified components/pages
2. **Navigate to affected pages** - Use `mcp__playwright__browser_navigate` to visit each changed view
3. **Verify design compliance** - Compare against `/context/design-principles.md` and `/context/style-guide.md`
4. **Validate feature implementation** - Ensure the change fulfills the user's specific request
5. **Check acceptance criteria** - Review any provided context files or requirements
6. **Capture evidence** - Take full page screenshot at desktop viewport (1440px) of each changed view
7. **Check for errors** - Run `mcp__playwright__browser_console_messages`

This verification ensures changes meet design standards and user requirements.

### Comprehensive Design Review
Invoke the `@design-review` subagent for thorough design validation when:
- Completing significant UI/UX features
- Before Task Finalization: Before reporting that the changes are ready for user's personal review
- Needing comprehensive accessibility and responsiveness testing