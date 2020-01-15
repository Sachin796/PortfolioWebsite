import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          line_linked: {
            enable: true,
            opacity: 0.02
          },
          move: {
            direction: "right",
            speed: 0.05
          },
          size: {
            value: 1
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 1
            }
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            push: {
              particles_nb: 1
            }
          }
        },
        retina_detect: true
      }}
    />
  </div>
);