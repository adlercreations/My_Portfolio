//client/src/components/ThreeDHeader.js
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';

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

    const primaryColor = '#3b82f6'; // Theme primary color
    const hoverColor = '#2563eb'; // A darker shade for hover

    return (
        <Text3D
            ref={textRef}
            font="/fonts/Inter_Bold.json"
            size={0.8}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.05}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            letterSpacing={0.02}
            lineHeight={1}
            onClick={() => navigate('/')}
            onPointerOver={(e) => e.object.material.color.set(hoverColor)}
            onPointerOut={(e) => e.object.material.color.set(primaryColor)}
        >
            STEPHEN ADLER
            <meshStandardMaterial
                color={primaryColor}
                emissive={primaryColor}
                emissiveIntensity={0.2}
                metalness={0.8}
                roughness={0.2}
            />
        </Text3D>
    );
}

function ThreeDHeader() {
    return (
        <div className="w-full h-40 relative overflow-hidden cursor-pointer">
            <Canvas dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Suspense fallback={null}>
                    <AnimatedText />
                </Suspense>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}

export default ThreeDHeader;