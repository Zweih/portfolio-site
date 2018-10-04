$(document).ready(() => {
  const spans = $("span.svg-icon");

  for(let i = 0; i < spans.length; i++) {
    const span = spans.get(i);
    const classArr = span.className.split(/\s+/);
    const svgUrl = `./assets/svg/${classArr[1]}/${classArr[2]}.svg`;
    const title = $(`.${classArr[2]} h3`);
    // $(span).load(`./assets/svg/${classArr[1]}/${classArr[2]}.svg`)

    $.get(svgUrl, (data) => {
      const docEl = data.documentElement;
      const svg = new XMLSerializer().serializeToString(docEl);
      $(span).prepend(svg);
     }
    );
  }
});