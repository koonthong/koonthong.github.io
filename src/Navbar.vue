<template>
  <header claas="main">
    <div id="site-header">
      <div>
        <ul>
          <li>
            <a href>
              <img
                src="./assets/STORATE-logo.png"
                alt="STORATE"
                id="logo"
                data-was-processed="true"
              >
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            Search
          </li>
          <li>
            HELP
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
nav.main {
  width: 1280px;
  height: 129.2px;
  background-color: #ffffff;
}

#site-header {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 75px;
  margin: 0 -15px;
}

#logo {
  height: 80px;
  width: 254px;
}

nav ul {
  padding: 0;
}
nav li {
  margin: 50;
  font-family: Cloud;
  font-size: 21px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: left;
  color: #292929;
}
</style>
