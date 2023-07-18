<script setup></script>
<template>
	<header class="sticky dark:text-white" id="header">
		<div class="h-[56px] dark:bg-black text-[14px] sm:h-[64px] md:h-[72px]">
			<div class="mx-auto flex h-full max-w-[1280px] flex-1 py-0 px-[8px] md:px-[24px]">
				<a class="inline-flex items-center space-x-[6px]" aria-label="LEGENDSTORIES" href="/">
					<span class="font-semibold tracking-[1.29px] hidden sm:inline">LEGENDSTORIES</span>
				</a>
				<div class="hidden md:flex">
					<div class="mr-[8px] flex flex-1 items-center pt-[8px] sm:pt-0 md:ml-[13px]">
						<a class="font-semibold flex h-full items-center px-[12px]" href="/novels">Series</a>
						<a class="font-semibold flex h-full items-center px-[12px]" href="/manage/bookmarks">Bookmarks</a>
						<button class="font-semibold flex h-full items-center pl-[12px]" aria-haspopup="true">
							Resources
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								class="ml-[2px] h-[14px] w-[14px] font-semibold rotate-180 text-gray-desc"
							>
								<path fill-rule="evenodd" clip-rule="evenodd" d="m10 7.37 7.316 6.86 1.368-1.46L10 4.63l-8.684 8.14 1.368 1.46L10 7.37Z"></path>
							</svg>
						</button>
					</div>
				</div>
				<div class="ml-auto flex items-center space-x-[8px]">
					<div class="relative">
						<div class="w-full">
							<div
								class="flex items-center overflow-hidden relative rounded-md hover:shadow-md transition-shadow dark:bg-[#202020] dark:h-[44px] dark:rounded-full px-[15px]"
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="h-[17px] w-[17px] text-gray-600">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0Zm-.808 5.606a7 7 0 1 1 1.414-1.414l5.101 5.1-1.414 1.415-5.1-5.1Z"
									></path>
								</svg>
								<input
									class="transition-all ml-[5px] placeholder:bg-[#202020] bottom-0 h-[34px] dark:bg-[#202020] focus:border-none focus:pr-[25px] outline-none"
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
						class="bg-transparent p-[8px] hover:bg-transparent md:dark:hover:bg-black md:with-hover:hover:bg-gray-200 md:with-hover:dark:bg-gray-800"
						tabindex="0"
						type="button"
						aria-haspopup="true"
						aria-label="profile nav"
						data-cy="header-button-user-anonymous"
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
					<div>
						<button
							class="bg-transparent p-8 hover:bg-transparent md:bg-gray-container-base md:hover:bg-gray-100 md:dark:hover:bg-black md:with-hover:hover:bg-gray-200 md:with-hover:dark:bg-gray-800 e1iicaxz0 ww-2qi1fl"
							tabindex="0"
							type="button"
							aria-label="menu"
						>
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
		</div>
	</header>
</template>
