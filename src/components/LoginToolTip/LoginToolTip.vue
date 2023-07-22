<template>
	<div id="dropdownBottom" class="z-10 hidden bg-gray-50 dark:divide-[#404040] rounded-lg shadow dark:bg-[#303030] w-full md:w-[300px]">
		<div class="flex justify-center py-4 px-1 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-[#404040] dark:bg-[#404040]">
			<button
				type="button"
				class="font-semibold text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-[20px] text-sm px-16 py-2.5 text-center mr-2 mb-2"
			>
				LOG IN
			</button>
		</div>
		<div class="flex justify-between py-4 px-4">
			<div class="font-semibold">{{ mode }}</div>
			<label class="relative inline-flex items-center cursor-pointer z-20">
				<input type="checkbox" value="" class="sr-only peer" @change="(e) => changeMode(e.target.checked)" checked />
				<div
					class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-br peer-checked:from-purple-600 peer-checked:to-blue-500"
				></div>
			</label>
		</div>
		<div data-popper-arrow></div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const mode = ref('Dark')

function changeMode(e) {
	if (document && localStorage && window) {
		localStorage.theme = 'light'
		document.documentElement.classList.remove('dark')
		mode.value = 'Light'
		if (e) {
			localStorage.theme = 'dark'
		}
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark')
			mode.value = 'Dark'
		}
	}
}

onMounted(() => {
	changeMode(true)
})
</script>
