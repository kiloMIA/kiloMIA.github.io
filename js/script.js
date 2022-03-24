rotateAnimation("main-pic", 30);
var looper;
var degrees = 0;
function rotateAnimation(el, speed) {
  $("#main-pic").css("WebkitTransform", "rotate(" + degrees + "deg)")
  looper = setTimeout('rotateAnimation(\'' + el + '\',' + 20 + ')', 20);
  degrees++;
  if (degrees > 35900) {
    degrees = 1;
  }
}


const giantPlanet = document.querySelector(".giant");
const terrestPlanet = document.querySelector(".terrestrial")
const about = document.querySelector(".about")
var mainName = document.getElementsByClassName("about-planet");
var mainPar = document.getElementsByClassName("main-par");
var seePlanets = document.querySelector(".btn-planet");
var secondLine = document.querySelector(".second-line");
var mainPic = document.querySelector(".main-pic");
var openGalleryText = document.querySelector(".open-gallery")

var underline2 = document.querySelector(".underline2");
var underline3 = document.querySelector(".underline3");
var underline4 = document.querySelector(".underline4");

var ModalOne = document.getElementById("earth");
var ModalTwo = document.getElementById("mars");
var ModalThree = document.getElementById("uranus");
var ModalZero = document.getElementById("gallery")
var aboutEarth = document.getElementById("aboutEarth");

// var mainAudio = new Audio("");
// mainAudio.play();

/* TAB GIANT PLANET */

giantPlanet.addEventListener("click", function () {

  $(".giant").css("color", "white");
  $(".about").css("color", '#D0D6F9')
  $(".terrestrial").css("color", '#D0D6F9')

  mainName[0].innerText = "Giant-Planets";
  mainPar[0].innerText = "The giant planets constitute a diverse type of planet much larger than Earth. They are usually primarily composed of low-boiling-point materials (gases or ices), rather than rock or other solid matter, but massive solid planets can also exist. There are four known giant planets in the Solar System: Jupiter, Saturn, Uranus and Neptune. Many extrasolar giant planets have been identified orbiting other stars. \n \n Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus."
  $(".main-pic").attr("src", "./media/ic/jupiter.svg")
  openGalleryText.innerText = "Open Gallery of Giant-Planets"

  $(".btn-planet").attr("class", "nonactive")
  $(".second-line").attr("class", "nonactive")
  mainPic.classList.remove("earth-circle");


  $(".underline2").css("visibility", "hidden")
  $(".underline3").css("visibility", "visible")
  $(".underline4").css("visibility", "hidden")

  ModalZero.getElementsByClassName("container")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/saturn.jpg")
  ModalZero.getElementsByClassName("container")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[1].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/neptune.jpg")
  ModalZero.getElementsByClassName("container")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[2].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/uranus.jpg")


  ModalOne.getElementsByClassName("container")[0].getElementsByTagName("h3")[0].innerText = "Saturn";
  ModalOne.getElementsByClassName("row")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/saturn2.jpg");
  ModalOne.getElementsByClassName("row")[0].getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerText = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.Saturn's interior is most likely composed of a core of iron–nickel and rock. Its core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally, a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. Saturn has 83 known moons,53 of which have formal names.In addition, there is evidence of dozens to hundreds of moonlets with diameters of 40–500 meters in Saturn's rings, which are not considered to be true moons. Titan, the largest moon, comprises more than 90% of the mass in orbit around Saturn, including the rings. Saturn is probably best known for the system of planetary rings that makes it visually unique. The rings extend from 6,630 to 120,700 kilometers outward from Saturn's equator and average approximately 20 meters in thickness."


  ModalTwo.getElementsByClassName("container")[0].getElementsByTagName("h3")[0].innerText = "Neptune";
  ModalTwo.getElementsByClassName("row")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/neptune2.jpg");
  ModalTwo.getElementsByClassName("row")[0].getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerText = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. It is referred to as one of the solar system's two ice giant planets.From its discovery in 1846 until the discovery of Pluto in 1930, Neptune was the farthest-known planet. When Pluto was discovered, it was considered a planet, and Neptune thus became the second-farthest-known planet, except for a 20-year period between 1979 and 1999 when Pluto's elliptical orbit brought it closer than Neptune to the Sun.In 2006, the International Astronomical Union defined the word 'planet' for the first time. At high altitudes, Neptune's atmosphere is 80% hydrogen and 19% helium. Neptune's second-known satellite, the irregular moon Nereid, has one of the most eccentric orbits of any satellite in the Solar System. Neptune has a planetary ring system, though one much less substantial than that of Saturn."
  ModalThree.getElementsByClassName("container")[0].getElementsByTagName("h3")[0].innerText = "Uranus";
  ModalThree.getElementsByClassName("row")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/uranus2.jpg");
  ModalThree.getElementsByClassName("row")[0].getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerText = "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the other giant planets. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons.It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds.The interior of Uranus is mainly composed of ices and rock."


})

