<template>
  <div
    class="container flex flex-col items-center justify-center gap-5 bg-blue-500 max-w-lg mx-auto py-7 rounded-2xl text-white"
  >
    <h1 class="text-8xl">404</h1>
    <h2 class="text-4xl">Looks like you are lost.</h2>
    <p>The page you are looking for is not available!</p>
    <router-link to="/">
      <button
        class="px-3 py-1 rounded border-[1px] hover:-translate-y-1 transition-all hover:border-solid hover:border-blue-500 hover:bg-white hover:text-blue-500 bg-blue-500"
      >
        Go home
      </button>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>
