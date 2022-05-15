export const getItem = (key) => {
  return window.localStorage.getItem(key)
}

export const setItem = (key, value) => {
  return window.localStorage.setItem(key, value)
}

export const removeItem = (key) => {
  return window.localStorage.removeItem(key)
}
