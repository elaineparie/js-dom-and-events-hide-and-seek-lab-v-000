
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  let currentNode = document.querySelector('#grand-node')
  while (currentNode.children[0]){
    currentNode = currentNode.children[0]
  }
  return currentNode
}

function increaseRankBy(n){
  let selections = document.querySelectorAll('.ranked-list')
  let i;
  for (i = 0; i < selections.length; i++) {
    let children = selections[i].children
    for (let x = 0; x < children.length; x++) {
  children[x].innerHTML = parseInt(children[x].innerHTML) + n
    }
  }
}