// /* TAB TERREST PLANET */


terrestPlanet.addEventListener("click", function () {
  $(".giant").css("color", "#D0D6F9");
  $(".about").css("color", '#D0D6F9')
  $(".terrestrial").css("color", 'white')


  mainName[0].innerText = "Terrestrial-planets";
  mainPar[0].innerText = "A terrestrial planet, telluric planet, or rocky planet, is a planet that is composed primarily of silicate rocks or metals. Within the Solar System, the terrestrial planets accepted by the IAU are the inner planets closest to the Sun, i.e. Mercury, Venus, Earth and Mars. Among astronomers who use the geophysical definition of a planet, two or three planetary-mass satellites – Earth's Moon, Io, and sometimes Europa – may also be considered terrestrial planets.\n \n Earth is the third planet from the Sun and the only astronomical object known to harbor life. Earth's liquid outer core generates the magnetic field that shapes Earth's magnetosphere, deflecting destructive solar winds.Earth formed over 4.5 billion years ago.Earth's atmosphere consists mostly of nitrogen and oxygen."
  mainName[0].style.fontSize = "35";

  $(".main-pic").attr("src", "./media/ic/earth.svg")
  openGalleryText.innerText = ""

  $(".btn-planet").attr("class", "nonactive")
  $(".second-line").attr("class", "nonactive")
  mainPic.classList.add("earth-circle");

  $(".underline2").css("visibility", "hidden")
  $(".underline3").css("visibility", "hidden")
  $(".underline4").css("visibility", "visible")

  ModalZero.getElementsByClassName("container")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/mercury.jpg")
  ModalZero.getElementsByClassName("container")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[1].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/mars.jpg")
  ModalZero.getElementsByClassName("container")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[2].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/venus.jpg")


  ModalOne.getElementsByClassName("container")[0].getElementsByTagName("h3")[0].innerText = "Mercury";
  ModalOne.getElementsByClassName("row")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/mercury2.jpg");
  ModalOne.getElementsByClassName("row")[0].getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerText = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes.  Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or the eastern horizon before sunrise, usually in twilight. At this time, it may appear as a bright star-like object, but is more difficult to observe than Venus. From Earth, the planet telescopically displays the complete range of phases, similar to Venus and the Moon, which recurs over its synodic period of approximately 116 days. Mercury's axis has the smallest tilt of any of the Solar System's planets. Its orbital eccentricity is the largest of all known planets in the Solar System; at perihelion, Mercury's distance from the Sun is only about two-thirds of its distance at aphelion. The planet has no known natural satellites."

  ModalTwo.getElementsByClassName("container")[0].getElementsByTagName("h3")[0].innerText = "Mars";
  ModalTwo.getElementsByClassName("row")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/mars2.jpg");
  ModalTwo.getElementsByClassName("row")[0].getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerText = "Mars is the fourth planet from the Sun and the second-smallest planet in the \n Solar System, being larger than only Mercury. In English, Mars carries the \n name of the Roman god of war and is often referred to as the 'Red Planet'.The \n latter refers to the effect of the iron oxide prevalent on Mars's surface, which \n gives it a reddish appearance, that is distinctive among the astronomical \n bodies visible to the naked eye. Mars is a terrestrial planet with a thin \n atmosphere, with surface features reminiscent of the impact craters of the \n Moon, and the valleys, deserts and polar ice caps of Earth.Mars can easily be \n seen from Earth with the naked eye, as can its reddish coloring. Its apparent \n magnitude reaches −2.94, which is surpassed only by Venus, the Moon and the Sun. Optical ground-based telescopes are typically limited to \n resolving features about 300 kilometres (190 mi) across when Earth and Mars \n are closest because of Earth's atmosphere.Mars's average distance from the \n Sun is roughly 230 million km (143 million mi), and its orbital period is 687 (Earth) days. The solar day (or sol) on Mars is only slightly longer than an Earth day: 24 hours, 39 minutes, and 35.244 seconds. For the last 35,000 years, the orbit of Mars has been getting slightly more eccentric because of the gravitational effects of the other planets."

  ModalThree.getElementsByClassName("container")[0].getElementsByTagName("h3")[0].innerText = "Venus";
  ModalThree.getElementsByClassName("row")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/venus2.jpg");
  ModalThree.getElementsByClassName("row")[0].getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerText = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight. Venus lies within Earth's orbit, and so never appears to venture far from the Sun. Most of the time, Venus is either a morning star or an evening star, when it rises in the east a little while before dawn or sets in the west just after dusk, respectively. Venus orbits the Sun every 224.7 Earth days. It has a synodic day length of 117 Earth days and a sidereal rotation period of 243 Earth days. As a consequence, it takes longer to rotate about its axis than any other planet in the Solar System, and does so in the opposite direction to all but Uranus. This means the Sun rises in the west and sets in the east. enus does not have any moons, a distinction it shares only with Mercury among the planets in the Solar System."


})


