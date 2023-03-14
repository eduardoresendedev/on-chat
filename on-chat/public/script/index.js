const sendMessageBtn = document.querySelector('.send-message-btn');
sendMessageBtn.addEventListener("click",async()=>{
    const response = await fetch("http://localhost:3000/test")
    console.log(await response.json())
   
});
