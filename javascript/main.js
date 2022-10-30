let searchInput = document.getElementById("search");
let country = "cairo";

searchInput.addEventListener("input", function () {
  country = searchInput.value;
  search(country);
 
});
let arr = [];
function search(conu) {
  let myHttp = new XMLHttpRequest();
  myHttp.open(
    "GET",
    `http://api.weatherapi.com/v1/forecast.json?key=5fcd2fad71bc4f70aba175047221210&q=${conu}&days=3&aqi=no&alerts=no`
  );

  myHttp.send();
  myHttp.addEventListener("readystatechange", () => {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
      arr = JSON.parse(myHttp.response);
      display();
    }
  });
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// console.log(new Date(loc.localtime).getDay());

function display() {
  let t = ``;

  t += `<div class="col-md-4 col-sm-12  px-0 bg-danger">
                    <div class="head  d-flex justify-content-between align-items-center p-2 ">
                        <div class="day">${
                          days[new Date(arr.location.localtime).getDay()]
                        }</div>
                        <div class="date">${new Date(
                          arr.location.localtime
                        ).toDateString()}</div>
                    </div>
                    <div class="content  p-2 text-white">
                        <div class="location fs-1 fw-bolder">${
                          arr.location.name
                        }</div>
                        <div class="degree d-flex  align-items-center ">
                            <div class="fs-1 me-5">${
                              arr.current.temp_c
                            }<sup>o</sup>C</div>
                            <div class="icon ms-lg-5"><img src=https://${
                              arr.current.condition.icon
                            } height="60" alt="" srcset="">
                            </div>
                        </div>

                        <div class="custom text-primary py-3">${
                          arr.current.condition.text
                        }</div>
                        <span class=""><img src="images/icon-umberella.png" alt="">${
                          arr.current.wind_mph
                        }%</span>
                        <span class="ms-3"><img src="images/icon-wind.png" alt="">${
                          arr.current.wind_kph
                        }km/h</span>
                        <span class="ms-3"><img src="images/icon-compass.png" alt="">${
                          arr.current.wind_dir
                        }</span>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12  px-0 bg-mid">
                    <div class="head text-center p-2 ">
                        <div class="day">${
                          days[
                            new Date(arr.forecast.forecastday[1].date).getDay()
                          ]
                        }</div>
                    </div>
                    <div class="content-mid pb-5 text-center ">
                        <div class="icon pt-3"><img src=https://${
                          arr.forecast.forecastday[1].day.condition.icon
                        } alt="" srcset=""></div>
                        <div class="max-degree pt-3">${
                          arr.forecast.forecastday[1].day.maxtemp_c
                        }<sup>o</sup>C</div>
                        <div class="min-degree pt-3">${
                          arr.forecast.forecastday[1].day.mintemp_c
                        }<sup>o</sup></div>
                        <div class=" text-primary custom pt-3">${
                          arr.forecast.forecastday[1].day.condition.text
                        }</div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12   px-0">
                    <div class="head text-center p-2 ">
                        <div class="day">${
                          days[
                            new Date(arr.forecast.forecastday[2].date).getDay()
                          ]
                        }</div>
                    </div>
                    <div class="content-mid pb-5 text-center ">
                        <div class="icon pt-3"><img src=https://${
                          arr.forecast.forecastday[2].day.condition.icon
                        } alt="" srcset=""></div>
                        <div class="max-degree pt-3">${
                          arr.forecast.forecastday[2].day.maxtemp_c
                        }<sup>o</sup>C</div>
                        <div class="min-degree pt-3">${
                          arr.forecast.forecastday[2].day.mintemp_c
                        }<sup>o</sup></div>
                        <div class="custom pt-3 text-primary">${
                          arr.forecast.forecastday[2].day.condition.text
                        }</div>
                    </div>
                </div>`;
  document.getElementById("myRow").innerHTML = t;
}

search(country);
