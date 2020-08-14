import {Vector} from './src/vector'
import {Quad} from './src/quad'
import {Mesh} from './src/mesh'
import {Colors} from './src/color'
import {smooth} from './src/smooth'


let scale:number=25
let SSOsteps:number=3;
let smoothingStep:number=3;
let center:Vector = new Vector(400,300)
let mesh:Mesh;
let smoothedMesh:Mesh;
let intermediaryMesh:Mesh;

love.draw = function() {
	love.graphics.clear(0,0,0)
	love.graphics.translate(-200,0)
	mesh.draw()
	love.graphics.translate(400,0)
	smoothedMesh.draw()
	// love.graphics.translate(-200,200)
	// intermediaryMesh.draw()
}

love.load = ()=>{
	math.randomseed(os.time())
	mesh = new Mesh()
	smoothedMesh = mesh
	intermediaryMesh =mesh


	let size:number = 12;
	let p:Vector[] = []
	center = center.add(new Vector(-size/2,-size/2).mul(scale))

	for(let i:number=0;i<size;i++){
		for(let j:number=0;j<size;j++){
			let offsetI:number = math.random()-1
			let offsetJ:number = math.random()-1
			p.push(new Vector(i+offsetI,j+offsetJ).mul(scale).add(center))	
		}
	}

	for(let i:number=0;i<(size-1);i++){
		for(let j:number=0;j<(size-1);j++){
			mesh.insterQuad([
				p[i+0 +(j+0)*size],
				p[i+1 +(j+0)*size],
				p[i+1 +(j+1)*size],
				p[i+0 +(j+1)*size],
			],Colors.White)
		}
	}

	smoothedMesh = mesh
	for(let i:number = 0;i<smoothingStep;i++){
		let out = smooth(smoothedMesh,scale*4,0.2,SSOsteps)
		smoothedMesh = out[1]
		intermediaryMesh = out[0]
	}

}



