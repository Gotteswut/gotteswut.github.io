import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const IconBackground = () => {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

return (
    init && (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0C0C16",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
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
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.4,
                    },
                    shape: {
                        type: "image",
                        options: {
                            image: [
                                { src: "../../raw_Build.png", width: 100, height: 100 },
                                { src: "../../raw_Heal.png", width: 100, height: 100 },
                                { src: "../../raw_Market.png", width: 100, height: 100 },
                                { src: "../../raw_Rebuild.png", width: 100, height: 100 },
                                { src: "../../raw_res.png", width: 100, height: 100 },
                                { src: "../../raw_Train.png", width: 100, height: 100 },
                            ],
                        },
                    },
                    size: {
                        value: { min: 20, max: 40 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
);
};

export default IconBackground;