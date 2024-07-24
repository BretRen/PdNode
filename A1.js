let IsUser = prompt("你是用户吗？(Y/N)")
let a = 10
let b = 20
if (IsUser == "Y" || IsUser == "y" || IsUser == "yes") {
  document.write("原来的值，a = " + a + " b = " + b + "<br>")
  a = (a ^= b, b ^= a, a ^= b)
  document.write("之后的值，a = " + a + " b = " + b)
} else if (IsUser == "" || IsUser == null) {
  document.write("请输入正确的值！")
  document.write("<br><br>三秒后将重新刷新页面……")
  console.error("用户输入有误")
  setTimeout(() => location.reload(), 3000)
} else {
  console.group("变量交换")
  let a = 10
  let b = 20
  console.log("原来的值，a = " + a + " b = " + b)
  document.write("原来的值，a = " + a + " b = " + b + "<br>")
  a = (a ^= b, b ^= a, a ^= b)
  console.log("之后的值，a = " + a + " b = " + b)
  document.write("之后的值，a = " + a + " b = " + b + "<br>")
  document.write("请查看控制台了解详情")
  console.groupEnd()
}
