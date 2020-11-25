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
  });
};