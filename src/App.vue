<script setup>
import FooterCommon from './components/footer/FooterCommon.vue'
import HeaderCommon from './components/header/HeaderCommon.vue'
</script>

<template>
	<div class="flex flex-col h-full">
		<HeaderCommon />
		<div class="flex-1 dark:bg-[#131415]">
			<div class="max-w-[1280px] h-full mx-auto px-[24px] sm2:px-[40px]">
				<router-view />
			</div>
		</div>
		<FooterCommon />
	</div>
</template>
