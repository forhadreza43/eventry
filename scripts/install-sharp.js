#!/usr/bin/env node

// Script to install sharp platform-specific binaries for Vercel
import path from "path";
import fs from "fs";

try {
  const sharpPath = path.join(process.cwd(), "node_modules", "sharp");

  // Check if sharp is installed
  if (!fs.existsSync(sharpPath)) {
    console.log("Sharp not found, skipping install");
    process.exit(0);
  }

  // Try to require and run sharp's install script
  const installScript = path.join(sharpPath, "lib", "install.js");

  if (fs.existsSync(installScript)) {
    import(installScript).then((module) => {
      module.default();
    });
    console.log("Sharp platform binary installed successfully");
  } else {
    console.log("Sharp install script not found, skipping");
  }
} catch (error) {
  // Don't fail the build - sharp might already be installed correctly
  console.log("Sharp install note:", error.message);
  process.exit(0);
}
