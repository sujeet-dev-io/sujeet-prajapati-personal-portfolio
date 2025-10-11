const menuIcon = document.querySelector('#menuIcon')
const navBar = document.querySelector('#navBar')


//Video
window.addEventListener("DOMContentLoaded", () => {
    const home = document.getElementById("home");
  
    if (!home) {
      console.error("No #home element found");
      return;
    }
  
    // Check if video already exists
    if (!home.querySelector("video.bg-video")) {
      const video = document.createElement("video");
      video.src = "video/b.mp4";
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.classList.add("bg-video");
  
      home.prepend(video);
    }
  });
  
  // scramble effect
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#@%$&§¤¥¢£€†‡±µ÷∞≈≠≡∑√∆πΩΨΦ★☆☯☢☠⚡✦✧✪✯❖✺✹✸✶✷✻✽";
      
      this.update = this.update.bind(this);
    }
  
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
  
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
  
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
  
    update() {
      let output = "";
      let complete = 0;
  
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
  
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
  
      this.el.innerHTML = output;
  
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }
  
  // Automatic looping effect for all <a> tags with .scramble
  document.querySelectorAll(".scramble").forEach((link) => {
    const fx = new TextScramble(link);
    const text = link.innerText;
  
    function loop() {
      fx.setText(text).then(() => {
        setTimeout(loop, 2000); // delay between animations
      });
    }
    loop();
  });
  

// About animation
const texts = [
    { text: "About Me", color: "#f39c12" },
    { text: "Microservices Architecture", color: "#2ecc71" },
    { text: "Docker & Kubernetes", color: "#e74c3c" },
    { text: "React JS", color: "#3498db" }
];

const dynamicText = document.getElementById("dynamic-text");

let index = 0;

function changeText() {
    if (!dynamicText) return;
    dynamicText.textContent = texts[index].text;
    dynamicText.style.color = texts[index].color;

    dynamicText.classList.remove("animate");
    void dynamicText.offsetWidth;
    dynamicText.classList.add("animate");

    index = (index + 1) % texts.length;
}

if (dynamicText) {
  changeText();
  setInterval(changeText, 1000);
}




// about text animation
// JS for auto width adjustment



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        const isInsideSection = top >= offset && top < offset + height;

        navLinks.forEach(link => {
            if (link.getAttribute('href').includes(id)) {
                link.classList.toggle('active', isInsideSection);
            } else {
                link.classList.remove('active');
            }
        });
    });

    const header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('active')
};


function redirectToWhatsApp() {
    const phoneNumber = "+918303223251"; // Your WhatsApp number
    const message = "Hello!"; // Default message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function redirectToLinkedIn() {
    const linkedinUrl = "https://www.linkedin.com/in/sujeet-prajapati-145b2624a/";
    window.open(linkedinUrl, '_blank');
}
function redirectToFacebook() {
    const facebookUrl = "https://www.facebook.com/people/Sujeet-Prajapati/pfbid0akcGKV1uazgKA2JMRchCzzxr2eRiNwoJHqehiwgP8TTGLCof8PoRWpY1njRYtu1xl/?mibextid=ZbWKwL";
    window.open(facebookUrl, '_blank');
}
function redirectToInstagram() {
    const instagramUrl = "https://www.instagram.com/shaimy557"; // Replace 'yourusername' with your actual Instagram username
    window.open(instagramUrl, '_blank');
}
function redirectToGitHub() {
    const githubUrl = "https://github.com/sujeet-dev-io";
    window.open(githubUrl, '_blank');
}
function redirectToMusicPage() {
    window.location.href = "https://famous-churros-24d7cf.netlify.app/";
  }
  
  function downloadCV() {
    const cvLink = 'https://app.luminpdf.com/viewer/6889b01112cbb20d96733d60';
    window.open(cvLink, '_blank'); // Opens the CV link in a new tab for viewing/downloading
  }
  

// Select the alert div and all contact input fields
const alertWarning = document.getElementById('alertWarning');
const contactInputs = document.querySelectorAll('.contact-input');

// Show alert on focus and hide it on blur for each input
contactInputs.forEach(input => {
    input.addEventListener('focus', () => {
        alertWarning.style.display = 'block';
    });
    
    input.addEventListener('blur', () => {
        alertWarning.style.display = 'none';
    });
});

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #00abf0 }";
    document.body.appendChild(css);
};
  

// contact
