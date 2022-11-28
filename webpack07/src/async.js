function getComponent() {
 return import('loadsh')
    .then(({default: _}) => {
      const element  = document.createElement('div')
      element.innerHTML = _.join(['Hello', 'World'], '')
      return element
    })
}


getComponent().then((el) => {
  document.body.appendChild(el)
})