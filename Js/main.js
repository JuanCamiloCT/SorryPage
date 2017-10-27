


function Sorry() {
  swal({
    title: '¿Me perdonarias Lorena?',
    text: "Me siento mal por hacerlo,dame otra oportunidad",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Claro que si amor!',
    cancelButtonText: '¡No,oiga a este!',
    confirmButtonClass: 'btn btn-primary',
    cancelButtonClass: 'btn btn-info',
    buttonsStyling: false
  }).then(function () {
    swal({
      title: 'Te amo mucho,gracias.',
      text: 'Enserio no lo vuelvo hacer, linda.',
      imageUrl: 'Img/yes.PNG',
      imageWidth: 100,
      imageHeight: 90,
      imageAlt: 'Custom image',
      animation: true
    })
  }, function (dismiss) {
    // dismiss can be 'cancel', 'overlay',
    // 'close', and 'timer'
    if (dismiss === 'cancel') {
      swal({
        title: '¿Esta segura?',
        text: "Por favor amor...",
        imageUrl: 'Img/No2.PNG',
        imageWidth: 100,
        imageHeight: 90,
        imageAlt: 'Custom image',
        animation: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si,¿Y que?',
        cancelButtonText: 'Jumm,mejor lo pienso.',
      }).then(function () {
        swal({
          title: 'Ownn :(',
          text: 'Bueno...',
          imageUrl: 'Img/No.PNG',
          imageWidth: 100,
          imageHeight: 90,
          imageAlt: 'Custom image',
          animation: true
        })
      })
    }
  })
}
