const canvas = document.getElementById("canvas")
const engine = new BABYLON.Engine(canvas, true)

const createScene = () => {
    const scene = new BABYLON.Scene(engine)
    scene.clearColor = new BABYLON.Color3.Black

    // const box = BABYLON.MeshBuilder.CreateBox("box", {})
    // box.position.x = 0.5
    // box.position.y = 1

    // const fish = BABYLON.SceneLoader.ImportMesh("", "assets/", "fish.glb", scene, function(newMeshes) {
    //     newMeshes[0].scaling = new BABYLON.Vector3(3, 3, 3);
    // });

    // // UniversalCamera
    // const camera = new BABYLON.UniversalCamera("UniveralCamera", new BABYLON.Vector3(0,0,10), scene)

    // Arc Camera
    const alpha = Math.PI / 4
    const beta = Math.PI / 3
    const radius = 8
    const target = BABYLON.Vector3(0, 0, 0)
    const camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene)



    // // Targets the camera to a particular position. In this case the scene origin
    // camera.setTarget(BABYLON.Vector3.Zero());

    camera.attachControl(canvas, true)

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0))

    const fish = BABYLON.SceneLoader.ImportMesh("", "mymesh/", "fish.glb", scene, function(newMeshes) {
        newMeshes[0].scaling = new BABYLON.Vector3(3, 3, 3);
    });


    return scene
}

const sceneToRender = createScene()

engine.runRenderLoop(() => {
    sceneToRender.render()
})