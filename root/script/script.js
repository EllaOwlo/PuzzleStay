$(document).ready(function() {


    let lists=[
        ["Forest Escape"],
        ["Haunted Hall"],
        ["Desert Dunes"],
        ["Gold Rush"]
    ];


    
    $('.target').click(function(){
        $('#listingbig').hide()
        $('#indi').show()
        const index=$(this).data('target');

        let indexnew=parseInt(index, 10)

        const listi=lists[indexnew]

        $('#headtop').text(listi[0])




    })






})