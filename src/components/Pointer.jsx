import { useEffect, useEffectEvent, useState } from "react";

const Pointer = () => {
    const [canMove, setCanMove] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    const onMove = useEffectEvent((e) => {
        if (canMove) {
            setPosition({ 
                x: e.clientX, 
                y: e.clientY 
            });
        }
    });

    useEffect(() => {
        console.log('Adding event listener');
        window.addEventListener('mousemove', onMove);

        return () => {
            window.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <div>
            <label>
                <input type="checkbox" 
                checked={canMove}
                onChange={(e) => setCanMove(e.target.checked)} />
                Check this for pointer cursor
            </label>
            <hr />
            <div style={
                {
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    pointerEvents: 'none',
                    transition: 'transform 0.1s ease-out',
                }
            }>
                
            </div>
        </div>
    );
};

export default Pointer;