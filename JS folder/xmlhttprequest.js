let block = document.querySelector('.xhr-div');

const link = 'https://reqres.in/api/users?page=1';
const xhr = new XMLHttpRequest();
xhr.open('GET', link);
xhr.onload = () => {
    let newRespons = JSON.parse(xhr.response);
    let user = newRespons.data
    user.splice(0,3);
    user.map(user=>{
        let elem2 = document.createElement('div');
      elem2.classList.add('cl_div2');
      let Ptext = document.createElement('p');
      Ptext.classList.add('cl_text3');
      Ptext.innerHTML = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint 
                        cupiditate non provident.`
      let textX = document.createElement('h1');
      let emailX = document.createElement('p');
      emailX.innerHTML = user.email
      textX.classList.add('cl_h1');
      textX.innerHTML = user.last_name
    elem2.innerHTML = `<img src=${user.avatar} />`
    block.appendChild(elem2)
    elem2.appendChild(textX)
    textX.appendChild(emailX)
    elem2.appendChild(Ptext)
    
    })
    } 

xhr.send();

export default block