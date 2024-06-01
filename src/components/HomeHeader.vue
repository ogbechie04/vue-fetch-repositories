<template>
  <div class="header flex flex-col gap-10 justify-center items-center lg:flex-row">
    <img
      src="../assets/vlcsnap-2022-10-26-22h16m20s453.png"
      class="w-80 h-80 rounded-full border-2 border-solid border-gray-400"
      alt="Laura Ogbechie"
    />
    <div class="profile flex flex-col border-2 border-solid rounded-xl border-gray-100 p-5">
      <h1 class="text-5xl font-[Lora] mt-2.5 font-semibold">Ogbechie&apos;s Repository</h1>
      <hr class="my-4">
      <p class="text-base">
        Hi there! My name&apos;s Ogbechie Laura. Frontend Dev on her way to Fullstack and this is
        the list of my repositories.
      </p>
      <b class="py-3">Here&apos;s a quick summary about me:</b>
      <p class="pb-1.5"><b>Pronouns:</b> She/Her</p>
      <p class="py-1.5"><b>Goals:</b> To be one of the top recognized-worldwide Software Engineer.</p>
      <p class="py-1.5">
        I&apos;m currently learning and building projects with JavaScript, React, Chakra-UI,
        Tailwind CSS Vue and Typescript.
      </p>
    </div>
  </div>
</template>

<script>
import '../assets/main.css'
export default {
  name: 'HomeHeader',
  props: {
    title: String
  }
}
</script>
