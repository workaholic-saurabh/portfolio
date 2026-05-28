// ===================================
// LIVE TERMINAL TYPING EFFECT
// ===================================

const line = document.querySelector(".line");

const commands = [

    "$ kubectl get nodes",
    "master-node     Ready",

    "$ docker ps",
    "nginx-container     Up 2 hours",

    "$ oc get pods",
    "monitoring-pod     Running",

    "$ systemctl status nginx",
    "active (running)"

];

let commandIndex = 0;
let charIndex = 0;

function typeTerminal() {

    if (!line) return;

    if (charIndex < commands[commandIndex].length) {

        line.innerHTML += commands[commandIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeTerminal, 40);

    }

    else {

        line.innerHTML += "<br>";

        commandIndex++;

        charIndex = 0;

        if (commandIndex < commands.length) {

            setTimeout(typeTerminal, 600);

        }
    }
}

typeTerminal();



// ===================================
// CURSOR GLOW EFFECT
// ===================================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if(glow){

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";
    }
});


// ===================================
// PARTICLES BACKGROUND
// ===================================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#00f7ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#00f7ff",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }
    }

});

// ===================================
// 3D GLOBE BACKGROUND
// ===================================

VANTA.GLOBE({

    el: "#globe-bg",

    mouseControls: true,

    touchControls: true,

    gyroControls: false,

    minHeight: 200,

    minWidth: 200,

    scale: 1,

    scaleMobile: 1,

    color: 0x00f7ff,

    backgroundColor: 0x050816,

    size: 1.2
});