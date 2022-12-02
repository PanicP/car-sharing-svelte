<script>
  import { Link } from "svelte-routing";
  import { store } from "../store/store";
</script>

<!-- <div class="container">
  {#each $store.navs as nav, index}
    <div>{nav.label}</div>
  {/each}
</div> -->
<div class="navbar bg-base-100">
  <!-- register modal -->
  <div class="navbar-start">
    <!-- <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
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
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a>Item 1</a></li>
        <li tabindex="0">
          <a class="justify-between">
            Parent
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              ><path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              /></svg
            >
          </a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div> -->

    <div class="btn btn-ghost normal-case text-xl">
      <Link to="/">Panic Sharing</Link>
    </div>
  </div>
  <div class="navbar-end">
    <label class="btn" for="login-modal">Login</label>

    <!-- login modal -->
    <input type="checkbox" id="login-modal" class="modal-toggle" />
    <label for="login-modal" class="modal cursor-pointer">
      <label class="modal-box relative" for="">
        <h3 class="text-lg font-bold">Login</h3>
        <!-- <p class="py-4">
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </p> -->
        <div class="form-control">
          <!-- <label class="label">
            <span class="label-text">Your Email</span>
          </label> -->
          <label class="input-group mt-8">
            <span class="px-11">ID</span>
            <input
              type="text"
              placeholder="Your ID"
              class="input input-bordered"
            />
          </label>
          <label class="input-group mt-8">
            <span>Password</span>
            <input
              type="password"
              placeholder="Your Password"
              class="input input-bordered"
            />
          </label>
        </div>

        <div class="modal-action">
          <div class="btn">Register</div>
          <div class="btn">Cancel</div>
        </div>
      </label>
    </label>

    <label class="btn ml-1" for="register-modal">Register</label>

    <!-- Register Modal -->
    <input type="checkbox" id="register-modal" class="modal-toggle" />
    <label for="register-modal" class="modal cursor-pointer">
      <label class="modal-box relative" for="">
        <h3 class="text-lg font-bold">Login</h3>
        <!-- <p class="py-4">
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </p> -->
        <div class="form-control">
          <!-- <label class="label">
            <span class="label-text">Your Email</span>
          </label> -->
          <label class="input-group mt-8">
            <span class="px-11">ID</span>
            <input
              type="text"
              placeholder="Your ID"
              class="input input-bordered"
            />
          </label>
          <label class="input-group mt-8">
            <span>Password</span>
            <input
              type="password"
              placeholder="Your Password"
              class="input input-bordered"
            />
          </label>
          <label class="input-group mt-8">
            <span>Re-Password</span>
            <input
              type="password"
              placeholder="Your Password"
              class="input input-bordered"
            />
          </label>
        </div>

        <div class="modal-action">
          <div class="btn">Login</div>
          <div class="btn">Cancel</div>
        </div>
      </label>
    </label>
  </div>
</div>

<style>
</style>
