<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <router-view id="content" />
    </div>
</template>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
}
#nav {
    padding: 30px;
    width: 15vw;
    border-right: 2px solid #ededed;
    display: flex;
    flex-direction: column;
    a {
        padding: 10px 0px;
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
