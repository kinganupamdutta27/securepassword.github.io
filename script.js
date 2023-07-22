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
const copybutton = document.getElementById('btn_copy')
const genPassbutton = document.getElementById('btn')
const passbox = document.getElementById('newpass')
const alert1 = document.getElementById('alert1')
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
let val = document.getElementById('passlen').value
let x = new PasswordGenerate()
let y = x.genPass(val)
if(val<8){
  alert1.hidden=false
  setTimeout(()=>{
    alert1.hidden=true
  },5000)
  passbox.disabled = true;
}else{
  passbox.disabled = false;
  passbox.value = y
}
}