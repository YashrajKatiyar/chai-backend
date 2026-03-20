import fs from 'fs';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');
console.log("Checking path:", envPath);

if (fs.existsSync(envPath)) {
    console.log("✅ File exists!");
    const content = fs.readFileSync(envPath, 'utf8');
    console.log("File content starts with:", content.substring(0, 15));
} else {
    console.log("❌ File NOT found at this path.");
}