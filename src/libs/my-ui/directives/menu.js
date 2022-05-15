export default {
  bind(el) {
    // const oAvatar = el.querySelector('.avatar')
    const oMenu = el.querySelector('.menu')

    el.addEventListener('mouseenter', mouseEnter, false)

    function mouseEnter() {
      oMenu.style.display = 'block'
      trans(oMenu, 50)
    }

    el.addEventListener('mouseleave', mouseLeave, false)

    function mouseLeave() {
      oMenu.style.display = 'none'
    }

    function trans(doc, target, callback) {
      if (doc.timer) clearInterval(doc.timer)
      doc.timer = setInterval(() => {
        let step = (target - doc.offsetTop) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        doc.style.top = doc.offsetTop + step + 'px'
        if (doc.offsetTop === target) {
          callback && callback()
        }
      }, 25)
    }
  }
}
