<script setup></script>
<template>
	<header class="sticky dark:text-white" id="header" style="transform: none; transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms">
		<div class="h-56 bg-gray-950 text-[14px] sm:h-[64px] md:h-[72px]">
			<div class="mx-auto flex h-full max-w-[1280px] flex-1 py-0 px-8 md:px-24">
				<a class="inline-flex items-center space-x-6" aria-label="LEGENDSTORIES" href="/">
					<span class="font-set-sb18 tracking-[1.29px] hidden sm:inline">LEGENDSTORIES</span>
				</a>
				<div class="hidden md:flex">
					<div class="mr-8 flex flex-1 items-center pt-[8px] sm:pt-0 md:ml-13">
						<a class="font-set-b16 flex h-full items-center px-12" href="/novels">Series</a>
						<a class="font-set-b16 flex h-full items-center px-12" href="/manage/bookmarks">Bookmarks</a>
						<button class="font-set-b16 flex h-full items-center pl-12" aria-haspopup="true">
							Resources
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								class="ml-2 h-14 w-14 font-semibold rotate-180 text-gray-desc"
							>
								<path fill-rule="evenodd" clip-rule="evenodd" d="m10 7.37 7.316 6.86 1.368-1.46L10 4.63l-8.684 8.14 1.368 1.46L10 7.37Z"></path>
							</svg>
						</button>
					</div>
				</div>
				<div class="ml-auto flex items-center space-x-8">
					<div class="ww-9n8416">
						<div class="relative">
							<div class="ww-16hk1bt">
								<div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root ww-feqhe6">
									<div class="relative rounded-md hover:shadow-md transition-shadow dark:bg-[#202020] h-44 !rounded-full !bg-gray-container-base ww-1o9chsb">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											class="h-17 w-17 text-gray-placehold"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0Zm-.808 5.606a7 7 0 1 1 1.414-1.414l5.101 5.1-1.414 1.415-5.1-5.1Z"
											></path>
										</svg>
										<input
											aria-invalid="false"
											autocomplete="off"
											id=":R2jaj6jr6:"
											placeholder="Search"
											type="text"
											class="!placeholder:text-gray-placehold !font-set-m15 ww-1y1ugul"
											aria-autocomplete="list"
											aria-expanded="false"
											autocapitalize="none"
											spellcheck="false"
											role="combobox"
											aria-label="search"
											value=""
										/>
										<div class="ww-16tjhs8"></div>
										<fieldset aria-hidden="true" class="ww-ownnu4"></fieldset>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button
						class="bg-transparent p-8 hover:bg-transparent md:bg-gray-container-base md:hover:bg-gray-100 md:dark:hover:bg-black md:with-hover:hover:bg-gray-200 md:with-hover:dark:bg-gray-800 e1iicaxz0 ww-2qi1fl"
						tabindex="0"
						type="button"
						aria-haspopup="true"
						aria-label="profile nav"
						data-cy="header-button-user-anonymous"
					>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 md:h-28 md:w-28">
							<path
								d="M14.444 6.444a4.444 4.444 0 1 1-8.888 0 4.444 4.444 0 0 1 8.888 0ZM10 11.778c-3.304 0-6.161 2.026-7.527 4.97-.282.606.198 1.252.866 1.252h13.322c.668 0 1.148-.646.866-1.252-1.366-2.944-4.223-4.97-7.527-4.97Z"
							></path></svg
						><span class="ww-w0pj6f"></span>
					</button>
					<div class="ww-1m4n54b">
						<button
							class="bg-transparent p-8 hover:bg-transparent md:bg-gray-container-base md:hover:bg-gray-100 md:dark:hover:bg-black md:with-hover:hover:bg-gray-200 md:with-hover:dark:bg-gray-800 e1iicaxz0 ww-2qi1fl"
							tabindex="0"
							type="button"
							aria-label="menu"
						>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 md:h-28 md:w-28">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M18 5.5H2v-2h16v2Zm0 5.5H2V9h16v2Zm0 5.5H2v-2h16v2Z"></path></svg
							><span class="ww-w0pj6f"></span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
