$(document).ready(function() {


    let lists=[
        ["Forest Escape" , "Venture and find your way through this Forest themed hotelescape room! Filled with mysterious creatures and brain-teasing puzzles, can you escape?" ,
            "Easy" , "£35 p/p" , ["The Special" , "G12 7AB" , "45" , "Quest Street" , "Glasgow"] , ["£35" , "£55", "£110*"] , "Free breakfast for 2 days" , "10% discount on next visit",
        ],
        ["Haunted Hall" , "Feel the scary chills down your spine in this traditional themed haunted house, filled with al kinds of creatures and beings. This room will give you a night (and fright!) to remember.ESCAPE NOW!" ,
            "Medium" , "£42 p/p" , ["The Relaxed Hotel" , "ML1 89B" , "35" , "Jack Square" , "Lanarkshire"] , ["£42" , "£77", "£140*"] , "Free main course meal for two persons" , "15% discount for duo deal on your next escape room booking",],

        ["Desert Dunes" , "In this boiling hot journey, you wil encounter multiple puzzles and traps to avoid! This escape room theme is the desert, don’t worry though! The heat is not overbearing. " ,
            "Hard" , "£41.50 p/p" , ["Tip-Top Hotel" , "BS1 67H" , "56" , "Nice Lane" , "Bristol"] , ["£41.50" , "£75", "£140*"] , "Free night at the hotel for one person" , "20% discount on dinner at our restaurant" ],

        ["Gold Rush" , "In this treasure themed adventure, there is gold, puzzles and more gold! You probably already guessed that though. You may encounter familiar beings, more particularly ones who wear a hat and eyepatch! " ,
            "Medium" , "£39 p/p" , ["Elite Stay" , "NR12 6BA" , "63" , "Royal Street" , "Norwich"] , ["£39" , "£70", "£130*"] , "10% discount on next visit" , "20% discount on dinner at our restaurant" ]
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