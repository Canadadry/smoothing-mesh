import {Vector} from './src/vector'
import {Quad} from './src/quad'
import {Mesh} from './src/mesh'


let scale:number=50
let steps:number=10;
let center:Vector = new Vector(400,300)
let mesh:Mesh;

love.draw = function() {
	love.graphics.clear(0,0,0)
	mesh.draw()

}

love.load = ()=>{
	mesh = new Mesh()

	let quad = new Quad(0,1,2,3)
	let points:[Vector,Vector,Vector,Vector] = [
		new Vector(-1,0).mul(scale).add(center),
		new Vector(1,0.5).mul(scale).add(center),
		new Vector(2,1).mul(scale).add(center),
		new Vector(0,1).mul(scale).add(center),
	]

	mesh.insterQuad(points)
	print(mesh.quads[0].quality(mesh.points))

	for(let i:number=0;i<steps;i++){
		points = quad.shrink(quad.stretch(points,scale*4),0.2)
	}

	mesh.insterQuad(points)
	print(mesh.quads[1].quality(mesh.points))
}



