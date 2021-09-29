<template>
    <div>
        這個頁面用來測試動態路由!!
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params);
    }
}
</script>

<style>

</style>