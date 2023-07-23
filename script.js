class PasswordGenerate{
  constructor(){
    this.s_alpa = "abcdefghijklmnopqrstuvwxyz"
    this.cap_alpa =  this.s_alpa.toUpperCase()
    this.sp_char =   `!@#$%^&*()-_+=[]{}|\;:'",<>.?/`
    this.num = "0123456789"
    this.password =''
  }
  genPass(len){
    if(len<8)
      {
          console.log('password must be 8 or more than 8')
       }else{
          for(let i=0;i<len;i++){
          this.cap = this.cap_alpa[Math.floor(Math.random()*this.cap_alpa.length)]
          this.small = this.s_alpa[Math.floor(Math.random()*this.s_alpa.length)]
          this.sp = this.sp_char[Math.floor(Math.random()*this.sp_char.length)]
          this.numb = this.num[Math.floor(Math.random()*this.num.length)]
          this.password += this.cap+this.sp+this.small+this.numb
          if(this.password.length>=len){
          break;
          }
        }
        return this.password
       }
  }
  
}
const passlen = document.getElementById('passlen')
const copybutton = document.getElementById('btn_copy')
const genPassbutton = document.getElementById('btn')
const passbox = document.getElementById('newpass')
const alert1 = document.getElementById('alert1')
const sizeofpass =  document.getElementById('sizeofpass')
const divsizeofpass = document.getElementById('divsizeofpass')
const crosBtn = document.getElementById('crosBtn')

passbox.disabled=true;
btn.addEventListener('click',generatePassword)
copybutton.addEventListener('click',copy)

function copy(){
  const text1 = document.getElementById('newpass')
  text1.select();
  document.execCommand("copy")
  window.getSelection().removeAllRanges();
  passbox.disabled = true;
  passbox.value = "XXXXXXXX"
  console.log("Copied")
  document.body.style.background = 'black'
  location.reload()
}

function generatePassword(){
let val = passlen.value
let x = new PasswordGenerate()
let y = x.genPass(val)
if(val<8){
  alert1.hidden=false
  setTimeout(()=>{
    alert1.hidden=true
  },5000)
  passbox.disabled = true;
}
else if(val>100000){
  alert1.innerHTML = `<b>You need a extremely large size password of length ${val} characters long,  which may end your system resources and may the site will hang little bit.<b>....`
  alert1.hidden=false
  setTimeout(()=>{
  alert1.hidden=true
  },10000)
  passbox.disabled = true;
  /*------PassLOGIC------*/
let passarray = y.split('') //Converting Password String to Array
  let passarray_length = passarray.length //Total Length of Password Array
  let halfArray = passarray_length/2 //Half of the Length of thé Password Array
  
  //console.log(passarray,halfArray, passarray_length,passarray[halfArray-1], passarray[passarray_length-1])//Output for better understanding
  
  //console.log(halfArray+halfArray/2)//Output for better understanding
  
  //Swiping logic Reverse of the Half of the array
   for(let i=halfArray,j1=0; i<halfArray+halfArray/2;i++,j1++ ){
     let x = passarray[i]
     let y = passarray[(passarray_length-1)-j1]
     //console.log("before: "+i+" "+ x +" "+ y)////Output for better understanding
     let sw = x
     x = y
     y = sw
      passarray[i] = x
      passarray[(passarray_length-1)-j1] = y
   }
  
  //console.log("After Swip: "+passarray)////Output for better understanding
  const y1 = passarray.join("");// converting the array to the string without commas
  //console.log(y)
  //console.log(y1)
  const sizeofpassword = y1.length;
  console.log(sizeofpass.innerHTML=`Size of Your Password:\n ${sizeofpassword}`)
  divsizeofpass.hidden=false;
  passbox.disabled = false;
  passbox.value = y1 //DOM Printing in Input Box
}
else{
  let passarray = y.split('') //Converting Password String to Array
  let passarray_length = passarray.length //Total Length of Password Array
  let halfArray = passarray_length/2 //Half of the Length of thé Password Array
  
  //console.log(passarray,halfArray, passarray_length,passarray[halfArray-1], passarray[passarray_length-1])//Output for better understanding
  
  //console.log(halfArray+halfArray/2)//Output for better understanding
  
  //Swiping logic Reverse of the Half of the array
   for(let i=halfArray,j1=0; i<halfArray+halfArray/2;i++,j1++ ){
     let x = passarray[i]
     let y = passarray[(passarray_length-1)-j1]
     //console.log("before: "+i+" "+ x +" "+ y)////Output for better understanding
     let sw = x
     x = y
     y = sw
      passarray[i] = x
      passarray[(passarray_length-1)-j1] = y
   }
  
  //console.log("After Swip: "+passarray)////Output for better understanding
  const y1 = passarray.join("");// converting the array to the string without commas
  //console.log(y)
  //console.log(y1)
  const sizeofpassword = y1.length;
  console.log(sizeofpass.innerHTML=`Size of Your Password:\n ${sizeofpassword}`)
  divsizeofpass.hidden=false;
  passbox.disabled = false;
  passbox.value = y1 //DOM Printing in Input Box
}
}
/*------------Copy Right Auto Year---------------------------------*/
const d = new Date();
let yr = d.getFullYear();
console.log(yr)
document.getElementById('spyr').textContent = yr
/*------------------Cross Button Logic------------------*/
crosBtn.addEventListener('click',closeAlert)

function closeAlert(){
  divsizeofpass.hidden=true;
}