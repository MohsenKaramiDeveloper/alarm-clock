// start js

const selectMenu = document.querySelectorAll('select');
const timeBox = document.querySelector('.time');
const setAlarmBtn = document.querySelector('button');
let alarmTime , alarmState = 'noset';
const ringtone = new Audio('./files/ringtone.mp3')
const content = document.querySelector('.content');




// hour

for(let i = 23 ; i >=0 ; i--){
    i = i < 10 ?  '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option)
    
}

// minute

for(let i = 59 ; i >=0 ; i--){
    i = i < 10 ?  '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)


 setInterval(() =>{
    
    let date = new Date();

    let h = date.getHours();

    let m = date.getMinutes();

    let s = date.getSeconds();

    h = h < 10 ? '0' + h : h ;

    m = m < 10 ? '0' + m : m ;

    s = s < 10 ? '0' + s : s ;  



    timeBox.innerHTML = `${h}:${m}:${s}`;
     if (alarmTime == `${h}:${m}`){
            ringtone.play();
            ringtone.loop = true;
        }
    

 }, 1000)



 // set button

 setAlarmBtn.addEventListener('click', ()=>{

     alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`
     if(alarmTime.includes('Hour') || alarmTime.includes('Minutes')){
        return alert('please inter correct time')

     }
     checkState(alarmState)
    })


 function checkState(state){
    if(state == 'noset'){
        content.classList.add('disable')
        setAlarmBtn.innerHTML = 'Clear Alarm'
        alarmState = 'set'
     }
    else{
        content.classList.remove('disable')
        alarmTime = ''
        ringtone.pause()
        alarmState = 'noset'
        setAlarmBtn.innerHTML = 'Set Alarm'
    }
}}
