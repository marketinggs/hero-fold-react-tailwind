
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add fonts
const link1 = document.createElement('link');
link1.rel = 'stylesheet';
link1.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap';
document.head.appendChild(link1);

const link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
document.head.appendChild(link2);

createRoot(document.getElementById("root")!).render(<App />);
