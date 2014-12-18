var stage = new PIXI.Stage(0x000000, true); //Creating the stage
var renderer = PIXI.autoDetectRenderer(512, 512); //Creating the renderer, choosing WebGL if available
document.body.appendChild(renderer.view); //Adding the renderer view to the webpage

function renderLoop() //Rendering loop
{
	renderer.render(stage); //Make render of the stage
	requestAnimFrame(renderLoop); //Start another loop
}
requestAnimFrame(renderLoop); //Start the rendering
