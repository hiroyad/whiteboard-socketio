(function (window, document, $) {
  let iframe = $('.iframe-content');
  let wrapper = iframe.parent();
  let width = wrapper.width();
  let ratio = width / iframe.width();
  ratio = 0.8;
  console.log(`Ratio: ${ratio}`);

  // IFRAME自体は読み込みページの大きさにCSSで適用している。
  // それを#wrapperのサイズにスケールインする。
  // https://stackoverflow.com/questions/166160/how-can-i-scale-the-content-of-an-iframe
  iframe
    .css('-ms-transform',     `scale(${ratio})`)
    .css('-moz-transform',    `scale(${ratio})`)
    .css('-o-transform',      `scale(${ratio})`)
    .css('-webkit-transform', `scale(${ratio})`)
    .css('transform',         `scale(${ratio})`)
    .css('-ms-transform-origin',     '0 0')
    .css('-moz-transform-origin',    '0 0')
    .css('-o-transform-origin',      '0 0')
    .css('-webkit-transform-origin', '0 0')
    .css('transform-origin',         '0 0');

  // #iframeのひとつ上のラッパー#wrapperの高さを同じ倍率で変更する。
  // これをしないとうまくもともとのIFRAMEの高さのままになる。
  wrapper.height(wrapper.height() * ratio);

})(window, window.document, window.jQuery);
