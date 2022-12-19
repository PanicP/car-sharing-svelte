<script>
    export let isShowNoti = false
    export let label = ''
</script>

<div>
    {#if isShowNoti}
        <div class="toast toast-top toast-end z-10">
            <div class="alert alert-error">
                <div>
                    <span>{label}</span>
                </div>
            </div>
        </div>
    {/if}
</div>

<style></style>
