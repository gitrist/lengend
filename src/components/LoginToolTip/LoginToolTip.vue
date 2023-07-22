<template>
	<div
		data-popover
		id="popover-Login"
		role="tooltip"
		class="overflow-hidden absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-500 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-[#404040] dark:bg-[#303030]"
	>
		<div class="flex justify-center px-3 py-4 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-[#404040] dark:bg-[#404040]">
			<button
				type="button"
				class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-[20px] text-sm px-12 py-2.5 text-center mr-2 mb-2"
			>
				LOGIN IN
			</button>
		</div>
		<div class="flex justify-between py-4 px-4">
			<div class="font-semibold">Mode</div>
			<label class="relative inline-flex items-center cursor-pointer">
				<input type="checkbox" :value="mode" class="sr-only peer" @change="changeMode" checked />
				<div
					class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
				></div>
			</label>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const mode = ref(false)

function changeMode(val) {
	console.log('😃val:', val)
}
</script>
