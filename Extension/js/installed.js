chrome.storage.sync.set({options: {
  enabled: true, 
  youtube: true, 
  youtubeMusic: true, 
  twitch: true, 
  soundcloud: true, 
  netflix: true, 
  kissanime: true, 
  jkanime: true,
  fimfiction: true,
  titleMenubar: true, 
  mediaControls: true, 
  checkForUpdates: true, 
  systemStartup: true,
  darkTheme: true
}})

$(document).ready(async function() {
  $('html').addClass('dark')
  $('.Pheading').html(await getString("tab.installed.heading"))
  $('.PdidInstallQuestion').html(await getString("tab.installed.subHeading.didInstallQuestion"))
  $('.Pdownload').html((await getString("tab.installed.instructions.download")).replace("$1", '<a target="_blank" href="https://github.com/Timeraa/PreMiD/releases/latest">' + await getString("tab.installed.instructions.github") + '</a>'))
  $('.Pwait').html(await getString("tab.installed.instructions.wait"))
  $('.Pwarnings').html(await getString("tab.installed.instructions.warnings"))
  $('.Pautostart').html(await getString("tab.installed.instructions.autostart"))
  $('.Pready').html(await getString("tab.installed.subHeading.ready"))
  $('.Pintro').html(await getString("tab.installed.intro"))
  $('.PletsStart').html(await getString("tab.installed.letsStart"))
  $('.PgetSupport').html(await getString("tab.installed.getSupport"))
  $('.PlikeThisProject').html((await getString("tab.installed.likeThisProject")).replace("$1", '<a target="_blank" href="https://github.com/Timeraa/PreMiD">GitHub</a>'))
})