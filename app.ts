//window.onload = () => {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas');
    var ele = <HTMLInputElement> document.getElementById("pushbutton");
    var ele2 = <HTMLInputElement> document.getElementById("popbutton");
    var topbtn= <HTMLInputElement> document.getElementById("topbutton");
    var isemptybtn= <HTMLInputElement> document.getElementById("isemptybutton");
    var isfullbtn= <HTMLInputElement> document.getElementById("isfullbutton");
    var restartbtn= <HTMLInputElement> document.getElementById("restartbutton");
    var nextbtn= <HTMLInputElement> document.getElementById("nextbutton");

    const ctx = canvas.getContext('2d');
    var arrElmnts:element[]=new Array();
    var arrNum:number[]=new Array();
    var Top:number=-1;
    ctx.lineWidth=5;
    ctx.strokeStyle='orange';

    let temp,flag=0;
    for(let p=0;p<4;p++){
       flag=0;
       while(flag!=1){
            temp=Math.floor((Math.random() * 99) + 1);
            if(arrNum.indexOf(temp)==-1){
                arrNum[p]=temp;
                flag=1;
            }
        }
   }
   
  
    function myArray(count?:number){
        var arrayStartX=250;
        var arrayStartY=100;
        let i:number;
      
        ctx.font="20px Georgia";
        ctx.clearRect(250,100,300,40);
        for(i=0;i<4;i++){
            arrElmnts[i]=new element(ctx,canvas,arrayStartX,arrayStartY,74,40,arrNum[i]);
            arrElmnts[i].drawArrayElement();
            if(count==undefined || count<i){    
                arrElmnts[i].writeData();
            }
            arrayStartX+=74;
        }
    }

    function demoRestart(){
        ctx.clearRect(1,0,canvas.width,canvas.height)
        myStack();
        ctx.font="30px Georgia";
        ctx.fillText("Array=>",50,130)
        ctx.fillText("Stack=>",50,350)
        observation()
        ctx.fillText("Click on the Push Button",320,60);
        ctx.fillText("to Insert an Element in Stack",300,80);
        myArray();
        topValueElement()
        topValueIndex(-1)
        ele.disabled= false
        topbtn.disabled=false
        isemptybtn.disabled=false
        isfullbtn.disabled=false
        restartbtn.disabled=false
        nextbtn.disabled=true
        ele2.disabled=false
        height=40
        Top=-1
        stckElmnt=[];
        stp=447;
        cnt=-1;
        ele.disabled=false
    }
    function demoIsEmpty(){
        ctx.clearRect(635,350,canvas.width,canvas.height)
        ctx.clearRect(250,0,350,93);
       /* Top==-1?ctx.fillText("Top Index is -1",340,50):ctx.fillText("Top Index is not -1",340,50)
        Top==-1?ctx.fillText("So Stack is Empty",330,80):ctx.fillText("So Stack is not Empty",330,80)*/
        observation();
        ctx.font="15px Georgia";
        ctx.fillText("isEmpty returns True if stack is empty else False.",250,30)
            
        if(Top>-1){
            ctx.lineWidth=5;
            ctx.strokeStyle='purple';
            ctx.strokeRect(stckElmnt[Top].X-90,stckElmnt[Top].Y,stckElmnt[Top].width+260,stckElmnt[Top].height);
            ctx.fillText("If stack is empty then top index is -1.",250,50)
            ctx.fillText("Current Top index:"+Top+",so stack is not empty.",250,70);
            ctx.fillText("isEmpty:False",250,90)
        }
        else if(Top==-1){
            observation();
            ctx.font="15px Georgia";
            //ctx.fillText("isEmpty returns True if stack is empty else False.",250,30)
            ctx.fillText("If stack is empty then top index is -1.",250,50)
            ctx.fillText("Current Top index:"+Top+",so stack is empty.",250,70);
            ctx.fillText("isEmpty:True",250,90)
        }
    }
    function demoIsFull(){
        ctx.clearRect(635,370,canvas.width,canvas.height)
        ctx.clearRect(250,0,350,93);
        observation();
        ctx.font="15px Georgia";
        ctx.fillText("isFull returns True if stack is full else False.",250,30)
        if(Top>=0 && Top<=3){
            ctx.lineWidth=5;
            ctx.strokeStyle='purple';
            ctx.strokeRect(stckElmnt[Top].X-90,stckElmnt[Top].Y,stckElmnt[Top].width+260,stckElmnt[Top].height);
            ctx.fillText("Here stack will be full when Top Index will be 3.",250,50);
            ctx.fillText("Current Top Index is "+Top+".So",250,70)
        }
        else if(Top==-1){
            ctx.fillText("Here stack will be full when Top Index will be 3.",250,50);
            ctx.fillText("Current Top Index is "+Top+". So",250,70)
        }
        Top==3?ctx.fillText("isFull:True",250,90):ctx.fillText("isFull:False",250,90)
    }
    function demoTop(){
        ctx.clearRect(635,350,canvas.width,canvas.height)
        ctx.clearRect(250,0,350,93);
        observation();
        ctx.font="15px Georgia";
        ctx.fillText("Top operation allows to see Top of Stack.",250,30)
        if(Top>-1){
            ctx.strokeStyle ='purple';
            ctx.lineWidth = 5;
            ctx.strokeRect(stckElmnt[Top].X-90,stckElmnt[Top].Y,stckElmnt[Top].width+260,stckElmnt[Top].height);
            ctx.fillText("Current Top index:"+Top+".",250,50)
            ctx.fillText("Current Top index element:"+stckElmnt[Top].data+".",250,70);
        }
        else{
            ctx.fillText("Stack is Empty.",250,50)
            ctx.fillText("So current Top index:"+Top+".",250,70);
        }   
    }
    function singleElementDeleteStack(stckElmnt:element[],cnt:number){
        var myreq;
        let popvalue;
        stckElmnt[Top].drawStackElement();
        stckElmnt[Top].writeData();

        myStack();
        for(let i=Top;i>=0;i--){
            stckElmnt[i].drawPrevElementStack();
            stckElmnt[i].writeData();
        }
        if(stckElmnt[Top].X==650 && stckElmnt[Top].Y>=248)
            stckElmnt[Top].incrementY(2)
        else if(stckElmnt[Top].Y>248)
            stckElmnt[Top].decrementY(2)
        else if(stckElmnt[Top].X<650)
            stckElmnt[Top].incrementX(2)

        if(stckElmnt[Top].X==650 && stckElmnt[Top].Y==412){
            popvalue=stckElmnt[Top].data
            Top--;
           /* if(Top<=-1)
                ele2.disabled = true;*/
            if(Top>-1){
                ctx.clearRect(250,0,350,93);
                observation();
                ctx.font="15px Georgia";
                ctx.fillText("After popping element from Stack,",250,30)
                ctx.fillText("Top index will be decreased by 1.",250,50);
                ctx.fillText("Current Top index:"+Top,250,70)
                ctx.fillText("Current Top index element:"+stckElmnt[Top].data,250,90);
                canvas_arrow(ctx,438,stckElmnt[Top].Y+(40/2),535,stckElmnt[Top].Y+(40/2));
                ctx.stroke();
                ctx.font="20px Georgia";
                ctx.fillText("Top",540,stckElmnt[Top].Y+(40/2)+5); 
                ctx.fillText("Popped Element",633,390);   
            }
                
            else{
                ctx.clearRect(250,0,350,93);
                observation();
                ctx.font="15px Georgia";
                ctx.fillText("After popping element from Stack,",250,30)
                ctx.fillText("Top index will be decreased by 1",250,50);
                ctx.fillText("Current Top index:"+Top,250,70)
                ctx.fillText("Stack is Empty",250,90)
                ctx.font="20px Georgia";
                ctx.fillText("Popped Element",633,390);
            }
            ele2.disabled=false; 
            topbtn.disabled=false  
            //if(cnt<3) 
            ele.disabled=false
            isemptybtn.disabled=false
            isfullbtn.disabled=false
            topValueIndex(Top)
            return;  
        }
        myreq= window.requestAnimationFrame(()=>{this.singleElementDeleteStack(stckElmnt,cnt)});
    }
   
   
    async function demoPop(){
        ele2.disabled = true;
        ele.disabled=true
        topbtn.disabled=true
        isemptybtn.disabled=true
        isfullbtn.disabled=true
        ctx.clearRect(249,141,canvas.width,canvas.height);
        myStack();
        for(let i=Top;i>=0;i--){
            stckElmnt[i].drawPrevElementStack();
            stckElmnt[i].writeData();
        }
        if(Top==-1){
            ctx.clearRect(250,0,350,93);
            observation();
            ctx.fillText("Current Top index is "+Top+".",250,30);
            ctx.fillText("So Stack is Empty.",250,50); 
            ctx.fillText("When a stack is empty(TOP = -1) and",250,70)
            ctx.fillText("element is tried to popped called Stack underflow.",250,90); 
            ele2.disabled = false;
            ele.disabled=false
            topbtn.disabled=false
            isemptybtn.disabled=false
            isfullbtn.disabled=false
            return;
        }
        canvas_arrow(ctx,438,stckElmnt[Top].Y+(40/2),535,stckElmnt[Top].Y+(40/2));
        ctx.stroke();
        ctx.font="20px Georgia";
        ctx.fillText("Top",540,stckElmnt[Top].Y+(40/2)+5); 
       /* if(cnt>0){
            for(let i=cnt;i<=0;i--){
                stckElmnt[i].drawPrevElementStack();
                //stckElmnt[i].drawStackElement();
                stckElmnt[i].writeData();
            }
        }*/
        ctx.clearRect(250,0,350,93);
        observation();
        ctx.fillText("Current Top index is "+Top+" which will be used for Pop.",250,30); 
        ctx.fillText("So index "+(Top)+" value will be popped from stack",250,50); 
        await delayAnimation()
        singleElementDeleteStack(stckElmnt,cnt);
    }

    let height=40;
    function singleElementInsertStack(stckElmnt:element[],stp:number,cnt:number){
        let stop=stp;
        var myreq;
        stckElmnt[Top].drawStackElement();
        stckElmnt[Top].writeData();
     
        canvas_arrow1(ctx,438,stp+(40/2),535,stp+(40/2));
        ctx.fillText("Top",540,stp+(40/2)+5);
  
        //ctx.fillText(arrNum[cnt],stckElmnt.X+(74/2),stckElmnt.Y+(40/2));
       
        myArray(cnt);
        myStack();
        let count=cnt;
        for(let i=0;i<Top;i++){
            stckElmnt[i].drawPrevElementStack();
            stckElmnt[i].writeData();
           // canvas_arrow(ctx,438,stckElmnt[Top-1].Y+(40/2),535,stckElmnt[Top-1].Y+(40/2));
           // ctx.stroke();
           // ctx.fillText("Top",540,stckElmnt[Top-1].Y+(40/2)+5); 
        }
           
        if(stckElmnt[Top].Y<245)
            stckElmnt[Top].incrementY(2)
        else if(stckElmnt[Top].X<354)
            stckElmnt[Top].incrementX(2)
        else if(stckElmnt[Top].X>354)
            stckElmnt[Top].decrementX(2)
        else if(stckElmnt[Top].X==354 && stckElmnt[Top].Y>=200)
            stckElmnt[Top].incrementY(2)
       
       // Top>0?stp=stckElmnt[Top-1].Y-40:stp=408
        if((stckElmnt[Top].X==354) && (stckElmnt[Top].Y==stp)){
               
               /* ctx.clearRect(250,2,350,93);
                ctx.fillText(arrNum[cnt]+" is pushed in Stack successfully",260,50); 
                ctx.fillText("So now "+arrNum[cnt]+" is top element in Stack",260,80);*/
               // canvas_arrow(ctx,438,stp+(40/2),535,stp+(40/2));
                //ctx.stroke();
               // ctx.fillText("Top",540,stp+(40/2)+5); 
               // ctx.clearRect(354+85,stp+40,140,height);
              
               // height+=40;
               // topValueIndex(Top)
               /* if(Top!=3)
                    ele.disabled=false;*/
                    
              /*  if(cnt==3){
                    ele.disabled=true;
                    console.log("3")
                }*/
                ele.disabled=false;  
                ele2.disabled = false
                topbtn.disabled=false
                isemptybtn.disabled=false
                isfullbtn.disabled=false
                return;
        }
        myreq= window.requestAnimationFrame(()=>{this.singleElementInsertStack(stckElmnt,stp,cnt)});
    }
    
    function myStack(){
        let h=439;
        ctx.strokeStyle ='red';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(350,287);
        ctx.lineTo(350,450);
        ctx.lineTo(432,450);
        ctx.lineTo(432,287);
        ctx.stroke();
        ctx.font="25px Georgia";
        for(let i=0;i<4;i++){
            ctx.fillText(i+"",300,h)
            h-=45;
        }
        ctx.font="20px Georgia";
    }
    
    function canvas_arrow1(context, fromx, fromy, tox, toy) {
        context.strokeStyle="red"
        var headlen = 10; // length of head in pixels
        var dx = tox - fromx;
        var dy = toy - fromy;
        var angle = Math.atan2(dy, dx);
        context.beginPath();
        context.moveTo(fromx, fromy);
        context.lineTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
        context.moveTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
       ctx.stroke();
    }
    
    function canvas_arrow(context, fromx, fromy, tox, toy) {
        var headlen = 10; // length of head in pixels
        var dx = tox - fromx;
        var dy = toy - fromy;
        var angle = Math.atan2(dy, dx);
        context.moveTo(fromx, fromy);
        context.lineTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
        context.moveTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    }

    function topValueElement(){
        ctx.lineWidth=2;
        ctx.strokeStyle='pruple';
        ctx.fillText("Top Index",640,85);
        ctx.strokeRect(650,95,74,40);
    }

    function topValueIndex(num){
        ctx.font="20px Georgia";
        ctx.clearRect(650+(74/5),95+(40/5)-4,30,25)
        ctx.fillText(num+"",650+(74/3),95+(40/2))
    }

   
    var stckElmnt:element[]=new Array();
    let stp=447;
    let cnt=-1;
   function observation(){
        ctx.font="bold 17px Georgia";
        ctx.fillText("Observation",350,14)
        ctx.font="15px Georgia";
   }
  
   function delayAnimation() {
    return new Promise((resolve) => setTimeout(resolve,5000));
}
   function delayAnimationPreorder() {
        return new Promise((resolve) => setTimeout(resolve,4000));
    }
    async function demoPush(){
      ele.disabled = true;
      ele2.disabled = true;
      topbtn.disabled=true
      isemptybtn.disabled=true
      isfullbtn.disabled=true
      ++cnt;
      if(Top==3){
        ctx.clearRect(250,0,350,93);
        observation(); 
        ctx.fillText("Current Top index is "+Top+".",250,30);
        ctx.fillText("So Stack is Full.",250,50); 
        ctx.fillText("When stack is full and ",250,70)
        ctx.fillText("element is inserted in stack is called Stack overflow.",250,90); 
      //  ctx.fillText("Click Restart Button To Restart demonstration",250,50);
        ele.disabled = false;
        ele2.disabled = false;
        topbtn.disabled=false
        isemptybtn.disabled=false
        isfullbtn.disabled=false
        return;
      }
      else if(cnt>=4){
        ctx.clearRect(250,0,350,93);
        observation(); 
        ctx.fillText("All the elements of Array are pushed in Stack.",250,30)
        ctx.fillText("Click Restart Button To Restart demonstration.",250,50);
        ele.disabled = false;
        ele2.disabled = false;
        topbtn.disabled=false
        isemptybtn.disabled=false
        isfullbtn.disabled=false
        return;
      }
      ++Top;
      stp-=40;
      ctx.clearRect(249,141,canvas.width,canvas.height);
      myStack();
      for(let i=0;i<Top;i++){
        stckElmnt[i].drawPrevElementStack();
        stckElmnt[i].writeData();
      }
      
      ctx.clearRect(250,0,350,93);
      observation();
     ctx.fillText("For pushing an element increase top index by 1",250,30); 
     ctx.fillText("Previous top index:"+(Top-1)+"",250,50); 
     ctx.fillText("After incrementing top index:"+Top+"",250,70);
     ctx.clearRect(354+85,stp+40,140,height);
     height+=40;
     Top>0?stp=stckElmnt[Top-1].Y-40:stp=408
     ctx.lineWidth=2;
     canvas_arrow1(ctx,438,stp+(40/2),535,stp+(40/2));
     ctx.font="20px Georgia";
     ctx.fillText("Top",540,stp+(40/2)+5); 
     topValueIndex(Top)
     await delayAnimationPreorder();
     ctx.font="15px Georgia";
     ctx.fillText("Now element "+arrNum[cnt]+" will be pushed at top index "+Top,250,90);
     await delayAnimationPreorder();
     
      stckElmnt[Top] = new element(ctx,canvas,arrElmnts[cnt].X,arrElmnts[cnt].Y,74,40,arrNum[cnt]);
      singleElementInsertStack(stckElmnt,stp,cnt);  
    }
    let next=0;
    function StackExplanation(){
        ctx.clearRect(1,1,canvas.width,canvas.height)
        ctx.lineWidth=2;
        ctx.font="30px Georgia";
         ctx.fillStyle = "brown";
        ctx.fillText("What is Stack?",canvas.width/3+10,50)
        ctx.font="20px Georgia";
        ctx.fillStyle = "black";
        ctx.fillRect(50, 80, 8, 8);
        
        ctx.fillText("A Stack is a linear data structure that follows the principle of",100,90);
        ctx.font="small-caps bold 20px Georgia";
        ctx.fillText("Last In First Out(LIFO).",250,120);
        ctx.font="20px Georgia";
        ctx.fillRect(50, 150, 8, 8);
        ctx.fillText("This means the last element inserted inside the stack is removed first.",100,160)
        //++next;
    } 
    function imagine(){
        ctx.fillStyle = "brown";
        ctx.font="30px Georgia";
        ctx.fillText("Let's Imagine Stack",canvas.width/3,210)
    }
    function Stack1(){
        let h=337;
        ctx.strokeStyle ='red';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(canvas.width/4,230);
        ctx.lineTo(canvas.width/4,380);
        ctx.lineTo(canvas.width/4+100,380);
        ctx.lineTo(canvas.width/4+100,230);
        ctx.stroke();
        
        for(let i=0;i<3;i++){
            ctx.fillStyle = "#ffff66";
            ctx.fillRect(205,h,90,40)
            ctx.fillStyle = "Black";
            ctx.font="20px Georgia";
            ctx.fillText("Book "+(i+1),216,h+33)
            h-=45;
        }
        ctx.font="15px Georgia";
        ctx.fillStyle = "brown";
        ctx.fillText("Stack representation similar to a pile of books",100,400)
    }
    function Stack2(){
        let h=360;
        ctx.strokeStyle ='red';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(canvas.width/2+150,230);
        ctx.lineTo(canvas.width/2+150,380);
        ctx.lineTo(canvas.width/2+250,380);
        ctx.lineTo(canvas.width/2+250,230);
        ctx.stroke();
       
        
        for(let i=0;i<3;i++){
            ctx.beginPath();
            //ctx.lineWidth=0
            ctx.strokeStyle="#ffff66";
            ctx.fillStyle = "#ffff66";
            ctx.ellipse(600, h, 50, 20, 0, 0, Math.PI*2);
            ctx.fill();
            
            ctx.font="20px Georgia";
            ctx.fillStyle = "Black";
            ctx.fillText("Plate "+(i+1),570,h+10)
            h-=40;
        }    
        ctx.font="15px Georgia";
        ctx.fillStyle = "brown";
        ctx.fillText("Stack representation similar to a pile of plates",450,400)
    }
    function Stack3(){
        ctx.beginPath()
        ctx.moveTo((canvas.width/10),150)
        ctx.lineTo((canvas.width/10)+50,150)
        ctx.stroke();
        canvas_arrow1(ctx,(canvas.width/10)+50,150,(canvas.width/10)+50,210)
        let h=247;
        ctx.strokeStyle ='red';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(canvas.width/10,190);
        ctx.lineTo(canvas.width/10,380);
        ctx.lineTo((canvas.width/10)+100,380);
        ctx.lineTo((canvas.width/10)+100,190);
        ctx.stroke();
        ctx.fillStyle = "#ffff66";
        ctx.fillRect(85,247,90,40)
        ctx.fillStyle = "Black";
        ctx.font="20px Georgia";
        ctx.fillText(1+"",90+(90/3)+5,h+23)
        ctx.font="15px Georgia";
        ctx.fillStyle = "brown";
        ctx.fillText("Push 1",115,400) //canvaswidth=800
    }
    function Stack4(){
        ctx.beginPath()
        ctx.moveTo((canvas.width/10)+200,150)
        ctx.lineTo((canvas.width/10)+250,150)
        ctx.stroke();
        canvas_arrow1(ctx,(canvas.width/10)+250,150,(canvas.width/10)+250,210)
        let h=337;
        ctx.strokeStyle ='red';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo((canvas.width/10)+200,190);
        ctx.lineTo((canvas.width/10)+200,380);
        ctx.lineTo((canvas.width/10)+300,380);
        ctx.lineTo((canvas.width/10)+300,190);
        ctx.stroke();
        for(let i=0;i<2;i++){
            ctx.fillStyle = "#ffff66";
            ctx.fillRect(285,h,90,40)
            ctx.fillStyle = "Black";
            ctx.font="20px Georgia";
            ctx.fillText((i+1)+"",325,h+23)
            h-=45;
        }
        ctx.font="15px Georgia";
        ctx.fillStyle = "brown";
        ctx.fillText("Push 2",(canvas.width/10)+235,400)
    }
    function Stack5(){
        ctx.beginPath()
        ctx.moveTo((canvas.width/10)+400,150)
        ctx.lineTo((canvas.width/10)+450,150)
        ctx.stroke();
        canvas_arrow1(ctx,(canvas.width/10)+450,150,(canvas.width/10)+450,210)
        let h=337;
        ctx.strokeStyle ='red';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo((canvas.width/10)+400,190);
        ctx.lineTo((canvas.width/10)+400,380);
        ctx.lineTo((canvas.width/10)+500,380);
        ctx.lineTo((canvas.width/10)+500,190);
        ctx.stroke();
        for(let i=0;i<3;i++){
            ctx.fillStyle = "#ffff66";
            ctx.fillRect(485,h,90,40)
            ctx.fillStyle = "Black";
            ctx.font="20px Georgia";
            ctx.fillText((i+1)+"",525,h+23)
            h-=45;
        }
        ctx.font="15px Georgia";
        ctx.fillStyle = "brown";
        ctx.fillText("Push 3",(canvas.width/10)+435,400)
    }
    function Stack6(){
        ctx.beginPath();
        ctx.moveTo(725,175)
        ctx.lineTo(725,150)
        ctx.stroke();
        canvas_arrow1(ctx,725,150,785,150)
        let h=337;
        ctx.strokeStyle ='red';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo((canvas.width/10)+600,190);
        ctx.lineTo((canvas.width/10)+600,380);
        ctx.lineTo((canvas.width/10)+700,380);
        ctx.lineTo((canvas.width/10)+700,190);
        ctx.stroke();
        for(let i=0;i<2;i++){
            ctx.fillStyle = "#ffff66";
            ctx.fillRect(685,h,90,40)
            ctx.fillStyle = "Black";
            ctx.font="20px Georgia";
            ctx.fillText((i+1)+"",725,h+23)
            h-=45;
        }
        
        ctx.fillStyle = "#ffff66";
        ctx.fillRect(685,180,90,40)
        ctx.font="20px Georgia";
        ctx.fillStyle = "Black";
        ctx.fillText(3+"",725,203)
        ctx.font="15px Georgia";
        ctx.fillStyle = "brown";
        ctx.fillText("Pop 3",(canvas.width/10)+635,400)
    }
    function Stacktop(){
        ctx.fillStyle = "Black";
        ctx.font="20px Georgia";

        ctx.fillRect(50, 430, 8, 8);
        ctx.fillText("New book/plate can be added from top and top book/plate can be removed.",100,440);
        canvas_arrow1(ctx,300,270,380,270);
        canvas_arrow1(ctx,650,280,730,280);
        ctx.font="17px Georgia";
        ctx.fillText("Top",380,275)
        ctx.fillText("Top",730,285)
    }
    function lifoprinciple(){
        ctx.font="20px Georgia";
        ctx.fillStyle = "black";
        ctx.fillRect(50, 450, 8, 8);
        ctx.fillText("Here item3 was kept last,it was removed first.This is how the LIFO",90,450); 
        ctx.fillText("(Last In First Out) Principle works.",90,480);
        ctx.lineWidth=5
        ctx.strokeStyle='purple';
        ctx.strokeRect(485,250,90,40);
        ctx.strokeRect(685,180,90,40);
    }
    function principle(){
        ctx.clearRect(1,1,canvas.width,canvas.height)
        ctx.font="30px Georgia";
        ctx.fillStyle = "brown";
        ctx.fillText("LIFO Principle of Stack",canvas.width/3,50)
        ctx.font="20px Georgia";
        ctx.fillStyle = "black";
        ctx.fillRect(50, 80, 8, 8);
        ctx.fillText("Putting an item on top of stack is called ",90,90);
        ctx.font="bold 21px Georgia"
        ctx.fillText("push",441,90);
        ctx.font="20px Georgia";
        ctx.fillText("and removing an item is called",500,90)
        ctx.font="bold 21px Georgia"
        ctx.fillText("pop.",90,120);
        ctx.font="20px Georgia";
        ctx.fillText("Let's Push and Pop in Stack.",140,120)
    }
    function basicoperation(){
        ctx.clearRect(1,1,canvas.width,canvas.height)
        myStack();
        ctx.font="30px Georgia";
        ctx.fillText("Array=>",50,130)
        ctx.fillText("Stack=>",50,350)
        ctx.font="15px Georgia";
        ctx.fillText("Array and Stack is given",250,12)
        ctx.fillText("Elements from Array can be inserted inside Stack",250,30)
        ctx.fillText("Basic Stack operations can be performed",250,50)
        ctx.fillText("Click on the Push Button",250,70);
        ctx.fillText("to Insert an Element in Stack",250,90);
        myArray();
        topValueElement()
        topValueIndex(-1)
        ele.disabled= false
        ele2.disabled=false
        topbtn.disabled=false
        isemptybtn.disabled=false
        isfullbtn.disabled=false
        restartbtn.disabled=false
        nextbtn.disabled=true
    }
    function demoNext(){
        switch(next){
            case 1:StackExplanation()
                  nextbtn.value="Next"
                  ++next;
                  break;
            case 2:imagine()
                ++next;
                break;
            case 3:Stack1()
                ++next;
                break;
            case 4:Stack2()
                ++next;
                break;
            case 5:Stacktop()
                ++next;
                break;
            case 6:principle()
                ++next;
                break;
            case 7: Stack3();
                ++next;
                break;
            case 8: Stack4();
                ++next;
                break;
            /*case 7: Stack4();
                ++next;
                break;*/
            case 9: Stack5();
                ++next;
                break;
            case 10: Stack6();
                ++next;
                break;
            case 11:lifoprinciple();
                 ++next;
                 break;
            case 12:basicoperation();
                 ++next;
                 break;
        }
    }

    ele.disabled = true;
    ele2.disabled = true;
    topbtn.disabled=true
    isemptybtn.disabled=true
    isfullbtn.disabled=true
    restartbtn.disabled=true
    ctx.font="20px Georgia";
    ctx.fillText("Click on Start button to start the demonstration",canvas.width/4,50);
    ++next;
   /* myStack();
    ctx.font="40px Georgia";
    ctx.fillText("Array=>",50,130)
    ctx.fillText("Stack=>",50,350)
    ctx.font="20px Georgia";
    ctx.fillText("Click on the Push Button",280,50);
    ctx.fillText("for Inserting an Element in Stack",250,80);
    myArray();
    topValueElement()
    topValueIndex(-1)
    ele2.disabled = true;*/
  

  
  
  
  