<template>
  <div class="profile">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg">    
                <div class="media-text text-left">
                    <div class="mr-3">
                        <div class="media-body">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img src="https://picsum.photos/200/300" class="user-pic" alt="">
                                </div>
                                <div class="text-start flex-grow-1 ms-3">
                                    <h1>
                                        {{firstName}} {{lastName}}
                                    </h1>
                                    <p class="fw-base ">
                                        {{aboutMe}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'ProfileView',
    data: function() {
        return {
            firstName: 'Ali',
            lastName: 'Zulfikar',
            aboutMe: 'I am a web developer, I love to code and I am a fan of Vue.js.',
        }
    },
    props: {
        msg: String
    }
}
</script>

<style scoped>
    .user-pic {
        width: 240px;
        height: 240px;
        border-radius: 50%;
    }
</style>
