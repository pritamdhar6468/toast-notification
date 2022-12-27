const notification = document.querySelector('.notification');
const buttons = document.querySelectorAll('.buttons .btn');

const toastDetails ={
    timer:5000,
    success:{
        icon:'fa-circle-check',
        text:'Success: This is a success toast',
    },
    error:{
        icon:'fa-circle-xmark',
        text:'Error: This is an error toast',
    },
    warning:{
        icon:'fa-triangle-exclamation',
        text:'Warning: This is a warning toast',
    },
    info:{
        icon:'fa-circle-info',
        text:'Info: This is a information toast',
    },
}

const removeToaste = (toast)=> {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); //clearing the timeout for the toast
    setTimeout(()=> toast.remove(),500);  //removing the toast after 500ms
}

const createToast = (id) => {
    //getting the icon and text for the toast based on the id passed
    const { icon,text } = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`; //setting the classes for the toast
    //setting the innerhtml for the toast
    toast.innerHTML = `<div class="column">
                            <i class="fa-solid ${icon}"></i>
                            <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToaste(this.parentElement)"></i>`;

    notification.appendChild(toast); //append the toast to the notification ul      
    //setting the timeout to remove the toaste after the specified duration
    toast.timeoutId = setTimeout(() => removeToaste(toast),toastDetails.timer);              
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});