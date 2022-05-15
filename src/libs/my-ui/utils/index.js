function getStyles(el) {
  return window.getComputedStyle(el, null)
}

function getObjectURL(file) {
  if (window.createObjectURL) {
    return window.createObjectURL(file)
  } else if (window.URL.createObjectURL) {
    return window.URL.createObjectURL(file)
  } else if (window.webkitURL.createObjectURL) {
    return window.webkitURL.createObjectURL(file)
  }
}

function getDataURL(file, callback) {
  let result = null
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function (e) {
    result = e.target.result
    callback(result)
  }
}

export { getStyles, getObjectURL, getDataURL }
