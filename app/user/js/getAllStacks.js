function getAllStacks () {
    $.get("https://wwwxinle.cn/Book/public/index.php/index/Book/getAllStacks", function(data, status){
        // 将获取到的数据 json 化
        data = JSON.parse(data);
        
        // 隐藏“正在加载”的提示
        $("#loading").css("display", "none");

        // 将获取到的数据动态循环填充

        for (var i = 0; i < data.length; i++) {
            // i 来跟踪每个书库的信息
            var stackItem = data[i].categories;
            var cateNum = data[i].categories.length;
            // 获取书库名
            var cateName = data[i].sName;

            var templateDiv = "\
                <div class=\"mStackWrap\">\
                    <div class=\"mStackSideBar\">" + cateName + "</div>\
                    <div class=\"mStackCategoriesWrap\">";

            for (var j =0; j < cateNum; j++) {
                // j 来跟踪每个具体类别的信息
                templateDiv += "\
                        <a class=\"mStackCategoriesLink\" href=\"categories_detail.html\">\
                            <div class=\"mStackCategorie\">"
                                + stackItem[j].cName + "\
                            </div>\
                        </a>";
            }

            templateDiv += "\
                   </div>\
                </div>";

            $(".mAllStackWrap").append(templateDiv);
        }

    });
}

getAllStacks();
