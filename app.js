let input = document.getElementById("theme");
let del = document.querySelector(".btn-del");
let reset = document.querySelector(".btn-reset");
let daubang = document.querySelector(".btn-result");
let boxNumber = document.querySelector(".number-box");
let text = document.querySelector(".text");
let texttheme = document.querySelector(".text-theme");
let textthemeNumber = document.getElementsByClassName("theme-number");
let btn = document.getElementsByClassName("btn");
let key = document.querySelector(".box-math");
input.addEventListener("change", (e) => {
  let t = e.target.value;
  if (t == 1) {
    texttheme.classList.add("color-text-2");
    for (let i = 0; i < textthemeNumber.length; i++) {
      textthemeNumber[i].classList.add("color-text-2");
    }
    text.classList.add("color-text-2");
    del.classList.add("xanh-2");
    reset.classList.add("xanh-2");
    key.classList.add("key-color-2");
    boxNumber.classList.add("number-box-color-2");
    daubang.classList.add("daubang-2");
    document.body.classList.add("body-color-2");
    // theme 3
    texttheme.classList.remove("color-text-3");
    for (let i = 0; i < textthemeNumber.length; i++) {
      textthemeNumber[i].classList.remove("color-text-3");
    }
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("btn-color");
    }
    text.classList.remove("color-text-3");
    del.classList.remove("tim");
    reset.classList.remove("tim");
    key.classList.remove("key-color-3");
    boxNumber.classList.remove("number-box-color-3");
    daubang.classList.remove("daubang-3");
    document.body.classList.remove("body-color-3");
  } else if (t == 2) {
    texttheme.classList.add("color-text-3");
    for (let i = 0; i < textthemeNumber.length; i++) {
      textthemeNumber[i].classList.add("color-text-3");
    }
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.add("btn-color");
    }
    text.classList.add("color-text-3");
    del.classList.add("tim");
    reset.classList.add("tim");
    key.classList.add("key-color-3");
    boxNumber.classList.add("number-box-color-3");
    daubang.classList.add("daubang-3");
    document.body.classList.add("body-color-3");
  } else {
    texttheme.classList.remove("color-text-2");
    for (let i = 0; i < textthemeNumber.length; i++) {
      textthemeNumber[i].classList.remove("color-text-2");
    }
    text.classList.remove("color-text-2");
    del.classList.remove("xanh-2");
    reset.classList.remove("xanh-2");
    key.classList.remove("key-color-2");
    boxNumber.classList.remove("number-box-color-2");
    daubang.classList.remove("daubang-2");
    document.body.classList.remove("body-color-2");
    texttheme.classList.remove("color-text-3");
    for (let i = 0; i < textthemeNumber.length; i++) {
      textthemeNumber[i].classList.remove("color-text-3");
    }
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("btn-color");
    }
    text.classList.remove("color-text-3");
    del.classList.remove("tim");
    reset.classList.remove("tim");
    key.classList.remove("key-color-3");
    boxNumber.classList.remove("number-box-color-3");
    daubang.classList.remove("daubang-3");
    document.body.classList.remove("body-color-3");
  }
});
// tính toán
// let del = document.querySelector(".btn-del");
// let reset = document.querySelector(".btn-reset");
// let daubang = document.querySelector(".btn-result");
// let boxNumber = document.querySelector(".number-box");
let total = "";
let phay = document.getElementById("phay");
let chia = document.getElementById("chia");
let nhan = document.getElementById("nhan");
let tru = document.getElementById("tru");
let cong = document.getElementById("cong");
let mot = document.getElementById("mot");
let hai = document.getElementById("hai");
let ba = document.getElementById("ba");
let bon = document.getElementById("bon");
let nam = document.getElementById("nam");
let sau = document.getElementById("sau");
let bay = document.getElementById("bay");
let tam = document.getElementById("tam");
let chin = document.getElementById("chin");
let khong = document.getElementById("khong");
function click_cal(button, number) {
  button.addEventListener("click", () => {
    if (total.length > 20) {
      alert("max number");
    } else {
      total = total + number;
      boxNumber.innerHTML = total;
    }
  });
}
click_cal(phay, ".");
click_cal(chia, "/");
click_cal(nhan, "x");
click_cal(tru, "-");
click_cal(cong, "+");
click_cal(mot, "1");
click_cal(hai, "2");
click_cal(ba, "3");
click_cal(bon, "4");
click_cal(nam, "5");
click_cal(sau, "6");
click_cal(bay, "7");
click_cal(tam, "8");
click_cal(chin, "9");
click_cal(khong, "0");
del.addEventListener("click", () => {
  if (!(total == "" || total == "0")) {
    total = total.substring(0, total.length - 1);
    boxNumber.innerHTML = total;
    if (total.length == 0) {
      boxNumber.innerHTML = 0;
    }
  } else {
    boxNumber.innerHTML = 0;
  }
});
reset.addEventListener("click", () => {
  boxNumber.innerHTML = 0;
  total = "";
});

daubang.addEventListener("click", () => {
  let gan = 0;
  let chuoibandau = boxNumber.innerHTML;
  //chuyển qua mảng để xóa 2 kí tự giống nhau kề nhau
  chuoibandau = chuoibandau.split("");
  let dem = 0;
  //xóa các dấu nhân chia thừa
  //các dấu cộng thừa vẫn đc
  //2 dấu trừ liền kề đổi thành dấu cộng
  while (dem <= chuoibandau.length) {
    for (let i = 0; i < chuoibandau.length - 1; i++) {
      if (chuoibandau[i] == "x" && chuoibandau[i + 1] == "x") {
        chuoibandau.splice(i + 1, 1);
      }
      if (chuoibandau[i] == "/" && chuoibandau[i + 1] == "/") {
        chuoibandau.splice(i + 1, 1);
      }
      if (chuoibandau[i] == "-" && chuoibandau[i + 1] == "-") {
        chuoibandau[i] = "+";
        chuoibandau.splice(i + 1, 1);
      }
    }
    dem++;
  }
  let a = "";
  for (let i = 0; i < chuoibandau.length; i++) {
    a += chuoibandau[i];
  }
  let t = "";
  //thêm một kí tự cuối cùng để kết thúc chuỗi lấy số cuối
  a = a + "p";
  let b = []; //mảng các số
  let c = []; //mảng các kí tự nhân chia
  let m = 0;
  let n = 0;
  //hàm lấy số từ chuỗi
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= "0" && a[i] <= "9") {
      t += a[i];
    } else if (a[i] == ".") {
      t = t + ".";
    } else {
      b[n++] = Number(t);
      c[m++] = a[i];
      t = 0;
    }
  }
  //xóa kí tự cuối đã thêm vào ở bước trên
  c.pop();
  //xử lý nhân chia
  let j = 0;
  while (j <= c.length) {
    for (let i = 0; i <= c.length; i++) {
      if (c[i] == "/") {
        gan = b[i] / b[i + 1];
        b[i] = gan;
        b.splice(i + 1, 1);
        c.splice(i, 1);
      }
      if (c[i] == "x") {
        gan = b[i] * b[i + 1];
        b[i] = gan;
        b.splice(i + 1, 1);
        c.splice(i, 1);
      }
    }
    j++;
  }
  //sau bước này chỉ còn lại cộng và trừ
  let kq = b[0];
  for (let i = 0; i <= c.length; i++) {
    if (c[i] == "+") {
      kq = kq + b[i + 1];
    } else if (c[i] == "-") {
      kq = kq - b[i + 1];
    }
  }
  boxNumber.innerHTML = kq;
});
