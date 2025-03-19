<template>
    <div>
      <router-view></router-view>
      <!-- Dashboard specific content -->
    </div>
  </template>

  <script>
  export default {
    name: "DashboardLayout",
  };
  </script>

  <style scoped>
  .dashboard-container {
    background-color: white;
    padding: 20px; /* Optional: Add some padding */
  }
  </style>
