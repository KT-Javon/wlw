window.onload=function(){
      var listArr = document.querySelector('.list');//列表
      var oLi = listArr.getElementsByTagName('li');//获取行
      var checkAll = document.getElementById('checkAll')//全选
      var checkOne = document.querySelectorAll('.checkone');//单选
      var priceOne = document.querySelectorAll('.priceone'); //单价
      var goodsNum = document.querySelectorAll('.numbox'); //单个商品数量
      var reduceBtn = document.querySelectorAll('.reduce'); //数量减
      var plusBtn = document.querySelectorAll('.plus');//数量加
      var subtotalPrice = document.querySelectorAll('.subtotal'); //小计
      var deleteBtn = document.querySelectorAll('.delete'); //单个删除
      var removesBtn = document.getElementById('removes');//多个删除
      var checkNum = document.getElementById('checknum'); //件数
      var allPrice = document.getElementById('allPrice');  //总价
                
        total_price();
        var num;
        var price_all = 0;
        var idArry = [];
              
        //小计
        function total_price(){
            for(var i=0;i<priceOne.length;i++){ 
                var oneNum = priceOne[i].parentNode.parentNode.getElementsByClassName('numbox')[0].value;
                var onePrice = priceOne[i].parentNode.parentNode.getElementsByClassName('priceone')[0].innerHTML;
                var oneTotal = priceOne[i].parentNode.parentNode.getElementsByClassName('subtotal');
                oneTotal[0].innerHTML = parseInt(oneNum)*parseFloat(onePrice);
            }
        }
              
        //数量减
        for(var i=0;i<reduceBtn.length;i++){
            reduceBtn[i].onclick = function(){
                num = parseInt(this.parentNode.parentNode.getElementsByClassName('numbox')[0].value);
                if(num<=1){
                    this.disabled = true;
                    return false;
                }
                num --;
                this.parentNode.parentNode.getElementsByClassName('numbox')[0].value = num;
                total_price();
                if(this.parentNode.parentNode.getElementsByClassName('checkone')[0].checked){
                    allPrice.innerHTML = parseFloat(allPrice.innerHTML)-parseFloat(this.parentNode.parentNode.getElementsByClassName('priceone')[0].innerHTML);
                }
            }
        }
        
        //数量加
        for (var i=0;i<plusBtn.length;i++) {
            plusBtn[i].onclick = function(){
                num = parseInt(this.parentNode.parentNode.getElementsByClassName('numbox')[0].value);
                num ++;
                if(num>1){
                    this.parentNode.parentNode.getElementsByClassName('reduce')[0].disabled = false;
                }
                this.parentNode.parentNode.getElementsByClassName('numbox')[0].value = num;
                total_price();
                if(this.parentNode.parentNode.getElementsByClassName('checkone')[0].checked){
                    allPrice.innerHTML = parseFloat(allPrice.innerHTML)+parseFloat(this.parentNode.parentNode.getElementsByClassName('priceone')[0].innerHTML);
                }
            }
        }
        
        //总价
        function priceAll(){
            for(var i=0;i<checkOne.length;i++){
                if(checkOne[i].checked){
                    price_all += parseFloat(checkOne[i].parentNode.parentNode.getElementsByClassName('subtotal')[0].innerHTML);
                    allPrice.innerHTML = price_all;
                }else{price_all = 0;}
            }
            return price_all;
        }
              
        //删除数组元素
        function remove(arr,val) {
            for(var i=0; i<arr.length; i++) {
                if(arr[i] == val) {
                    arr.splice(i, 1);
                    break;
                }
            }
            return arr;
        };
        //单选
        for (var i=0;i<checkOne.length;i++) {
            checkOne[i].index = i;
            checkOne[i].onclick = function(e){
                var count = 0;
                var dataId = this.parentNode.parentNode.getAttribute('data-id');
                if(this.checked){
                    allPrice.innerHTML = parseFloat(allPrice.innerHTML)+parseFloat(this.parentNode.parentNode.getElementsByClassName('subtotal')[0].innerHTML);
                    checkNum.innerHTML = parseInt(checkNum.innerHTML)+1;
                    idArry.push(dataId);
                }else{
                    allPrice.innerHTML = parseFloat(allPrice.innerHTML)-parseFloat(this.parentNode.parentNode.getElementsByClassName('subtotal')[0].innerHTML);
                    checkNum.innerHTML = parseInt(checkNum.innerHTML)-1;
                    idArry = remove(idArry,dataId);
                }
                console.log(idArry)
                for (var j = 0; j < checkOne.length; j++) {
                    if(checkOne[j].checked==true){
                        count++;
                    }
                    else{count-1}
                } 
                if(count == oLi.length){checkAll.checked = true;}
                if(!this.checked){
                    checkAll.checked = false;
                    price_all = 0;
                }
            }
        }
        setTimeout(function() {  //延时自动触发全选事件
            // IE
            if(document.all) {
                checkAll.click();
            }
            // 其它浏览器
            else {
                var e = document.createEvent("MouseEvents");
                e.initEvent("click", true, true);
                checkAll.dispatchEvent(e);
            }
        }, 100);
        //全选
        checkAll.onclick = function(){
            for(var i=0;i<checkOne.length;i++){
                checkOne[i].checked=this.checked;
            }
            if(this.checked){
                priceAll();
                checkNum.innerHTML = checkOne.length;
                for (var i = 0; i < oLi.length; i++) {
                    idArry.push(oLi[i].getAttribute('data-id'))
                }
            }
            else{
                priceAll();
                allPrice.innerHTML = 0;
                price_all = 0;
                checkNum.innerHTML = 0;
                idArry = [];
            }
            console.log(idArry)
        }
        
        //单删
        for(var i=0;i<deleteBtn.length;i++){
            deleteBtn[i].onclick = function(){
                var delets = confirm('确定删除所选商品吗？'); //弹出确认框
                var dataId = this.parentNode.getAttribute('data-id');
                if (delets) {
                    this.parentNode.className = 'list_act';
                    console.log(this.parentNode.className)
                    var that = this;
                    setTimeout(function(){
                        listArr.removeChild(that.parentNode); // 删除相应节点
                    },350)
                    if(this.parentNode.getElementsByClassName('checkone')[0].checked){
                        allPrice.innerHTML = parseFloat(allPrice.innerHTML)-parseFloat(this.parentNode.getElementsByClassName('subtotal')[0].innerHTML);
                        checkNum.innerHTML = parseInt(checkNum.innerHTML)-1;
                        if(oLi.length==0){
                            checkAll.checked = false;
                        }
                    }
                }
                if(idArry.indexOf(dataId)!=-1){
                    idArry = remove(idArry,dataId);
                }
                console.log(idArry)
                if(idArry == ''){checkAll.checked = false;}
            }
        }
              
        //多删
        removesBtn.onclick = function(){
            if (checkNum.innerHTML != 0) {
                var delets = confirm('确定删除所选商品吗？'); //弹出确认框
                if (delets) {
                    for (var i = 0; i < oLi.length; i++) {
                        if (oLi[i].querySelectorAll('.checkone')[0].checked) {
                            oLi[i].parentNode.removeChild(oLi[i]); // 删除相应节点
                            i--; //回退下标位置
                        }
                    }
                    allPrice.innerHTML = 0;
                    checkNum.innerHTML = 0;
                    checkAll.checked = false;
                    idArry = [];
                }
            } else {
                alert('请选择商品！');
            }
        }
              
        //数目框输入事件
        for(var i=0;i<goodsNum.length;i++){
            goodsNum[i].onkeyup = function(){
                var val = parseInt(this.value);
                if (isNaN(val) || val <= 0) {
                    val = 1;
                }
                if (this.value != val) {
                    this.value = val;
                }
                total_price();
                priceAll()
            }
        }
    }