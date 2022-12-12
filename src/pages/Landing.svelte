<script>
    import { onMount } from 'svelte'
    import Cookies from 'js-cookie'
    import { isEmpty, isNil } from 'lodash-es'
    import MainLayout from '../components/MainLayout.svelte'
    import CarCard from '../components/cards/CarCard.svelte'
    import { store } from '../store/store'
    import { Link, navigate } from 'svelte-routing'

    // $: isLogin = !isNil(Cookies.get('auth'))
    $: isLogin = $store.isLogin
    $: car = $store.bookedCars[0] ? $store.bookedCars[0] : []

    // onMount(async () => {
    //     Cookies.set(
    //         'auth',
    //         // fake bearer
    //         'KpTmIt6JWCWD/JEJzL5weSxFRxIPoq/U2d2ZqO-rA-tfcBGS7e5qvpvvN0?aCDWGMH1hRHVlkE2e3pcqo1bgwPBlAaiKUBF9/kp-6eDI5FB?5h5WpcpkPgFXbqs4HuAccIHeXMhmJSCrjG/YSEkWeeUkUUo9hvI4ieeNEgjLT/7Ties-BSfLJSvd-KmNmyiRUz!maByLRSBL9eY2Y7APvGgGMyIX?okGnqArSqMB620=frc5owwJA4AO45v76x2b'
    //     )
    //     $store.isLogin = true
    //     // Cookies.remove("auth");
    // })
</script>

<div>
    <MainLayout>
        {#if isLogin}
            {#if !isEmpty(car)}
                <div><CarCard /></div>
            {:else}
                <div class="flex justify-center flex-col">
                    <p class="flex justify-center">Let's Find a Car !</p>
                    <button
                        class="btn"
                        on:click|preventDefault={() => {
                            navigate('car-sharing-svelte/findingcar', {
                                replace: true,
                            })
                        }}
                    >
                        Search for car !
                    </button>
                </div>
            {/if}
        {:else}
            <p>Please Login !</p>
        {/if}
    </MainLayout>
</div>

<style></style>
