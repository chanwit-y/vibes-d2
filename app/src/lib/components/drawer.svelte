<script>
  import { onMount, onDestroy } from "svelte";
  import Navbar from "./navbar.svelte";
  import Hamberger from "./hamberger.svelte";
  import { drawerOpen } from "$lib/store";
  import { theam } from "$lib/store/layout";
  import Menu from "./menu.svelte";
  import BeerIcon from "./icon/beer-icon.svelte";

  let open = true;
  // let storedTheme = "";
  let t = localStorage.getItem("theme") ?? "dark";
  let unsubscribe = drawerOpen.subscribe((value) => {
    open = value;
    console.log(value);
  });

  onMount(() => {
    // storedTheme = localStorage.getItem("theme") ?? "";
    theam.subscribe((v) => {
      t = v;
      // document.documentElement.setAttribute("data-theme", t);
    });
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class={`drawer ${open ? "lg:drawer-open" : ""} bg-base-100`}>
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <Navbar />
    <!-- <div class="h-svh mx-4  p-4 rounded-md bg-slate-900"> -->
    <div class="mx-4 p-4">
      <!-- <label for="my-drawer-2" class="btn btn-primary drawer-button"
        >Open drawer</label
      > -->
      <slot></slot>
    </div>
  </div>
  <div
    class={`drawer-side border-r ${t === "dark" ? "border-r-slate-900" : "border-r-gray-200"}`}
  >
    <label
      for="my-drawer-2"
      aria-label="close sidebar"
      class="drawer-overlay"
    />

    <div class="p-2">
      <div class="relative flex justify-center items-center">
        <div class="absolute top-2 right-2">
          <Hamberger />
        </div>
        <div class="flex-1 flex mt-7 justify-center items-center">
          <div class="flex justify-center items-center rounded-full h-20 w-20">
            <BeerIcon />
          </div>
        </div>
      </div>

      <Menu />
    </div>
  </div>
</div>

<!-- <footer class="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer> -->
