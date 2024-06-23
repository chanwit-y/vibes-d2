<script>
  import Home from "./icon/home.svelte";
  import ObjectConnection from "./icon/object-connection.svelte";

</script>
<div class=" p-2 pt-4 h-4/5 w-80 text-base-content">
  <ul class="menu bg-base-100 rounded-box">
    <li>
      <a>
        <Home />
        <p class="pl-1">Home</p>
      </a>
    </li>
    <li>
      <a class="active">
        <ObjectConnection />
        <p class="pl-1">ER-Model</p>
      </a>
    </li>
    <li>
      <details open>
        <summary>Parent</summary>
        <ul>
          <li><a class="">Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
          <li>
            <details open>
              <summary>Parent</summary>
              <ul>
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </details>
    </li>
    <li><a>Item 3</a></li>
  </ul>
</div>

<style>
	a {
		margin-top: 0.25rem;
		/* margin-bottom: 0.5rem; */
	}
	p {
		padding-left: 0.25rem
	}
	 summary {
		margin-top: 0.25rem;
	 }
</style>