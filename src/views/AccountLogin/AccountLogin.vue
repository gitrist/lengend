<template>
	<div class="px-[20px] md:px-[18rem] lg:px-[22rem] py-16">
		<div class="flex justify-center">
			<div class="w-full">
				<div>
					<div class="mb-[20px]">
						<h2 class="text-[24px] font-semibold">Log in</h2>
					</div>
					<div>
						<form method="post" action="/Account/Login" novalidate="false">
							<div class="py-[8px]">
								<div class="flex justify-between items-center">
									<label class="text-[13px] font-semibold text-black dark:text-white" for="Username">Email</label>
									<span class="text-[13px] text-[#dd3545] font-semibold field-validation-valid" data-valmsg-for="Username" data-valmsg-replace="true"></span>
								</div>
								<input
									autocomplete="email"
									class="my-[8px] p-[12px] w-full h-[44px] bg-white dark:bg-[#202020] rounded-[6px] border border-[#dadada] focus:ring-blue focus:border-blue outline-none"
									type="email"
									placeholder="Email"
									tabindex="1"
									enterkeyhint="next"
									data-val="true"
									data-val-email="Please enter a valid email address."
									data-val-required="The Email field is required."
									id="Username"
									name="Username"
									value=""
								/>
							</div>
							<div class="py-[8px]">
								<div class="flex justify-between items-center">
									<label class="text-[13px] font-semibold text-black dark:text-white" for="Password">Password</label>
									<a
										class="text-[#999] text-[13px] font-semibold underline"
										href="/Account/ForgotPassword?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dwuxiaworld_spa%26redirect_uri%3Dhttps%253A%252F%252Fwww.wuxiaworld.com%252Fauth%252Fcallback%252Fwuxiaworld%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520api%2520email%2520offline_access%26state%3D99455062810b4d659077166b6d4198e6%26code_challenge%3DrEg6rI8XRO3zsJrX39J1u_J0qlVtpcR4AekyciwmRrA%26code_challenge_method%3DS256%26response_mode%3Dquery%26prompt%3Dlogin%26suppressed_prompt%3Dlogin"
									>
										Forgot password?
									</a>
								</div>
								<input
									class="my-[8px] p-[12px] w-full h-[44px] bg-white dark:bg-[#202020] rounded-[6px] border border-[#dadada] focus:ring-blue focus:border-blue outline-none"
									type="password"
									placeholder="Password"
									tabindex="2"
									autocomplete="current-password"
									enterkeyhint="go"
									data-val="true"
									data-val-required="The Password field is required."
									id="Password"
									name="Password"
								/>
							</div>
							<div class="py-[8px]">
								<button
									type="submit"
									name="button"
									value="login"
									tabindex="4"
									class="w-full rounded-[6px] py-[12px] bg-gradient-to-r from-[#1c9dfe] via-blue to-[#023ff4] text-white text-[15px] font-bold"
								>
									Log in
								</button>
							</div>

							<div class="py-[8px]">
								<p class="text-center space-x-[12px]">
									<span class="text-[#777] text-[13px] font-semibold">Don't have an account? </span>
									<a
										class="text-blue text-[13px] font-semibold"
										href="/Account/Register?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dwuxiaworld_spa%26redirect_uri%3Dhttps%253A%252F%252Fwww.wuxiaworld.com%252Fauth%252Fcallback%252Fwuxiaworld%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520api%2520email%2520offline_access%26state%3D99455062810b4d659077166b6d4198e6%26code_challenge%3DrEg6rI8XRO3zsJrX39J1u_J0qlVtpcR4AekyciwmRrA%26code_challenge_method%3DS256%26response_mode%3Dquery%26prompt%3Dlogin%26suppressed_prompt%3Dlogin"
										>Sign up</a
									>
								</p>
							</div>
							<input
								name="__RequestVerificationToken"
								type="hidden"
								value="CfDJ8BlHYnCI3JdIk7jmT_TJ_OFbI_8KD6T6ptgKQ8S2is7KEW59B7FFqG_mtirZ83cgnZ3NKcFnXHpltiioTDtEtOsEMYDKJrXQAHl51VPNLoSf6UMGqOiAXKwhJc-nxoyo7Lur6frimBVF6uwXGcW_6RQ"
							/>
						</form>
					</div>
				</div>

				<div class="line-between mt-[30px] mb-[20px]">
					<span>Or</span>
				</div>

				<div class="flex flex-col space-y-[10px]">
					<a
						class="rounded-[6px] h-[44px] text-[14px] font-semibold bg-white text-black border border-[#dadada]"
						href="/External/Challenge?scheme=Google&amp;returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dwuxiaworld_spa%26redirect_uri%3Dhttps%253A%252F%252Fwww.wuxiaworld.com%252Fauth%252Fcallback%252Fwuxiaworld%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520api%2520email%2520offline_access%26state%3D99455062810b4d659077166b6d4198e6%26code_challenge%3DrEg6rI8XRO3zsJrX39J1u_J0qlVtpcR4AekyciwmRrA%26code_challenge_method%3DS256%26response_mode%3Dquery%26prompt%3Dlogin%26suppressed_prompt%3Dlogin"
					>
						<div class="h-full grid grid-flow-col items-center">
							<div class="ml-[20px] w-[20px] h-[20px]">
								<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
									<g fill="none" fill-rule="evenodd">
										<path
											d="M20.6 11.227c0-.709-.064-1.39-.182-2.045H11v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z"
											fill="#4285F4"
										></path>
										<path
											d="M11 21c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H2.064v2.59A9.996 9.996 0 0 0 11 21z"
											fill="#34A853"
										></path>
										<path
											d="M5.405 12.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V6.51H2.064A9.996 9.996 0 0 0 1 11c0 1.614.386 3.14 1.064 4.49l3.34-2.59z"
											fill="#FBBC05"
										></path>
										<path
											d="M11 4.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C15.959 1.99 13.695 1 11 1 7.09 1 3.71 3.24 2.064 6.51l3.34 2.59C6.192 6.736 8.396 4.977 11 4.977z"
											fill="#EA4335"
										></path>
									</g>
								</svg>
								&nbsp;
							</div>
							<div class="ml-[-20px]">Continue with Google</div>
						</div>
					</a>
					<a
						class="rounded-[6px] h-[44px] text-[14px] font-semibold bg-[#3b5997] text-white"
						href="/External/Challenge?scheme=Facebook&amp;returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dwuxiaworld_spa%26redirect_uri%3Dhttps%253A%252F%252Fwww.wuxiaworld.com%252Fauth%252Fcallback%252Fwuxiaworld%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520api%2520email%2520offline_access%26state%3D99455062810b4d659077166b6d4198e6%26code_challenge%3DrEg6rI8XRO3zsJrX39J1u_J0qlVtpcR4AekyciwmRrA%26code_challenge_method%3DS256%26response_mode%3Dquery%26prompt%3Dlogin%26suppressed_prompt%3Dlogin"
					>
						<div class="h-full grid grid-flow-col items-center">
							<div class="ml-[20px] w-[20px] h-[20px]">
								<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M21.122 11.061C21.122 5.505 16.618 1 11.062 1 5.504 1 1 5.505 1 11.061 1 16.083 4.68 20.245 9.49 21v-7.03H6.933V11.06H9.49V8.845c0-2.522 1.502-3.915 3.8-3.915 1.101 0 2.252.197 2.252.197v2.476h-1.268c-1.25 0-1.64.775-1.64 1.57v1.888h2.79l-.446 2.908h-2.344V21c4.81-.755 8.49-4.917 8.49-9.939z"
										fill="#FFF"
										fill-rule="nonzero"
									></path>
								</svg>
								&nbsp;
							</div>
							<div class="ml-[-20px]">Continue with Facebook</div>
						</div>
					</a>
					<a
						class="rounded-[6px] h-[44px] text-[14px] font-semibold bg-black text-white"
						href="/External/Challenge?scheme=Apple&amp;returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dwuxiaworld_spa%26redirect_uri%3Dhttps%253A%252F%252Fwww.wuxiaworld.com%252Fauth%252Fcallback%252Fwuxiaworld%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520api%2520email%2520offline_access%26state%3D99455062810b4d659077166b6d4198e6%26code_challenge%3DrEg6rI8XRO3zsJrX39J1u_J0qlVtpcR4AekyciwmRrA%26code_challenge_method%3DS256%26response_mode%3Dquery%26prompt%3Dlogin%26suppressed_prompt%3Dlogin"
					>
						<div class="h-full grid grid-flow-col items-center">
							<div class="ml-[20px] w-[20px] h-[20px]">
								<svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
									<g fill="#FFF" fill-rule="nonzero">
										<path
											d="M16.797 11.58a4.949 4.949 0 0 1 2.357-4.152 5.066 5.066 0 0 0-3.991-2.157c-1.68-.177-3.307 1.005-4.163 1.005-.872 0-2.19-.988-3.609-.959a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.349-.491 8.27 1.362 10.976.926 1.326 2.01 2.806 3.427 2.754 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.851 1.489-.024 2.427-1.331 3.321-2.669a10.962 10.962 0 0 0 1.519-3.092 4.782 4.782 0 0 1-2.92-4.4zM14.066 3.49A4.872 4.872 0 0 0 15.18 0a4.957 4.957 0 0 0-3.207 1.66 4.636 4.636 0 0 0-1.144 3.361 4.1 4.1 0 0 0 3.237-1.53z"
										></path>
									</g>
								</svg>
								&nbsp;
							</div>
							<div class="ml-[-20px]">Continue with Apple</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
	document && document.documentElement.classList.remove('dark')
})
</script>
