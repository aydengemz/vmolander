"use client";

import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";


type ParticleNumber = {
  value: number;
  density: {
    enable: boolean;
    value_area: number;
  };
};

type ParticleColor = {
  value: string;
};

type ParticleShape = {
  type: string;
};

type ParticleAnimation = {
  enable: boolean;
  speed: number;
  opacity_min?: number;
  size_min?: number;
  sync: boolean;
};

type ParticleOpacity = {
  value: number;
  random: boolean;
  anim: ParticleAnimation;
};

type ParticleSize = {
  value: number;
  random: boolean;
  anim: ParticleAnimation;
};

type ParticleLineLinked = {
  enable: boolean;
  distance: number;
  color: string;
  opacity: number;
  width: number;
};

type ParticleMove = {
  enable: boolean;
  speed: number;
  direction: string;
  random: boolean;
  straight: boolean;
  out_mode: string;
  bounce: boolean;
};

type ParticleEvents = {
  onhover: {
    enable: boolean;
    mode: string;
  };
  onclick: {
    enable: boolean;
    mode: string;
  };
  resize: boolean;
};

type ParticleModes = {
  repulse: {
    distance: number;
    duration: number;
  };
  push: {
    particles_nb: number;
  };
};

type ParticleInteractivity = {
  detect_on: string;
  events: ParticleEvents;
  modes: ParticleModes;
};

interface ParticlesConfig {
  particles: {
    number: ParticleNumber;
    color: ParticleColor;
    shape: ParticleShape;
    opacity: ParticleOpacity;
    size: ParticleSize;
    line_linked: ParticleLineLinked;
    move: ParticleMove;
  };
  interactivity: ParticleInteractivity;
  retina_detect: boolean;
}

interface ParticlesJSWindow extends Window {
  particlesJS: (id: string, config: ParticlesConfig) => void;
}

export default function Home() {
  useEffect(() => {
    // 1) Particles.js initialization
    if (typeof window !== "undefined" && "particlesJS" in window) {
      (window as ParticlesJSWindow).particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#008CFF" },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#008CFF",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }

    // 2) Animate the "$750" amount
    function animateAmount() {
      const amountElement = document.getElementById("amount");
      if (!amountElement) return;

      const finalAmount = 750;
      const duration = 2000;
      const steps = 60;
      const increment = finalAmount / steps;
      let currentAmount = 0;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        currentAmount = Math.min(finalAmount, currentStep * increment);
        amountElement.textContent = "$" + currentAmount.toFixed(2);

        if (currentAmount >= finalAmount) {
          clearInterval(interval);
        }
      }, duration / steps);
    }

    // 3) Countdown timer (if needed in future)
    function updateTimer() {
      const minutesEl = document.getElementById("minutes");
      const secondsEl = document.getElementById("seconds");
      if (!minutesEl || !secondsEl) return;

      let minutes = parseInt(minutesEl.textContent || "0", 10);
      let seconds = parseInt(secondsEl.textContent || "0", 10);

      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      }

      minutesEl.textContent = minutes.toString().padStart(2, "0");
      secondsEl.textContent = seconds.toString().padStart(2, "0");

      if (!(minutes === 0 && seconds === 0)) {
        setTimeout(updateTimer, 1000);
      }
    }

    // 4) Update the "users online" count
    function updateOnlineUsers() {
      const onlineEl = document.getElementById("onlineUsers");
      if (!onlineEl) return;
      const baseUsers = 123;
      const randomVariation = Math.floor(Math.random() * 20) - 10;
      onlineEl.textContent = (baseUsers + randomVariation).toString();
      setTimeout(updateOnlineUsers, 2000);
    }

    // Add back notification system
    const NAMES = [
      "James R.",
      "Emma S.",
      "Liam K.",
      "Olivia M.",
      "Noah P.",
      "Ava W.",
      "Ethan B.",
      "Sophia L.",
      "Mason T.",
      "Isabella F.",
      "William H.",
      "Mia C.",
      "Lucas N.",
      "Charlotte D.",
      "Henry G.",
      "Amelia V.",
    ];

    function showNotification(name: string) {
      const alert = document.getElementById("nameAlert");
      if (!alert) return;
      const nameSpan = alert.querySelector(".name") as HTMLElement;
      if (!nameSpan) return;

      nameSpan.textContent = name;
      alert.style.display = "flex";

      setTimeout(() => {
        alert.style.display = "none";
      }, 3000);
    }

    function queueRandomNotification() {
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      showNotification(randomName);
    }

    // 5) Initialize everything
    animateAmount();
    updateTimer();
    updateOnlineUsers();
    setInterval(queueRandomNotification, 4000);

    // 6) Claim button
    const claimBtn = document.getElementById("claimButton");
    if (claimBtn) {
      claimBtn.addEventListener("click", () => {
        window.location.href =
          "https://t.afftrackr.com/?TTT=7oalGrDCjNYW%2fn2KlfhNNf1yzQv0AR%2b5vQJDRoz7h5U%3d&s1=";
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Venmo Rewards</title>
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="lazyOnload"
      />

      <div id="particles-js" style={{ position: "fixed", width: "100%", height: "100%", zIndex: 1 }} />

      {/* Notification Alert */}
      <div id="nameAlert" style={{ display: "none" }}>
        <Image
          src="/vlogo.png"
          alt="Venmo"
          width={35}
          height={35}
        />
        <div>
          <span className="name">Sophia L.</span> received $750!
        </div>
      </div>

      <div className="page-container">
        <div className="reward-card">
          <div className="venmo-logo-container">
            <Image
              className="venmo-logo"
              src="/vlogo.png"
              alt="Venmo"
              width={100}
              height={100}
            />
            <div className="cash-text">Venmo Balance</div>
            <Image
              className="verd-logo"
              src="/verd.png"
              alt="Verified"
              width={80}
              height={80}
            />
          </div>

          <div className="amount" id="amount">
            $750.00
          </div>
          <div className="amount-subtext">ready to transfer</div>

          <div className="instructions-container">
            <div className="instruction-item">
              <span className="number">1</span>
              <span>Click the Button Below</span>
            </div>
            <div className="instruction-item">
              <span className="number">2</span>
              <span>Enter Your Venmo Info</span>
            </div>
            <div className="instruction-item">
              <span className="number">3</span>
              <span className="underline">Complete Quick Offers</span>
            </div>
            <div className="instruction-item">
              <span className="number">4</span>
              <span>Get Paid Instantly</span>
            </div>
          </div>

          <div className="button-container">
            <button id="claimButton" className="claim-button">
              Get Your $750 →
            </button>

            <Image
              src="/trus2.png"
              alt="Trust Badge"
              className="trust-badge"
              layout="responsive"
              width={100}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  );
}
