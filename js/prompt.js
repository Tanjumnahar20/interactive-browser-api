const showAlert = () => {
     alert('put correct number');
}

const showConfirm = () => {
     const result = confirm('want to exit?');
     console.log(result)
     if (result === true) {
          alert("you came out")
     }
     else {
          alert("try again");
     }
}

const promptShow = () => {
     const rslt = prompt('put pin here');
     console.log(rslt);
     if (rslt !== null) {
          const ask = confirm('want to exit?')
          if (ask === true) {
               alert('welcome')
          }
          else {
               alert('try again!')
          }

     }
}