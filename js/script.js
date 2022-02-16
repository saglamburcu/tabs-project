let button = document.querySelectorAll("button")

window.addEventListener("DOMContentLoaded", function() {
  showElement("history")
})

button.forEach(btn => {
  
  btn.addEventListener("click", function(e) {
    e.currentTarget.classList.add("bg-white")
    let classInfo = e.currentTarget.id
    showElement(`${classInfo}`)

    button.forEach(item => {
      if (item != e.currentTarget) {
        item.classList.remove("bg-white")
      }
    })

  })
})

function showElement(value) {
  let element = document.querySelectorAll(".content-hidden")
      element.forEach(item => {
        if (item.classList.contains(value)) {
          item.classList.add("content-show")

          let content = document.querySelector(".content")
          let itemHeight = item.getBoundingClientRect().height
          content.style.height = `${itemHeight}px`
          
        } else {
          item.classList.remove("content-show")
        }
      })

}


