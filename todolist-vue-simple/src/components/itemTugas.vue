<template>
    <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label v-bind:class="{'item-completed':tugasSaya.isDone}" class="form-check-label item" for="defaultCheck1">
            <p>
            {{ tugasSaya.nama }}
            </p>
          </label>
        </div>
</template>

<script>
    export default {
        name: "ItemTugas",
        props: {
            tugasSaya: {
                type: Object,
                required: true
            }
        },
        data: function () {
            return {
                isDone: false
            };
        },
        methods: {
            onClick: function () {
                this.isDone = !this.isDone;
                this.$emit('done', this.tugasSaya.id);
            }
        }
    };
</script>

<style scoped>

</style>