about.addEventListener("click", function () {

  $(".giant").css("color", "#D0D6F9");
  $(".about").css("color", 'white')
  $(".terrestrial").css("color", '#D0D6F9')

  mainName[0].innerText = "DEFINITION";
  mainPar[0].innerText = "The term planet is ancient, with ties to history, astrology, science, mythology, and religion. Apart from Earth itself, five planets in the Solar System are often visible to the naked eye. These planets were regarded by many early cultures as divine or as emissaries of deities. As scientific knowledge advanced, human perception of the planets changed, incorporating a number of disparate objects that ranged in size, shape, orbital plane, and other characteristics. In 2006, the International Astronomical Union (IAU) officially adopted a resolution defining planets within the Solar System."
  $(".main-pic").attr("src", "./media/ic/Bitmap.svg")
  openGalleryText.innerText = "Open Gallery"

  $(".btn-planet").attr("class", "btn-planet")
  $(".second-line").attr("class", "second-line")
  mainPic.classList.remove("earth-circle");


  $(".underline2").css("visibility", "visible")
  $(".underline3").css("visibility", "hidden")
  $(".underline4").css("visibility", "hidden")

  ModalZero.getElementsByClassName("container")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/earth.jpg")
  ModalZero.getElementsByClassName("container")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[1].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/mars.jpg")
  ModalZero.getElementsByClassName("container")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[2].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/uranus.jpg")


  ModalOne.getElementsByClassName("container")[0].getElementsByTagName("h3")[0].innerText = "Earth";
  ModalOne.getElementsByClassName("row")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/earth2.jpg");
  ModalOne.getElementsByClassName("row")[0].getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerText = "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of the Earth's surface is made up of water. The ocean covers most of that area, dwarfing other saltwater and freshwater bodies like lakes and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands. Much of Earth's polar regions is covered in ice. Earth's surface layer is formed of several slowly moving tectonic plates, interacting to produce mountain ranges, volcanoes and earthquakes. Earth's liquid outer core generates the magnetic field that shapes Earth's magnetosphere, deflecting destructive solar winds.Earth formed over 4.5 billion years ago.Earth's atmosphere consists mostly of nitrogen and oxygen. Earth's gravity interacts with other objects in space, especially the Moon, which is Earth's only permanent natural satellite. The gravitational interaction between Earth and the Moon causes tides, stabilizes Earth's orientation on its axis, and gradually slows its rotation.Earth's co-orbital asteroids population consists of quasi-satellites, objects with a horseshoe orbit and trojans. There are at least five quasi-satellites, including 469219 Kamoʻoalewa."

  ModalTwo.getElementsByClassName("container")[0].getElementsByTagName("h3")[0].innerText = "Mars";
  ModalTwo.getElementsByClassName("row")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/mars2.jpg");
  ModalTwo.getElementsByClassName("row")[0].getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerText = "Mars is the fourth planet from the Sun and the second-smallest planet in the \n Solar System, being larger than only Mercury. In English, Mars carries the \n name of the Roman god of war and is often referred to as the 'Red Planet'.The \n latter refers to the effect of the iron oxide prevalent on Mars's surface, which \n gives it a reddish appearance, that is distinctive among the astronomical \n bodies visible to the naked eye. Mars is a terrestrial planet with a thin \n atmosphere, with surface features reminiscent of the impact craters of the \n Moon, and the valleys, deserts and polar ice caps of Earth.Mars can easily be \n seen from Earth with the naked eye, as can its reddish coloring. Its apparent \n magnitude reaches −2.94, which is surpassed only by Venus, the Moon and the Sun. Optical ground-based telescopes are typically limited to \n resolving features about 300 kilometres (190 mi) across when Earth and Mars \n are closest because of Earth's atmosphere.Mars's average distance from the \n Sun is roughly 230 million km (143 million mi), and its orbital period is 687 (Earth) days. The solar day (or sol) on Mars is only slightly longer than an Earth day: 24 hours, 39 minutes, and 35.244 seconds. For the last 35,000 years, the orbit of Mars has been getting slightly more eccentric because of the gravitational effects of the other planets."

  ModalThree.getElementsByClassName("container")[0].getElementsByTagName("h3")[0].innerText = "Uranus";
  ModalThree.getElementsByClassName("row")[0].getElementsByTagName("div")[0].getElementsByTagName("img")[0].setAttribute("src", "./media/pic/uranus2.jpg");
  ModalThree.getElementsByClassName("row")[0].getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerText = "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the other giant planets. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons.It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds.The interior of Uranus is mainly composed of ices and rock."


})




