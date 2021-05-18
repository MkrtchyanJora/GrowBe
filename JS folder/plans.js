 export let block1 = document.querySelector('.Plans_parent');

   for(let i = 0; i<3; i++){
     let div1 = document.createElement('div');
     let text = document.createElement('p');
     let text2 = document.createElement('p');
     let text3 = document.createElement('p');
     let butn = document.createElement('button');
     butn.classList.add('cl_button');
     butn.innerHTML = 'Get Started';
     text3.classList.add('cl_p3');
     text3.innerHTML = "50GB Bandwidth <br/>  Business & Financ Analysing <br/> 24 Hour Support <br/> Customer Managemet";
     text2.classList.add('cl_p2');
     text2.innerHTML = '$ 30/mounth';
     text.classList.add('cl_p');
     text.innerHTML = 'Plus';
     div1.classList.add('cl_block1');
     block1.appendChild(div1);
     div1.appendChild(text);
     text.appendChild(text2);
     text2.appendChild(text3);
     text2.appendChild(butn);
 }

 