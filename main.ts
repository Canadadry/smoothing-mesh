import {Vector} from './src/vector'
import {Quad} from './src/quad'
import {Mesh} from './src/mesh'


let scale:number=50
let center:Vector = new Vector(400,300)
let mesh:Mesh;
let diagonals:[Vector,Vector,Vector,Vector]
let normals:[Vector,Vector,Vector,Vector]

love.draw = function() {
	love.graphics.clear(0,0,0)
	mesh.draw()
	for(let i:number=0;i<4;i++){
		let p1 = mesh.points[mesh.quads[0].points[i]]
		let p2 = p1.add(diagonals[i])

		love.graphics.setColor(0,0,1,1)
		love.graphics.line(p1.x,p1.y,p2.x,p2.y)

	}
	for(let i:number=0;i<4;i++){
		let p1 = mesh.points[mesh.quads[0].points[i]]
		let p2 = p1.add(normals[i].mul(scale))

		love.graphics.setColor(0,1,0,1)
		love.graphics.line(p1.x,p1.y,p2.x,p2.y)

	}
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

	let q = mesh.quads[0]
	let p0:Vector = mesh.points[q.points[0]]
	let p1:Vector = mesh.points[q.points[1]]
	let p2:Vector = mesh.points[q.points[2]]
	let p3:Vector = mesh.points[q.points[3]]


	let sign:number = (p0.sub(p1).vect(p2.sub(p1))) > 0 ? 1 : -1

	diagonals=[
		p1.sub(p3),
		p2.sub(p0),
		p3.sub(p1),
		p0.sub(p2),
	]

	normals = [
		new Vector(-diagonals[0].y,diagonals[0].x).normalize().mul(sign),
		new Vector(-diagonals[1].y,diagonals[1].x).normalize().mul(sign),
		new Vector(-diagonals[2].y,diagonals[2].x).normalize().mul(sign),
		new Vector(-diagonals[3].y,diagonals[3].x).normalize().mul(sign),
	]

	mesh.insterQuad([
		p0.add(normals[0].mul(200)),
		p1.add(normals[1].mul(200)),
		p2.add(normals[2].mul(200)),
		p3.add(normals[3].mul(200)),
	])

}



