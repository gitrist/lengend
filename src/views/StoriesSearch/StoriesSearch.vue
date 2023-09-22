<template>
	<div class="dark:text-white pt-[20px] flex w-full">
		<div class="flex-[2] h-[300px]">
			<Carousel />
		</div>
		<div class="flex-[1]">
			<div class="relative overflow-x-auto">
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="px-6 py-3">
								Product name
							</th>
							<th scope="col" class="px-6 py-3">
								Color
							</th>
							<th scope="col" class="px-6 py-3">
								Category
							</th>
							<th scope="col" class="px-6 py-3">
								Price
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(item, index) in Array.of(1,2,3,4,5)" :key="item">
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								Apple MacBook Pro 17" {{ item }}
							</th>
							<td class="px-6 py-4">
								Silver
							</td>
							<td class="px-6 py-4">
								Laptop
							</td>
							<td class="px-6 py-4">
								$2999
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div class="flex justify-around">
		<Card class="m-[10px] p-[10px]" v-for="(item, index) in Array.of(1,2,3,4)" :key="item" />
	</div>
</template>

<script setup>
import Carousel from '../../components/Carousel/Carousel.vue';
import Card from '../../components/Card/Card';
</script>
