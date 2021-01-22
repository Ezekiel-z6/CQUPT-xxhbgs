"use strict";

window.onload = function () {
  // 新闻部分
  var newsSelection = $(".news .selection ul li");
  var newsContent = $(".news .content ul");
  var newsMore = $(".selection span");
  $.each(newsSelection, function (indexInArray, valueOfElement) {
    $(valueOfElement).mouseover(function () {
      $(valueOfElement).addClass("active").siblings().removeClass("active");
      $(newsContent)
        .eq(indexInArray)
        .addClass("active")
        .siblings()
        .removeClass("active");
      $(newsMore)
        .eq(indexInArray)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  }); // IT 服务部分

  var itSelection = $(".it-nav>li");
  var itContent = $(".it-btn ul");
  $.each(itSelection, function (indexInArray, valueOfElement) {
    $(valueOfElement).mouseover(function () {
      $(valueOfElement).addClass("active").siblings().removeClass("active");
      $(itContent)
        .eq(indexInArray)
        .addClass("active")
        .siblings()
        .removeClass("active");
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
      $(bannerContent)
        .eq(indexInArray)
        .addClass("active")
        .siblings()
        .removeClass("active");
      bannerCurrentIndex = indexInArray;
      clearInterval(timeoutHandler);
      timeoutHandler = setInterval(function () {
        console.log(bannerCurrentIndex);
        bannerCurrentIndex = (bannerCurrentIndex + 1) % bannerTotal;
        setActive(bannerCurrentIndex);
      }, 5000);
    });
  });

  function setActive(index) {
    $(bannerContent)
      .eq(index)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(bannerSelection)
      .eq(index)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }

  timeoutHandler = setInterval(function () {
    bannerCurrentIndex = (bannerCurrentIndex + 1) % bannerTotal;
    setActive(bannerCurrentIndex);
  }, 5000);

  // Toggle
  $(".toggle").click(function (e) {
    e.preventDefault();
    $(".head").toggleClass("show");
    $(".toggle").toggleClass("show");
  });

  // 自动生成移动端按钮表盘
  var panel = $(".auto-generate-fn-panel");
  var fnAreaTitle = $(".it").clone();
  var itNavList = $(".it-nav li").clone();
  var itBtnList = $(".it-btn ul").clone();
  panel.append(fnAreaTitle);
  $.each(itNavList, function (indexInArray, valueOfElement) {
    $('<div class="card"></div>')
      .append(
        '<div class="title">' + itNavList.eq(indexInArray).text() + "</div>"
      )
      .append('<ul class="btns">' + itBtnList.eq(indexInArray).html() + "</ul>")
      .appendTo(panel);
  });

  // 自动生成移动端新闻动态
  var newsTitleList = $(".news .selection ul li").clone();
  var newsMoreList = $(".news .selection span").clone();
  var newsContent = $(".news .content ul").clone();
  var newsPic = $(".pic").clone();
  var newsPanel = $(".auto-generate-news-panel");
  newsPanel
    .append(
      '<div class="bg-title"><div>' +
        newsTitleList.eq(0).text() +
        "</div></div>"
    )
    .append(
      $('<div class="card"></div>')
        .append(newsPic)
        .append(newsContent.eq(0))
        .append(newsMoreList.eq(0))
    )
    .append(
      '<div class="bg-title"><div>' +
        newsTitleList.eq(1).text() +
        "</div></div>"
    )
    .append(
      $('<div class="card"></div>')
        .append(newsContent.eq(1))
        .append(newsMoreList.eq(1))
    );
};
