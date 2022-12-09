<script>
    import { isNil } from 'lodash-es'
    import Cookies from 'js-cookie'
    import { navigate } from 'svelte-routing'
    import { store } from '../store/store'
    // $: isLogin = !isNil(Cookies.get('auth'))

    $: isLogin = $store.isLogin
    $: !isLogin && (() => navigate('/', { replace: true }))
</script>

<div>
    <slot />
</div>

<style>
</style>
