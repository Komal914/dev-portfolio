import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { ParticleSettings } from "./floating-particle-settings";
import "./floating-particles.styles.css";

const FloatingParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticleSettings}
      />
    </div>
  );
};

export default FloatingParticles;

/* 
<Particles
id="tsparticles"
init={particlesInit}
loaded={particlesLoaded}
options={ParticleSettings}
/>

*/
