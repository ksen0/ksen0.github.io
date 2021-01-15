
function imperfectCircle(centerX, centerY, radius, wobble, hide=false){
	let N = 21;
	radius = radius/2;
	if (!hide) {
		beginShape();
	}
	frstX = 0;
	frstY = 0;
	let vertices = [];
	for (var i=0; i<N; i++) {
		let theta = 2*PI / N * (i-2);
		let x = (radius + randomGaussian(wobble, wobble)) * cos(theta);
		let y = (radius + randomGaussian(wobble, wobble)) * sin(theta);
		vertices.push([x + centerX, y + centerY]);
		if (!hide) {
			curveVertex(x + centerX, y + centerY);
			if (i == 0){
				frstX = x + centerX;
				frstY = y + centerY;
				curveVertex(x + centerX, y + centerY);
			}
		}
	}
	if (!hide) {
		curveVertex(frstX, frstY);
		curveVertex(frstX, frstY);
		endShape();
	}
	return vertices;
}
