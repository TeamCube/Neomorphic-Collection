document.addEventListener("DOMContentLoaded", function(event) {
const main = document.querySelector('.main');
const button = document.querySelector('#button');

const sec = document.querySelector('#sec');
const min = document.querySelector('#min');
const hour = document.querySelector('#hour');

/*update time*/
setInterval(update_clock, 1000);

function update_clock(){

let current_time = new Date();

/*get all time*/
let seconds = current_time.getSeconds();
let minutes = current_time.getMinutes();
let hours = current_time.getHours();

/*rotation degree*/
let sec_degree = -90 + (seconds*6);
let min_degree = -90 + (minutes * (360/60));
let hour_degree = -90 + (hours * (360/12));
hour_degree = hour_degree + (0.5 * minutes);

/*rotation*/
sec.style.transform = "rotate("+sec_degree+"deg)";
min.style.transform = "rotate("+min_degree+"deg)";
hour.style.transform = "rotate("+hour_degree+"deg)";

}
update_clock(); /*call function*/



/*dark mode function*/
var toggle_value = 0;
button.addEventListener("click", function(){
if (toggle_value==0) {
toggle_value = 1;
button.innerHTML = '<i class="fa fa-sun-o"></i>';
}else{
toggle_value = 0;
button.innerHTML = '<i class="fa fa-moon-o"></i>';
}

main.classList.toggle('dark_mode');

});

});

/*created by Devideas */
