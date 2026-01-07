const files = [
    "index.js",
    ".env",
    "node.config",
    "git.config",
    "package.json",
    ".gitignore"
];

const configFiles = files.filter(item=> item.includes(".config"))

console.log(configFiles)