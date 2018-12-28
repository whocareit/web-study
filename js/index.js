	var btnList = document.getElementsByTagName('li');
    var show1 = document.getElementsByClassName('head1')[0];
    var show2 = document.getElementsByClassName('head2')[0];
    var show3 = document.getElementsByClassName('head3')[0];

	//记录是否按下符号
    var symbolB = false;
    //记录符号
    var symbol = null;
    //记录num1值，num2值,记录结果,保存计算结果
    var aNum = 0.0, bNum = 0.0,fNum = 0.0; t = 0.0, resultCookic = 0.0;

    for (var i = 0, len = btnList.length; i < len; i++) {

        btnList[i].onclick = function () {

            //结果
            if (this.innerText == '=') {
                console.log(aNum , bNum);

                if (symbol == '+') {
                    addition(aNum, bNum);
                } else if (symbol == '-') {
                    subtraction(aNum, bNum);

                } else if (symbol == '*') {
                    multiplication(aNum, bNum);

                } else if (symbol == '/') {
                    division(aNum, bNum);
                }
                console.log(t);
                resultCookic = t;
                t = 0;
                aNum = 0;
                bNum = 0;
                symbolB = false;

            }else{
                //初始化和归零
                if (this.innerText == 'AC') {
                    //初始化所有值
                    result = 0;
                    resultCookic = 0;
                    aNum = 0;
                    bNum = 0;
                    show1.innerText = "";
                    show2.innerText = "";
                    show3.innerText = "";
                    return;
                }else if (this.innerText == '+' ||
                            this.innerText == '-' ||
                            this.innerText == '*' ||
                            this.innerText == '/'
                ) {
                    //如果点击了符号按钮，那么之后输入的值就是b值
                    //记录符号
                    symbol = this.innerText;
                    show3.innerText = symbol;
                    symbolB = true;
                } else {
                    if (symbolB == false) {
                        aNum = aNum + this.innerText;
                        	if(this.innerText == '.'){
                        		show1.innerText = aNum;
                        	}else{
                        		aNum = Number(aNum);
                        		show1.innerText = aNum;
                        	}
//                      console.log(aNum);
//                      show1.innerText = aNum;
                    } else {
                        //如果计算完一次结果，再次点击符号按钮进行计算，就把上一次的计算结果赋值给a
                        if(aNum == 0 ){
                            aNum = resultCookic;
                        }
                       	bNum = bNum + this.innerText;
                        if(this.innerText == '.'){
                        	show2.innerText = bNum;
                        }else{
                        	bNum = Number(bNum);
                        	show2.innerText = bNum;
                        }	
                    }
                }
            }
        }
    }


    /**
     * 加法
     * 精确计算
     */
    function addition(num1, num2) {
    	var r1,r2,m,t;
        try{
        	r1 = num1.toString().split(".")[1].length;
        }catch(e){
        	r1 = 0;
        }
         try{
        	r2 = num1.toString().split(".")[1].length;
        }catch(e){
        	r2 = 0;
        }
        m = Math.pow(10,Math.max(r1,r2));
        t = ((num1*m + num2*m)/m).toFixed(2)
        show3.innerText = t;
    }

    /**
     * 减法
     */
    function subtraction(num1, num2) {
        var r1,r2,m,n,t;
        try{
        	r1 = num1.toString().split(".")[1].length;
        }catch(e){
        	r1 = 0;
        }
         try{
        	r2 = num1.toString().split(".")[1].length;
        }catch(e){
        	r2 = 0;
        }
        m = Math.pow(10,Math.max(r1,r2));
        n = (r1 >= r2)? r1:r2; //动态控制精确长度
        
        t = ((num1*m - num2*m)/m).toFixed(2)
        show3.innerText = t;
    }

    /**
     * 乘法
     */
    function multiplication(num1, num2) {
        var m = 0; var s1,s2,t;
        s1 = num1.toString();
        s2 = num2.toString();
        try{
        	m += s1.split(".")[1].length;
        }catch(e){	
        }
         try{
        	m += s2.split(".")[1].length;
        }catch(e){	
        }
        t = Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
        show3.innerText = t;
    }

    /**
     * 除法
     */
    function division(num1, num2) {
         var m = 0; var s1,s2,t;
        s1 = num1.toString();
        s2 = num2.toString();
        try{
        	m += s1.split(".")[1].length;
        }catch(e){	
        }
         try{
        	m += s2.split(".")[1].length;
        }catch(e){	
        }
        t = (Number(s1.replace(".",""))/Number(s2.replace(".","")))/Math.pow(10,m);
        show3.innerText = t;
    }