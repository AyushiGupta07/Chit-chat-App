 const socket=io();
 var yourName;
 let textarea=document.querySelector('#textarea');
  const message_area=document.querySelector('.message_area');
//  do{
//    yourName= prompt('Enter your name');
//  }while(!yourName);

 textarea.addEventListener('keyup',(e)=>{
    if(e.key=='Enter'){
        sendMessage(e.target.value);
    } 

 })
 const sendMessage=(mess)=>{
    let msg={
       user:yourName,
       message:mess.trim()
    }
    appendMessage(msg,'outgoing');
    textarea.value='';
    scrollToBottom();
    socket.emit('message',msg);

 }
 const appendMessage=(msg,type)=>{
    let mainDiv=document.createElement('div');
    let className=type
    mainDiv.classList.add(className,'message');
    let markup=`<h4>${msg.user}</h4>
    <p>${msg.message}</p>`;
    mainDiv.innerHTML=markup;
    message_area.appendChild(mainDiv);

   
 }
 socket.on('message',(msg)=>{
    appendMessage(msg,'incoming');
    scrollToBottom();
 })

 const scrollToBottom=()=>{
    message_area.scrollTop=message_area.scrollHeight;
 }