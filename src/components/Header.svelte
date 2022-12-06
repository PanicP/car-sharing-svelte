<script>
    import { Link } from 'svelte-routing'
    import { store } from '../store/store'

    let loginUser, loginPassword
    let registerUser, registerPassword, registerRePassword
    let isLoginModalOpen, isRegisterModalOpen
    let isShowNoti = false

    const handleLogin = () => {
        $store.registedUsers.forEach((regUser) => {
            if (regUser?.user === loginUser) {
                if (regUser?.password === loginPassword) {
                    isLoginModalOpen = false
                    isShowNoti = true
                    setTimeout(() => {
                        isShowNoti = false
                    }, 5000)
                }
            }
        })
    }

    const handleRegister = () => {
        if (registerPassword === registerRePassword) {
            $store.registedUsers = [
                ...$store.registedUsers,
                { user: registerUser, password: registerPassword },
            ]
            isRegisterModalOpen = false
            isShowNoti = true
            setTimeout(() => {
                isShowNoti = false
            }, 5000)
        }
    }
</script>

<div class="navbar bg-base-100">
    <!-- noti -->
    {#if isShowNoti}
        <div class="toast toast-top toast-end z-10">
            <div class="alert alert-success">
                <div>
                    <span>Successfully.</span>
                </div>
            </div>
        </div>
    {/if}
    <!-- register modal -->
    <div class="navbar-start">
        <div class="btn btn-ghost normal-case text-xl">
            <Link to="/">Panic Sharing</Link>
        </div>
    </div>
    <div class="navbar-end">
        <label class="btn" for="login-modal">Login</label>

        <!-- login modal -->
        <input
            type="checkbox"
            id="login-modal"
            class="modal-toggle"
            bind:checked={isLoginModalOpen}
        />
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
                            bind:value={loginUser}
                        />
                    </label>
                    <label class="input-group mt-8">
                        <span>Password</span>
                        <input
                            type="password"
                            placeholder="Your Password"
                            class="input input-bordered"
                            bind:value={loginPassword}
                        />
                    </label>
                </div>

                <div class="modal-action">
                    <button class="btn" on:click={handleLogin}>Login</button>
                    <label for="login-modal" class="btn">Cancel</label>
                </div>
            </label>
        </label>

        <label class="btn ml-1" for="register-modal">Register</label>
        <!-- Register Modal -->
        <input
            type="checkbox"
            id="register-modal"
            class="modal-toggle"
            bind:checked={isRegisterModalOpen}
        />
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
                            bind:value={registerUser}
                        />
                    </label>
                    <label class="input-group mt-8">
                        <span>Password</span>
                        <input
                            type="password"
                            placeholder="Your Password"
                            class="input input-bordered"
                            bind:value={registerPassword}
                        />
                    </label>
                    <label class="input-group mt-8">
                        <span>Re-Password</span>
                        <input
                            type="password"
                            placeholder="Your Re-Password"
                            class="input input-bordered"
                            bind:value={registerRePassword}
                        />
                    </label>
                </div>

                <div class="modal-action">
                    <button class="btn" on:click={handleRegister}>
                        Register
                    </button>
                    <label for="register-modal" class="btn">Cancel</label>
                </div>
            </label>
        </label>
    </div>
</div>

<style>
</style>
