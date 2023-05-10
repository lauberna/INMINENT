let redes = [
  {
    red: "instagram",
    url: "https://instagram.com/inminent_ofc?igshid=NTc4MTIwNjQ2YQ==",
    img: "../assets/images/âPngtreeâinstagram icon_8704817.png",
  },
  {
    red: "soundcloud",
    url: "https://soundcloud.com/lau-sync",
    img: "../assets/images/pngwing.com.png",
  },
  {
    red: "spotify",
    url: "https://open.spotify.com/artist/1uFnJto3rNjZjAtAwNCnKI?si=tW3Mu60iRkKu11u_bp0Pdg",
    img: "../assets/images/pngwing.com-2.png",
  },
];

export function createElements(dif) {
  let div;
  if (dif == "navRed") {
    div = document.createElement("div");
    navbar.appendChild(div);
    div.classList.add("redes");
  } else {
    div = document.getElementById("redesCont");
    div.classList.add("redes");
  }

  redes.forEach((red) => {
    let a = document.createElement("a");
    a.setAttribute("href", red.url);
    a.setAttribute("target", "_blank");
    let img = document.createElement("img");
    img.setAttribute("src", red.img);
    img.classList.add("red");
    a.appendChild(img);
    div.appendChild(a);
  });
}
