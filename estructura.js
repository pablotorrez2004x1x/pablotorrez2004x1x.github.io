let sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(1000,600);
    frameRate(300);
    let puntos=0;
    let colorFondo = color(0,255,0)
     
    let x=500;
    direccion = 0;

    let y=0;
    let xAleatorio = 500;
    let dhr=1
    let dvr=1

    draw=function(){
        background(colorFondo);

        textSize(50);
        fill(0,0,0);
        text("Puntos: "+puntos ,380,100);

        //rectangulo
        fill(0,0,222)
        rect(xAleatorio,y,10,10);
        y=y+dvr;
        xAleatorio = xAleatorio + dhr

        if( xAleatorio >= 1000) //al chocar el borde derecho
        {
              dhr=-1;
        }   
        if( y >=600){
            dvr = 0;
            textSize(100);
            fill(0,0,0);
            text("GAME OVER",200,300);
        }
           if(y==0){
               dvr = +1;
           }
           if(xAleatorio ==0)
           {
               dhr = +1;
           }

        if(xAleatorio <= x+50 && xAleatorio >= x-50 && y>=450 && y<=550){
            textSize(60);
            fill(0,0,0);
            text("CHOQUE",200,200);
           dvr = -1;
           puntos = puntos +1;
        }
        // elipse
        fill(255,0,0);
        ellipse(x,500,100,100);

        x = x + direccion;

        keyPressed=function(){

            if(key.code ==65){
                direccion = -2;
            }
            if (key.code == 68){
                direccion = +2;
            }
        }
        mousePressed=function(){
        if( mouseX<500 ){
            direccion=-2;
        }
        if( mouseX > 500){
            direccion=+2;
        }
    }
    if( x>=975){
        direccion=-2;
    }
    if( x <= 25){
        direccion =+2;
    }
}
     
}};
let canvas = document.getElementById("mycanvas");
let processingInstance = new Processing(canvas,sketchProc);
