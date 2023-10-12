

// ModelX
const purchase = document.getElementById("purchase")
const modelx_box = document.getElementById("mx-box");
const modelx = document.getElementById("modelx");
const c1  = document.getElementById("c1");
const c2  = document.getElementById("c2");
const i1  = document.getElementById("i1");
const i2  = document.getElementById("i2");
const body = document.getElementById("body")
const banner_txt = document.getElementById('bg-txt')
const sub_banner = document.getElementById("sub-banner")
c1.onmouseover = ()=>{
  modelx.style.transformOrigin = "top left"
  i1.style.scale ="1.6";
  modelx.style.scale ="1.6";
  i1.style.opacity = 1
  body.style.backgroundColor = 'rgb(255, 255, 255)'
  body.style.color = ' rgb(21, 21, 21)'
  banner_txt.style.opacity = 0
  purchase.style.display = 'none'
  sub_banner.style.opacity = 1

}
c2.onmouseover= ()=>{
  modelx.style.transformOrigin = "bottom right"
  modelx.style.scale = "1.6"
  i2.style.scale ="1.8";
  i2.style.opacity = 1
  body.style.backgroundColor = 'rgb(255, 255, 255)'
  body.style.color = ' rgb(21, 21, 21)'
  banner_txt.style.opacity = 0
  sub_banner.style.opacity = 1
  purchase.style.display = 'none'
}
modelx_box.onmouseleave = ()=>{
  modelx.style.scale = "1.1"
  modelx.style.transformOrigin = "center"
  i1.style.opacity = 0
  i2.style.opacity = 0
  i2.style.scale ="1";
  i1.style.scale ="1"
  body.style.backgroundColor = 'rgb(21, 21, 21)'
  body.style.color = ' rgb(255, 255, 255)'
  banner_txt.style.opacity = 1
  sub_banner.style.opacity = 0
  purchase.style.display = 'block'
}
