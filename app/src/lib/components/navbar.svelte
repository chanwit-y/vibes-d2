<script>
  import { blur } from "svelte/transition";
  import { onDestroy } from "svelte";
  import { drawerOpen } from "$lib/store";
  import profile from "../asset/profile.png";
  import Hamberger from "./hamberger.svelte";
  import DarkToggle from "./dark-toggle.svelte";

  let open = true;
  // let delay1, delay2 = 0;

  let unsubscribe = drawerOpen.subscribe((value) => {
    open = value;
    console.log(value);
  });

  onDestroy(() => {
    unsubscribe();
  });

  // $:
</script>

<!-- <p>{whenDrawerOpen1}</p>
      <p>{whenDrawerOpen2}</p> -->

<div class="navbar bg-base-100 sticky top-0" style="z-index: 1000">
  {#if !open}
    <div
      class="flex-none"
      in:blur={{ amount: 10, delay: 400 }}
      out:blur={{ amount: 10, delay: 0 }}
    >
      <Hamberger />
      <!-- when close drawer  -->
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Vibes</a>
      </div>
    </div>
  {:else}
    <div
      class="flex-1 translate-x-0"
      in:blur={{ amount: 10, delay: 400 }}
      out:blur={{ amount: 10, delay: 0 }}
    >
      <a class="btn btn-ghost text-xl">[Page Name]</a>
    </div>
  {/if}
  <div class="flex-1"><p></p></div>

  <!-- transition:blur={{ amount: 10, delay: whenDrawerOpen2 }} -->

  <div class=" navbar-end">
    <DarkToggle />
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          /></svg
        >
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
      <div class="w-10 rounded-full">
        <img
          alt="CY"
          src={profile}
        />
      </div>
    </div>
  </div>
</div>
