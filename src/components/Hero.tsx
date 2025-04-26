import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Setup and animate the 3D visualization
  useEffect(() => {
    if (!canvasRef.current) return;
    // Scene setup
    const scene = new THREE.Scene();
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, 2, 1, 1000);
    camera.position.z = 5;
    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    // Create a particle system to represent data points
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    // Generate particles in a 3D scatter plot formation
    for (let i = 0; i < particleCount; i++) {
      // Create a cluster pattern
      let x, y, z;
      const cluster = Math.floor(Math.random() * 5);
      switch (cluster) {
        case 0:
          // Cluster 1
          x = (Math.random() - 0.5) * 2;
          y = (Math.random() - 0.5) * 2;
          z = (Math.random() - 0.5) * 2;
          break;
        case 1:
          // Cluster 2
          x = (Math.random() - 0.5) * 2 + 3;
          y = (Math.random() - 0.5) * 2 + 2;
          z = (Math.random() - 0.5) * 2 - 1;
          break;
        case 2:
          // Cluster 3
          x = (Math.random() - 0.5) * 2 - 3;
          y = (Math.random() - 0.5) * 2 + 1;
          z = (Math.random() - 0.5) * 2 + 2;
          break;
        case 3:
          // Cluster 4
          x = (Math.random() - 0.5) * 2 + 1;
          y = (Math.random() - 0.5) * 2 - 3;
          z = (Math.random() - 0.5) * 2 - 2;
          break;
        default:
          // Random points
          x = (Math.random() - 0.5) * 10;
          y = (Math.random() - 0.5) * 10;
          z = (Math.random() - 0.5) * 10;
      }
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      // Color based on position (creating a gradient effect)
      colors[i * 3] = 0.5 + x / 10; // R
      colors[i * 3 + 1] = 0.2 + y / 20; // G
      colors[i * 3 + 2] = 0.8 + z / 10; // B
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    // Add some connecting lines to simulate a neural network
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4080ff,
      transparent: true,
      opacity: 0.3
    });
    // Create 20 random connections
    for (let i = 0; i < 20; i++) {
      const idx1 = Math.floor(Math.random() * particleCount);
      const idx2 = Math.floor(Math.random() * particleCount);
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(positions[idx1 * 3], positions[idx1 * 3 + 1], positions[idx1 * 3 + 2]), new THREE.Vector3(positions[idx2 * 3], positions[idx2 * 3 + 1], positions[idx2 * 3 + 2])]);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
    }
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // Rotate the particle system
      particleSystem.rotation.x += 0.001;
      particleSystem.rotation.y += 0.002;
      // Handle scroll-based animation
      const scrollY = window.scrollY;
      particleSystem.rotation.y = scrollY * 0.001;
      particleSystem.position.z = -scrollY * 0.005;
      renderer.render(scene, camera);
    };
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);
  return <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0" ref={containerRef}>
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="block text-blue-400">Data Scientist</span>
            <span className="block mt-3 text-purple-400">
              Machine Learning Engineer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Transforming complex data into actionable insights and building
            intelligent systems that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-lg font-medium text-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Get in Touch
            </motion.button>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="bg-transparent border-2 border-gray-400 text-white py-3 px-8 rounded-lg font-medium text-lg hover:border-white transition-all duration-300" onClick={() => document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              View Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 1
      }} className="flex flex-col items-center">
          <span className="text-gray-400 mb-2">Scroll to explore</span>
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          repeat: Infinity,
          duration: 1.5
        }} className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div animate={{
            y: [0, 15, 0]
          }} transition={{
            repeat: Infinity,
            duration: 1.5
          }} className="w-1.5 h-3 bg-blue-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;