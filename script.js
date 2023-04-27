
          let addbtn=document.getElementById('addbutton')
          addbtn.addEventListener('click',addChapter)
          function addChapter(e){
            let parent=document.getElementById('parent')
           
              let currentBtn=e.currentTarget;
              let currentInput=currentBtn.previousElementSibling
              let newLi=document.createElement('li')
              let chapterName=currentInput.value
              newLi.classList.add("list-group-item")
              newLi.className="list-group-item d-flex justify-content-between"
              newLi.innerHTML=`<h3 class="flex-grow-1">${chapterName}</h3>
                  <button class="btn btn-success mx-5" onclick="doneChapter(this)">Done</button>
                  <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`
              
              parent.appendChild(newLi)

          }
          function removeChapter(currentelement){
              currentelement.parentElement.remove()
              let parent=document.getElementById('parent');
              
          }
          function doneChapter(currentelement){
           let text=currentelement.parentElement.childNodes[0].innerText;
           let result=text.strike();
           currentelement.parentElement.childNodes[0].innerHTML =result;
          }
           
            //currentelement.style.text-decoration="line-through";
          
          
    