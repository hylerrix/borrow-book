// 加载从 html 里抽离出来的导航栏

function load_nav_content () {
    var mNavWrap = document.getElementsByClassName("mNavWrap")[0];
    mNavWrap.innerHTML = "\
        <a href=\"books_navigation.html\">\
            <div class=\"mNavInnerWrap\">\
                <img class=\"mNavInnerLogo\" src=\"#\">\
                <div class=\"mNavInnerTitle\">图书导航</div>\
            </div>\
        </a>\
        \
        <a href=\"search_books.html\">\
            <div class=\"mNavInnerWrap\">\
                <img class=\"mNavInnerLogo\" src=\"#\">\
                <div class=\"mNavInnerTitle\">书库搜书</div>\
            </div>\
        </a>\
        \
        <a href=\"borrow_cart.html\">\
            <div class=\"mNavInnerWrap\">\
                <img class=\"mNavInnerLogo\" src=\"#\">\
                <div class=\"mNavInnerTitle\">借阅书车</div>\
            </div>\
        </a>\
        \
        <a href=\"user_center.html\">\
            <div class=\"mNavInnerWrap\">\
                <img class=\"mNavInnerLogo\" src=\"#\">\
                <div class=\"mNavInnerTitle\">个人中心</div>\
            </div>\
        </a>\
    ";
};

