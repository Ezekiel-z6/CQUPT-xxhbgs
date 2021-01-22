"use strict";

window.onload = function () {
  // 新闻部分
  var newsSelection = $(".news .selection ul li");
  var newsContent = $(".news .content ul");
  var newsMore = $(".selection span");
  $.each(newsSelection, function (indexInArray, valueOfElement) {
    $(valueOfElement).mouseover(function () {
      $(valueOfElement).addClass("active").siblings().removeClass("active");
      $(newsContent).eq(indexInArray).addClass("active").siblings().removeClass("active");
      $(newsMore).eq(indexInArray).addClass("active").siblings().removeClass("active");
    });
  }); // IT 服务部分

  var itSelection = $(".it-nav>li");
  var itContent = $(".it-btn ul");
  $.each(itSelection, function (indexInArray, valueOfElement) {
    $(valueOfElement).mouseover(function () {
      $(valueOfElement).addClass("active").siblings().removeClass("active");
      $(itContent).eq(indexInArray).addClass("active").siblings().removeClass("active");
    });
  }); // banner pointer部分

  var bannerSelection = $("main .banner .pointers li");
  var bannerContent = $("main .banner .imgs li");
  var bannerCurrentIndex = 0;
  var bannerTotal = bannerSelection.length;
  var timeoutHandler;
  $.each(bannerSelection, function (indexInArray, valueOfElement) {
    $(valueOfElement).click(function (e) {
      e.preventDefault();
      $(valueOfElement).addClass("active").siblings().removeClass("active");
      $(bannerContent).eq(indexInArray).addClass("active").siblings().removeClass("active");
      bannerCurrentIndex = indexInArray;
      clearInterval(timeoutHandler);
      timeoutHandler = setInterval(function () {
        console.log(bannerCurrentIndex);
        bannerCurrentIndex = (bannerCurrentIndex + 1) % bannerTotal;
        setActive(bannerCurrentIndex);
      }, 5000);
    });
  });
};