$(document).ready(function () {
    loadWithAnimation('../partials/home.html',pageHome)
  
    $('.navbar #home').click(function () {
      loadWithAnimation('../partials/home.html', pageHome)
    })
    $('.navbar #cv').click(function () {
        loadWithAnimation('../partials/cv.html', pageCv)
      })

    $('.navbar #collecion').click(function () {
      loadWithAnimation('../partials/collecion.html', pageCollecion)
    })
  
    $('.navbar #contactame').click(function () {
        loadWithAnimation('../partials/contactame.html', pageContactame)
      })

      $('.navbar #galeria').click(function () {
        loadWithAnimation('../partials/galeria.html', pageGaleria)
      })


      $('#home-responsive').click(function () {
        loadWithAnimation('../partials/home.html', pageHome)
      })
      $('#cv-responsive').click(function () {
          loadWithAnimation('../partials/cv.html', pageCv)
        })
  
      $('#collecion-responsive').click(function () {
        loadWithAnimation('../partials/collecion.html', pageCollecion)
      })
    
      $('#contactame-responsive').click(function () {
          loadWithAnimation('../partials/contactame.html', pageContactame)
        })
  
       
    
  })
  
  function loadWithAnimation (route, controller) {
    $('#root').fadeOut(0, function () {
      $('#root').load(route, controller).fadeIn(0)
    })
  }