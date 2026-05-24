import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const screens = [
  {
    name: 'UserDashboard',
    id: '155ed94bfecb46d5b54f5afd9f29f76d',
    htmlUrl: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzJhODg2MDljNGVlNDQ2OGZiNGIwOTcyZWNlNGUxYjgzEgsSBxCHsI790QYYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTU5MTQyMDc1MTQwMzU5Mjc5OQ&filename=&opi=89354086'
  },
  {
    name: 'LandingPage',
    id: 'ef5f82d74ef44e0dacf6312fc1fd48b0',
    htmlUrl: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzkyMmZmN2Q0MTJhZDQ4YzFiMWE5MTBkM2ZjZWY3NDhlEgsSBxCHsI790QYYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTU5MTQyMDc1MTQwMzU5Mjc5OQ&filename=&opi=89354086'
  },
  {
    name: 'UserAnalysis',
    id: '6a1261cf00c548f999badfcbcba189ed',
    htmlUrl: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzUwNjVhMjYzMzNjMTQ0MjBhMzUyZDVjNjQ1NDdlNjkxEgsSBxCHsI790QYYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTU5MTQyMDc1MTQwMzU5Mjc5OQ&filename=&opi=89354086'
  },
  {
    name: 'NewUserSignUp',
    id: '49deaa7cce824423b4875d92142d20c4',
    htmlUrl: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2FiNjMwOGUzZWVkNzQ0NjY4MTcyM2QyMjRhOGNjNzk2EgsSBxCHsI790QYYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTU5MTQyMDc1MTQwMzU5Mjc5OQ&filename=&opi=89354086'
  },
  {
    name: 'LoginAndSignIn',
    id: 'cc056ab5feff46f084f6701595020609',
    htmlUrl: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzZiMTVlMmQwMGMxNzQ5OTRhYWYyYWFjYmI3OGI3ZTFjEgsSBxCHsI790QYYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTU5MTQyMDc1MTQwMzU5Mjc5OQ&filename=&opi=89354086'
  },
  {
    name: 'ProductRecommendations',
    id: 'ec81d2675e0b4482ab3810bd0c7b342b',
    htmlUrl: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzc4OTlkN2M4ZGY1YTQ1YWRhZjY1OWE0ZjA4ZDIzZTYzEgsSBxCHsI790QYYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTU5MTQyMDc1MTQwMzU5Mjc5OQ&filename=&opi=89354086'
  },
  {
    name: 'DoctorConsultation',
    id: '1d2969a3468544038f3ba7a1e1c8ccf7',
    htmlUrl: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2RhMjM5YzI0NGVhMjRlMDRiNDM2YjAwMDBmNzM1ZDBhEgsSBxCHsI790QYYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTU5MTQyMDc1MTQwMzU5Mjc5OQ&filename=&opi=89354086'
  },
  {
    name: 'ConsultationChat',
    id: 'eae318053378401f988306e96c9d4e25',
    htmlUrl: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzc3MmU2N2M0NDQ5NDQxZmY5ZWFlNDVjZTEyNDRlMTY2EgsSBxCHsI790QYYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTU5MTQyMDc1MTQwMzU5Mjc5OQ&filename=&opi=89354086'
  },
  {
    name: 'ClinicFinder',
    id: '21622449b6c44c168ad77b4bcd54feb1',
    htmlUrl: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2Q2NjE4MDgwYTRkZTQyNDliMThkZjEyMTc3NmU1MGI3EgsSBxCHsI790QYYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTU5MTQyMDc1MTQwMzU5Mjc5OQ&filename=&opi=89354086'
  }
];

const DOWNLOAD_DIR = path.join(__dirname, 'src/stitch_designs');

if (!fs.existsSync(DOWNLOAD_DIR)) {
  fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

async function downloadFile(url, dest) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const html = await response.text();
    fs.writeFileSync(dest, html);
    console.log(`Successfully downloaded -> ${path.basename(dest)}`);
  } catch (err) {
    console.error(`Error downloading to ${dest}:`, err.message);
  }
}

async function run() {
  console.log("Starting download of Stitch designs...");
  for (const screen of screens) {
    const destHtml = path.join(DOWNLOAD_DIR, `${screen.name}.html`);
    console.log(`Downloading HTML for ${screen.name}...`);
    await downloadFile(screen.htmlUrl, destHtml);
  }
  console.log("Finished downloading Stitch designs.");
}

run();
