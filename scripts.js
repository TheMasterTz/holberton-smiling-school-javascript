$(document).ready(function () {
  const url = {
    quotes: "https://smileschool-api.hbtn.info/quotes",
    Tutorials: "https://smileschool-api.hbtn.info/popular-tutorials",
    latestVideos: "https://smileschool-api.hbtn.info/latest-videos",
    courses: "https://smileschool-api.hbtn.info/courses",
  };

  function loader(id) {
    let divContentItem = $('<div class="carousel-item active"></div>');
    let divContentLoading = $('<div class="loader"></div>');

    divContentItem.append(divContentLoading);
    $(id).append(divContentItem);
  }

  function carouselquotes() {
    loader("#carousel-one");

    $.get(url.quotes, (data) => {
      $("#carousel-one").empty();
      data.forEach((item) => {
        $("#carousel-one").append(`<div class="carousel-item ${
          item.id == 1 ? "active" : ""
        }">
          <div class="row justify-content-center align-items-center mr-5 ml-5">
            <div class="col-md-3">
              <img class="rounded-circle mx-auto my-3 d-block" src="${
                item.pic_url
              }" width="150" height="150" alt="First slide" />
            </div>
            <div class="col-md-6 mx-3">
              <p>${item.text}</p>
              <p><span class="font-weight-bold">${item.name}</span><br />
                <span class="font-italic">${item.title}</span></p>
            </div>
          </div>
        </div>`);
      });
    });
  }

  function carouselCard(urldata, id) {
    const [startOn, startOff] = [
      '<img src="images/star_on.png" width="15" height="15" alt="Star on" loading="lazy">',
      '<img src="images/star_off.png" width="15" height="15" alt="Star off" loading="lazy">',
    ];

    loader(id);

    $.get(urldata, (data) => {
      $(id).empty();
      data.forEach((item) => {
        $(id).append(`
        <div class="carousel-item ${item.id == 1 ? "active" : ""}">
          <div class="row justify-content-center align-items-center" id="carouselRow">
          </div>
            <div class="mx-1">
              <div class="card video-card mx-auto my-3">
                <img class="card-img-top" src="${
                  item.thumb_url
                }" alt="Thumbnail 2" width="255" height="154">
                <img class="play-img" src="images/play.png" alt="Play" width="64" height="64">
                <div class="card-body">
                  <p class="font-weight-bold">${item.title}<br>
                    <span class="text-secondary font-14 font-weight-normal">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</span>
                  </p>
                  <div class="row justify-content-start font-14 purple-text">
                    <div class="col-2">
                      <img class="rounded-circle" src="${
                        item.author_pic_url
                      }" width="30" height="30" alt="Profile 1" loading="lazy">
                    </div>
                    <div class="col mt-1">
                      ${item.author}
                    </div>
                  </div>
                  <div class="row justify-content-between mt-2">
                    <div class="col">
                      ${item.star >= 1 ? startOn : startOff}
                      ${item.star >= 2 ? startOn : startOff}
                      ${item.star >= 3 ? startOn : startOff}
                      ${item.star >= 4 ? startOn : startOff}
                      ${item.star >= 5 ? startOn : startOff}
                    </div>
                    <div class="col-4 text-right purple-text">
                      ${item.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>`);
      });
    });
  }

  function courses() {
    $.get()
  }

  carouselquotes();
  carouselCard(url.Tutorials, "#carousel-two");
  carouselCard(url.latestVideos, "#carousel-three");
});
