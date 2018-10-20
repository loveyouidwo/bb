(function(){
    text();
    mi();
})();


function text(){
    let header_top = document.getElementById("header_top");
    // let header = document.getElementById("header");
    header_top.onmousedown = function(){
       alert("你还有同意我的追求 不能取消 在好好考虑一下");
    }
}
function mi(){
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let header = document.getElementById("header");
    let p = document.getElementById("p");

    btn1.onmousedown = function(){
        header.style.display = 'none';
    };
    btn2.onmousedown = function(){
      btn2.style.display = 'none';
      p.style.display = 'block';
    }
}

function $(id){
    return typeof id === "string"?document.getElementById(id):null;
}
