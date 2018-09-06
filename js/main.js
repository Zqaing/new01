window.onload = function () {

    //网站导航,登录,注册
    //获取购物车
    var site_topbar_right = document.querySelector('.site-topbar .right-1');
    var site_topbar_right_img = document.querySelector('.site-topbar .right-1 img');
    var site_topbar_hide = document.querySelector('.site-topbar .hide');

    //console.log(site_topbar_right_img.src);
    //移入购物车
    site_topbar_right.onmouseover = function () {
        var img_src = site_topbar_right_img.getAttribute('src');
        site_topbar_right_img.src = img_src.replace(/8/,'6');
        site_topbar_hide.style.height = '100px';
        site_topbar_hide.style.opacity = 1;
        site_topbar_hide.style.lineHeight = '100px';

    }
    //移出购物车
    site_topbar_right.onmouseout = function () {
        var img_src = site_topbar_right_img.getAttribute('src');
        site_topbar_right_img.src = img_src.replace(/6/,'8');

        site_topbar_hide.style.lineHeight = '20px';
        site_topbar_hide.style.height = '20px';
        site_topbar_hide.style.opacity = 0;
    }
    //----------------------------------------
    //网站头部导航
    var site_header_form= document.querySelector('.site-header form');
    var site_header_submit = document.querySelector('.site-header #submit')
    var site_header_search = document.querySelector('.site-header #search');
    var site_header_span= document.querySelector('.site-header .search-hot-word');
    var site_header_list= document.querySelector('.site-header .keywordList')
    //console.log(site_header_list);


    //鼠标移入form调用函数
    function site_header_mover(){
        site_header_submit.style.borderColor = '#757575';
        site_header_search.style.borderColor = '#757575';
    }
    //鼠标移出form调用函数
    function site_header_mout(){
        site_header_submit.style = '';
        site_header_search.style = '';
    }
    //鼠标移入form
    site_header_form.addEventListener('mouseover',site_header_mover);
    //鼠标移除form
    site_header_form.addEventListener('mouseout', site_header_mout);
    //输入框获取焦点
    site_header_search.onfocus = function () {
        site_header_form.removeEventListener('mouseover',site_header_mover);
        site_header_form.removeEventListener('mouseout', site_header_mout);
        site_header_span.style.display = 'none';
        site_header_list.style.display = 'block';
        site_header_submit.style.borderColor = '#ff6700';
        site_header_search.style.borderColor = '#ff6700';
    }
    //输入框失去焦点
    site_header_search.onblur = function () {
        site_header_form.addEventListener('mouseover',site_header_mover);
        site_header_form.addEventListener('mouseout', site_header_mout);
        site_header_span.style = '';
        site_header_list.style = '';
        site_header_submit.style = '';
        site_header_search.style = '';
    }


    //-----------------------------------------------
    //网站头部导航下拉菜单
    var site_header= document.querySelector('.site-header');
    var site_header_navlis= document.querySelectorAll('.site-header .nav li');
    var site_header_down= document.querySelector('.site-header .drop-down');
    var site_header_dduls= document.querySelectorAll('.site-header .drop-down ul');

    var site_navlis_len = site_header_navlis.length;
    //console.log(site_header_navlis);

    //鼠标移入导航栏
    function site_header_mmover(index) {
        for(var j = 0; j < site_navlis_len - 2; j++){
            site_header_dduls[j].style = '';
        }
        site_header.style.borderColor = '#dcdcdc';
        site_header_down.style.display =  'block';
        site_header_dduls[index].style.display = 'block';

    }

    //鼠标移出导航栏
    function site_header_mmout() {
        site_header.style.borderColor = '';
        site_header_down.style.display =  'none';
        site_header_dduls.style = '';
    }

    //鼠标移入导航栏出现下划菜单
    for(var i = 0;i < site_navlis_len - 2; i++){
        site_header_navlis[i].index = i;

        site_header_navlis[i].onmouseover = function () {
            site_header_mmover(this.index);
        }
        /*site_header_down.onmouseover = function () {
            site_header_mmover(this.index);
        }*/
        site_header_navlis[i].onmouseout = function () {
            site_header_mmout();
        }
       /* site_header_down.onmouseout = function () {
            site_header_mmout();
        }*/
    }


    //---------------------------------------

    //网站竖向副导航,轮播图
    var home_slider_cirlis = document.querySelectorAll('.home-hero-slider .circle li');
    var home_slider_bpiclis = document.querySelectorAll('.home-hero-slider .bpic li');

    var home_hero_left = document.querySelector('.home-hero-slider .left');
    var home_hero_right = document.querySelector('.home-hero-slider .right');
    
    
    var home_slider_cirlis_len = home_slider_cirlis.length;


    //console.log(home_hero_right);
    
    
    //轮播图控制封装函数
    function command(index) {
    	for (var j = 0; j < home_slider_cirlis_len; j++) {
                home_slider_cirlis[j].className = '';
                home_slider_bpiclis[j].style.opacity = '0';
                home_slider_bpiclis[j].style.zIndex = '1';
            }
            home_slider_bpiclis[index].style.opacity = '1';
            home_slider_bpiclis[index].style.zIndex = '30';
            home_slider_cirlis[index].className = 'active';
    }
    
	//轮播图小点控制
    for(var i = 0; i < home_slider_cirlis_len; i++){
        home_slider_cirlis[i].index = i;
        home_slider_cirlis[i].onclick = function () {
            command(this.index);
            clearInterval(autor);
        }    
    }
    
    
   	var n = 0;
   	//轮播图自动轮播函数
   	function auto() {
   		n++;
   		if(n > 4){
   			n = 0;
   		}
   		command(n);   		
   	}
   	//自动轮播
   	var autor = setInterval(auto,3000);   	
   	//轮播图左右控制
   	//左控制
   	home_hero_left.onclick = function() {  
   		n--;   		
	    if(n< 0){
	    	n = 4;
	    } 
	    command(n);
	    clearInterval(autor);
   	}	
	//右控制
	home_hero_right.onclick = function() {
		n++;   		
	    if(n > 4){
	    	n = 0;
	    } 
	    command(n);
	    clearInterval(autor);
	}
    
	
	
	//轮播图左侧副导航
	var home_lis= document.querySelectorAll('.home-hero-slider .home>li');
	var home_select_lis = document.querySelectorAll('.home-hero-slider .home-select>li');
	
	
	var home_lis_len = home_lis.length;
	
	console.log(home_lis_len);
	
	for(var i = 0; i < home_lis_len; i++){
		home_lis[i].index = i;
		home_lis[i].onmouseover = function () {
			//console.log(this.index);
			for (var j = 0; j < home_lis_len; j++){
				home_select_lis[j].style.display = '';
			}
			home_select_lis[this.index].style.display = 'block';
		}
		home_lis[i].onmouseout = function () {
			home_select_lis[this.index].style.display = '';
		}
	}
	
	
	
	//小米闪购倒计时
	var e_h = document.querySelector('#e-h');
	var e_m = document.querySelector('#e-m');
	var e_s = document.querySelector('#e-s');
	var time = 1800;
	//console.log(e_h);
	//console.log(e_m);
	//console.log(e_s);
	var timer = setInterval(updateTime,1000);
	
	function updateTime() {
		time--;
		//console.log(time);
		var h = parseInt(time / 3600) ;
		var m = parseInt(time / 60 % 60);
		var s = parseInt(time % 60);
		
		if(time < 0){
			clearInterval(timer);
		}
		
		h = h < 10 ? '0' + h : h;
		m = m < 10 ? '0' + m : m;
		s = s < 10 ? '0' + s : s;
		
		e_h.innerHTML = h;
		e_m.innerHTML = m;
		e_s.innerHTML = s;
	}
	
	
	
	//小米闪购右侧	
	// 手动轮播 - 左按钮
	function slipLiLeftC(right, ul, num, leftBtn, rightBtn) {
		// 得到li 的宽度 + 外边距
		var liWidth = ul.children[0].offsetWidth + parseInt(getComputedStyle(ul.children[0]).marginRight + parseInt(getComputedStyle(ul.children[0]).marginLeft));
		// 计算ul偏移量
		right -= liWidth * num;
		// 判断是否等于0(超出最左侧)
		if(right <= 0){
			right = 0;
			leftBtn.style.color = '#ccc';
			leftBtn.id = 'null';
		}
		rightBtn.style.color = '#000';
		rightBtn.id = 'btn-hover';
		ul.style.right = right + 'px';
		//返回偏移量
		return right;
	}
	// 手动轮播 - 右按钮
	function slipLiRightC(right, ul, num, leftBtn, rightBtn) {
		// 得到li 的宽度 + 外边距
		var liWidth = ul.children[0].offsetWidth + parseInt(getComputedStyle(ul.children[0]).marginRight + parseInt(getComputedStyle(ul.children[0]).marginLeft));
		// 计算ul偏移量
		right += liWidth * num;
		// 判断是否超出最右侧
		if(right >= liWidth * ul.children.length - liWidth * num){
			right = liWidth * ul.children.length - liWidth * num;
			rightBtn.style.color = '#ccc';
			rightBtn.id = 'null';
		}
		leftBtn.style.color = '#000';
		leftBtn.id = 'btn-hover';
		ul.style.right = right + 'px';
		//返回偏移量
		return right;
	}
	
	var snatch_title_left= document.querySelector('.snatch .title .left');
	var snatch_title_right = document.querySelector('.snatch .title .right');
	
	var snatch_list_ul= document.querySelector('.snatch .list ul');
	//console.log(snatch_list_ul);
	
	var ulRight = parseInt(snatch_list_ul.style.right);
	
	console.log(ulRight);
	snatch_title_right.onclick = function() {
		// 偏移量 =  函数名(偏移量 ,需要偏移的ul,显示的li数量,左按钮,右按钮
			//console.log('you');
		ulRight = slipLiRightC(ulRight, snatch_list_ul, 4, snatch_title_left, snatch_title_right);
	}
	snatch_title_left.onclick = function() {
		//console.log('zuo');
		ulRight = slipLiLeftC(ulRight, snatch_list_ul, 4, snatch_title_left, snatch_title_right);

	}
	
	
	
	//----------------------------------------------------------
	//tab切换函数封装
	//1.tab切换的按钮
	//2.要变化的ul
	//3.tab切换的长度
	//4.当前要切换的tab
	function tabs(a,b,c,d){
		for(var j = 0; j < c; j++){
				a[j].className = '';
				b[j].style.display = '';
			}
			//console.log(this.index);
			a[d].className = 'active';
			b[d].style.display = 'block';
	}
	
	//家电tab切换
	var homeelec_top_lis = document.querySelectorAll('#homeelec .container .top ul li');
	var homeelec_box_uls = document.querySelectorAll('#homeelec .container .box ul');
	
 	var homeelec_top_lis_len = homeelec_top_lis.length;
	//console.log(homeelec_top_lis);
	
	//家电tab切换
	for(var i = 0; i < homeelec_top_lis_len; i++){
		homeelec_top_lis[i].index = i;
		//console.log[this.index];
		homeelec_top_lis[i].onmouseover = function() {
			//tab切换的按钮
			//要变化的ul
			//tab切换的长度
			//当前要切换的tab
			tabs(homeelec_top_lis, homeelec_box_uls,homeelec_top_lis_len,this.index);
		}
	}
	
	//智能tab切换
	var smart_top_lis = document.querySelectorAll('#smart .container .top ul li');
	var smart_box_uls = document.querySelectorAll('#smart .container .box ul');
	
	var smart_top_lis_len = smart_top_lis.length;
	
	for( var i = 0; i < smart_top_lis_len; i++){
		smart_top_lis[i].index = i;
		smart_top_lis[i].onmouseover = function () {
			tabs(smart_top_lis ,smart_box_uls, smart_top_lis_len, this.index);
		}
	}
	
	
	//搭配tab切换
	var match_top_lis = document.querySelectorAll('#match .container .top ul li');
	var match_box_uls = document.querySelectorAll('#match .container .box ul');
	
	var match_top_lis_len = match_top_lis.length;
	
	for(var i = 0; i < match_top_lis_len; i++){
		match_top_lis[i].index = i;
		match_top_lis[i].onmouseover = function () {
			tabs(match_top_lis, match_box_uls, match_top_lis_len, this.index);
		}
	}
	
	
	//配件tab切换
	var accessories_top_lis = document.querySelectorAll('#accessories .container .top ul li');
	var accessories_box_uls = document.querySelectorAll('#accessories .container .box ul');
	
	var accessories_top_lis_len = accessories_top_lis.length;
	
	for(var i = 0; i < accessories_top_lis_len; i++){
		accessories_top_lis[i].index = i;
		accessories_top_lis[i].onmouseover = function () {
			tabs(accessories_top_lis, accessories_box_uls, accessories_top_lis_len, this.index);
		}
	}
	
	
	//周边tab切换
	var around_top_lis = document.querySelectorAll('#around .container .top ul li');
	var around_box_uls = document.querySelectorAll('#around .container .box ul');
	
	var around_top_lis_len = around_top_lis.length;
	
	for(var i = 0; i < around_top_lis_len; i++){
		around_top_lis[i].index = i;
		around_top_lis[i].onmouseover = function () {
			tabs(around_top_lis, around_box_uls, around_top_lis_len, this.index);
		}
	}
	
	//为你推荐
	
	var recommend_left = document.querySelector('#recommend .left');
	var recommend_right = document.querySelector('#recommend .right');
	
	var recommend_ul = document.querySelector('#recommend .re-box ul');
	var re_Right = parseInt(recommend_ul.style.right);
	console.log(re_Right);
	
	recommend_right.onclick = function() {
		ulRight = slipLiRightC(re_Right, recommend_ul, 5, recommend_left, recommend_right);
	}
	recommend_left.onclick = function() {
		ulRight = slipLiLeftC(re_Right, recommend_ul, 5, recommend_left, recommend_right);

	}
	
	
	// 指示点点击事件
	function contentLiC(num, li, fig) {
		for(var i = 0; i < li.length; i++) {
			li[i].className = '';
			fig[i].style = '';
		}
		li[num].className = 'content-pointer-active';
		fig[num].style.opacity = '1';
		return num;
	}

	
	// 内容 小轮播
	var contentLi = document.querySelectorAll('.content>ul>li');
	var num0 = 0;
	var num1 = 0;
	var num2 = 0;
	var num3 = 0;
	// content右按钮
	function contentRight(num, li, fig) {
		++num;
		if(num >= li.length) {
			num = li.length - 1;
		}
		for(var i = 0; i < li.length; i++) {
			li[i].className = '';
			fig[i].style = '';
		}
		li[num].className = 'content-pointer-active';
		fig[num].style.opacity = '1';
		return num;
	}
	// content左按钮
	function contentLeft(num, li, fig) {
		--num;
		if(num <= 0) {
			num = 0;
		}
		for(var i = 0; i < li.length; i++) {
			li[i].className = '';
			fig[i].style = '';
		}
		li[num].className = 'content-pointer-active';
		fig[num].style.opacity = '1';
		return num;
	}

	for(var i = 0; i < contentLi.length; i++) {
		contentLi[i].index = i + 1;
		contentLi[i].onmouseover = function() {
			var bookFig = document.querySelectorAll('.content>ul>li:nth-child(' + this.index + ') figure');
			var bookLi = document.querySelectorAll('.content>ul>li:nth-child(' + this.index + ') ul li');
			var bookLeft = document.querySelector('.content>ul>li:nth-child(' + this.index + ') .left-button');
			var bookRight = document.querySelector('.content>ul>li:nth-child(' + this.index + ') .right-button');
			bookLeft.style.opacity = '1';
			bookRight.style.opacity = '1';
			switch(this.index) {
				case 1:
					bookRight.onclick = function() {
						num0 = contentRight(num0, bookLi, bookFig);
					}
					bookLeft.onclick = function() {
						num0 = contentLeft(num0, bookLi, bookFig);
					}
					for(var j = 0;j<bookLi.length;j++){
						bookLi[j].index = j;
						bookLi[j].onclick = function(){
							num0 = contentLiC(this.index,bookLi,bookFig);
						}
					}
					break;
				case 2:
					bookRight.onclick = function() {
						num1 = contentRight(num1, bookLi, bookFig);
					}
					bookLeft.onclick = function() {
						num1 = contentLeft(num1, bookLi, bookFig);
					}
					for(var j = 0;j<bookLi.length;j++){
						bookLi[j].index = j;
						bookLi[j].onclick = function(){
							num1 = contentLiC(this.index,bookLi,bookFig);
						}
					}
					break;
				case 3:
					bookRight.onclick = function() {
						num2 = contentRight(num2, bookLi, bookFig);
					}
					bookLeft.onclick = function() {
						num2 = contentLeft(num2, bookLi, bookFig);
					}
					for(var j = 0;j<bookLi.length;j++){
						bookLi[j].index = j;
						bookLi[j].onclick = function(){
							num2 = contentLiC(this.index,bookLi,bookFig);
						}
					}
					break;
				case 4:
					bookRight.onclick = function() {
						num3 = contentRight(num3, bookLi, bookFig);
					}
					bookLeft.onclick = function() {
						num3 = contentLeft(num3, bookLi, bookFig);
					}
					for(var j = 0;j<bookLi.length;j++){
						bookLi[j].index = j;
						bookLi[j].onclick = function(){
							num3 = contentLiC(this.index,bookLi,bookFig);
						}
					}
					break;
			}

		}
		contentLi[i].onmouseout = function() {
			var bookFig = document.querySelectorAll('.content>ul>li:nth-child(' + this.index + ') figure');
			var bookLi = document.querySelectorAll('.content>ul>li:nth-child(' + this.index + ') ul li');
			var bookLeft = document.querySelector('.content>ul>li:nth-child(' + this.index + ') .left-button');
			var bookRight = document.querySelector('.content>ul>li:nth-child(' + this.index + ') .right-button');
			bookLeft.style.opacity = '0';
			bookRight.style.opacity = '0';
		}
	}



	// 视频弹出框
	var alertB = document.querySelector('.alert');
	var alertNo = document.querySelector('.alert a');
	var alertDiv = document.querySelector('.alert div');
	var alertSpan = document.querySelector('.alert span');
	var alertVideo = document.querySelector('.alert video');
	
	// 视频弹出函数
	function alertV(index,content) {
		alertB.style.display = 'block';
		switch(index){
            case 0:
                alertVideo.src = 'https://v.mifile.cn/b2c-mimall-media/c2cb94c9485243e1767d43268fb90820.mp4';
                break;
            case 1:
                alertVideo.src = 'https://v.mifile.cn/b2c-mimall-media/ed921294fb62caf889d40502f5b38147.mp4';
                break;
            case 2:
                alertVideo.src = 'https://v.mifile.cn/b2c-mimall-media/53fc775dd6b29ecd8df3e2ea35129766.mp4';
                break;
            case 3:
                alertVideo.src = 'https://v.mifile.cn/b2c-mimall-media/69f7b9881f4ed7123f0d473dcd44d621.mp4';
                break;
        }
		// alertVideo.src = alertVideo.src.replace(/video\/\d+\.mp4/, 'video/' + index + '.mp4');
		alertSpan.innerHTML = content;
		var top = (window.innerHeight - parseInt(getComputedStyle(alertDiv).height)) / 2
		top < 0? top = 0 : top = top;
		//console.log(top);
		alertDiv.style.left = (window.innerWidth - parseInt(getComputedStyle(alertDiv).width)) / 2 + 'px';
		var t = setTimeout(function() {
			alertDiv.style.top = top + 'px';
		}, 0);
	}
	// 视频关闭事件
	alertNo.onclick = function() {
		alertDiv.style.top = '-666px';
        alertVideo.src = '';
        // alertVideo.src = alertVideo.src.replace(/video\/\d+\.mp4/, 'video/' + 5 + '.mp4');
		var t = setTimeout(function() {
			alertB.style = '';
		}, 500);
	}

	var videoLi = document.querySelectorAll('.video li');
	for(var v = 0; v < videoLi.length; v++) {
		videoLi[v].index = v;
		videoLi[v].onmouseover = function() {
			var img = this.children[0].children[0];
			var a = this.children[0].children[1].children[0].children[0];
			var i = this.children[0].children[2];
			var span = a.innerHTML;
			img.index = this.index;
			img.onclick = function() {
				alertV(this.index,span);
			}
			a.onclick = function() {
				alertV(img.index,span);
			}
			i.onclick = function() {
				alertV(img.index,span);
			}
		}
	}
	
	
	//侧边栏
	var sidebar_lis = document.querySelectorAll('footer .sidebar li');
		
	var sc_top = 0;
	var sc_top = document.documentElement.scrollTop;
	window.onscroll = function() {
		var sc_top = 0;
		var sc_top = document.documentElement.scrollTop;
		console.log(sc_top);
		if(sc_top > 800){
			sidebar_lis[3].style.opacity = '1';
		}else{
			sidebar_lis[3].style.opacity = '0';
		}
	}

	
	//var scroller = setInterval(scrtop,10);
}

