## How to Build the Component Library from Start to Finish


### Step 1: Install Node.js and npm
 You can download it from [Node.js](https://nodejs.org/).
- Verify the installation:
  ```bash
  node -v
  npm -v
  ```

### Step 2: Set Up the Project
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd component-library
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   > **Note:** Running `npm install` will automatically set up Husky pre-commit hooks via the `prepare` script.

### Step 3: Install Required Packages
- Install the following packages if they are not already included in the `package.json`:
  - React and React DOM:
    ```bash
    npm install react react-dom
    ```
  - TypeScript:
    ```bash
    npm install typescript @types/react @types/react-dom
    ```
  - Storybook:
    ```bash
    npx storybook@latest init
    ```
  - Styled Components:
    ```bash
    npm install styled-components @types/styled-components
    ```
  - Testing Library:
    ```bash
    npm install @testing-library/react @testing-library/jest-dom
    ```

### Step 4: Run Storybook
1. **Start Storybook**:
   ```bash
   npm run storybook
   ```
2. **Access Storybook**:
   Open your browser and navigate to [http://localhost:6006](http://localhost:6006).

### Step 5: Run the Application Locally
1. **Start the Development Server**:
   ```bash
   npm start
   ```
2. **Access the Application**:
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### Step 6: Build the Application
1. **Create a Production Build**:
   ```bash
   npm run build
   ```
2. The build files will be available in the `build/` directory.

### Step 7: Code Quality Checks

This project enforces code quality via **Husky pre-commit hooks** and **GitHub Actions**.

#### Pre-commit Hooks (Husky + lint-staged)
Every `git commit` automatically runs:
1. **Prettier** — checks code formatting on staged files.
2. **ESLint** — lints staged TypeScript/TSX files (zero warnings allowed).
3. **Tests** — runs the full test suite in CI mode.

If any check fails, the commit is blocked until the issues are resolved.

#### Run Checks Manually
```bash
# Check formatting
npm run format:check

# Run ESLint
npm run lint

# Run tests (non-interactive)
npm run test:ci
```

#### Fix Formatting Issues
```bash
npx prettier --write "src/**/*.{ts,tsx,css}"
```

#### GitHub Actions (CI)
The same three checks run automatically on every push and pull request via the workflow defined in `.github/workflows/ci.yml`. If any check fails, GitHub marks the build as failed and notifies the committer.

### Step 8: Run the Application with Docker

1. **Install Docker**:
   - Download and install Docker from [Docker](https://www.docker.com/).
   - Verify the installation:
     ```bash
     docker --version
     ```

2. **Build the Docker Image**:
   ```bash
   docker build -t makurumidze_elwin_coding_assignment13 .
   ```

3. **Run the Docker Container**:
   ```bash
   docker run -p 8018:8018 --name makurumidze_elwin_coding_assignment13 makurumidze_elwin_coding_assignment13
   ```

4. **Access the Application**:
   Open your browser and navigate to [http://localhost:8018](http://localhost:8018) or [http://127.0.0.1:8018](http://127.0.0.1:8018).

5. **Stop the Container**:
   ```bash
   docker stop makurumidze_elwin_coding_assignment13
   docker rm makurumidze_elwin_coding_assignment13
   ```

### Step 9: Initialize Git Repository and Push to GitHub

1. **Initialize Git Repository**:
   ```bash
   git init
   ```

2. **Add All Files**:
   ```bash
   git add .
   ```

3. **Commit Changes**:
   ```bash
   git commit -m "first commit"
   ```
   > Husky will run pre-commit hooks automatically here.

4. **Set Main Branch**:
   ```bash
   git branch -M main
   ```

5. **Add Remote Repository**:
   ```bash
   git remote add origin <your-github-repo-url>
   ```

6. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```
   > GitHub Actions will run the CI pipeline automatically on every push.

## Project Structure

- `src/components`: Contains all the reusable components.
- `Dockerfile`: Used to create a Docker image for the production build.
- `README.md`: Instructions for setting up and running the project.
- `.prettierrc`: Prettier formatting configuration.
- `.eslintrc.json`: ESLint configuration.
- `.husky/pre-commit`: Husky pre-commit hook (runs Prettier, ESLint, and tests).
- `.github/workflows/ci.yml`: GitHub Actions CI pipeline.
- `public/`: Contains static assets and the base HTML file.
- `src/`: Contains the main application code.

## Components

The library includes the following components:
- Button
- Label
- Text
- Table
- Table Header
- Table Row
- Table Cell
- Table Footer
- Dropdown
- Radio Button
- Img
- Hero Image
- Card

Each component is fully documented and tested to ensure reliability and ease of use.

