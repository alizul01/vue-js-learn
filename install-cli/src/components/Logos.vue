<template>
    <div class="logos-wrapper">
        <h2>Find Best Logo only at Logoos!</h2>
        <div class="item-logos">
            <img src="https://logo.clearbit.com/spotify.com" alt="Spotify Logo">
        </div>
        <div class="item-logos">
            <img src="https://logo.clearbit.com/apple.com" alt="Apple Logo">
        </div>
        <div class="item-logos">
            <img src="https://logo.clearbit.com/google.com" alt="Google Logo">
        </div>
        <div class="item-logos">
            <img src="https://logo.clearbit.com/facebook.com" alt="Facebook Logo">
        </div>
        <div class="item-logos">
            <img src="https://logo.clearbit.com/twitter.com" alt="Twitter Logo">
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Logos',
    props: {
        msg: String
    }
}
</script>

<style scoped>
    .logos-wrapper {
        width: 70%;
        margin: auto;
        text-align: center;
        overflow: hidden;
    }

    .item-logos {
        float: left;
        margin-left: 20px;
        margin-top: 20px;
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>