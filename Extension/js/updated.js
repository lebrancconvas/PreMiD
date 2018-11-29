$(document).ready(async function() {
  chrome.storage.sync.get(['options'], function(result) {
    options = result.options
    if(result.options.darkTheme == undefined) {
      $('html').addClass('dark')
    } else if(result.options.darkTheme) $('html').addClass('dark')
    if(options.fimfiction == undefined) chrome.storage.sync.set($.extend(options, {fimfiction: true}))
    if(options.darkTheme == undefined) chrome.storage.sync.set($.extend(options, {darkTheme: true}))
  })

  $('.Pheading').html(await getString("tab.updated.heading"))
  $('.PwhatsNew').html(await getString("tab.updated.subHeading.whatsNew"))
  $('.PwhatChanged').html(await getString("tab.updated.subHeading.whatChanged"))
  $('.PgotIt').html(await getString("tab.updated.gotIt"))
  $('.PlikeThisProject').html((await getString("tab.installed.likeThisProject")).replace("$1", '<a target="_blank" href="https://github.com/Timeraa/PreMiD">GitHub</a>'))
  
  var hasNextChanged = true,
  index = 0
  while(hasNextChanged) {
    if(await getString("tab.updated.added" + index, false) != null) {
      var item = document.getElementById('WhatsNewList').appendChild(document.createElement('li'))
      item.innerHTML = await getString("tab.updated.added" + index)
    } else hasNextChanged = false;
    index++
  }
  
  hasNextChanged = true
  index = 0
  while(hasNextChanged) {
    if(await getString("tab.updated.changed" + index, false) != null) {
      var item = document.getElementById('WhatChangedList').appendChild(document.createElement('li'))
      item.innerHTML = await getString("tab.updated.changed" + index)
    } else hasNextChanged = false;
    index++
  }
})

$('.gotIt').click(function() { window.close()})