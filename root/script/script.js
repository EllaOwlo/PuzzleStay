$(document).ready(function() {


    let lists=[
        ["Forest Escape" , "Venture and find your way through this Forest themed hotelescape room! Filled with mysterious creatures and brain-teasing puzzles, can you escape?" ,
            "Easy" , "£35 p/p" , ["The Special" , "G12 7AB" , "45" , "Quest Street" , "Glasgow"] , ["£35" , "£55", "£110*"] , "Free breakfast for 2 days" , "10% discount on next visit", "img/building1.png"
        ],
        ["Haunted Hall" , "Feel the scary chills down your spine in this traditional themed haunted house, filled with al kinds of creatures and beings. This room will give you a night (and fright!) to remember. ESCAPE NOW!" ,
            "Medium" , "£42 p/p" , ["The Relaxed Hotel" , "ML1 89B" , "35" , "Jack Square" , "Lanarkshire"] , ["£42" , "£77", "£140*"] , "Free main course meal for two persons" , "15% discount for duo deal on your next escape room booking", "img/building2.png"],

        ["Desert Dunes" , "In this boiling hot journey, you wil encounter multiple puzzles and traps to avoid! This escape room theme is the desert, don’t worry though! The heat is not overbearing. " ,
            "Hard" , "£41.50 p/p" , ["Tip-Top Hotel" , "BS1 67H" , "56" , "Nice Lane" , "Bristol"] , ["£41.50" , "£75", "£140*"] , "Free night at the hotel for one person" , "20% discount on dinner at our restaurant", "img/building3.png"],

        ["Gold Rush" , "In this treasure themed adventure, there is gold, puzzles and more gold! You probably already guessed that though. You may encounter familiar beings, more particularly ones who wear a hat and eyepatch! " ,
            "Medium" , "£39 p/p" , ["Elite Stay" , "NR12 6BA" , "63" , "Royal Street" , "Norwich"] , ["£39" , "£70", "£130*"] , "10% discount on next visit" , "20% discount on dinner at our restaurant" , "img/building4.png"]
    ];


    
    $('.target').click(function(){
        $('#listingbig').animate({ opacity: 0 }, 0, function() {
        $(this).css('display', 'none');
        });
        $('#indi').css({ opacity: 0, display: 'block' }).animate({ opacity: 1 }, 300);
    
        const index=$(this).data('target');
   
        let indexnew=parseInt(index, 10)

        const listi=lists[indexnew]
        $('#buildingids').attr("src" , listi[8])


        $('#headtop').text(listi[0])
        $('#des').text(listi[1])
        $('#diff').append(listi[2])
        $('#pricey').append(listi[3])

        $("#address li").each(function(index){
            $(this).text(listi[4][index])
        })

        $("#pricelis li").each(function(index){
            $(this).append(listi[5][index])
        })

        $('#reward1').text(listi[6])
        
        $('#reward2').text(listi[7])











    })






})