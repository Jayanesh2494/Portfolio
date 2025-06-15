import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';

// @ts-ignore
import { Model } from "./Computer";

const ComputerContainer = () => {
    return (
        <Canvas gl={{ alpha: true, premultipliedAlpha: false }}>
            <Suspense fallback={null}>
                <Stage environment="forest" intensity={0.6}>
                    <Model position={[5, -3, 0]} rotation={[0, -0.5, 0]} scale={20} />
                </Stage>
            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}

export default ComputerContainer;
