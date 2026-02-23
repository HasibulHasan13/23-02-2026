const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dir = __dirname;
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    const htmlText = fs.readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(htmlText);
    const document = dom.window.document;

    // We update every anchor tag to replace href="#"
    const anchors = document.querySelectorAll('a');
    let updated = false;

    anchors.forEach(a => {
        const text = a.textContent.toLowerCase().trim();

        // Brand logo
        if (text.includes("ars") && text.includes("surveys")) {
            a.href = "index.html";
            updated = true;
        }

        // Common flows
        else if (text.includes("sign up") || text.includes("get started") || text.includes("create account")) {
            a.href = "register.html";
            updated = true;
        }
        else if (text.includes("sign in") || text.includes("login")) {
            if (file === 'login.html') {
                a.href = "user-dashboard.html"; // Simulate successful login
            } else {
                a.href = "login.html";
            }
            updated = true;
        }
        else if (text.includes("logout") || text === "logout") {
            a.href = "login.html";
            updated = true;
        }
        else if (text.includes("forgot password")) {
            a.href = "admin-dashboard-1.html"; // Demo path for admin pages
            updated = true;
        }

        // Navigation sidebars
        else if (text.includes("command center") || text.includes("network pulse")) {
            // Assume if in an admin dash, keep to admin-dashboard-1, else user-dashboard
            if (file.includes("admin")) {
                a.href = "admin-dashboard-1.html";
            } else {
                a.href = "user-dashboard.html";
            }
            updated = true;
        }
        else if (text.includes("nodes & users")) {
            a.href = "admin-dashboard-2.html";
            updated = true;
        }
        else if (text.includes("settings")) {
            if (file.includes("admin")) {
                a.href = "admin-dashboard-3.html";
            } else {
                a.href = "support-help-center.html";
            }
            updated = true;
        }
        else if (text.includes("payout queue") || text.includes("withdrawals")) {
            a.href = "admin-withdrawal-approval.html";
            updated = true;
        }
        else if (text.includes("vps nodes") || text.includes("vps management")) {
            a.href = "vps-information-details.html";
            updated = true;
        }
        else if (text.includes("earnings")) {
            a.href = "earning-withdrawal.html";
            updated = true;
        }
        else if (text.includes("active surveys")) {
            a.href = "user-dashboard.html";
            updated = true;
        }
        else if (text.includes("support") || text.includes("help") || text.includes("contact")) {
            a.href = "support-help-center.html";
            updated = true;
        }
    });

    // Special cases: Fix the 'Logout' span since it wasn't an <a> tag initially in the Stitch source
    const logoutSpans = document.querySelectorAll('span.material-icons-round');
    logoutSpans.forEach(span => {
        if (span.textContent.trim().toLowerCase() === "logout" && span.parentElement.tagName !== "A") {
            const wrapper = document.createElement("a");
            wrapper.href = "login.html";
            wrapper.title = "Logout";
            span.parentNode.insertBefore(wrapper, span);
            wrapper.appendChild(span);
            updated = true;
        }
    });

    if (updated) {
        fs.writeFileSync(filePath, dom.serialize(), 'utf-8');
        console.log(`Successfully mapped DOM links in ${file}`);
    }
});
