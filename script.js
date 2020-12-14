const $start = document.getElementById('start')
const $finish = document.getElementById('finish')
const $message = document.getElementById('message')
const $counter = document.getElementById('counter')

let interval
let timeout
let canMove
let seconds

const init = function() {
  if (interval) clearInterval(interval)
  if (timeout) clearInterval(timeout)
  canMove = false
  seconds = 0
  $message.innerHTML = "Click on green then wait for 'GO' then move to red as fast as you can!"
  $counter.innerHTML = seconds
}

const start = function() {
  init()
  $message.innerHTML = "Ready, set..."
  const waitInMs = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000)
  timeout = setTimeout(function() {
    $message.innerHTML = "...GO!"
    canMove = true
    interval = setInterval(function () {
      seconds++;
      $counter.innerHTML = seconds
    }, 10);
  }, waitInMs)
}

const restartIfCheat = function() {
  if (!canMove) init()
}

const finish = function() {
  if (!canMove) return
  $message.innerHTML = "Nice job"
  clearInterval(interval)
}

$start.addEventListener('click', start)
$start.addEventListener('mouseleave', restartIfCheat)
$finish.addEventListener('click', finish)

init()
