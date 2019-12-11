const name = document.getElementById("nameWorkshop");
const date = document.getElementById("dateWorkshop");
const duration = document.getElementById("drtionWorkshop");
const description = document.getElementById("despWorkshop");
const wshopAdd = document.getElementById("addWorkshop");
const database  = firebase.database();
const today = new Date();

wshopAdd.addEventListener('click',(e)=>{
    e.preventDefault();
    if(name.value==""||date.value==""||duration.value==""){
        window.alert("Please enter the details of the workshop");
    }else{
    const id = firebase.database().ref().push().key;
    database.ref('/workshop/'+id).set({
        ws_name : name.value,
        ws_date : date.value,
        ws_duration : duration.value,
        ws_desp : description.value
    });
    window.alert("Workshop is created successfully!!")
    window.location.reload();
    }
});





