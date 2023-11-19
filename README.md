# Try OpenAPI-compliant (tsoa) using TypeScript Web API (express) in DDD architecture

## Info

### Database schema

[![ER Diagram on DBDiagram](src/database/docs/erd.png)](https://dbdiagram.io/)

### File structure

```dir
ProjectName/
└── src
	├── Application
	│	├── Controllers
	│	└── Middlewares
	├── Domain
	│	├── DTOs
	│	├── Entities
	│	├── Exceptions
	│	├── Services
	│	└── Validators
	└── Infrastructure
	 	├── Database
	 	├── Migrations
	 	└── Repositories
```

## Tech Stack

### Main Techs

-   Language : `TypeScript` (5.2.2)
-   Web Application framework : `Express` (4.18.2)
-   Database : `MySQL` (?)
-   Object-Relational Mapping (ORM) : `Prisma` (5.6.0)
-   Build : `Node` (20.5.1)

### Libraries

-   Package manager : `NPM` (10.2.4)
-   Schema validation : `Zod` (3.22.4)
-   API documentation : `tsoa` () | `OpenAPI` (3.0.3)
-   Technical documentation : `Compodoc` (?)

### Development Environment

-   OS : `Win` (11) | `WSL 2` (Ubuntu 22.04) | `Dev Container`
-   IDE : `VS Code` (^1.83.0)

---

## TIPs

### CLI

```bash
# Get repo statistics
tokei --exclude *.sql *.toml --sort code > .vscode/detail/$(date --utc +%FT%TZ)
```

```bash
# Generate swagger file
npx tsoa spec
```

```bash
# Build project
npx tsc
```

```bash
# Run project
node build/main.js
```
