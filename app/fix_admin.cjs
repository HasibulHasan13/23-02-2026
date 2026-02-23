const fs = require('fs');

// 1. Fix UsersNodes.jsx -> it was wiped out. We reconstruct it from NetworkPulse.jsx Lines 100-175
let np = fs.readFileSync('C:/Users/PC/Documents/GitHub/23022026/app/src/pages/admin/NetworkPulse.jsx', 'utf8');
let tableStart = np.indexOf('<div className="glass-panel bg-white/70 dark:bg-black/20 rounded-2xl overflow-hidden');
let tableEnd = np.indexOf('</div>\n            </div>\n\n            <div className="lg:col-span-4');
if (tableStart !== -1 && tableEnd !== -1) {
    let tableContent = np.substring(tableStart, tableEnd);
    let usersNodesContent = `export default function UsersNodes() {\n    return (\n        <div className="w-full flex justify-center">\n            <div className="w-full max-w-6xl">\n                ${tableContent}\n            </div>\n        </div>\n    );\n}\n`;
    fs.writeFileSync('C:/Users/PC/Documents/GitHub/23022026/app/src/pages/admin/UsersNodes.jsx', usersNodesContent, 'utf8');
}

// 2. Add .glass-card to index.css
let css = fs.readFileSync('C:/Users/PC/Documents/GitHub/23022026/app/src/index.css', 'utf8');
if (!css.includes('.glass-card')) {
    let glassCardCss = `
  /* Admin Layout Glass Card */
  .admin-layout .glass-card {
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(16, 185, 129, 0.1);
  }
  .dark .admin-layout .glass-card {
    background: linear-gradient(145deg, rgba(6, 78, 59, 0.4) 0%, rgba(4, 120, 87, 0.1) 100%);
    border: 1px solid rgba(16, 185, 129, 0.2);
  }
`;
    // insert right before closing bracket of layer utilities
    css = css.replace(/}\s*$/, glassCardCss + '\n}');
    fs.writeFileSync('C:/Users/PC/Documents/GitHub/23022026/app/src/index.css', css, 'utf8');
}

// 3. Fix NetworkPulse.jsx UI bugs (replace simulated missing classes with original ones)
np = np.replace(/bg-white\/80 dark:bg-white\/5 border border-gray-200 dark:border-white\/10 p-4 rounded-xl hover:shadow-md transition-all duration-300/g, 'glass-card p-4 rounded-xl hover:bg-white/60 dark:hover:bg-white/5 transition-all duration-300');
np = np.replace(/shadow-sm shadow-admin-primary\/20/g, 'shadow-lg shadow-admin-primary/20');
fs.writeFileSync('C:/Users/PC/Documents/GitHub/23022026/app/src/pages/admin/NetworkPulse.jsx', np, 'utf8');

// 4. Fix PayoutQueue colors (uses #4bbe4f and font=['Manrope'])
let pq = fs.readFileSync('C:/Users/PC/Documents/GitHub/23022026/app/src/pages/admin/PayoutQueue.jsx', 'utf8');
// add font-manrope
pq = pq.replace('<div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8 text-slate-800 dark:text-slate-100">', '<div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8 text-slate-800 dark:text-slate-100 font-[\'Manrope\']">');
pq = pq.replace(/admin-primary/g, '[#4bbe4f]');
// fix some weird strings created by the literal replace
pq = pq.replace(/bg-\[#4bbe4f\]-hover/g, 'bg-[#3da140]');
pq = pq.replace(/text-\[#4bbe4f\]-hover/g, 'hover:text-[#3da140]');
fs.writeFileSync('C:/Users/PC/Documents/GitHub/23022026/app/src/pages/admin/PayoutQueue.jsx', pq, 'utf8');

console.log('Admin fidelity restored');
