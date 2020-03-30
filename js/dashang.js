
        //减法
        function minus(index) {
            //获取当前数量的值
            var amounts=document.getElementsByName("amount");
    
            //得到第一个amount的元素的value属性的值
            var count=parseInt(amounts[index].value); //数量加1
    
            if (count<=1){
                alert("不能再减了，快没了！！");
            } else {
                //得到第一个amount的元素的value属性的值
                var count=parseInt(amounts[index].value)-1; //数量加1
    
                //重新把count的值绑定在数量文本框里
                amounts[index].value=count;
                var prices=document.getElementsByName("price");
                var price=parseFloat(prices[index].value);
                //乘以Math.pow(10,2)的原因为避免失真
                var totalMoney=((price*Math.pow(10,2))*count)/Math.pow(10,2);
    
                document.getElementById("price"+index).innerHTML=""+totalMoney;
            }
    
            total();
    
        }
    
        //加法
        function plus(index) {
    
            //获取当前数量的值
            var amounts=document.getElementsByName("amount");
    
            //得到第一个amount的元素的value属性的值
            var count=parseInt(amounts[index].value)+1; //数量加1
    
            //重新把count的值绑定在数量文本框里
            amounts[index].value=count;
    
            //当前操作端口的价格也要重新计算
            //得到当前端口的单价
            var prices=document.getElementsByName("price");
            var price=parseFloat(prices[index].value);
            //乘以Math.pow(10,2)的原因为避免失真
            var totalMoney=((price*Math.pow(10,2))*count)/Math.pow(10,2);
    
            //把当前价格显示在文本中
            document.getElementById("price"+index).innerHTML=""+totalMoney;
    
            total();
        }


// function clickPrice(type, idx) {
//       console.log('clickPrice', type)
//       idx = 0;
//                let curPrice;
//                let unitPrice = 88;
//                let num = document.getElementsByClassName("num")[idx].innerHTML;
//                let newNum;
//                switch(type) {
//                    case "add": 
//                        newNum = ++num;
            
//                        curPrice = unitPrice * newNum;
//                        break;
//                    case "reduce": 
//                if(Number(num) > 0 ) {
//                   newNum = --num;
//                   curPrice = unitPrice * newNum;
//                   break;

//                }            
//                }
//                document.getElementsByClassName("num")[idx].innerHTML= newNum || num;
//       if(curPrice) {
//          document.getElementsByClassName("curPrice")[idx].innerHTML = curPrice;

//       }         
// }