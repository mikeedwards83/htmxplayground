export const eventListener = `
document.body.addEventListener('htmx:beforeOnLoad', function (evt) {
  if (evt.detail.xhr.status === 400 || evt.detail.xhr.status === 500) {
      evt.detail.shouldSwap = true;
      evt.detail.isError = false;
  }
});`;

export const notification = `
<div id="notifications"></div>`;

export const headers = `
Response.Headers.Add("HX-Retarget", "#notifications");	     
Response.Headers.Add("HX-Reswap", "innerHTML");`;

export const modal = `
<div x-data="{Notification500:true}">
  <div x-show="Notification500"
    class="fixed top-0 left-0 bottom-0 right-0 inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center items-center z-50"
  >
    <div class="space-x-3 dark:bg-zinc-900 dark:ring-zinc-300/20 dark:text-zinc-400 rounded-md p-8 text-center max-w-lg"
    >
      <div class="flex justify-center pb-2">
        <span class="text-3xl h-14 rounded-full aspect-square inline-block flex justify-center items-center bg-red-500 text-white"
        >
          <i class="fa fa-exclamation-circle"></i>
        </span>
      </div>
      <h3 class="text-4xl pb-2">An Error Has Occurred</h3>
      <p class="pb-6">There was an error processing your request.</p>
      <div class="flex justify-center flex-col space-x-3">
        <div class="pb-3">
          <p>Please try again.</p>
        </div>
        <button
          @click="Notification500 = false"
          type="button"
          class="py-2 px-4 text-md w-full md:w-auto rounded-md bg-emerald-600 hover:bg-emerald-800 text-white border border-emerald-600 hover:border-emerald-800"
        >
          <i class="fa fa-check"></i>
          <span> Ok</span>
        </button>
      </div>
    </div>
  </div>
</div>
`;

export const htmxHeader = `
HX-Request`;
