
    
        var h = [];  // buffers for heights
        var v = [];  // buffers for velocities
        var vrtX = [];  // vertices - WAS A VECTOR
        var vrtY = [];  // vertices - WAS A VECTOR
        var indX = []; // indices - WAS A VECTOR
        var indY = [];
        var s, n=40, clicked = false, calm = 360;
        var rad = Math.round(n/12);

        function init() {
            
            // s = new Sprite();
            // stage.addChild(s);
            // stage.addEventListener(Event.ENTER_FRAME, onEF);
            // stage.addEventListener(MouseEvent.MOUSE_DOWN, onMD);
            // stage.addEventListener(MouseEvent.MOUSE_UP  , onMU);
            // stage.addEventListener(MouseEvent.MOUSE_MOVE, onMM);
            initWaves(600, 600);
        }
        
        function initWaves(wi, hi){
            var step = wi/(n-1);
            for(var i=0; i < n; i++) {
                h.push(calm); 
                v.push(0);
            }
            for(var i=0; i < n  ; i++){
                vrtX.push(i*step,calm); 
                vrtY.push(i*step,hi); 
            }
            for(var i=0; i < n-1; i++){
                indX.push(2*i, 2*i+1, 2*i+2);
                indy.push(2*i+1, 2*i+2, 2*i+3);
            }
        }
        
        function onEF(e)
        {
            for(var i=0; i<n; i++)
            {
                // computing velocity from neighbouring heights
                v[i] += ((he(i-1)+he(i+1)) + calm) /3 - h[i];
                v[i] *= 0.98;    // damping
                h[i] += v[i] * 0.05;
                vrt[i*4+1] = h[i];
            }
            s.graphics.clear();
            s.graphics.beginFill(0x4466aa, 0.5);
            s.graphics.drawTriangles(vrt, ind);
        }
      
        function he(i)   { return h[(i+n)%n]; }    // "cycled" access to array 'h'
        
        function onMD(e) { clicked = true; onMM(0); }
        function onMU(e) { clicked = false; }
        function onMM(e)
        {
            var i = Math.round(n*stage.mouseX/stage.stageWidth);
            if(clicked) if(i>rad && i<n-rad) pushAt(i);
        }
       
        function pushAt(i)
        {
            for(var j=-rad; j<rad; j++)
                h[i+j] += Math.cos(j*Math.PI*0.5/rad)*15;
        }
    }
}