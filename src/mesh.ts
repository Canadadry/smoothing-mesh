import {Vector} from './vector'
import {Quad} from './quad'

export class Mesh{
	points:Vector[]
	neightBourPoints:number[][]
	quads:Quad[]

	constructor(){
		this.points=[]
		this.neightBourPoints=[]
		this.quads=[]
	}

	draw(){
		for(let i:number=0;i<this.quads.length;i++){
			this.quads[i].draw(this.points)
		}
		for(let i:number=0;i<this.points.length;i++){
			this.points[i].draw()
		}
	}

	insterQuad(points:[Vector,Vector,Vector,Vector]){
		let p1:number = this.insertPoint(points[0])
		let p2:number = this.insertPoint(points[1])
		let p3:number = this.insertPoint(points[2])
		let p4:number = this.insertPoint(points[3])

		this.quads.push(new Quad(p1,p2,p3,p4))

		this.insertNeighbour(p1,p2)
		this.insertNeighbour(p1,p4)
		this.insertNeighbour(p2,p1)
		this.insertNeighbour(p2,p2)
		this.insertNeighbour(p3,p2)
		this.insertNeighbour(p3,p4)
		this.insertNeighbour(p4,p3)
		this.insertNeighbour(p4,p1)
	}

	private findPoint(p:Vector,dist:number):number|null{
		for(let i:number=0;i<this.points.length;i++){
			let d:number = p.dist(this.points[i])
			if(d<dist){
				return i;
			}
		}
		return null
	}
	private insertPoint(p:Vector):number{
		let index = this.findPoint(p,0.01)
		if(index != null){
			return index
		}
		this.points.push(p)
		this.neightBourPoints.push([])
		return this.points.length-1
	}

	private containNeighbour(p:number,n:number):boolean{
		for(let i:number=0;i<this.neightBourPoints[p].length;i++){
			if(this.neightBourPoints[p][i]==n){
				return true
			}
		}
		return false
	}

	private insertNeighbour(p:number,n:number){
		if(this.containNeighbour(p,n)==false){
			this.neightBourPoints[p].push(n)
		}
	}
}