<template>
    <div>
        <SignupForm></SignupForm>
    </div>
</template>

<script>
import SignupForm from '../components/SignupForm';
import router from '../routes/index';
export default {
    beforeCreate() {
        const token = sessionStorage.getItem("access_token");
        if(token) {
            router.push({
                name: "WhiteBoard"
            })
        }
    },
    mounted() {},
    components: {
        SignupForm
    },
};
</script>

<style scoped>

</style>