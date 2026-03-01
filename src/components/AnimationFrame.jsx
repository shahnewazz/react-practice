import { useEffect, useRef } from "react";

const AnimationFrame = () => {
    const ref = useRef(null);

    useEffect(() => {
        const duration = 3000;
        const node = ref.current;
        let  startTime = performance.now();
        let frameId;

        function onprogress(progress) {
            node.style.opacity = progress;
        }

        function step(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            onprogress(progress);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        function start() {
            onprogress(0);
            startTime = performance.now();
            frameId = requestAnimationFrame(step);
        }

        function stop() {
            cancelAnimationFrame(frameId);
            startTime = null;
            frameId = null;
        }

        start();


        return () => {
            stop();
        }
    })
    
    return (
        <>
            <div ref={ref} style={
                {
                    width: '300px',
                    height: '300px',
                    backgroundColor: 'black',
                    padding: '20px',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }>
                <h1>
                    Welcome to Animation Frame
                </h1>
            </div>
        </>
    );
};

export default AnimationFrame;