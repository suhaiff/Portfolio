import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";

const Planet = () => {
  const planet = useGLTF("/planet/earth.glb");
  const ref = useRef();

  useEffect(() => {
    console.log("Planet model loaded:", planet);
  }, [planet]);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.001;
  });

  return (
    <primitive ref={ref} object={planet.scene} scale={0.4} position={[0, -0.1, 0]} />
  );
};

const PlanetCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 0,
        backgroundColor: "#000",
        opacity: "0.8",
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={0.5} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.1}/>
      <Suspense fallback={null}>
        
        <Planet />
      </Suspense>
    </Canvas>
  );
};

export default PlanetCanvas;
