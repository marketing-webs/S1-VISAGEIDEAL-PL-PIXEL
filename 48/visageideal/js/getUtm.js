let utm = document.location.search;
const PP_Link = document.querySelector(".footer__links-PP");
const informationAffiliates = document.querySelector(".information_affiliates");
const links = document.querySelectorAll("a");
let localLinks;

links.forEach((item) => {
  item.href = `http://beneficial-force.com/48/visageideal/`;
});

PP_Link.href = "./docs/POLITYKA_PRYWATNOŚCI.pdf";
informationAffiliates.href = "./affiliates/affiliates.html";

if (utm != "" || utm) {
  localStorage.setItem("userDataLinks", JSON.stringify(utm));
  links.forEach((item) => {
    item.href = `http://beneficial-force.com/48/visageideal/${utm
      .split('"')
      .join("")}`;
  });
} else {
  localLinks = localStorage.getItem("userDataLinks");
  links.forEach((item) => {
    item.href = `http://beneficial-force.com/48/visageideal/${localLinks
      .split('"')
      .join("")}`;
  });
}

// console.log(localLinks)

// if (localLinks == null) {
//   localStorage.setItem('userDataLinks', JSON.stringify(utm));

//   links.forEach(item => {
//     item.href = `https://slimshape24.com/48/fitmoringa/${ utm }`
//   })

// }

var url2 = self.location.href;
var p = url2.indexOf("?");
var str = url2;
var parameter = str.slice(p);
if (p >= 1 && parameter.indexOf("p") != 1 && parameter.indexOf("s") != 1) {
  url2 = str.slice(0, p);
  self.location.replace(url2);
}

PP_Link.href = "./docs/POLITYKA_PRYWATNOŚCI.pdf";
informationAffiliates.href = "./affiliates/affiliates.html";
