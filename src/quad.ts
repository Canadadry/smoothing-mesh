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
}