import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AmbientLight, BoxGeometry, Color, DirectionalLight, Mesh, MeshNormalMaterial, MeshPhongMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import chair from '../assets/models/cup.glb';

const scene = new Scene()


const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight)

const light = new AmbientLight("white")
scene.add(light)
const directLight = new DirectionalLight("white")
scene.add(directLight)
let controls: OrbitControls
let gltfLoader: GLTFLoader
let renderer: WebGLRenderer
const _init = () => {
	gltfLoader = new GLTFLoader()
	gltfLoader.load("./src/assets/models/cup.glb", function (gltf) {
		console.log("gltf", gltf);
		gltf.scene.scale.set(5, 5, 5)
		scene.add(gltf.scene)
	})
	const geometry = new BoxGeometry(10, 10, 10)
	const texture = new MeshNormalMaterial()
	const mesh = new Mesh(geometry, texture)

	const canvas = document.querySelector(".main") as HTMLCanvasElement
	renderer = new WebGLRenderer({ canvas })
	// renderer.setPixelRatio(window.innerWidth / window.innerHeight)
	renderer.setSize(window.innerWidth, window.innerHeight)
	controls = new OrbitControls(camera, canvas)
	controls.enableDamping = true
	// scene.add(mesh)
	camera.position.z = 20
	scene.add(camera)
	animate()
}

function animate() {
	controls.update()
	renderer.render(scene, camera)
	window.requestAnimationFrame(animate)
}

// window.addEventListener("DOMContentLoaded", function () {
// 	_init()
// })

export default _init