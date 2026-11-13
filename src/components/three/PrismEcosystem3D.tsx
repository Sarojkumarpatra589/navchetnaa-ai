"use client";

import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, Line, Environment } from "@react-three/drei";
import { cn } from "@/lib/utils";
import styles from "./PrismEcosystem3D.module.css";

interface AINodeSpec {
  id: string;
  label: string;
  position: [number, number, number];
  accent: string;
}

const ORBITAL_NODES: AINodeSpec[] = [
  {
    id: "receptionist",
    label: "AI Receptionist",
    position: [-2.15, 1.35, 0.55],
    accent: "#8CEE3F",
  },
  {
    id: "sales",
    label: "AI Sales Agents",
    position: [2.15, 1.3, 0.45],
    accent: "#2DD4BF",
  },
  {
    id: "support",
    label: "Customer Support",
    position: [-2.45, -0.05, -0.35],
    accent: "#38BDF8",
  },
  {
    id: "automation",
    label: "Workflow Automation",
    position: [2.45, -0.1, -0.35],
    accent: "#8CEE3F",
  },
  {
    id: "chatbots",
    label: "AI Chatbots",
    position: [-1.85, -1.45, 0.55],
    accent: "#2DD4BF",
  },
  {
    id: "crm",
    label: "CRM Automation",
    position: [1.9, -1.42, 0.5],
    accent: "#38BDF8",
  },
];

