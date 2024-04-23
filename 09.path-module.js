const path = require("path");
console.log(path.sep); // /  (platform-specific file path separator)

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath); // \content\subfolder\test.txt

const base = path.basename(filePath);
console.log(base); // test.txt

// returns an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "text.test");
console.log(absolute); // C:\Users\AL SALEEM\Desktop\tutorial\content\subfolder\text.test
