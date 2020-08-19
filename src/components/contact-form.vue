<template>
<div class="contact-form">

	<ValidationObserver ref="observer" v-slot="{ validate, reset, handleSubmit }">
		<v-card class="pa-4">
			<v-progress-linear
			:active="formSending"
			indeterminate
			absolute
			top
			color="primary"
			></v-progress-linear>
			<form v-if="!formSent" @submit.prevent="handleSubmit(submit)">
				<ValidationProvider v-slot="{ errors }" name="Name" rules="required">
					<v-text-field
						v-model="form.name"
						:error-messages="errors"
						label="Name"
						required
					></v-text-field>
				</ValidationProvider>
				<ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
					<v-text-field
						v-model="form.email"
						:error-messages="errors"
						label="E-mail"
						required
					></v-text-field>
				</ValidationProvider>
				<ValidationProvider v-slot="{ errors }" name="message" rules="required">
					<v-textarea
						v-model="form.message"
						label="How can I help?"
						:error-messages="errors"
						required>
						</v-textarea>
				</ValidationProvider>

				<br>
					<v-btn :disabled="formSending" color="primary" class="mr-4" type="submit">
						<template v-if="formSending">
							sending...
						</template>
						<template v-else>
							Send Me Your Message
						</template>
					</v-btn>
					<v-btn @click="clear">clear</v-btn>

			</form>
			<div class="success-message" v-else>
				<h2>👍Your message has been sent, thanks {{form.name}}!</h2>
			</div>
		</v-card>
		</ValidationObserver>

</div>
</template>

<script>
import { required, email } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import {cloud} from "@/firebase";

setInteractionMode('eager')

extend('required', {
	...required,
	message: '{_field_} can not be empty',
})

extend('email', {
	...email,
	message: 'Email must be valid',
})

export default {
	name: 'contact-form',
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	computed: {

	},
	data() {
		return {
			formSending: false,
			formSent: false,
			form:{
				name: '',
				email: '',
				message:'',
				actionCodeSettings: "data_actionCodeSettings"
			}
		};
	},
	methods: {
		// submit form handler
		submit () {
			let vThis = this;
			console.log(this.$refs.observer.validate());
				this.formSending = true;
				let sendContactEmail = cloud.httpsCallable('sendContactEmail');
				sendContactEmail(this.form).then(function(result) {
					// console.log(result);
					if(result.data == true){
						vThis.formSending = false;
						vThis.formSent = true;
					}
				});
		},
		clear () {
				this.form.name = ''
				this.form.email = ''
				this.form.message = ''
				this.$refs.observer.reset()
			},
	},
	created() {

	}
}
</script>


<style lang="scss" >
.contact-form{
	v-card{
		position: relative;
	}
	.v-btn{
		position: relative;
	}
}
</style>
