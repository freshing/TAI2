<template>
    <div style="height: 100%">
        <v-snackbar v-model="isErrorVisible" color="error" :timeout="6000" top>
            <v-alert :value="true" type="error" id="error-bar">
                {{ errorMessage }}
            </v-alert>

            <v-btn dark flat @click="isErrorVisible = false">
                Zamknij
            </v-btn>
        </v-snackbar>

        <v-container fluid fill-height>
            <v-layout flex align-center justify-center>
                <v-flex xs12 sm4 elevation-6>
                    <v-card class="pt-4 blue">
                        <v-card-text class="align-center white--text">
                            <h2>TAI BOX</h2>
                        </v-card-text>
                    </v-card>

                    <v-card>
                        <v-card-text class="pt-4">
                            <v-form v-model="valid" ref="form">
                                <v-text-field label="Nazwa Użytkownika" v-model="username" :rules="usernameRules" required ></v-text-field>

                                <v-text-field label="Hasło"
                                              v-model="password"
                                              min="8"
                                              :append-icon="passwordVisable ? 'visibility' : 'visibility_off'"
                                              @click:append="() => (this.passwordVisable = !this.passwordVisable)"
                                              :type="passwordVisable ? 'password' : 'text'"
                                              :rules="passwordRules"
                                              required
                                ></v-text-field>

                                <v-layout justify-space-between>
                                    <v-btn @click="submit" :class="valid ? 'blue white--text' : 'disabled'">Zaloguj</v-btn>
                                    <v-btn @click="register" class="blue white--text">Rejestracja</v-btn>
                                </v-layout>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
	import API from '@/api';

	export default {

		data() {
			return {
				valid: false,
				passwordVisable: true,
				usernameRules: [ (v) => !!v || 'Nazwa użytkownika jest wymagana' ],
				passwordRules: [ (v) => !!v || 'Hasło jest wymagane' ],
				username: '',
				password: '',
				isErrorVisible: false,
				errorMessage: '',
			}
		},
		methods: {
			submit() {
				this.isErrorVisible = false;
				if (this.$refs.form.validate()) {
					this.login()
				}
			},
			login () {
				let loginData = { username: this.username, password: this.password };
				API.login(loginData)
					.then(() => this.loginSuccessful())
					.catch(() => this.loginFailed())
			},
      register() {
        this.$router.push('/register');
      },
			loginSuccessful () {
				this.isErrorVisible = false;
				this.$router.push('/dashboard');
			},
			loginFailed () {
				this.$refs.form.resetValidation();
				this.isErrorVisible = true;
				this.errorMessage = 'Podano złe dane!';
				this.password = "";
			},
		},
	};

</script>

<style>
    #error-bar {
        width: 98%;
    }
</style>
