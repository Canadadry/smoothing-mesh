import {Vector} from './src/vector'
import {Quad} from './src/quad'
import {Mesh} from './src/mesh'
import {Colors} from './src/color'
import {smooth} from './src/smooth'


let scale:number=50
let steps:number=3;
let center:Vector = new Vector(400,300)
let mesh:Mesh;
let mesh2:Mesh;
let mesh3:Mesh;

love.draw = function() {
	love.graphics.clear(0,0,0)
	mesh.draw()
	mesh2.draw()

}

love.load = ()=>{
	mesh = new Mesh()
	mesh2 = new Mesh()
	mesh3 = new Mesh()

	let p:Vector[] = [
		new Vector(  -1,-2).mul(scale).add(center),
		new Vector(  -2, 0).mul(scale).add(center),
		new Vector(  -1, 1).mul(scale).add(center),
		new Vector(   0,-1).mul(scale).add(center),
		new Vector( 0.5, 0).mul(scale).add(center),
		new Vector(   0, 1).mul(scale).add(center),
		new Vector(   1,-2).mul(scale).add(center),
		new Vector(   1, 0).mul(scale).add(center),
		new Vector(   2, 1).mul(scale).add(center),
	]

	// mesh.insterQuad([p[0],p[1],p[4],p[3]],Colors.White)
	// mesh.insterQuad([p[3],p[4],p[7],p[6]],Colors.Green)
	mesh.insterQuad([p[1],p[2],p[5],p[4]],Colors.Blue)
	// mesh.insterQuad([p[4],p[5],p[8],p[7]],Colors.Gray)

	mesh2 = smooth(mesh,scale*4,0.2,1)

}



