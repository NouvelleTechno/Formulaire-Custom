let customFiles = document.querySelectorAll(".custom-file input");

for(let customFile of customFiles){
    let filename = customFile.nextElementSibling.querySelector(".filename");
    customFile.addEventListener("change", function(e){
        filename.textContent = "";
        if(this.files && this.files.length > 1){
            let count = this.files.length;

            filename.textContent = `${count} fichiers sélectionnés`;
        }else{
            let file = e.target.value;
            let array = file.split("\\");
            filename.textContent = array.pop();
        }
    });

}