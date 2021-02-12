"use strict"
var submit = document.querySelector('button[type=submit');
var page = document.querySelector('.search')
var result = document.querySelector(".result")
var arrow = document.querySelector(".arrow")
submit.addEventListener("click", function swerve(e) {
    e.preventDefault()
    arrow.style.display = "block"
    result.style.display = 'block'
})