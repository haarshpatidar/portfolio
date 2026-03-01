import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ═══════════════════════════════════════════════════════
   Scroll-driven architectural 3D scene
   Blocks morph between 4 formations on scroll:
     0 → Scattered floating slabs  (Hero)
     1 → Staircase platforms       (About / Experience)
     2 → Chevron / arrow pattern   (Projects)
     3 → Rotating cube grid        (Skills / Contact)
   ═══════════════════════════════════════════════════════ */

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

/* ── Constants & helpers ──────────────────────────────── */
const BLOCKS = 14;
const ACCENTS = 10;
const PARTICLES = 50;
const smooth = (t: number) => t * t * (3 - 2 * t);

type BT = {
  p: [number, number, number];
  s: [number, number, number];
  r: [number, number, number];
};

/* ── Formation 0 : Scattered floating slabs (Hero) ──── */
function scattered(i: number): BT {
  const phi = i * 2.3999632 + 0.5;
  const d = 1.8 + Math.sqrt(i) * 0.95;
  return {
    p: [
      Math.cos(phi) * d * 1.35,
      Math.sin(phi) * d * 0.55 - 0.3,
      -0.8 - Math.abs(Math.sin(i * 0.8)) * 2.5,
    ],
    s: [1.3 + Math.sin(i * 1.3) * 0.4, 0.14, 0.55 + Math.sin(i * 2) * 0.15],
    r: [Math.sin(i * 0.5) * 0.1, phi * 0.15, Math.cos(i * 0.7) * 0.06],
  };
}

/* ── Formation 1 : Staircase / shelves (About) ──────── */
function staircase(i: number): BT {
  const col = i % 4;
  const row = Math.floor(i / 4);
  return {
    p: [(col - 1.5) * 1.55, -2 + row * 1.1 + col * 0.3, -row * 0.5],
    s: [1.35, 0.13, 0.68],
    r: [0, 0, 0],
  };
}

/* ── Formation 2 : Chevron / zigzag (Projects) ──────── */
function chevron(i: number): BT {
  const half = Math.ceil(BLOCKS / 2);
  const side = i < half ? -1 : 1;
  const idx = i < half ? i : i - half;
  return {
    p: [
      side * (0.45 + idx * 0.48),
      (half - 1 - idx) * 0.62 - 1.5,
      -idx * 0.32,
    ],
    s: [0.92, 0.15, 0.46],
    r: [0, side * 0.12, side * 0.05],
  };
}

/* ── Formation 3 : Cube grid (Skills / Contact) ─────── */
function cubeGrid(i: number): BT {
  const cols = 4;
  return {
    p: [(i % cols - 1.5) * 1.45, (Math.floor(i / cols) - 1.5) * 1.45, 0],
    s: [0.52, 0.52, 0.52],
    r: [Math.PI / 5, Math.PI / 4, 0],
  };
}

const F = [scattered, staircase, chevron, cubeGrid];
const FL = F.length;

/* ═══════════════════════════════════════════════════════
   Components
   ═══════════════════════════════════════════════════════ */

