<script lang="ts">
  import type { SearchBox } from "$lib/@types";
  import SearchIcon from "$lib/components/icon/search.svelte";

  let searchs: SearchBox[] = [
    {
      type: "text",
      label: "Search",
      value: "",
    },
    {
      type: "select",
      label: "country",
      value: "",
    },
  ];
</script>

<div class="flex gap-2 items-center">
  {#each searchs as search}
    <div>
      <label>{search.label}</label>
    </div>
  {/each}
  <button class="btn btn-circle btn-ghost btn-outline btn-sm">
    <SearchIcon />
  </button>
</div>
