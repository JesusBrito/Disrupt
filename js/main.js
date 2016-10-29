;(function(){

  let sticky = false

  $(window).scroll(()=>{

  })

  function isInBottom(){
    const $description =$("#description")
    const descriptionHeight = $description.height()

    return $(window).scrollTop() > $(window).height() - (descriptionHeight * 1.5)
  }

})()
