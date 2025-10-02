<template>
  <div>
    <ProfileCard
        name="Hani Fares"
        title="Software Engineer"
        handle="hanifares"
        status="Online"
        contact-text="Contact Me"
        :avatar-url="avatar"
        :icon-url="pattern"
        :grain-url="grain"
        :show-user-info="true"
        :show-behind-gradient="true"
        :enable-tilt="true"
        @contact-click="handleContactClick"
        class="flex justify-center"
    />
  </div>

</template>

<script setup lang="ts">
import ProfileCard from "../components/ProfileCard.vue";
import avatar from "../assets/images/hani-without-bg.png";
import pattern from "../assets/images/iconpattern.png"
import grain from "../assets/images/grain.webp"
const handleContactClick = () => {
  console.log('Contact button clicked!');
};
</script>