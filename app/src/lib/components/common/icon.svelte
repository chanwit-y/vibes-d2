<script>
  export let src;

  $: isSvg = !!src.endsWith(".svg"); // we use $: because you may dynamically change the src so the component needs to be reactive. if you are sure that it won't be changed it will be great to use instead `const`
  $: svgRoute = isSvg ? src.replace(".svg", ".svg?raw") : null; // you can also do `${src}?raw`
</script>

{#if isSvg}
  {#await import(svgRoute)}
    <div>loading...</div>
    <!-- default fallback, can be a loading spinner or anything else that the user will see while waiting for the loading -->
  {:then value}
    {@html value.default} <!-- the svg code will be inject here -->
  {/await}
{:else}
  <img class="" {src} />
  <!-- if the src is only a normal photo then use native html `<img>`'s src attribute -->
{/if}
