import './style.css'
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(100);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({color: 0x58FE32});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight, 10);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper,gridHelper); 

const controls = new OrbitControls(camera, renderer.domElement)
const spaceBkg = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceBkg;

const pilluTexture = new THREE.TextureLoader().load("beardie3.jpg");
const pilluMesh = new THREE.Mesh(
    new THREE.BoxGeometry(4,4,4),
    new THREE.MeshBasicMaterial({map: pilluTexture})
);
pilluMesh.position.set(20, 10, 15);
scene.add(pilluMesh);

const moonTexture = new THREE.TextureLoader().load("moon.jpg");
const moonNormalTexture = new THREE.TextureLoader().load("normal.jpg")
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: moonNormalTexture
    })
);
// moon.position.set(20, 10, 15);
scene.add(moon);

function addStar(){
    const geoStar = new THREE.SphereGeometry(0.25, 15, 15);
    const matStar = new THREE.MeshStandardMaterial({color: 0xffffff});
    const star = new THREE.Mesh(geoStar, matStar);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x,y,z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

function animate(){
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    controls.update();
    renderer.render(scene, camera);
}

animate();
