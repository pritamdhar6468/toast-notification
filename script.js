const notification = document.querySelector('.notification');
const buttons = document.querySelectorAll('.buttons .btn');

const toastDetails ={
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
                        <i class="fa-solid fa-xmark"></i>`;

    notification.appendChild(toast); //append the toast to the notification ul                    
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});