function NeuralPrismScene() {
  const clusterRef = useRef<THREE.Group>(null);
  const outerPrismRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ringOneRef = useRef<THREE.Mesh>(null);
  const ringTwoRef = useRef<THREE.Mesh>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const originPoint = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (outerPrismRef.current) {
      outerPrismRef.current.rotation.y += delta * 0.24;
      outerPrismRef.current.rotation.x = Math.sin(t * 0.45) * 0.14;
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= delta * 0.42;
      innerCoreRef.current.rotation.z += delta * 0.2;
    }

    if (ringOneRef.current) {
      ringOneRef.current.rotation.z += delta * 0.15;
    }

    if (ringTwoRef.current) {
      ringTwoRef.current.rotation.z -= delta * 0.12;
    }

    // Subtle pointer-driven tilt
    if (clusterRef.current) {
      const targetX = state.pointer.y * 0.16;
      const targetY = state.pointer.x * 0.24;
      clusterRef.current.rotation.x = THREE.MathUtils.lerp(
        clusterRef.current.rotation.x,
        targetX,
        0.06
      );
      clusterRef.current.rotation.y = THREE.MathUtils.lerp(
        clusterRef.current.rotation.y,
        targetY,
        0.06
      );
    }
  });

  return (
    <>
      <ambientLight intensity={0.95} />
      <directionalLight position={[5, 6, 5]} intensity={1.35} color="#FFFFFF" />
      <pointLight position={[-3.5, 2.5, 3]} intensity={2.2} color="#8CEE3F" />
      <pointLight position={[3.5, -2, 3]} intensity={2.0} color="#38BDF8" />
      <pointLight position={[0, -3, -2]} intensity={1.5} color="#2DD4BF" />
      <Environment preset="studio" />

      <group ref={clusterRef}>
        {/* Central Translucent Geometric Prism */}
        <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.28}>
          <group>
            {/* Outer Glass Faceted Prism */}
            <mesh ref={outerPrismRef}>
              <octahedronGeometry args={[1.18, 0]} />
              <meshPhysicalMaterial
                color="#F8FAFC"
                transmission={0.78}
                opacity={1}
                transparent
                roughness={0.12}
                metalness={0.05}
                ior={1.45}
                thickness={0.85}
                clearcoat={1}
                clearcoatRoughness={0.08}
              />
            </mesh>

            {/* Crisp Architectural Wireframe Overlay */}
            <mesh rotation={[0, 0.35, 0]}>
              <octahedronGeometry args={[1.21, 0]} />
              <meshBasicMaterial color="#101820" wireframe transparent opacity={0.22} />
            </mesh>

            {/* Luminous Inner Core */}
            <mesh ref={innerCoreRef}>
              <octahedronGeometry args={[0.52, 0]} />
              <meshStandardMaterial
                color="#8CEE3F"
                emissive="#4ADE80"
                emissiveIntensity={0.65}
                roughness={0.2}
                metalness={0.35}
              />
            </mesh>
          </group>
        </Float>

        {/* Orbital Precision Rings */}
        <mesh ref={ringOneRef} rotation={[Math.PI / 2.4, 0.25, 0]}>
          <torusGeometry args={[1.95, 0.008, 12, 96]} />
          <meshBasicMaterial color="#94A3B8" transparent opacity={0.35} />
        </mesh>

        <mesh ref={ringTwoRef} rotation={[Math.PI / 2.1, -0.32, 0.4]}>
          <torusGeometry args={[2.55, 0.007, 12, 96]} />
          <meshBasicMaterial color="#2DD4BF" transparent opacity={0.35} />
        </mesh>

        {/* 6 Connected AI Ecosystem Nodes */}
        {ORBITAL_NODES.map((node, index) => {
          const isHovered = hoveredNode === node.id;
          const nodeVec = new THREE.Vector3(...node.position);

          return (
            <group key={node.id}>
              {/* Neural Connecting Beam */}
              <Line
                points={[originPoint, nodeVec]}
                color={isHovered ? "#101820" : node.accent}
                lineWidth={isHovered ? 2.2 : 1.35}
                transparent
                opacity={isHovered ? 0.92 : 0.6}
              />

              {/* Floating Node Sphere + Label */}
              <Float
                speed={1.6 + index * 0.15}
                rotationIntensity={0.1}
                floatIntensity={0.24}
              >
                <group position={node.position}>
                  <mesh
                    onPointerOver={(e) => {
                      e.stopPropagation();
                      setHoveredNode(node.id);
                    }}
                    onPointerOut={() => setHoveredNode(null)}
                  >
                    <icosahedronGeometry args={[0.17, 1]} />
                    <meshStandardMaterial
                      color={isHovered ? "#101820" : node.accent}
                      emissive={node.accent}
                      emissiveIntensity={isHovered ? 0.55 : 0.35}
                      roughness={0.25}
                      metalness={0.3}
                    />
                  </mesh>

                  {/* Outer Halo Ring */}
                  <mesh>
                    <ringGeometry args={[0.22, 0.255, 32]} />
                    <meshBasicMaterial
                      color="#101820"
                      transparent
                      opacity={0.35}
                      side={THREE.DoubleSide}
                    />
                  </mesh>

                  <Html
                    center
                    distanceFactor={8}
                    position={[0, -0.36, 0]}
                    zIndexRange={[10, 0]}
                  >
                    <div
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className={cn(
                        styles.nodeLabel,
                        isHovered && styles.nodeLabelActive
                      )}
                    >
                      <span
                        className={styles.nodePip}
                        style={{ backgroundColor: node.accent }}
                        aria-hidden="true"
                      />
                      <span>{node.label}</span>
                    </div>
                  </Html>
                </group>
              </Float>
            </group>
          );
        })}
      </group>
    </>
  );
}

export function PrismEcosystem3D() {
  return (
    <div
      className={styles.stage}
      role="img"
      aria-label="Interactive 3D geometric prism surrounded by six connected AI solution nodes"
    >
      <div className={styles.topHud}>
        <span className={styles.hudTag}>
          <span className={styles.hudDot} aria-hidden="true" />
          NAVCHETNAA CORE // 3D
        </span>
        <span className={styles.hudTag}>6 APPLIED AI NODES</span>
      </div>

      <div className={styles.canvasContainer}>
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0, 0.15, 6.4], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <NeuralPrismScene />
        </Canvas>
      </div>

      <div className={styles.bottomLegend}>
        <span>MOVE POINTER TO INSPECT TOPOLOGY</span>
        <span>LIME / AQUA / CYAN PRISM</span>
      </div>
    </div>
  );
}