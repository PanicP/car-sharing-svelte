<script>
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
</script>

<div>
  <Header />
  <div class="min-h-screen">
    <slot />
  </div>
  <Footer />
</div>
