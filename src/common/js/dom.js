export function addClass (dom, clazzName) {
  if (hasClass(dom, clazzName)) return
  let clazzNameArr = dom.className.split(' ')
  clazzNameArr.push(clazzName)
  dom.className = clazzNameArr.join(' ')
}

export function hasClass (dom, clazzName) {
  let regExp = new RegExp('(\\s|^)' + clazzName + '(\\s|^)')
  return regExp.test(dom.className)
}
