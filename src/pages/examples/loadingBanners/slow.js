export async function GET({ params, request }) {
  
  await delay2Seconds();


  return new Response(
    response
  );
}

function delay2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

const response = `
<div>
    <h3>Loaded</h3>
</div>`;