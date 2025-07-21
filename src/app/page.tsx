'use client'

import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import "./globals.css"
import Dashboard from "./components/Dashboard"
export default function Home() {
  return (
    // <div style={{ width: "100vw", height: "100vh", overflow: "hidden", margin: 0, padding: 0 }}>
    //   <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
    //     <color attach="background" args={["#ececec"]} />
    //     <Experience />
    //   </Canvas>
    // </div>

    <div style={{ width: '100vw', height: '100vh', overflowY:"auto"}}>
      <Dashboard />
    </div>
  );
}
