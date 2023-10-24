export class Modal{
    constructor(){
      return this.render();
    }
    render(){
      const modal = document.createElement('dialog');
      modal.setAttribute('id', 'formModal');
  
      const closeIcon = document.createElement('span')
      closeIcon.classList.add('bi');
      closeIcon.classList.add('bi-x-circle-fill');
      
      modal.addEventListener('click', e => {
        const modalDimensions = modal.getBoundingClientRect();
        if(
          e.clientX < modalDimensions.left ||
          e.clientX > modalDimensions.right ||
          e.clientY < modalDimensions.top ||
          e.clientY > modalDimensions.bottom
        ){
          this.closeModal(modal);
        }
      });
      modal.addEventListener('keydown', e => {
        // console.log(e);
        if(e.code === "Escape"){
          this.closeModal(modal);
        }
      });
      closeIcon.addEventListener('click', () => this.closeModal(modal));
  
      modal.appendChild(closeIcon);
  
      return modal;
    }
    closeModal(modal){
      modal.close();
      modal.remove();
    }
  }