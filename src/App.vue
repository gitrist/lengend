<template>
	<div class="flex flex-col h-full">
		<HeaderCommon />
		<div class="flex-1 dark:bg-[#202020]">
			<div class="max-w-[1280px] h-full mx-auto px-[24px] sm2:px-[40px]">
				<router-view />
			</div>
		</div>
		<FooterCommon />
	</div>
</template>

<script setup>
import FooterCommon from './components/Footer/FooterCommon.vue'
import HeaderCommon from './components/Header/HeaderCommon.vue'
</script>
