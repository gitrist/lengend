<template>
	<div class="text-white md:py-5">
		<ul class="flex justify-around flex-wrap">
			<li class="w-[200px] h-[300px] border-[1px] rounded-lg overflow-hidden m-auto mt-5 md:m-5 text-center" v-for="item in countries" :key="item">
				<div>
					{{ item.name }}
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { countries } from '../../utils'
</script>
