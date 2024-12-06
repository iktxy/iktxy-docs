# IKTXY Docs

The documentation / reference site of IKTXY.

## The Framework

This site is built with Astro [Starlight](https://starlight.astro.build/).

For the basic of Starlight, See the [astro_README.md](./astro_README.md).

## Run / Test

### Prerequisites

Before running the project, make sure you have Node.js installed:

1. Download Node.js (version 16+) from [nodejs.org](https://nodejs.org/)

2. Check Node.js installation:

   ```bash
   node --version
   ```

3. Check npm installation:

   ```bash
   npm --version
   ```

### Clone the project and run

To run the project locally:

- Clone the repo

  ```bash
  git clone https://github.com/iktxy/iktxy-docs
  ```

- Navigate into project folder

  ```bash
  cd iktxy-docs
  ```

- Install dependencies

  ```bash
  npm install
  ```

- Start dev server

  ```bash
  npm run dev
  ```

The dev server will start at http://localhost:4321 by default.

## Branch Management and Deployment Strategy

The site is automatically deployed by Github Actions with the `deploy` branch.

The `deploy` branch should not be directly commited, anyone want to do collaboration should commit to `main` branch (contributer) or send pull request to `main`

保護網站被即時性的錯誤影響，同時避免太頻繁的 auto deploy
