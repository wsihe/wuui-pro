import Vue from 'vue'
import { trim } from './index'

const isServer = Vue.prototype.$isServer

/**
 * 元素注册事件，兼容 IE
 * @param element [元素]
 * @param event [事件名称]
 * @param handler [响应函数]
 */
export function on (element, event, handler) {
  if (element && event && handler) {
    if (!isServer() && document.addEventListener) {
      element.addEventListener(event, handler, false)
    } else {
      element.attachEvent('on' + event, handler)
    }
  }
}

/**
 * 元素移除事件，兼容 IE
 * @param element [元素]
 * @param event [事件名称]
 * @param handler [响应函数]
 */
export function off (element, event, handler) {
  if (element && event) {
    if (!isServer() && document.removeEventListener) {
      element.removeEventListener(event, handler, false)
    } else {
      element.detachEvent('on' + event, handler)
    }
  }
}

/**
 * 判断某个元素是否带有指定 class
 * @param el
 * @param cls
 * @return {boolean}
 */
export function hasClass (el, cls) {
  if (!el || !cls) {
    return false
  }
  if (cls.indexOf(' ') !== -1) {
    throw new Error('className should not contain space.')
  }
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

/**
 * 增加元素 class
 * @param el
 * @param cls
 */
export function addClass (el, cls) {
  if (!el) {
    return
  }
  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) {
      continue
    }
    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

/**
 * 移除元素指定 class
 * @param el
 * @param cls
 */
export function removeClass (el, cls) {
  if (!el || !cls) {
    return
  }
  const classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) {
      continue
    }
    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

/**
 * 获取元素样式
 * @param elem
 * @param style
 * @return {String|string}
 */
export function getStyle (elem, style) {
  return window.getComputedStyle(elem, null).getPropertyValue(style)
}

/**
 * 获取元素样式数值
 * @param elem
 * @param style
 * @return {Number}
 */
export function getStyleValue (elem, style) {
  let value = getStyle(elem, style)
  if (value !== null && value !== undefined) {
    return parseFloat(value)
  }
  return value
}

/**
 * 获取窗口宽度
 * @return {number}
 */
export function getClientWidth () {
  let winWidth = 0
  if (window.innerWidth) {
    winWidth = window.innerWidth
  } else if ((document.body) && (document.body.clientWidth)) {
    winWidth = document.body.clientWidth
  }
  return winWidth
}