/** Architectural blocks that morph between formations */
function ArchBlocks({ p }: { p: number }) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const data = useMemo(
    () => Array.from({ length: BLOCKS }, (_, i) => F.map((fn) => fn(i))),
    [],
  );

  useFrame(({ clock }) => {
    const sf = p * (FL - 1);
    const si = Math.min(Math.floor(sf), FL - 2);
    const t = smooth(sf - si);
    const lr = 0.065;
    const time = clock.getElapsedTime();

    for (let i = 0; i < BLOCKS; i++) {
      const m = refs.current[i];
      if (!m) continue;
      const a = data[i][si];
      const b = data[i][si + 1];

      // Subtle breathing float
      const breathe = Math.sin(time * 0.4 + i * 0.45) * 0.025;

      m.position.x += (a.p[0] + (b.p[0] - a.p[0]) * t - m.position.x) * lr;
      m.position.y +=
        (a.p[1] + (b.p[1] - a.p[1]) * t + breathe - m.position.y) * lr;
      m.position.z += (a.p[2] + (b.p[2] - a.p[2]) * t - m.position.z) * lr;

      m.scale.x += (a.s[0] + (b.s[0] - a.s[0]) * t - m.scale.x) * lr;
      m.scale.y += (a.s[1] + (b.s[1] - a.s[1]) * t - m.scale.y) * lr;
      m.scale.z += (a.s[2] + (b.s[2] - a.s[2]) * t - m.scale.z) * lr;

      m.rotation.x += (a.r[0] + (b.r[0] - a.r[0]) * t - m.rotation.x) * lr;
      m.rotation.y += (a.r[1] + (b.r[1] - a.r[1]) * t - m.rotation.y) * lr;
      m.rotation.z += (a.r[2] + (b.r[2] - a.r[2]) * t - m.rotation.z) * lr;
    }
  });

  return (
    <group>
      {Array.from({ length: BLOCKS }, (_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#cbd5e1"
            metalness={0.06}
            roughness={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

/** Small indigo accent cubes floating around the scene */
function AccentCubes({ p }: { p: number }) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  const seeds = useMemo(
    () =>
      Array.from({ length: ACCENTS }, (_, i) => ({
        phi: i * 2.399 + 1.2,
        r: 2.2 + Math.sqrt(i) * 1.4,
        yOff: (Math.random() - 0.5) * 3.5,
        speed: 0.35 + Math.random() * 0.4,
        size: 0.14 + Math.random() * 0.1,
      })),
    [],
  );

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    for (let i = 0; i < ACCENTS; i++) {
      const m = refs.current[i];
      if (!m) continue;
      const s = seeds[i];
      const orbit = p * Math.PI * 1.6 + s.phi;

      m.position.x +=
        (Math.cos(orbit) * s.r * (0.55 + p * 0.45) - m.position.x) * 0.04;
      m.position.y +=
        (s.yOff + Math.sin(time * s.speed + i) * 0.35 - m.position.y) * 0.04;
      m.position.z +=
        (Math.sin(orbit) * s.r * 0.25 - 1 - m.position.z) * 0.04;

      m.rotation.x += 0.007;
      m.rotation.y += 0.011;
      m.scale.setScalar(s.size);
    }
  });

  return (
    <group>
      {Array.from({ length: ACCENTS }, (_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#4f46e5"
            metalness={0.65}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

/** Dot-grid floor (like Solais reference) */
function DotGrid() {
  const positions = useMemo(() => {
    const size = 28;
    const step = 0.9;
    const count = size * size;
    const arr = new Float32Array(count * 3);
    let idx = 0;
    for (let x = 0; x < size; x++) {
      for (let z = 0; z < size; z++) {
        arr[idx++] = (x - size / 2) * step;
        arr[idx++] = -3.2;
        arr[idx++] = (z - size / 2) * step;
      }
    }
    return arr;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#94a3b8"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

/** Thin diagonal light-streaks crossing the scene */
function LightStreaks({ p }: { p: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) ref.current.rotation.z = p * 0.25 - 0.12;
  });

  const rays = useMemo(
    () => [
      { p: [2, 4, -4], r: [0.3, 0.2, 0.7] },
      { p: [-3, -1, -5], r: [-0.15, -0.1, -0.55] },
      { p: [0.5, -2.5, -6], r: [0.1, 0.25, 0.35] },
    ],
    [],
  );

  return (
    <group ref={ref}>
      {rays.map((ray, i) => (
        <mesh
          key={i}
          position={ray.p as [number, number, number]}
          rotation={ray.r as [number, number, number]}
        >
          <boxGeometry args={[0.012, 0.012, 22]} />
          <meshBasicMaterial
            color="#e0e7ff"
            transparent
            opacity={0.12 + p * 0.08}
          />
        </mesh>
      ))}
    </group>
  );
}

/** Subtle floating particles for depth */
function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLES * 3);
    for (let i = 0; i < PARTICLES; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLES}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#a5b4fc"
        transparent
        opacity={0.2}
        sizeAttenuation
      />
    </points>
  );
}

/** Camera orbits slowly as user scrolls */
function CameraRig({ p }: { p: number }) {
  const { camera } = useThree();

  useFrame(() => {
    const angle = -0.1 + p * 0.35;
    const radius = 9.5;
    const height = 4 - p * 2;

    camera.position.x +=
      (Math.sin(angle) * radius - camera.position.x) * 0.035;
    camera.position.y += (height - camera.position.y) * 0.035;
    camera.position.z +=
      (Math.cos(angle) * radius - camera.position.z) * 0.035;

    camera.lookAt(0, -0.5, 0);
  });

  return null;
}

/** Warm white background */
function Background() {
  const { scene } = useThree();
  useEffect(() => {
    scene.background = new THREE.Color('#f5f5f4');
  }, [scene]);
  return null;
}

/** Invisible plane that catches block shadows */
function ShadowCatcher() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -3.2, 0]}
      receiveShadow
    >
      <planeGeometry args={[50, 50]} />
      <shadowMaterial opacity={0.08} />
    </mesh>
  );
}

/* ═══════════════════════════════════════════════════════
   Main export
   ═══════════════════════════════════════════════════════ */
export default function ThreeScene() {
  const p = useScrollProgress();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 4, 9.5], fov: 45 }}
        dpr={[1, 1.5]}
        shadows
      >
        <Background />
        <CameraRig p={p} />

        {/* Lighting */}
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[8, 12, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={30}
          shadow-camera-near={0.5}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <directionalLight position={[-5, 3, -3]} intensity={0.3} color="#c7d2fe" />

        {/* Scene elements */}
        <ArchBlocks p={p} />
        <AccentCubes p={p} />
        <LightStreaks p={p} />
        <DotGrid />
        <FloatingParticles />
        <ShadowCatcher />
      </Canvas>
    </div>
  );
}
