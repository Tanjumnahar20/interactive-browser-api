const setItem=()=>{
 localStorage.setItem('name','sakib khan');
 localStorage.setItem('age',31);
 localStorage.removeItem('name');
//  displayItem(); 
}

const displayItem=()=>{
    const getItems = localStorage.getItem('age');  
    const ul = document.getElementById('ul-container');
    const li = document.createElement("li");
    li.innerText = ` age:${getItems}`
    ul.appendChild(li);
}

const setName=()=>{
    const firstNameField = document.getElementById('first-name');
    const firstName= firstNameField.value;
    const lastNameField = document.getElementById('last-name');
    const lastName = lastNameField.value;
    console.log(firstName,lastName);
    setFullName(firstName,lastName);

    const obj ={
        firstName:'tanjum',
        lastName:'nahar'

    }

    const objstringify = JSON.stringify(obj);
    localStorage.setItem('fullname',objstringify);
}

const getFullName =()=>{
     let fullName={};
     const savedName = localStorage.getItem('fullName');
     if(savedName){
        fullName = JSON.parse(savedName);

     }
     return fullName;
}
const setFullName=(firstName,lastName)=>{
    const fullName = getFullName();
    fullName[firstName]=lastName;
    const fullNameStringify = JSON.stringify(fullName);
    localStorage.setItem('fullName',fullNameStringify);

}
getFullName();