addEventListener("keypress", function (e) {
  if (e.key === "p") {
    let audio = new Audio("./media/interstellar.mp3");
    audio.play();
  }

})

$(".main-pic").mouseover(function () {
  $(".earth-circle").slideUp(2000).slideDown(2000);

$(".planet-info").mouseover(function () {
    $(".planet-info").animate({
        marginLeft:'60px'
    });
});
})


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    $("#myBtn").css("display","block");
  } else {
    $("#myBtn").css("display","none");
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// const Earth = {
//   planetFromSun: "Third",
//   ocean: "79%",
//   land:"21%",
//   typeOfPlanet:"Terrestrial",
//   howOld: "4.54 Ga (billion) years",
//   satellites:"Moon",
// }


function astmove() {
  document.getElementById("navbarSupportedContent").firstChild.Chi
  let x = document.getElementById("animation");
  x.style.left = 70 + "%";
  x.style.width = "125px";
  x.style.transition = "all 0.5s"
}

function astnotmove() {
  let x = document.getElementById("animation");
  x.style.left = 22 + "%";
  x.style.width = "90px";
  x.style.transition = "all 0.5s"
}

function homemove() {
  let x = document.getElementById("animation");
  x.style.left = 0 + "%";
  x.style.width = "60px";
  x.style.transition = "all 0.5s"
}

function homenotmove() {
  let x = document.getElementById("animation");
  x.style.left = 22 + "%";
  x.style.width = "90px";
  x.style.transition = "all 0.5s"
}

function starsmove() {
  let x = document.getElementById("animation");
  x.style.left = 47 + "%";
  x.style.width = "85px";
  x.style.transition = "all 0.5s"
}

function starsnotmove() {
  let x = document.getElementById("animation");
  x.style.left = 22 + "%";
  x.style.width = "90px";
  x.style.transition = "all 0.5s"
}