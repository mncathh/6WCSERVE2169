<!-- <script setup>
import AboutUs from './components/AboutUs.vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script> -->

<template>
  <div id="app" class="resume">
    <!-- Profile Section -->
    <div class="box profile">
      <img src="./assets/icon.jpg" alt="Profile Icon" class="profile-image" />
      <h1>Catherine Tyra G. Laguda</h1>
      <p><strong>Objective:</strong> Dedicated and detail-oriented student with strong academic records and proficiency in various technical skills. A quick learner and effective communicator, eager to contribute to the tech industry.</p>
      <p><strong>Contact:</strong> 09192641943 | <strong>Location:</strong> San Fernando City, Philippines</p>
      <p><strong>Socials:</strong> LinkedIn | GitHub | Stackblitz </p>
    </div>

    <!-- Education Section -->
    <div class="box education">
      <h2>Education</h2>
      <ul>
        <li><strong>Elementary:</strong> Sto. Rosario Elementary School</li>
        <li><strong>Junior High:</strong> Holy Angel University</li>
        <li><strong>Senior High:</strong> Angeles City Science High School - STEM</li>
        <li><strong>College:</strong> Holy Angel University - BS in Information Technology (Web Development)</li>
      </ul>
    </div>

    <!-- Skills Section -->
    <div class="box skills">
      <h2>Skills</h2>
      <ul>
        <li><strong>Training:</strong> Front End Web Development Bootcamp</li>
        <li><strong>Seminars:</strong> Advanced JavaScript Conference 2023</li>
        <li><strong>Technologies:</strong> Vue.js, Node.js and MongoDB</li>
        <li><strong>Languages:</strong> JavaScript, Python, Java and PHP</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* General styling */
.resume {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Arial', sans-serif;
  background-color: #f1efe9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
}

/* Box for sections */
.box {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Profile Image */
.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 2px solid #ddd;
  object-fit: cover;
}

h1 {
  font-size: 2.4rem;
  color: #333;
  margin-top: 0;
  font-weight: 600;
}

h2 {
  font-size: 1.8rem;
  color: #444;
  margin-bottom: 10px;
}

p {
  font-size: 1.1rem;
  color: #555;
  margin: 8px 0;
}

strong {
  color: #333;
  font-weight: 600;
}

/* Education & Skills List */
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 12px;
}

li strong {
  color: #222;
}
</style>
