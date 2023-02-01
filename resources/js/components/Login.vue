<template>
    <div class="row justify-content-center">
        <div class="col-lg-12 d-none d-lg-block bg-login-image"></div>
        <div class="col-lg-6">
            <div class="p-5">
                <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Login Here!</h1>
                </div>
                <form class="user" @submit.prevent="login">
                    <div class="form-group">
                        <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            v-model="form.email"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            v-model="form.password"
                        />
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                            <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customCheck"
                            />
                            <label
                                class="custom-control-label"
                                for="customCheck"
                                >Remember Me</label
                            >
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary btn-user btn-block"
                    >
                        Login
                    </button>
                    <hr />
                </form>
                <hr />
                <div class="text-center">
                    <router-link class="small" to="/forgot-password"
                        >Forgot Password?</router-link
                    >
                </div>
                <div class="text-center">
                    <router-link class="small" to="/register"
                        >Create an Account!</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                email: null,
                password: null,
            },
        };
    },
    methods: {
        login() {
            alert("it works");
        },
    },
};
</script>

<style scoped></style>
