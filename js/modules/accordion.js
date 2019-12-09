

export default function initAccordion(){
  const accodionList = document.querySelectorAll('[data-anime="accodion"] dt');
  const activeClass = 'ativo';
  if(accodionList.length){
      accodionList[0].classList.add(activeClass);
      accodionList[0].nextElementSibling.classList.add(activeClass);
      function activeAccordion(){
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
      }
      accodionList.forEach((item)=>{
        item.addEventListener('click', activeAccordion);
      })
    
    }
  }

