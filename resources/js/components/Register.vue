<template>
    <div class="row justify-content-center">
        <div class="col-lg-12 d-none d-lg-block bg-register-image"></div>
        <div class="col-lg-7">
            <div class="p-5">
                <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form class="user">
                    <div class="form-group row">
                        <div class="col-sm-12 mb-3 mb-sm-0">
                            <input
                                type="text"
                                class="form-control form-control-user"
                                id="exampleFullName"
                                placeholder="Full Name"
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            placeholder="Email Address"
                        />
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                                type="password"
                                class="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Password"
                            />
                        </div>
                        <div class="col-sm-6">
                            <input
                                type="password"
                                class="form-control form-control-user"
                                id="exampleConfirmPassword"
                                placeholder="Confirm Password"
                            />
                        </div>
                    </div>
                    <a
                        href="login.html"
                        class="btn btn-primary btn-user btn-block"
                    >
                        Register Account
                    </a>
                    <hr />
                </form>
                <hr />
                <div class="text-center">
                    <router-link class="small" to="/forgot-password"
                        >Forgot Password?</router-link
                    >
                </div>
                <div class="text-center">
                    <router-link class="small" to="/"
                        >Already have an account? Login!</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>

<style scoped></style>
