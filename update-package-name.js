// Script to update package.json with scoped package name
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🔧 Updating package.json to use scoped package name...\n');

rl.question('Enter your npm username: ', (username) => {
  if (!username || username.trim() === '') {
    console.error('❌ Username cannot be empty!');
    rl.close();
    process.exit(1);
  }

  const packagePath = './package.json';
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  const oldName = packageJson.name;
  const newName = `@${username.trim()}/react-smart-hooks`;
  
  packageJson.name = newName;
  
  // Update repository URL if it exists
  if (packageJson.repository && packageJson.repository.url) {
    // Extract GitHub username from URL or use npm username
    const githubMatch = packageJson.repository.url.match(/github\.com\/([^\/]+)/);
    const githubUsername = githubMatch ? githubMatch[1] : username.trim();
    packageJson.repository.url = `https://github.com/${githubUsername}/react-smart-hooks.git`;
    packageJson.homepage = `https://github.com/${githubUsername}/react-smart-hooks#readme`;
    packageJson.bugs = {
      url: `https://github.com/${githubUsername}/react-smart-hooks/issues`
    };
  }
  
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
  
  console.log(`\n✅ Updated package name:`);
  console.log(`   From: ${oldName}`);
  console.log(`   To:   ${newName}\n`);
  console.log('📝 Next steps:');
  console.log('   1. npm run build');
  console.log('   2. npm publish --access public\n');
  
  rl.close();
});

