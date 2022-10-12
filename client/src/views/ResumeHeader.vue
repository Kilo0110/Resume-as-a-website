<template>
  <header
    class="bg-fuchsia-900 text-white text-center p-16 flex flex-col gap-2"
  >
    <p class="name text-4xl font-bold">Divine Ahaka</p>
    <p class="job-tag text-3xl">Fullstack Web Developer</p>
    <ul
      class="contact-details flex flex-col justify-center items-center gap-3 md:flex-row"
    >
      <li
        class="contact-info flex gap-2 items-center text-center"
        id="email-info"
      >
        <i class="fa-solid fa-envelope"></i>
        <a href="mailto:kamcyahaka@gmail.com">kamcyahaka@gmail.com</a>
      </li>
      <li
        class="contact-info flex gap-2 items-center text-center"
        id="phone-info"
      >
        <i class="fa-solid fa-phone"></i>
        <span>07064613220</span>
      </li>
      <li
        class="contact-info flex gap-1 items-center text-center"
        id="github-info"
      >
        <i class="fa-brands fa-github"></i>
        <a href="https://github.com/Kilo0110">github.com/Kilo0110</a>
      </li>
    </ul>
    <p class="address-info">
      <i class="fa-solid fa-location"></i>
      14 Oremerin Street Kudeyibu Estate, Ijegun, Lagos, Nigeria
    </p>
  </header>
</template>
<script setup></script>

<style lang="scss" scoped></style>
