
//排行
    $(function(){
      // 页面加载完成
      $(".paihang li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".ph_con").hide()
        // 默认内容部分是隐藏的
        $(".ph_con:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".paihang li").click(function() {

        $(this).siblings('li').removeClass('on');  // 删除其他兄弟元素的样式

        $(this).addClass('on');    // 添加当前元素的样式

       });

    }); 

//策略简介
    $(function(){
      // 页面加载完成
      $(".stt_tab li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".stdiv").hide()
        // 默认内容部分是隐藏的
        $(".stdiv:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".stt_tab li").click(function() {

        $(this).siblings('li').removeClass('tabli');  // 删除其他兄弟元素的样式

        $(this).addClass('tabli');                            // 添加当前元素的样式

       });

    }); 

//讨论打赏区

    $(function(){
      // 页面加载完成
      $(".behavior li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".discusscmt").hide()
        // 默认内容部分是隐藏的
        $(".discusscmt:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    $(function(){
    $(".behavior li").click(function() {

        $(this).siblings('li').removeClass('bhvli');  // 删除其他兄弟元素的样式

        $(this).addClass('bhvli');                            // 添加当前元素的样式

       });

    }); 
//打赏区
    $(function(){
      // 页面加载完成
      $(".ds li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".dscount").hide()
        // 默认内容部分是隐藏的
        $(".dscount:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    
    $(function(){
    $(".ds li").click(function() {

        $(this).siblings('li').removeClass('dson');  // 删除其他兄弟元素的样式

        $(this).addClass('dson');                            // 添加当前元素的样式

       });

    }); 

//证券策略
    $(function(){
      // 页面加载完成
      $(".tabstrategy li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".sttegy").hide()
        // 默认内容部分是隐藏的
        $(".sttegy:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    
    $(function(){
    $(".tabstrategy li").click(function() {

        $(this).siblings('li').removeClass('ttton');  // 删除其他兄弟元素的样式

        $(this).addClass('ttton');                            // 添加当前元素的样式

       });

    }); 

//持仓
    $(function(){
      // 页面加载完成
      $(".target_prop li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".transaction").hide()
        // 默认内容部分是隐藏的
        $(".transaction:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    
    $(function(){
    $(".target_prop li").click(function() {

        $(this).siblings('li').removeClass('tgpli');  // 删除其他兄弟元素的样式

        $(this).addClass('tgpli');                            // 添加当前元素的样式

       });

    }); 

//我的优惠券
    $(function(){
      // 页面加载完成
      $(".isquan li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".coupons").hide()
        // 默认内容部分是隐藏的
        $(".coupons:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    
    $(function(){
    $(".isquan li").click(function() {

        $(this).siblings('li').removeClass('mcpli');  // 删除其他兄弟元素的样式

        $(this).addClass('mcpli');                            // 添加当前元素的样式

       });

    }); 
//我的消息
    $(function(){
      // 页面加载完成
      $(".mynews li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".message").hide()
        // 默认内容部分是隐藏的
        $(".message:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    
    $(function(){
    $(".mynews li").click(function() {

        $(this).siblings('li').removeClass('newsblock');  // 删除其他兄弟元素的样式

        $(this).addClass('newsblock');                            // 添加当前元素的样式

       });

    }); 
//vip会员
    $(function(){
      // 页面加载完成
      $(".colmb li").click(function(){
        // 点击动作  .t li 
        $(this).addClass("t1").siblings().removeClass("t1")
        // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
        var  index=$(this).index()
        $(".mainitemcontainer").hide()
        // 默认内容部分是隐藏的
        $(".mainitemcontainer:eq("+index+")").show()
        // 动态索引，让点击的li和出现的div内容相对应
      });
    });
    
    $(function(){
    $(".colmb li").click(function() {

        $(this).siblings('li').removeClass('mmvip');  // 删除其他兄弟元素的样式

        $(this).addClass('mmvip');                            // 添加当前元素的样式

       });

    }); 

//开通时长
    $(function(){
       // 页面加载完成
       $(".length li").click(function(){
         // 点击动作  .t li 
         $(this).addClass("t1").siblings().removeClass("t1")
         // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
         var  index=$(this).index()
         $(".v1explain").hide()
         // 默认内容部分是隐藏的
         $(".v1explain:eq("+index+")").show()
         // 动态索引，让点击的li和出现的div内容相对应
       });
     });
    
    $(function(){
    $(".length li").click(function() {

        $(this).siblings('li').removeClass('active');  // 删除其他兄弟元素的样式

        $(this).addClass('active');                            // 添加当前元素的样式

       });

    }); 

    $(function(){
       // 页面加载完成
       $(".length li").click(function(){
         // 点击动作  .t li 
         $(this).addClass("t1").siblings().removeClass("t1")
         // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
         var  index=$(this).index()
         $(".v2explain").hide()
         // 默认内容部分是隐藏的
         $(".v2explain:eq("+index+")").show()
         // 动态索引，让点击的li和出现的div内容相对应
       });
     });
    
    $(function(){
    $(".length li").click(function() {

        $(this).siblings('li').removeClass('active');  // 删除其他兄弟元素的样式

        $(this).addClass('active');                            // 添加当前元素的样式

       });

    }); 

//策略管理
    $(function(){
       // 页面加载完成
       $(".clcur li").click(function(){
         // 点击动作  .t li 
         $(this).addClass("t1").siblings().removeClass("t1")
         // 点击之后 加上一个 t1 样式；这个li的其他同伴li 移除掉 t1的样式
         var  index=$(this).index()
         $(".clcurtable").hide()
         // 默认内容部分是隐藏的
         $(".clcurtable:eq("+index+")").show()
         // 动态索引，让点击的li和出现的div内容相对应
       });
     });
    
    $(function(){
    $(".clcur li").click(function() {

        $(this).siblings('li').removeClass('curon');  // 删除其他兄弟元素的样式

        $(this).addClass('curon');                            // 添加当前元素的样式

       });

    }); 

//客服
    
    $(document).ready(function(){
        $(".qqkf").mouseover(function(){
           $(".qq_tab").show();
        });
        $(".qqkf").mouseout(function(){
           $(".qq_tab").hide();
        });
    });
     
    $(document).ready(function(){
        $(".wxkf").mouseover(function(){
           $(".wx_tab").show();
        });
        $(".wxkf").mouseout(function(){
           $(".wx_tab").hide();
        });
    });