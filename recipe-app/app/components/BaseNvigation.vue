<template>
    <div>
        <header>
            <nav class="flex container items-center">
                <NuxtLink to="/" class="flex gap-1 items-center">
                    <NuxtImg width="56px" densities="1x" src="/icon-green.png" />
                    <span class="text-3xl font-bold">Nuxtcipes</span>
                </NuxtLink>
                <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
                    <li>
                        <NuxtLink to="/" >Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" >About</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>