// Typing effect
const typedText = document.getElementById("typed");
const lines = [
  "            Hello ,        ",
  "This is  Sravya Isukapatla ",
  "   A  Frontend    Developer,   ",
  " a  Computer Science Ethusiast  .  "
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      typedText.innerHTML += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 80);
    } else {
      typedText.innerHTML += "<br>";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 500);
    }
  }
}

// Matrix animation
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const binary = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffae";
  ctx.font = `${fontSize}px 'Fira Code'`;

  for (let i = 0; i < drops.length; i++) {
    const text = binary.charAt(Math.floor(Math.random() * binary.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }

  requestAnimationFrame(drawMatrix);
}

// Reveal Projects Section
function showProjects() {
  const projectsSection = document.getElementById("projects");
  projectsSection.style.display = "block";
  projectsSection.style.animation = "fadeIn 1s ease-in-out forwards";
  projectsSection.scrollIntoView({ behavior: "smooth" });
}

// Initialize everything on page load
window.onload = () => {
  typeLine();
  drawMatrix();
};
