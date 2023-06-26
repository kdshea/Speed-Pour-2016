
var images = ['css/images/newAmsterdamVodka.png','css/images/titos.png','css/images/stoli.png','css/images/ketel.png','css/images/absolut.png', 'css/images/greyGoose.png','css/images/sapphire.png','css/images/tanqueray.png']

var count = 0

var newAmsterdamVodka = 0
var newAmsterdamVodkaPar = 48
var newAmsterdamVodkaTotal = 7.24

var titos = 0
var titosPar = 48
var titosTotal = 20.99

var stoli = 0
var stoliPar = 12
var stoliTotal = 27.69

var ketel = 0
var ketelPar = 18
var ketelTotal = 29.49

var absolut = 0
var absolutPar = 18
var absolutTotal = 19.99

var greyGoose = 0
var greyGoosePar = 12
var greyGooseTotal = 31.99

var sapphire = 0
var sapphirePar = 6
var sapphireTotal = 29.89

var tanqueray = 0
var tanquerayPar = 8
var tanquerayTotal = 25.59



var burkeTotal = 0
var unitedTotal = 0
var horizonTotal = 0





$(document).ready(function(){

  // on click id = startButton hide page one, go to page two
  $('#startButton').on('click', function(e){
    console.log(count)
    $('#pageOne').fadeOut(1000,function(e){
      $('#pageTwo').fadeIn(2000)
    })
    e.preventDefault()
  })
  //on click managerNameButton, append input field to order page
  //				hide page two, go to page three
  $('#managerNameButton').on('click', function(e){
    console.log(count)
    $('.managerName').append($('#managerNameInput').val())
    $('#pageTwo').fadeOut(1000,function(e){
      $('#pageThree').fadeIn(2000)
    })
    e.preventDefault()
  })
  //on click inventoryDateButton append date to order form
  //				hide page three, show page four
  $('#inventoryDateButton').on('click', function(e){
    console.log(count)
    $('.orderDate').append($('#inventoryDate').val())
    $('#pageThree').fadeOut(1000,function(e){
      $('#pageFour').fadeIn(2000)
    })
    e.preventDefault()
  })
  //on click frontBar, show carousel and hide all other pages
  //(works for nav bar, from page four, and page five)
  $('.frontBar').on('click', function(e){
    console.log(count)
    $('.page:not(#carousel)').fadeOut(1000,function(e){
      $('#carouselImage').attr('src',images[0])
      $('#carousel').fadeIn(2000)
    })
    e.preventDefault()
  })
  //on click backBar, show carousel and hide all other pages
  //works for nav bar, from page four, and page five
  $('.backBar').on('click', function(e){
    console.log(count)
    $('.page:not(#carousel)').fadeOut(1000,function(e){
      $('#carouselImage').attr('src',images[0])
      $('#carousel').fadeIn(2000)
    })
    e.preventDefault()
  })
  // on click liquorRoom, show carousel and hide all other pages
  // works for nav bar, from page four, and page five
  $('.liquorRoom').on('click', function(e){
    console.log(count)
    $('.page:not(#carousel)').fadeOut(1000,function(e){
      $('#carouselImage').attr('src',images[0])
      $('#carousel').fadeIn(2000)
    })
    e.preventDefault()
  })
  //on click orderpage, show order tables and hide all other pages
  //(works for nav bar and page five )
  $('.orderPage').on('click', function(e){
  //append counts of in house liquor to table, subtract from par, do math to get order and multiply by price to get total
  //append those totals to respective cells in order page tables
  //new amsterdam
    $('#newAmsterdamVodkaInHouse').append(newAmsterdamVodka)
    newAmsterdamVodkaPar = newAmsterdamVodkaPar - newAmsterdamVodka
    $('#newAmsterdamVodkaOrder').append(newAmsterdamVodkaPar)
    newAmsterdamVodkaTotal = newAmsterdamVodkaTotal * newAmsterdamVodkaPar;
    (newAmsterdamVodkaTotal).toFixed(2)
    $('#newAmsterdamVodkaTotal').append(newAmsterdamVodkaTotal)
    //titos
    $('#titosInHouse').append(titos)
    titosPar = titosPar - titos
    $('#titosOrder').append(titosPar)
    titosTotal = titosTotal * titosPar;
    (titosTotal).toFixed(2)
    $('#titosTotal').append(titosTotal)
    //stoli
    $('#stoliInHouse').append(stoli)
    stoliPar = stoliPar - stoli
    $('#stoliOrder').append(stoliPar)
    stoliTotal = stoliTotal * stoliPar;
    (stoliTotal).toFixed(2)
    $('#stoliTotal').append(stoliTotal)
    //ketel
    $('#ketelInHouse').append(ketel)
    ketelPar = ketelPar - ketel
    $('#ketelOrder').append(ketelPar)
    ketelTotal = ketelTotal * ketelPar;
    (ketelTotal).toFixed(2)
    $('#ketelTotal').append(ketelTotal)
    //absolut
    $('#absolutInHouse').append(absolut)
    absolutPar = absolutPar - absolut
    $('#absolutOrder').append(absolutPar)
    absolutTotal = absolutTotal * absolutPar;
    (absolutTotal).toFixed(2)
    $('#absolutTotal').append(absolutTotal)

    //greyGoose
    $('#greyGooseInHouse').append(greyGoose)
    greyGoosePar = greyGoosePar - greyGoose
    $('#greyGooseOrder').append(greyGoosePar)
    greyGooseTotal = greyGooseTotal * greyGoosePar;
    (greyGooseTotal).toFixed(2)
    $('#greyGooseTotal').append(greyGooseTotal)

    //sapphire
    $('#sapphireInHouse').append(sapphire)
    sapphirePar = sapphirePar - sapphire
    $('#sapphireOrder').append(sapphirePar)
    sapphireTotal = sapphireTotal * sapphirePar;
    (sapphireTotal).toFixed(2)
    $('#sapphireTotal').append(sapphireTotal)

    //tanqueray
    $('#tanquerayInHouse').append(tanqueray)
    tanquerayPar = tanquerayPar - tanqueray
    $('#tanquerayOrder').append(tanquerayPar)
    tanquerayTotal = tanquerayTotal * tanquerayPar;
    (tanquerayTotal).toFixed(2)
    $('#tanquerayTotal').append(tanquerayTotal)

    // total for different company orders are sum of their products
    //append to the bottom of their  respective order page tables

    //burke
    burkeTotal = newAmsterdamVodkaTotal + tanquerayTotal;
    (burkeTotal).toFixed(2)
    $('#burkeTotal').append(burkeTotal)
    //united
    unitedTotal = titosTotal + absolutTotal + ketelTotal;
    (unitedTotal).toFixed(2)
    $('#unitedTotal').append(unitedTotal)
    //horizon
    horizonTotal = stoliTotal + greyGooseTotal + sapphireTotal;
    (horizonTotal).toFixed(2)
    $('#horizonTotal').append(horizonTotal)

    //fade in orderpage after appending variables to tables
    $('.page:not(#orderPage)').fadeOut(1000,function(e){
      $('#orderPage').fadeIn(2000)
    })
    e.preventDefault()
  })

  // Event listener for click on Skip button
  $('#Skip').click(function() {
    //if count is 0, add the parse input from the bottle count to the new amsterdam vodka count
    if (count === 0){
      newAmsterdamVodka = newAmsterdamVodka + parseInt($('#bottleCount').val())
      console.log(newAmsterdamVodka)
    }
    //titos
    if (count === 1){
      titos = titos + parseInt($('#bottleCount').val())
      console.log(titos)
    }
    //stoli
    if (count === 2){
      stoli = stoli + parseInt($('#bottleCount').val())
      console.log(stoli)
    }
    //ketel
    if (count === 3){
      ketel = ketel + parseInt($('#bottleCount').val())
      console.log(ketel)
    }
    //absolut
    if (count === 4){
      absolut = absolut + parseInt($('#bottleCount').val())
      console.log(absolut)
    }
    //grey goose
    if (count === 5){
      greyGoose = greyGoose + parseInt($('#bottleCount').val())
      console.log(greyGoose)
    }
    //sapphire
    if (count === 6){
      sapphire = sapphire + parseInt($('#bottleCount').val())
      console.log(sapphire)
    }
    //tanqueray
    if (count === 7){
      tanqueray = tanqueray + parseInt($('#bottleCount').val())
      console.log(tanqueray)
    }
    //Add 1 to count and  console log it
    count = count + 1
    console.log(count)

    //If at end of carousel, send to page four
    if (count >= 8){
      $('.carousel').hide()
      $('.page:not(#pageFive)').fadeOut(1000,function(e){
        $('#pageFive').fadeIn(2000)
        count = 0
      })
    }
    //shows background image corresponding to current count in slideshow
    $('#carouselImage').attr('src',images[count])
  })

  // Event listener for click on back button
  $('#Back').click(function() {
    //Subtract 1 from count
    count = count - 1
    console.log(count)
    //If at beginning of carousel, reset count to the end of the carousel
    if (count === -1){
      count = 7
    }
    //shows image corresponding to current cound in slideshow
    $('#carouselImage').attr('src',images[count])
  })

})//end doc ready
