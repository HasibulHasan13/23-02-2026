const fs = require('fs');
let html = fs.readFileSync('C:/Users/PC/Documents/GitHub/23022026/index.html', 'utf8');

const startIdx = html.indexOf('<section class="py-20 px-4 relative z-10" id="stats">');
const endIdx = html.indexOf('</footer>') + 9;

if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find header/footer');
    process.exit(1);
}

let patch = html.substring(startIdx, endIdx);

patch = patch.replace(/class=/g, 'className=');
patch = patch.replace(/style="animation-duration: 3s;"/g, 'style={{animationDuration: "3s"}}');
patch = patch.replace(/<br>/g, '<br />');
patch = patch.replace(/<img(.*?)[^\/]*?>/g, '<img$1 />');
patch = patch.replace(/<input(.*?)[^\/]*?>/g, '<input$1 />');

patch = patch.replace(/©/g, '&copy;');
patch = patch.replace(/â€¢/g, '&bull;');

let home = fs.readFileSync('C:/Users/PC/Documents/GitHub/23022026/app/src/pages/Home.jsx', 'utf8');
const statsPlaceholderStart = home.indexOf('<section className="py-20 px-4 relative z-10" id="stats">');

const newHome = home.substring(0, statsPlaceholderStart) + patch + '\n        </div>\n    );\n}';
fs.writeFileSync('C:/Users/PC/Documents/GitHub/23022026/app/src/pages/Home.jsx', newHome, 'utf8');
console.log('Patched Home.jsx successfully');
