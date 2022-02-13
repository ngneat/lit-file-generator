#!/usr/bin/env node

require('child_process').execSync(
  `npx plop --plopfile ${__dirname}/plopfile.js`,
  { stdio: 'inherit' }
);
