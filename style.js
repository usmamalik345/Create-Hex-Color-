

let hexAray = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F" ]
let hexBody = document.querySelector('body')
let hex = document.querySelector('.hex')
let hexBtn = document.querySelector('.Hexbtn')

hexBtn.addEventListener('click' , getcolor);


function getcolor(){
   let Hexcolr =  "#"

   for (let i = 0; i <6; i++) {
    let random = Math.floor(Math.random()*hexAray.length)

    console.log(random);

    Hexcolr += hexAray[random]

    console.log(Hexcolr);
    

   }
   hexBody.style.backgroundColor = Hexcolr
}


