$(".tabs_container>ul>li").hover(function () {
  $(this)
    .addClass("active_tab-link")
    .siblings()
    .removeClass("active_tab-link")
    .closest(".contacts_block")
    .find("div.tabs_content_container")
    .removeClass("active_tab-content")
    .eq($(this).index())
    .addClass("active_tab-content");
});
