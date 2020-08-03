$(document).ready(function () {
    loadWithAnimation('../partials/home.html',pageHome)
  
    $('#home').click(function () {
      loadWithAnimation('../partials/home.html', pageHome)
    })
    $('#cv').click(function () {
        loadWithAnimation('../partials/cv.html', pageCv)
      })

    $('#collecion').click(function () {
      loadWithAnimation('../partials/collecion.html', pageCollecion)
    })
  
    $('#contactame').click(function () {
        loadWithAnimation('../partials/contactame.html', pageContactame)
      })

      $('#galeria').click(function () {
        loadWithAnimation('../partials/galeria.html', pageGaleria)
      })
    
  })
  
  function loadWithAnimation (route, controller) {
    $('#root').fadeOut(400, function () {
      $('#root').load(route, controller).fadeIn(400)
    })
  }