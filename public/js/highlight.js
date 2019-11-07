

const getHighlightTargets = () => {
  return document.querySelectorAll('[data-highlight]');
}

const addOneHoverClass = (targets, index) => {
  if (targets.length) {
    targets.forEach((target, _index) => {
      target.classList.add( index === _index ? 'is-hovered' : 'is-not-hovered');
    })
  }
}

const removeAllHoverClass = (targets) => {
  if (targets.length) {
    targets.forEach((target) => {
      target.classList.remove('is-hovered')
      target.classList.remove('is-not-hovered')
    })
  }
}

const addAllInViewClass = (targets, scrollThreshHold) => {
  if (targets.length) {

    let scrollThresholdTop = window.innerHeight * (scrollThreshHold * 0.5)
    let scrollThresholdBottom = window.innerHeight - scrollThresholdTop

    targets.forEach((target, index) => {
      if ( target.getBoundingClientRect().top > scrollThresholdTop && target.getBoundingClientRect().bottom < scrollThresholdBottom  ) {
        target.classList.add('in-view')
        target.classList.remove('out-view')
      }
      else {
        target.classList.add('out-view')
        target.classList.remove('in-view')
      }
    })
  }
}

window.addEventListener('DOMContentLoaded', () => {
  let targets = getHighlightTargets()
  let grid = document.getElementById('grid')

  // HANDLE PROJECT HOVER

  targets.forEach((target, index) => {
    target.addEventListener('mouseenter', () => {
      addOneHoverClass(targets, index)
    })
    target.addEventListener('mouseleave', () => {
      removeAllHoverClass(targets)
    })
  })

  // HANDLE GRID SCROLL

  scrollThreshHold = 0.25

  window.addEventListener('scroll', () => {
    removeAllHoverClass(targets)
    addAllInViewClass(targets, scrollThreshHold)
  })

  addAllInViewClass(targets, scrollThreshHold)

  // SCROLL HELPER
  // const scrollHelper = document.createElement('div')
  // scrollHelper.id = 'scroll-helper'
  // scrollHelper.style.height = `${100*(1-scrollThreshHold)}vh`
  // document.body.appendChild(scrollHelper)
})