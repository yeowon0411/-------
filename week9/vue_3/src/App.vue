<template>
  <div>
    <div class="header">
      <router-link to="/" class="item"> Home </router-link>
      <router-link to="/mypage/김창복/개발자" class="item"> mypage </router-link>
      <router-link to="/recommend" class="item"> recommend </router-link>
      <router-link to="/search" class="item"> search </router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<style>
.header {
  background: blue;
  display: table;
  width: 80%
}

.item {
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  display: table-cell;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
}

.item:hover {
  background: orange;
}

.item:active {
  background: white;
  color: blue;
}
</style>
  