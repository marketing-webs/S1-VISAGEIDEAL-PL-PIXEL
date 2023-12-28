let utm = document.location.search;
const PP_Link = document.querySelector(".footer__links-PP");
const informationAffiliates = document.querySelector(".information_affiliates");
const links = document.querySelectorAll("a");
let localLinks;

links.forEach((item) => {
  if (item.classList.contains("footer__links-PP")) {
    PP_Link.href = "./docs/PRIVACY_POLICY.pdf";
    return;
  }
  item.href = `https://beneficial-force.com/420/visageideal/`;
});

if (utm != "") {
  localStorage.setItem("userDataLinks", JSON.stringify(utm));
  links.forEach((item) => {
    if (item.classList.contains("footer__links-PP")) {
      PP_Link.href = "./docs/PRIVACY_POLICY.pdf";
      return;
    }
    item.href = `https://beneficial-force.com/420/visageideal${utm
      .split('"')
      .join("")}`;
  });
} else {
  localLinks = localStorage.getItem("userDataLinks");
  links.forEach((item) => {
    if (item.classList.contains("footer__links-PP")) {
      PP_Link.href = "./docs/PRIVACY_POLICY.pdf";
      return;
    }
    item.href = `https://beneficial-force.com/420/visageideal${localLinks
      .split('"')
      .join("")}`;
  });
}

var url2 = self.location.href;
var p = url2.indexOf("?");
var str = url2;
var parameter = str.slice(p);
if (p >= 1 && parameter.indexOf("p") != 1 && parameter.indexOf("s") != 1) {
  url2 = str.slice(0, p);
  self.location.replace(url2);
}
