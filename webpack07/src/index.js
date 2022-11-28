import helloWorld from './hello'
import src from './assets/about-banner.png' // resource资源模块
import logoSvg from './assets/react.svg' // inline 资源
import txt from './assets/a.txt' // block资源
import jpgMap from './assets/news_bg.jpg' // source 资源

import './style.css'
import './style.less'

// 引入csv和xml文件
import xmlData from './assets/demo.xml'
import csvData from './assets/demo.csv'

import './async'
import _ from 'lodash'

console.log(_.join(['xurui', 'love', 'play', 'chese'],''))



helloWorld()

const img = document.createElement('img')

img.src = src
img.style.cssText = 'width: 200px'
document.body.appendChild(img)


const img2 = document.createElement('img')

img2.src = logoSvg

document.body.appendChild(img2)


const block = document.createElement('div')

block.textContent = txt

block.style.cssText = 'width: 200px, height:200px; background: #ccc'

block.classList.add('block-bg')

document.body.appendChild(block)


const img3 = document.createElement('img')

img3.src = jpgMap

img3.style.cssText = 'width: 200px'

document.body.appendChild(img3)


const div = document.createElement('div')

div.classList.add('active')

document.body.appendChild(div)


console.log(csvData)
console.log(xmlData)