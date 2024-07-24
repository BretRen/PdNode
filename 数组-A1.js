function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
function checkCookie(name) {
  const cookie = getCookie(name);
  if (cookie === undefined || cookie === null || cookie === "") {
    return false;
  }
  return true;
}


if (checkCookie("IsGood") != true) {
  if (getCookie("IsGood") != "OK") {
    window.location.pathname = "../../../JS/例子/检测浏览器版本.html"
  }

}


let week = ["星期一", "星期二", "星期三", "星期四",
  "星期五", "星期六", "星期日"]
document.write("<h1>" + week[6] + "</h1>")
console.log(week[6])
console.log(week)


