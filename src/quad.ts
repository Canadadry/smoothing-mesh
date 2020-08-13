import {Vector} from './vector'

export class Quad{
	points:[number,number,number,number]
	constructor(p1:number,p2:number,p3:number,p4:number){
		this.points = [p1,p2,p3,p4]
	}
	draw(points:Vector[]){
		love.graphics.setColor(1,1,1,1)
		love.graphics.line(
			points[this.points[0]].x,points[this.points[0]].y,
			points[this.points[1]].x,points[this.points[1]].y
		)
		love.graphics.line(
			points[this.points[1]].x,points[this.points[1]].y,
			points[this.points[2]].x,points[this.points[2]].y
		)
		love.graphics.line(
			points[this.points[2]].x,points[this.points[2]].y,
			points[this.points[3]].x,points[this.points[3]].y
		)
		love.graphics.line(
			points[this.points[3]].x,points[this.points[3]].y,
			points[this.points[0]].x,points[this.points[0]].y
		)
	}
	stretch(points:Vector[],factor:number):[Vector,Vector,Vector,Vector]{
		let p0:Vector = points[this.points[0]]
		let p1:Vector = points[this.points[1]]
		let p2:Vector = points[this.points[2]]
		let p3:Vector = points[this.points[3]]


		let sign:number = (p0.sub(p1).vect(p2.sub(p1))) > 0 ? 1 : -1

		let diagonals:[Vector,Vector,Vector,Vector]=[
			p1.sub(p3),
			p2.sub(p0),
			p3.sub(p1),
			p0.sub(p2),
		]

		let normals:[Vector,Vector,Vector,Vector] = [
			new Vector(-diagonals[0].y,diagonals[0].x).normalize().mul(sign),
			new Vector(-diagonals[1].y,diagonals[1].x).normalize().mul(sign),
			new Vector(-diagonals[2].y,diagonals[2].x).normalize().mul(sign),
			new Vector(-diagonals[3].y,diagonals[3].x).normalize().mul(sign),
		]

		return [
			p0.add(normals[0].mul(factor)),
			p1.add(normals[1].mul(factor)),
			p2.add(normals[2].mul(factor)),
			p3.add(normals[3].mul(factor)),
		]
	}
}