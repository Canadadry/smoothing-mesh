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
	mesh.insterQuad([
		new Vector(0,1).mul(scale).add(center),
		new Vector(1,1).mul(scale).add(center),
		new Vector(1,0).mul(scale).add(center),
		new Vector(0,0).mul(scale).add(center),
	])
}



