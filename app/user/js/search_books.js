function getSearchBook () {
    // 清除曾经搜的书渲染出的多余 DOM
    $("#searchBody .mSearchResultWrap").children().remove();
    $("#searchBody .mSameCategoryWrap").children().remove();
    $(".mWechatRecordWrap").children().remove();
    $(".mTitleHeader:last").hide();
    // 进行搜索
    var keyword = $("input:first").val();
    var searchWay = $("select:first").find("option:selected").val();
    var post_url = "https://wwwxinle.cn/Book/public/index.php/index/Book/searchBook";
    var data = {
        "rows": 10,
        "keyword": keyword,
        "way": searchWay
    };
    $.post(post_url, data, function (data, status) {
        data = JSON.parse(data);
        // 再次读取并填充搜索历史
        getAllRecord();
        if (data["count"] === 0) {
            // 搜索结果不存在
            $(".mTitleHeader:first").show();
            $("#searchBody").hide();
            return;
        }
        // 记录本次搜索信息
        recordSearch(keyword);
        var booksArr = data["books"];
        for (var i = 0; i < booksArr.length; i++) {
            // 显示搜索提示
            $(".mTitleHeader:eq(1)").css("display", "block");
            $(".mTitleHeader:eq(1) span").text("（您本次搜索的是：" + keyword + "）");
            // 将所有数据填充到相应位置
            var templeteDiv = "\
                <div class=\"mBookIntroWrap\">\
                    <a href=\"book_detail.html\">\
                        <div class=\"mBookIntroItemWrap\">\
                            <div class=\"mBookIntroItemPhoto\">\
                                <img src=\"" + booksArr[i]["imgurl"] + "\">\
                            </div>\
                            <div class=\"mBookIntroCharacterWrap\">\
                                <div class=\"mBookIntroItemBookName\">" + booksArr[i]["bName"] + "</div>\
                                <div class=\"mBookIntroItemBookAuthor\">作者：" + booksArr[i]["author"] + "</div>\
                                <div class=\"mBookIntroItemBookCount\">藏书：" + booksArr[i]["count"] + "</div>\
                            </div>\
                        </div>\
                    </a>\
                </div>\
            ";
            $(".mSearchResultWrap:first").append(templeteDiv);
            // 填充同类书籍
            searchSameCategory(booksArr[0]["cId"]);
        }
        $(".mTitleHeader:first").hide();
        $("#searchBody").show();
    });
};

// 获取相关书籍，跟本次搜索有关
function searchSameCategory (cId) {
    var post_url = "https://wwwxinle.cn/Book/public/index.php/index/Book/searchBookByCid";
    var data = {
        "cId": cId,
        "rows": 3
    };
    $.post(post_url, data, function (data, status) {
        data = JSON.parse(data);
        // 本次获取的相关类别的书籍数量(<=3)
        var count = data["count"];
        $(".mTitleHeader:eq(2) span").text("(已加载 " + count + " 条，点击加载更多）");
        // 开始填充数据
        var booksArr = data["books"];
        for (var i = 0; i < booksArr.length; i++) {
            var templeteDiv = "\
                <div class=\"mBookIntroMiniItemWrap\">\
                    <a href=\"book_detail.html\">\
                        <div class=\"mBookMiniPhoto\">\
                            <img src=\"" + booksArr[i]["imgurl"] + "\">\
                        </div>\
                        <div class=\"mBookMiniBookName\">\
                            " + booksArr[i]["bName"] + "\
                        </div>\
                        <div class=\"mBookMiniBookAuthor\">\
                            作者：" + booksArr[i]["author"] + "\
                        </div>\
                    </a>\
                </div>\
            ";
            $(".mSameCategoryWrap:eq(0)").append(templeteDiv);
        }
    });
};

function recordSearch (keyword) {
    var post_url = "https://wwwxinle.cn/Book/public/index.php/index/System/insertRecord";
    var data = {
        "keyword": keyword
    };
    $.post(post_url, data, function (data, status) {
        // 本次搜索信息保存成功
    });
}

function getAllRecord () {
    var get_url = "https://wwwxinle.cn/Book/public/index.php/index/System/getRecord";
    $.get(get_url, function (data, status) {
        // length 用来控制显示出来的条数
        var dataLength = data.length;
        if (dataLength === 0) {
            $(".mTitleHeader:eq(4) span").text("您还没有搜索过，请进行搜索");
            return;
        }
        // 如果数据超过 7 条
        if (dataLength > 7) {
            // 显示“点击加载更多按钮”
            $(".mTitleHeader:last").show();
            dataLength = 7;
        }
        $(".mTitleHeader:eq(4) span").text("(已加载 " + dataLength + " 条搜索记录)");
        // 从最近的搜索历史开始显示 dataLength 个
        for (var i = data.length -1; i > data.length - dataLength; i--) {
            var templeteDiv = "\
                <div class=\"mWechatRecordRightItemWrap\">\
                    <a href=\"search_books.html\">\
                        <div class=\"mWechatRecordRightContent\">" + data[i]["value"] + "</div>\
                    </a>\
                    <div class=\"mWechatRecordRightPhoto\">\
                        <img src=\"images/icorvoh.jpg\">\
                    </div>\
                </div>\
            ";
            $(".mWechatRecordWrap:first").append(templeteDiv);
        }
    });
}

// 获取推荐书籍，跟用户有关
function getRecommderBooks () {
    var get_url = "https://wwwxinle.cn/Book/public/index.php/index/Book/getRecommderBooks";
    $.get(get_url, function (data, status) {
        data = JSON.parse(data);
        // 开始填充数据
        var booksArr = data["books"];
        for (var i = 0; i < booksArr.length; i++) {
            var templeteDiv = "\
                <div class=\"mBookIntroMiniItemWrap\">\
                    <a href=\"book_detail.html\">\
                        <div class=\"mBookMiniPhoto\">\
                            <img src=\"" + booksArr[i]["imgurl"] + "\">\
                        </div>\
                        <div class=\"mBookMiniBookName\">\
                            " + booksArr[i]["bName"] + "\
                        </div>\
                        <div class=\"mBookMiniBookAuthor\">\
                            作者：" + booksArr[i]["author"] + "\
                        </div>\
                    </a>\
                </div>\
            ";
            $(".mSameCategoryWrap:eq(1)").append(templeteDiv);
        }
    });
}

// 读取并填充搜索历史
getAllRecord();
getRecommderBooks();