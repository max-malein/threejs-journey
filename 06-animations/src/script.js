import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const group = new THREE.Group()
scene.add(group)

var colors = ["green", "yellow", "red"]

for (var i=0; i<3; i ++)
{
    let cube = new THREE.Mesh(
        new THREE.BoxGeometry(1,1,1),
        new THREE.MeshBasicMaterial({color: colors[i]})
    )
    cube.position.x = i*1.5 - 1.5

    group.add(cube)
}

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


const tick = () =>
{
    group.rotation.y += Math.PI / 500
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()