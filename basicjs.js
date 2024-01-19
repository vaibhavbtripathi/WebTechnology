function savedata(){
    let inpdate = document.querySelector(".inputdate"); // this will be in string format. we have to convert in date but in user locale format
    let outdate = document.querySelector(".outputdate");
    console.log(inpdate.value);
    console.log(outdate);
    // to assign in date we have to convert in date with user locale. and that will be in_IN (but we have to use as in_IN)
    let formateddate = new Date(inpdate.value).toLocaleDateString("Los-Angeles"); 
    console.log(formateddate);
    outdate.value = formateddate;

}


