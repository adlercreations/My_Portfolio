//client/src/components/ThreeDHeader.js
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';

function AnimatedText() {
    const textRef = useRef();
    const navigate = useNavigate();

    // Rotate the text slightly on each frame
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (textRef.current) {
            textRef.current.rotation.x = Math.sin(t / 2) * 0.2;
            textRef.current.rotation.y = Math.cos(t / 2) * 0.2;
        }
    });

    return (
        <Text
            ref={textRef}
            fontSize={2.5}
            color="#007bff"
            position={[0, 0, 0]}
            anchorX="center"
            anchorY="middle"
            font={`${window.location.origin}/My_Portfolio/fonts/Roboto-Bold.ttf`} // Optional: Add a custom font
            onClick={() => navigate('/')}
            onPointerOver={(e) => (e.object.color = 'red')}
            onPointerOut={(e) => (e.object.color = '#007bff')}
            outlineWidth={0.12}
            outlineColor="white"
            outlineOpacity={1}
            style={{ cursor: 'pointer' }}
        >
            Stephen J. Adler
        </Text>
    );
}

// function ThreeDHeader() {
//     return (
//         <div style={{ width: '100%', height: '150px', position: 'relative' }}>
//             <Canvas>
//                 <ambientLight intensity={0.5} />
//                 <directionalLight position={[10, 10, 5]} />
//                 <AnimatedText />
//             </Canvas>
//         </div>
//     );
// }

function ThreeDHeader() {
    return (
        <div
            style={{
                width: '100vw', // Full width of the viewport
                height: '150px', // Height of the header
                position: 'relative', // Ensure it's positioned correctly
                overflow: 'hidden', // Prevent any overflowing content
            }}
        >
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} />
                <AnimatedText />
            </Canvas>
        </div>
    );
}

export default ThreeDHeader;