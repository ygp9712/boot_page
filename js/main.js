//  轮播图自动切换大小图
$(function () {
  $(window).on("resize", function () {
    // 1.1 获取窗口高度
    let clientW = $(window).width();
    //console.log(clientW);

    // 1.2 设置临界值
    let isShowBigImage = clientW >= 800;

    //1.3 获取所有的item
    let $allItems = $(".carousel-inner .item")
    //console.log($allItems)

    //1.4 遍历
    $allItems.each(function (index, item) {
      // 1.4.1 取出图片的路径
      let src = isShowBigImage ? $(item).data("lg-im") : $(item).data("sm-im");
      //console.log(src)
      let imgUrl = 'url("' + src + '")';

      // 1.4.2 设置背景
      $(item).css({
        backgroundImage: imgUrl
      })
      
      // 1.4.3 设置img标签
      if(!isShowBigImage) {
        let $img = "<img src='" + src + "'>"
        $(item).empty().append($img);
      } else {
        $(item).empty()
      }
    })
  })
  $(window).trigger("resize");
})

// bootstrp的tooltip
$('#mail').popover({
  trigger : 'hover',//鼠标以上时触发弹出提示框
  html:true,//开启html 为true的话，data-content里就能放html代码了
  content:"<img src='images/erwei.png'>"
});
$('#qq').popover({
  trigger : 'hover',//鼠标以上时触发弹出提示框
  html:true,//开启html 为true的话，data-content里就能放html代码了
  content:"<img src='images/erwei.png'>"
});
$('#wechat').popover({
    trigger : 'hover',//鼠标以上时触发弹出提示框
    html:true,//开启html 为true的话，data-content里就能放html代码了
    content:"<img src='images/erwei.png'>"
});

