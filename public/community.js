
//client side javascript

const heart = document.querySelectorAll(".heart");
const trash = document.getElementsByClassName("fa-trash");


Array.from(heart).forEach(function(element) {
      element.addEventListener('click', function(){
        let heart = this.parentNode.parentNode.childNodes[11].innerText
        const id = this.parentNode.parentNode.childNodes[17].dataset.id
        console.log(typeof(id))
        console.log(this.parentNode.parentNode.childNodes[17].dataset.id)
        console.log(id)
        let fav = this.parentNode.parentNode.childNodes[15].childNodes[0].style.color
        console.log(fav,'fav')
        console.log(heart, typeof(heart))
        if (heart === '0'){
          heart = 1
        }else{
          heart = 0
        }
        if (fav === 'rgb(0, 0, 0)'){
          fav = "red"
        }else{
          fav = '#000'
        }
        fetch('/messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'heart': heart,
            'fav': fav,
            'id': id
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true) //reload page
        })
      });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.childNodes[17].dataset.id
        fetch('/messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'id': id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
