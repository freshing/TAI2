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
                            <h2>Rejestracja</h2>
                        </v-card-text>
                    </v-card>

                    <v-card>
                        <v-card-text class="pt-4">
                            <v-form v-model="valid" ref="form">
                                <v-text-field label="Nazwa Użytkownika" v-model="username" :rules="usernameRules" required ></v-text-field>

                                <v-text-field label="Hasło"
                                              v-model="password1"
                                              min="8"
                                              :append-icon="passwordVisable ? 'visibility' : 'visibility_off'"
                                              @click:append="() => (this.passwordVisable = !this.passwordVisable)"
                                              :type="passwordVisable ? 'password' : 'text'"
                                              :rules="passwordRules"
                                              required
                                ></v-text-field>

                                <v-text-field label="Powtórz hasło"
                                              v-model="password2"
                                              min="8"
                                              :append-icon="passwordVisable ? 'visibility' : 'visibility_off'"
                                              @click:append="() => (this.passwordVisable = !this.passwordVisable)"
                                              :type="passwordVisable ? 'password' : 'text'"
                                              :rules="passwordRules"
                                              required
                                ></v-text-field>

                                <!-- <v-text-field label="Email" v-model="email" ></v-text-field> -->

                                <v-layout justify-space-between>
                                    <v-btn @click="submit" :class="valid ? 'blue white--text' : 'disabled'">Rejestruj</v-btn>
                                    <v-btn @click="back" class="blue white--text">Wróć</v-btn>
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
				password1: '',
        password2: '',
        // email: '',
				isErrorVisible: false,
				errorMessage: '',
			}
		},
		methods: {
			submit() {
				this.isErrorVisible = false;
				if (this.$refs.form.validate()) {
					this.register()
				}
			},
			register () {
				let registerData = { username: this.username, password1: this.password1, password2: this.password2};
				API.addUser(registerData)
					.then(() => this.registerSuccessful())
					.catch(() => this.registerFailed())
			},
      back() {
        this.$router.push('/login');
      },
			registerSuccessful () {
				this.isErrorVisible = false;
				this.$router.push('/dashboard');
			},
			registerFailed () {
				this.$refs.form.resetValidation();
				this.isErrorVisible = true;
				this.errorMessage = 'Wystąpił błąd';
				this.password1 = "";
        this.password2 = "";
			},
		},
	};

</script>

<style>
    #error-bar {
        width: 98%;
    }
</style>
