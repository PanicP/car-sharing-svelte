<script>
    import { isNil } from 'lodash-es'
    import { Link, navigate } from 'svelte-routing'
    import { store } from '../store/store'
    import Cookies from 'js-cookie'
    import Noti from './Noti.svelte'

    let loginUser, loginPassword
    let registerUser, registerPassword, registerRePassword
    let isLoginModalOpen, isRegisterModalOpen
    let isShowLoginNoti = false
    let isShowLogoutNoti = false
    let isRegisterSuccessfullyNoti = false

    const handleLogin = () => {
        $store.registedUsers.forEach((regUser) => {
            if (regUser?.user === loginUser) {
                console.log(regUser?.user, ' ', loginUser)
                if (regUser?.password === loginPassword) {
                    // console.log(regUser?.password, ' ', loginPassword)
                    $store.isLogin = true
                    isLoginModalOpen = false
                    isShowLoginNoti = true
                    setTimeout(() => {
                        isShowLoginNoti = false
                    }, 3000)
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
            isRegisterSuccessfullyNoti = true
            setTimeout(() => {
                isRegisterSuccessfullyNoti = false
            }, 3000)
        }
    }

    const handleLogout = () => {
        Cookies.remove('auth')
        $store.isLogin = false
        navigate('/car-sharing-svelte/', { replace: true })
        isShowLogoutNoti = true
        setTimeout(() => {
            isShowLogoutNoti = false
        }, 3000)
    }

    // $: isLogin = !isNil(Cookies.get('auth'))
    $: isLogin = $store.isLogin
</script>

<div class="navbar bg-base-100">
    <!-- noti -->
    <Noti isShowNoti={isShowLoginNoti} label="Logged In" />
    <Noti isShowNoti={isShowLogoutNoti} label="Logged Out" />
    <Noti isShowNoti={isRegisterSuccessfullyNoti} label="Registered" />
    <!-- register modal -->
    <div class="navbar-start">
        <button
            on:click={() => navigate('/car-sharing-svelte/', { replace: true })}
            class="btn btn-ghost normal-case text-xl"
        >
            Panic Sharing
        </button>
    </div>
    <div class="navbar-end">
        {#if isLogin}
            <button class="btn ml-1" on:click|preventDefault={handleLogout}
                >Log out</button
            >
        {:else}
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
                        <button class="btn" on:click={handleLogin}>Login</button
                        >
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
                    <h3 class="text-lg font-bold">Register</h3>
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
        {/if}
    </div>
</div>

<style>
</style>
