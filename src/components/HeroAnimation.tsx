
import { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const wireframeRef = useRef<THREE.LineSegments | null>(null);
  const dotsRef = useRef<THREE.Points | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const group = new THREE.Group();
    scene.add(group);
    groupRef.current = group;

    const sphereGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.05,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    group.add(sphere);
    sphereRef.current = sphere;

    const wireframeGeometry = new THREE.WireframeGeometry(sphereGeometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.2,
    });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    group.add(wireframe);
    wireframeRef.current = wireframe;

    const dotsGeometry = new THREE.BufferGeometry();
    const dotsCount = 1000;
    const positions = new Float32Array(dotsCount * 3);
    
    for (let i = 0; i < dotsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;
      
      const radius = 1.3;
      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    dotsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0x000000,
      size: 0.03,
      transparent: true,
      opacity: 0.4
    });
    
    const dots = new THREE.Points(dotsGeometry, dotsMaterial);
    group.add(dots);
    dotsRef.current = dots;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.002;
        groupRef.current.rotation.x += 0.001;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };
    
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (event: MouseEvent) => {
      if (!groupRef.current) return;
      
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      groupRef.current.rotation.y = mouseX * 0.2 + groupRef.current.rotation.y;
      groupRef.current.rotation.x = mouseY * 0.1 + groupRef.current.rotation.x;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full absolute top-0 left-0" />;
};

export default HeroAnimation;
