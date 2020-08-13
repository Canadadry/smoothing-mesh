import {Vector} from './vector'

export class Quad{
	points:[number,number,number,number]
	constructor(p1:number,p2:number,p3:number,p4:number){
		this.points = [p1,p2,p3,p4]
	}
	draw(points:Vector[]){
		let p0:Vector = points[this.points[0]]
		let p1:Vector = points[this.points[1]]
		let p2:Vector = points[this.points[2]]
		let p3:Vector = points[this.points[3]]

		let center:Vector = p0.add(p1).add(p2).add(p3).mul(1/4)

		love.graphics.setColor(1,1,1,1)
		love.graphics.line(p0.x,p0.y,p1.x,p1.y)
		love.graphics.line(p1.x,p1.y,p2.x,p2.y)
		love.graphics.line(p2.x,p2.y,p3.x,p3.y)
		love.graphics.line(p3.x,p3.y,p0.x,p0.y)
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

	shrink(points:Vector[],factor:number):[Vector,Vector,Vector,Vector]{
		let p0:Vector = points[this.points[0]]
		let p1:Vector = points[this.points[1]]
		let p2:Vector = points[this.points[2]]
		let p3:Vector = points[this.points[3]]

		let center:Vector = p0.add(p1).add(p2).add(p3).mul(1/4)

		return [
			p0.sub(center).mul(factor).add(center),
			p1.sub(center).mul(factor).add(center),
			p2.sub(center).mul(factor).add(center),
			p3.sub(center).mul(factor).add(center),
		]
	}
}