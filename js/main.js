//B1
const TU_0_D60 = 0.05;
const TU_60_D120 = 0.1;
const TU_120_D210 = 0.15;
const TU_210_D384 = 0.2;
const TU_384_D624 = 0.25;
const TU_624_D960 = 0.3;
const TREN960 = 0.35;

function sumVAT() {
    var name = document.getElementById("name").value;
    var totalYear = Number(document.getElementById("totalYear").value);
    var people = Number(document.getElementById("people").value);
    var totalVAT = totalYear - 4e6 - people * 16e5;
    var sum = 0;

    if (totalYear > 0 && totalYear <= 6e7) {
        sum = totalVAT * TU_0_D60;
    } else if (totalYear > 6e7 && totalYear <= 12e7) {
        sum = totalVAT * TU_60_D120;
    } else if (totalYear > 12e7 && totalYear <= 21e7) {
        sum = totalVAT * TU_120_D210;
    } else if (totalYear > 21e7 && totalYear <= 384e6) {
        sum = totalVAT * TU_210_D384;
    } else if (totalYear > 384e6 && totalYear <= 624e6) {
        sum = totalVAT * TU_384_D624;
    } else if (totalYear > 624e6 && totalYear <= 96e7) {
        sum = totalVAT * TU_624_D960;
    } else if (totalYear > 96e7) {
        sum = totalVAT * TREN960;
    } else {
        sum = "Nhập Sai Số"     
    }
    document.getElementById("textb1").innerHTML = "Họ Và Tên: " + name +"  ,Tổng Thuế Phải Nộp: " + sum.toLocaleString();
}
document.getElementById("logB1").onclick = sumVAT;

//B2
function myFunction(){
    var khachHang = document.getElementById("selectDT").value;
    var ketNoi =  document.getElementById("numberKN");
    if(khachHang =="enterprise"){
        ketNoi.style.display ="block";
    }else{
        ketNoi.style.display ="none";
    }
}

function totalCable(){
    var khachHang = document.getElementById("selectDT").value;
    var idKH = document.getElementById("idKH").value;
    var kenh = Number(document.getElementById("numberK").value);
    var ketNoi =  Number(document.getElementById("numberKN").value);
    var sumCable = 0;
    if(khachHang == ""){
        alert("Nhập KH1");
        sumCable = 0;
    }else{
        if(khachHang == "citizen"){
            sumCable = 4.5 + 20.5  + kenh * 7.5;
        }else if(khachHang ="enterprise"){
            if(ketNoi<=10){
                sumCable = 15 + 75 + (50 * kenh)
            }else{
                sumCable = 15 + 75 + (50 * kenh) + (ketNoi-10)*5;
            }
        }else{
            alert("Chọn Loại Khách Hàng");
        }
    }
    document.getElementById("textb2").innerHTML = "Mã KH: " +  idKH + " Số tiền: $" + sumCable.toLocaleString() +".00";
}
document.getElementById("logB2").onclick = totalCable;
