/**
 * Post-install script to sync agents to .cursor/agents directory.
 * @description Automatically creates .cursor/agents directory and copies all agent files when package is installed.
 * @since 2024-12-19
 * @author <galo.meggiolaro@aidonic.io>
 */
const fs = require("fs");
const path = require("path");

function findPackageRoot() {
  const potentialRoot = path.join(__dirname, "..");
  const packageJsonPath = path.join(potentialRoot, "package.json");
  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = require(packageJsonPath);
      if (packageJson.name === "@galomegg/frontend-agent") {
        return potentialRoot;
      }
    } catch (error) {
      // Fall through to fallback
    }
  }
  return potentialRoot;
}

function findProjectRoot() {
  const dirnameStr = path.resolve(__dirname);
  if (dirnameStr.includes("node_modules")) {
    const nodeModulesIndex = dirnameStr.lastIndexOf(path.sep + "node_modules" + path.sep);
    if (nodeModulesIndex !== -1) {
      const projectRoot = dirnameStr.substring(0, nodeModulesIndex);
      if (projectRoot) {
        return projectRoot;
      }
    }
    const parts = dirnameStr.split(path.sep);
    const nodeModulesIdx = parts.lastIndexOf("node_modules");
    if (nodeModulesIdx > 0) {
      return parts.slice(0, nodeModulesIdx).join(path.sep) || "/";
    }
  }
  let cwd = process.cwd();
  if (cwd.includes("node_modules")) {
    const nodeModulesIndex = cwd.lastIndexOf(path.sep + "node_modules" + path.sep);
    if (nodeModulesIndex !== -1) {
      return cwd.substring(0, nodeModulesIndex);
    }
  }
  return cwd;
}

function copyAgents() {
  try {
    const packageRoot = findPackageRoot();
    const sourceDir = path.join(packageRoot, "agents");
    const targetRoot = findProjectRoot();
    const cursorDir = path.join(targetRoot, ".cursor");
    const targetDir = path.join(cursorDir, "agents");

    console.log(`[frontend-agent] Installing agents...`);
    console.log(`[frontend-agent] Source: ${sourceDir}`);
    console.log(`[frontend-agent] Target: ${targetDir}`);

    if (!fs.existsSync(sourceDir)) {
      console.error(`[frontend-agent] ✗ Error: Agents directory not found at ${sourceDir}`);
      return;
    }

    if (!fs.existsSync(cursorDir)) {
      fs.mkdirSync(cursorDir, { recursive: true });
    }
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const files = fs.readdirSync(sourceDir);
    let copiedCount = 0;

    files.forEach((file) => {
      const src = path.join(sourceDir, file);
      const dest = path.join(targetDir, file);
      const stat = fs.statSync(src);
      if (stat.isFile() && file.endsWith(".json")) {
        fs.copyFileSync(src, dest);
        copiedCount++;
      }
    });

    if (copiedCount > 0) {
      console.log(`[frontend-agent] ✓ Successfully installed ${copiedCount} agent(s) to .cursor/agents/`);
    } else {
      console.warn(`[frontend-agent] ⚠ No agent files found to copy from ${sourceDir}`);
    }
  } catch (error) {
    console.error(`[frontend-agent] ✗ Error installing agents: ${error.message}`);
  }
}

copyAgents();
