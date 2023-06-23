// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

function setupModal(id){
  var modal = document.getElementById(id+"Modal");
  var btn = document.getElementById(id+"Btn");
  var closeBtn = document.getElementById(id+"ModalClose");
  if(btn && closeBtn){
    btn.onclick = function() {
      modal.style.display = "block";
    }

    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  }

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target = modal ) {
      modal.style.display = "none";
    }
  }
}
setupModal('print');
setupModal('demo');