// 填充导航栏图片并按当前条件电量图片和下方文字
function fill_nav_img () {
    var mNavInnerLogo = document.getElementsByClassName("mNavInnerLogo");
    var imgSrc = [
        /* 0.图书导航(未点亮) */ "data:image/png;base64,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",
        /* 1.书库搜书(未点亮) */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAACYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJigirPYAAAACXRSTlMA8+eFY+RJ8GQsXby7AAAAa0lEQVQ4y2OAAkcHOEYBmgFwjAJmToBhguJJM4EALg4CahCjMcQnQYzAEJ8JNRrNfE5C4ijuRxVvd0BghDgyoIm44UwYEEYRl4SLT8ShfjIu8weF+Ki/hpa/sIpjAmg+RQeToPkaHYQxMAAA3q3FVFclU74AAAAASUVORK5CYII=",
        /* 2.借阅书车(未点亮) */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAD1BMVEUAAACYmJiYmJiYmJiYmJgZgX/CAAAABHRSTlMA5klKqU6WSgAAAGpJREFUOMtjoC5gEnGBACFUcUYXKHBEFWdxgQF0cShNdXFFF2xAiEEEhY9wrgt2wODigMX7LAMvDo4BRwUUcUQMCMDEcfsLOUYoEXdAjmEHAu5BiDOD3W8waMJz0ItjBzjTsyFWcWEGKgEAS6NcEQjPCBsAAAAASUVORK5CYII=",
        /* 3.个人中心(未点亮) */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAb1BMVEUAAACYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJjZIJHxAAAAJHRSTlMA+QYIE+W3jsnt3WxaT9guHRjFVBDOh5p5ZUpyIPPBqYEnJqswvp1IAAACEklEQVRIx51Wi3KjMAy0HQdIwyOUdx60Sf3/33hr7o61AuGu1UyGsSXLK2ktRT1LncVRftD6kEdxVqtNMWmkXSA6Ss1L491l7xayv+zWrc9vkz5pq8IaY4uqTaaNt/Oa627y1Z/CzVM/3dctLii9p8NxgdQcD1A0pdy9eiBfdg2j/fKAruJSWOujeiFHDftTgLuBdaZeyvkGPMTfbVpDMo1458MARyTreGBy/gMFwD9E3P241/uxD8P7APzfcC7IoA0CifVfCsTEa5HPy5TZvYBiG0dp6GZADf3pFF/DsvhyvaelKtN3z4hZ472m+EbO9XQeTwVgvuNZ0zsXgd/YO7FeWA0hAH2dVVjUKsONdP4JJIoCPJ/zAjAzf3sr9KmipOHpFtA89Ip6xFOGPEWO50XlwefOFdQDuqCvC9aFc7kCe+z/ebd+gfPmH9h5lab5RmZoTjAbeScYhrpRVYbKRErOGHImTCTLtMFIlokk2OA7STBTjHJvc+2N8/bul4JiksCQLHGUJFOCwM/P4zE6KeP96XnsgsdX3aYuPRS1qothat63Knh88mkP3rgrSZnOHxj4tEXjqKDMCxF2kcNBxcYRtKUHkCRWSbEJ8DzYltj0Rvi2ywYM/+Pc9NhSW/yIhFJoKHxLlQ3bCT5J1rFhB+PA3VfHQcRxwJw128Pm56NsOShrY2oxKL8zhn8+5L/5F+IXCKpQ7CGTrWQAAAAASUVORK5CYII=",
        /* 4.图书导航(点亮)   */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAFVBMVEUAAAAziP8ziP8ziP8ziP8ziP8ziP/lH9NBAAAABnRSTlMA5xlJtuSz8J1bAAAAYElEQVQ4y2OgLmAWS4MAYVRxxjQoSEQVZ0uDAXRxKE11ccM0bECYQQyFj3BuGnYwaMVTFICeZHLDEE8C+14NLk4QgHSSLw63NwES/vjdg+n+QROeQ1UcR3rGkf6DGagEAFDDDo4sv1r4AAAAAElFTkSuQmCC",
        /* 5.书库搜书(点亮)   */ "data:image/png;base64,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",
        /* 6.借阅书车(点亮)   */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAFVBMVEUAAAAziP8ziP8ziP8ziP8ziP8ziP/lH9NBAAAABnRSTlMA5xlJtuSz8J1bAAAAYElEQVQ4y2OgLmAWS4MAYVRxxjQoSEQVZ0uDAXRxKE11ccM0bECYQQyFj3BuGnYwaMVTFICeZHLDEE8C+14NLk4QgHSSLw63NwES/vjdg+n+QROeQ1UcR3rGkf6DGagEAFDDDo4sv1r4AAAAAElFTkSuQmCC",
        /* 7.个人中心(点亮)   */ "data:image/png;base64,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",
    ];

    // 默认每个图标不点亮
    for (var i = 0; i < mNavInnerLogo.length; i++) {
        mNavInnerLogo[i].src = imgSrc[i];
    }

    // 寻找需要点亮的导航图标的关键字 currentPageName
    var pathName = window.location.pathname;
    var pathArr = pathName.split("/");
    var currentPageName = "";
    for (var i = 0; i < pathArr.length; i++) {
        if (pathArr[i].indexOf(".html") != -1) {
            // 找到了当前页面的名字
            currentPageName = pathArr[i];
            break;
        }
    }

    // 导航栏的四个页面地址
    var navSrcArr = [
        "books_navigation.html",
        "search_books.html",
        "borrow_cart.html",
        "user_center.html"
    ];
    var activeIndex = navSrcArr.indexOf(currentPageName);
    if (activeIndex != -1) {
    	// 寻找到将要点亮的图片位置，点亮图片和下方文字
    	mNavInnerLogo[activeIndex].src = imgSrc[parseInt(imgSrc.length / 2) + activeIndex];
    	var mNavInnerTitle = document.getElementsByClassName("mNavInnerTitle")[activeIndex];
    	mNavInnerTitle.className += " mNavInnerTitleAvtive";
    };
};

// 轮播新书推荐, index 是这一张图片的位置

function nextSlid (index) {
    var imgList = document.getElementsByTagName("img");
    var nextSlidBtn = document.getElementById("nextSlidBtn");
    
    // 隐藏这一张图片
    imgList[index].style.display = "none";
    // 显示下一张图片，超出范围则显示第一张
    if (index < imgList.length - 5) {
        imgList[index + 1].style.display = "block";
        // console.log(nextSlidBtn.onclick);
        nextSlidBtn.onclick = function () {
            nextSlid(index + 1);
        }
    } else {
        imgList[0].style.display = "block";
        // console.log(nextSlidBtn.onclick);
        nextSlidBtn.onclick = function () {
            nextSlid(0);
        }
    }
    // console.log(imgList);
}