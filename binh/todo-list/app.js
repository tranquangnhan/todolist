function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);

}
var draw = function() {
    background(17);
    let hr = hour();
    let mn = minute();
    let sc = second();
    translate(200, 200);
    rotate(-90);
    strokeWeight(8)
    noFill();
    stroke(255, 100, 150);
    let end1 = map(sc, 0, 59, 0, 360);
    arc(0, 0, 300, 300, 0, end1);


    stroke(0, 250, 200);
    let end2 = map(mn, 0, 59, 0, 360);
    arc(0, 0, 280, 280, 0, end2);

    stroke(130, 80, 190);
    let end3 = map(hr % 12, 0, 12, -90, 360);
    arc(0, 0, 260, 260, 0, end3);

    push();
    rotate(end1);
    stroke(255, 100, 150);
    line(0, 0, 100, 0);
    pop();

    push();
    rotate(end2);
    stroke(0, 250, 200);
    line(0, 0, 90, 0);
    pop();

    push();
    rotate(end3);
    stroke(100, 80, 190);
    line(0, 0, 60, 0);
    pop();
    // strokeWeight(8);
    // stroke(255);
    // noFill();
    // ellipse(200, 200, 300, 300);

}