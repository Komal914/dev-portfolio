export const ParticleSettings = {
  background: {
    color: {
      value: "#FDF0F0",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      bubble: {
        distance: 100,
        duration: 0.4,
        size: 40,
        color: {
          value: "#F483B4",
        },
        opacity: 8,
        mix: false,
      },
    },
  },
  particles: {
    color: {
      value: "#BB0059",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 14,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "character",
      character: [
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf13b"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf38b"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf3b9"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf41b"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf799"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf3d3"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf09b"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf198"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf395"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf16c"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf1cb"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf17c"],
          weight: "400",
        },
      ],
    },
    size: {
      value: 10,
    },
  },
  detectRetina: true,
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
};

export default ParticleSettings;
