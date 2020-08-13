import {Vector} from './src/vector'
import {Quad} from './src/quad'
import {Mesh} from './src/mesh'


let scale:number=50
let center:Vector = new Vector(400,300)
let mesh:Mesh;

love.draw = function() {
	love.graphics.clear(0,0,0)
	mesh.draw()

}

love.load = ()=>{
	mesh = new Mesh()
	//insert one ugly quad
	mesh.insterQuad([
		new Vector(-1,0).mul(scale).add(center),
		new Vector(1,0.5).mul(scale).add(center),
		new Vector(2,1).mul(scale).add(center),
		new Vector(0,1).mul(scale).add(center),
	])

	//insert stretched quad
	mesh.insterQuad(mesh.quads[0].stretch(mesh.points,scale*4))

	//insert shrinked quad
	mesh.insterQuad(mesh.quads[1].shrink(mesh.points,0.2))

}



