<script>
    import { onMount } from 'svelte'
    import Cookies from 'js-cookie'
    import { isNil } from 'lodash-es'
    import MainLayout from '../components/MainLayout.svelte'
    import CarCard from '../components/cards/CarCard.svelte'

    $: isLogin = !isNil(Cookies.get('auth'))

    onMount(async () => {
        Cookies.set(
            'auth',
            // fake bearer
            'KpTmIt6JWCWD/JEJzL5weSxFRxIPoq/U2d2ZqO-rA-tfcBGS7e5qvpvvN0?aCDWGMH1hRHVlkE2e3pcqo1bgwPBlAaiKUBF9/kp-6eDI5FB?5h5WpcpkPgFXbqs4HuAccIHeXMhmJSCrjG/YSEkWeeUkUUo9hvI4ieeNEgjLT/7Ties-BSfLJSvd-KmNmyiRUz!maByLRSBL9eY2Y7APvGgGMyIX?okGnqArSqMB620=frc5owwJA4AO45v76x2b'
        )
        // Cookies.remove("auth");
    })
</script>

<div>
    <MainLayout>
        {#if isLogin}
            <div><CarCard /></div>
        {:else}
            <p>pls login</p>
        {/if}
    </MainLayout>
</div>

<style></style>
