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


    let lists1 =[
        "1 Person :", "Duo: " , "Family: "
    ]


    
    $('.target').click(function(){
        $('#listingbig').animate({ opacity: 0 }, 0, function() {
        $(this).css('display', 'none');
        console.log(this)
        });
        $('#indi').css({ opacity: 0, display: 'block' }).animate({ opacity: 1 }, 300);
    
        const index=$(this).data('target');
   
        let indexnew=parseInt(index, 10)

        const listi=lists[indexnew]
        $('#buildingids').attr("src" , listi[8])


        $('#headtop1').text(listi[0])
        $('#des').text(listi[1])
        $('#diff').text("Difficulty: " + listi[2])
        $('#pricey').text("Min: " + listi[3])

        $("#address li").each(function(index){
            $(this).text(listi[4][index])
        })

        $("#pricelis li").each(function(index){
            $(this).text(lists1[index] + " " + listi[5][index])
        })

        $('#reward1').text(listi[6])
        
        $('#reward2').text(listi[7])


    })
    $('#arrowdiv').click(function(){
        

        $('#buildingids').attr("src" , "")


        $('#headtop1').text("")
        $('#des').text("")
        $('#diff').text("")
        $('#pricey').text("")

        $("#address li").each(function(index){
            $(this).text("")
        })

        $("#pricelis li").each(function(index){
            $(this).text("");
        })

        $('#reward1').text("")
        
        $('#reward2').text("")
        $('#indi').animate({ opacity: 0 }, 0, function() {
            $(this).css('display', 'none');
        });
        $('#listingbig').css({ opacity: 0, display: 'block' }).animate({ opacity: 1 }, 300);


    })

    $('#pressbutton').click(function(){
        $("#homebig").css('display', 'none');
        $('#listingbig').css({ opacity: 0, display: 'block' }).animate({ opacity: 1 }, 300);



    })


    $('#booknow').click(function(){
        $('#indi').hide();
        $('#bookingbig').slideDown('slow');

    })

    $('#booknow').click(function(){
        $('#indi').hide();
        $('#bookingbig').slideDown('slow');

    })

    $('#con').click(function(){
        $('#bookingbig').hide();
        $('#bookingbig1').slideDown('slow');

    })

    $('#book1a').click(function(){
        $('#bookingbig1').hide();
        $('bookingbig').slideDown('slow');

    })

    $('#revarrow').click(function(){
        $('#bookingbig').hide();
        $('#indi').slideDown('slow');

    })

    $('#user').click(function(){
        $('.select').hide();
        $('#account1').slideDown('slow');

    })

    $('.backa').click(function(){
        $('#account1').hide();
        $('#listingbig').slideDown('slow');

    })

    $('#arrowdiv1').click(function(){
        $('#bookingbig1').hide();

        $('#buildingids').attr("src" , "")


        $('#headtop1').text("")
        $('#des').text("")
        $('#diff').text("")
        $('#pricey').text("")

        $("#address li").each(function(index){
            $(this).text("")
        })

        $("#pricelis li").each(function(index){
            $(this).text("");
        })

        $('#reward1').text("")
        
        $('#reward2').text("")
        $('#indi').animate({ opacity: 0 }, 0, function() {
            $(this).css('display', 'none');
        });
        $('#listingbig').css({ opacity: 0, display: 'block' }).animate({ opacity: 1 }, 300);


    })

    $('#logo').click(function(){


        $(".hselect").css('display', 'none');

        $('#homebig').css({ opacity: 0, display: 'block' }).animate({ opacity: 1 }, 300);

        
        $('#buildingids').attr("src" , "")


        $('#headtop1').text("")
        $('#des').text("")
        $('#diff').text("Difficulty:")
        $('#pricey').text("Min:")

        $("#address li").each(function(index){
            $(this).text("")
        })

        $("#pricelis li").each(function(index){
            $(this).text(lists1[index] + " " + listi[5][index])
        })

        $('#reward1').text("")
        
        $('#reward2').text("")




    })



})
document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const emailInput = document.getElementById("email");
    const profileImg = document.getElementById("profileImg");
    const uploadImage = document.getElementById("uploadImage");
    const usernameHandle = document.getElementById("usernameHandle");
    
    function loadUserData() {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
            usernameInput.value = userData.username;
            nameInput.value = userData.name;
            surnameInput.value = userData.surname;
            emailInput.value = userData.email;
            profileImg.src = userData.profilePicture || "https://placehold.co/125x125";
            usernameHandle.textContent = userData.username;
        }
    }

    document.getElementById("saveButton").addEventListener("click", function () {
        const userData = {
            username: usernameInput.value,
            name: nameInput.value,
            surname: surnameInput.value,
            email: emailInput.value,
            profilePicture: profileImg.src
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        usernameHandle.textContent = usernameInput.value;
        alert("Saved successfully");
        $('.acselect').hide();
        $('#listingbig').css({ opacity: 0, display: 'block' }).animate({ opacity: 1 }, 300);
    });

    document.getElementById("deleteButton").addEventListener("click", function () {
        if (confirm("Are you sure you want to delete your account? This action cannot be undone")) {
            localStorage.removeItem("userData");
            alert("Account deleted successfully");
            window.location.reload();
            $('.acselect').hide();
            $('#listingbig').css({ opacity: 0, display: 'block' }).animate({ opacity: 1 }, 300);



        }
    });

    document.getElementById("logoutButton").addEventListener("click", function () {
        alert("Logged out successfully");
        $('.acselect').hide();
        $('#listingbig').css({ opacity: 0, display: 'block' }).animate({ opacity: 1 }, 300);
    });

    uploadImage.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    loadUserData();
});

function showTab(tabId) {
    var tabs = document.querySelectorAll('.tab-content');
    var buttons = document.querySelectorAll('.tab-button');
    tabs.forEach((tab) => {
        if (tab.id === tabId) {
            tab.classList.add('active');
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
            tab.classList.remove('active');
        }
    });
    buttons.forEach((button) => {
        button.classList.toggle('active', button.textContent.trim() === tabId.replace('Tab', ''));
    });
}


