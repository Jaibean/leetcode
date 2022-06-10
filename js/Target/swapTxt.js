let block = document.querySelectorAll(".menu-level-0")[1];
let item = block.querySelectorAll(".menu-item")[6];

item.textContent = "Check Availability"
item = "<a href=\"https://order.optimum.com/Buyflow/Storefront\" target=\"_self\" data-linkname=\"OPT Global CTA_Navigation Shop Now\" class=\"button blue\">Check availability</a>"

let btn = document.querySelector(".button.open-form").innerHTML = "Check availabiliy"

btn = "Check availabiliy"
console.log(btn);

function chgTxt(el) {
    document.querySelector(el).innerHTML = 'Check Availability';
}

chgTxt(item);

item= "Check Availability"

console.log(item);
block.style.marginTop = '0'
document.getElementById('Internet_EBB_banner').style.marginBottom = "60";

var block = document.getElementById('internet_bottom-banner');
document.getElementById('internet_top-banner').insertAdjacentElement("afterend", block);
document.getElementById('internet_top-banner').style.marginBottom = "0";
document.getElementById('optimum-mobile-module').style.marginTop = "60";


