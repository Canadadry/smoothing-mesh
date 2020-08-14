import {Vector} from './src/vector'
import {Quad} from './src/quad'
import {Mesh} from './src/mesh'
import {Colors} from './src/color'


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


	let newPoints:[number,Vector][] = []
	for(let i:number=0;i<mesh.points.length;i++){
		newPoints.push([0,new Vector(0,0)])
	}

	let fakeQuad = new Quad(0,1,2,3,Colors.White)

	for(let i:number=0;i<mesh.quads.length;i++){
		let quad = mesh.quads[i]
		let quality = quad.quality(p)
	 	let newP = fakeQuad.shrink(quad.stretch(p,scale*4),0.2)
	 	newP = fakeQuad.shrink(fakeQuad.stretch(newP,scale*4),0.2)
	 	newP = fakeQuad.shrink(fakeQuad.stretch(newP,scale*4),0.2)
	 	newP = fakeQuad.shrink(fakeQuad.stretch(newP,scale*4),0.2)
	 	newP = fakeQuad.shrink(fakeQuad.stretch(newP,scale*4),0.2)
	 	newP = fakeQuad.shrink(fakeQuad.stretch(newP,scale*4),0.2)
	 	newP = fakeQuad.shrink(fakeQuad.stretch(newP,scale*4),0.2)
	 	newP = fakeQuad.shrink(fakeQuad.stretch(newP,scale*4),0.2)
	 	newP = fakeQuad.shrink(fakeQuad.stretch(newP,scale*4),0.2)
	 	quality = fakeQuad.quality(newP)// - quality


		mesh2.insterQuad(newP,quad.color)

	 	print(quality)

	 	newPoints[quad.points[0]][0] += quality
	 	newPoints[quad.points[0]][1]  = newP[0].mul(quality).add(newPoints[quad.points[0]][1]) 
	 	newPoints[quad.points[1]][0] += quality
	 	newPoints[quad.points[1]][1]  = newP[0].mul(quality).add(newPoints[quad.points[1]][1]) 
	 	newPoints[quad.points[2]][0] += quality
	 	newPoints[quad.points[2]][1]  = newP[0].mul(quality).add(newPoints[quad.points[2]][1]) 
	 	newPoints[quad.points[3]][0] += quality
	 	newPoints[quad.points[3]][1]  = newP[0].mul(quality).add(newPoints[quad.points[3]][1]) 
	}

	mesh3.quads = mesh.quads

	for(let i:number=0;i<newPoints.length;i++){
		mesh3.points.push(newPoints[i][1].mul(1/newPoints[i][0]))
	}
}



