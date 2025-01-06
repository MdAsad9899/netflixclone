let selector = document.querySelector(".faq-box1");
let count = 1;
let para = null; // To store the reference to the created div

selector.addEventListener("click", function () {
    if (count == 1) {
        para = document.createElement("div");
        para.innerHTML = "<p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br> <br> You can watch as much as you want, whenever you want, without a single /n ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>";
        para.style.padding = "10px";
        para.style.marginTop = "20px";
        para.style.color = "white";
        para.style.borderRadius = "10px";
        para.style.minHeight = "50px";
        para.style.fontSize = "18px";
        para.style.fontWeight = 500;
        para.style.backgroundColor = "rgb(57, 56, 56)";
        selector.after(para); // Add the new div after the selector
        count = 2; // Update count to 2
    } else {
        if (para) {
            para.remove(); // Remove the div if it exists
            para = null; // Reset the reference
        }
        count = 1; // Reset count to 1
    }
});

let selector2 = document.querySelector(".faq-box2");
let val = 3;
selector2.addEventListener("click", function () {
    if (val == 3) {
        para = document.createElement("div");
        para.innerHTML = "<p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>";
        para.style.padding = "10px";
        para.style.marginTop = "20px";
        para.style.color = "white";
        para.style.borderRadius = "10px";
        para.style.minHeight = "50px";
        para.style.fontSize = "18px";
        para.style.fontWeight = 500;
        para.style.backgroundColor = "rgb(57, 56, 56)";
        selector2.after(para); 
        val = 4; 
    } else {
        if (para) {
            para.remove();
            para = null; 
        }
        val = 3; 
    }
})


let selector3 = document.querySelector(".faq-box3");
let val2 = 5;
selector3.addEventListener("click", function () {
    if (val2 == 5) {
        para = document.createElement("div");
        para = document.createElement("div");
        para.innerHTML = "<p>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.<br> <br> Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>";
        para.style.padding = "10px";
        para.style.marginTop = "20px";
        para.style.color = "white";
        para.style.borderRadius = "10px";
        para.style.minHeight = "50px";
        para.style.fontSize = "18px";
        para.style.fontWeight = 500;
        para.style.backgroundColor ="rgb(57, 56, 56)";

        selector3.after(para);
        val2 = 6;
    }else{
        if(para){
            para.remove();
            para = null;
        }
        val2 = 5;
    }

});



let selector4 = document.querySelector(".faq-box4");
let val3 = 5;
selector4.addEventListener("click", function () {
    if (val3 == 5) {
        para = document.createElement("div");
        para = document.createElement("div");
        para.innerHTML = "<p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.<p>";
        para.style.padding = "10px";
        para.style.marginTop = "20px";
        para.style.color = "white";
        para.style.borderRadius = "10px";
        para.style.minHeight = "50px";
        para.style.fontSize = "18px";
        para.style.fontWeight = 500;
        para.style.backgroundColor = "rgb(57, 56, 56)";

        selector4.after(para);
        val3 = 6;
    }else{
        if(para){
            para.remove();
            para = null;
        }
        val3 = 5;
    }

});


let selector5 = document.querySelector(".faq-box5");
let val4 = 5;
selector5.addEventListener("click", function () {
    if (val4 == 5) {
        para = document.createElement("div");
        para = document.createElement("div");
        para.innerHTML = "<p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want..<p>";
        para.style.padding = "10px";
        para.style.marginTop = "20px";
        para.style.color = "white";
        para.style.borderRadius = "10px";
        para.style.minHeight = "50px";
        para.style.fontSize = "18px";
        para.style.fontWeight = 500;
        para.style.backgroundColor = "rgb(57, 56, 56)";

        selector5.after(para);
        val4 = 6;
    }else{
        if(para){
            para.remove();
            para = null;
        }
        val4 = 5;
    }

});


let selector6 = document.querySelector(".faq-box6");
let val5 = 5;
selector6.addEventListener("click", function () {
    if (val5 == 5) {
        para = document.createElement("div");
        para = document.createElement("div");
        para.innerHTML = "<p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br> <br> Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.<p>";
        para.style.padding = "10px";
        para.style.marginTop = "20px";
        para.style.color = "white";
        para.style.borderRadius = "10px";
        para.style.minHeight = "50px";
        para.style.fontSize = "18px";
        para.style.fontWeight = 500;
        para.style.backgroundColor = "rgb(57, 56, 56)";

        selector6.after(para);
        val5 = 6;
    }else{
        if(para){
            para.remove();
            para = null;
        }
        val5 = 5;
    }

});
