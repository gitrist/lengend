<script setup>
import { ref } from 'vue'
const visible = ref(false)

const toggleVisible = () => {
	visible.value = !visible.value
}
</script>
<template>
	<header class="relative dark:text-white shadow-md" id="header">
		<div class="h-[56px] dark:bg-[#131415] text-[14px] sm:h-[64px] md:h-[72px]">
			<div class="mx-auto flex h-full max-w-[1280px] flex-1 py-0 md:px-[24px]">
				<a class="inline-flex items-center space-x-[6px]" aria-label="LEGENDSTORIES" href="/">
					<span class="font-semibold tracking-[1.29px] hidden sm:inline">LEGENDSTORIES</span>
				</a>
				<div
					:class="`flex absolute w-full md:static md:top-auto md:w-auto transition-[top] duration-500 left-0 dark:bg-[#333435] dark:md:bg-transparent z-[1] ${
						visible ? 'top-[56px]' : 'top-[-100%]'
					}`"
				>
					<div class="mr-[8px] block md:flex flex-1 items-center pt-[8px] sm:pt-0 md:ml-[13px]">
						<a class="font-semibold block p-3 md:flex md:h-full items-center px-[12px]" href="/novels">Series</a>
						<a class="font-semibold block p-3 md:flex md:h-full items-center px-[12px]" href="/manage/bookmarks">Bookmarks</a>
					</div>
				</div>
				<div class="relative z-10 dark:bg-[#131415] ml-auto flex items-center w-full justify-between md:w-auto md:justify-normal space-x-[8px]">
					<div class="relative">
						<div class="w-full">
							<div
								class="flex items-center overflow-hidden relative hover:shadow-md transition-shadow bg-gray-100 dark:bg-[#202020] h-[44px] rounded-full px-[15px]"
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="h-[17px] w-[17px] text-gray-600">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0Zm-.808 5.606a7 7 0 1 1 1.414-1.414l5.101 5.1-1.414 1.415-5.1-5.1Z"
									></path>
								</svg>
								<input
									class="transition-all ml-[5px] bg-gray-100 dark:placeholder:bg-[#202020] bottom-0 h-[34px] dark:bg-[#202020] focus:border-none focus:pr-[25px] outline-none"
									aria-invalid="false"
									autocomplete="off"
									placeholder="Search"
									type="text"
									aria-autocomplete="list"
									aria-expanded="false"
									autocapitalize="none"
									spellcheck="false"
									role="combobox"
									aria-label="search"
									value=""
								/>
								<fieldset aria-hidden="true"></fieldset>
							</div>
						</div>
					</div>
					<button
						class="md:p-[8px] hidden md:block bg-gray-100 md:hover:bg-gray-50 dark:md:hover:bg-black md:rounded-[50%] dark:md:bg-[#202020] overflow-hidden"
						tabindex="0"
						type="button"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							class="h-[24px] w-[24px] md:h-[28px] md:w-[28px]"
						>
							<path
								d="M14.444 6.444a4.444 4.444 0 1 1-8.888 0 4.444 4.444 0 0 1 8.888 0ZM10 11.778c-3.304 0-6.161 2.026-7.527 4.97-.282.606.198 1.252.866 1.252h13.322c.668 0 1.148-.646.866-1.252-1.366-2.944-4.223-4.97-7.527-4.97Z"
							></path>
						</svg>
					</button>
					<button class="bg-transparent p-[8px] block md:hidden" tabindex="0" type="button" @click="toggleVisible">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							class="h-[24px] w-[24px] md:h-[28px] md:w-[28px]"
						>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M18 5.5H2v-2h16v2Zm0 5.5H2V9h16v2Zm0 5.5H2v-2h16v2Z"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</header>
</template>
