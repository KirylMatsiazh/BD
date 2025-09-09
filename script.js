document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("nextImage");
  const img = document.getElementById("activeImage");
  const text = document.getElementById("text");
  
  // List of images with info about whether they should "dance"
  const images = [
    { src: "GreetingCat.jpg"},
    { src: "MysteriousCat.jpg"},
    { src: "SuspiciousCat.jpg"},
    { src: "DancingCat.gif"},
    { src: "RomanticCat.jpg"},
    { src: "BeautifulCat.jpg"},
    { src: "SmartCat.jpg"},
    { src: "CuteCat.jpg"},
    { src: "NaughtyCat.jpg"},
    { src: "CongratsCat.jpg"},
  ];

  const texts = [
    "Halo, princessitto :D",
    "Today is a huge day, u know...",
    "U didn't forget, right..?",
    "IT'S UR BIRTHDAY!!!!",
    "So i want to congratulate u:...",
    "Gorgeous",
    "Smart",
    "Cute",
    "N the most wonderful princessitto",
    "!!!HAPPY BIRTHDAY!!!"
  ]

  let index = 0;

  btn.addEventListener("click", () => {
    // Move to next image (loop back if needed)
    index = (index + 1) % images.length;

    // Update image and text source
    img.src = images[index].src;
    text.innerHTML = texts[index];

    if(index == 3){
        document.body.style.backgroundImage = "url('images/background.gif')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
    } else {
        document.body.style.backgroundImage = "";
        document.body.style.backgroundRepeat = "";
        document.body.style.backgroundPosition = "";
        document.body.style.backgroundSize = "";
    }
  });
});