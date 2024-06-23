<script lang="ts">
  import { drawerOpen } from "$lib/store";
  //   import { onDestroy } from "svelte";

  //   let open = true;
  //   let unsubscribe = drawerOpen.subscribe((value) => (open = value));

  //   onDestroy(() => {
  //     unsubscribe();
  //   });
</script>

<button
  class="btn btn-square btn-ghost"
  on:click={() => drawerOpen.update((v) => !v)}
>
  <!-- this hidden checkbox controls the state -->
  <!-- {#if !open} -->

  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h7"
    /></svg
  >

  <!-- {:else}
    <svg
      class="swap-on fill-current"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 512 512"
      ><polygon
        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
      /></svg
    >
  {/if} -->
  <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    class="inline-block w-5 h-5 stroke-current"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path></svg
  > -->
</button>
