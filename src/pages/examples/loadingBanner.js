export const css = `
 .htmx-indicator {
    display: none;
    opacity: 0;
    transition: opacity 500ms ease-in;
  }
  .htmx-request .htmx-indicator {
    display: flex;
    opacity: 1;
  }
  .htmx-request.htmx-indicator {
    display: flex;
    opacity: 1;
  }
  
`;

export const component =`
  <div id="inline1">
    <div class="pb-4">
      <h3>
        Small Box
      </h3>
      <button
        hx-get="/examples/loadingBanners/slow"
        hx-target="#inline1"
        hx-trigger="click"
        hx-indicator="#inline1 .loading"
        type="button" >
        Load Something
      </button>
    </div>
    <div class="htmx-indicator loading" >
      <div class="pb-4">
        <h3 class="text-zinc-800">Loading...</h3>
      </div>
    </div>
  </div>

`