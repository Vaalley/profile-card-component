<svelte:head>
	<title>Profile Card Component</title>
	<!-- <link rel="icon" href="" /> -->
</svelte:head>

<div
	class="flex items-center justify-center h-screen w-screen font-kumbh-sans bg-dark-cyan overflow-hidden"
>
	<div class="absolute h-full w-full overflow-hidden">
		<img
			class="absolute top-0 left-0 h-[1300px] w-[1300px] mt-[-40%] ml-[-25%]"
			src="/images/bg-pattern-top.svg"
			alt="svg top"
		/>
		<img
			class="absolute bottom-0 right-0 h-[1300px] w-[1300px] mb-[-40%] mr-[-25%]"
			src="/images/bg-pattern-bottom.svg"
			alt="svg bottom"
		/>
	</div>
	<div class="h-fit w-[400px] flex flex-col items-center shadow-2xl rounded-2xl z-10 bg-white">
		<div class="w-full">
			<img class="w-full rounded-t-2xl" src="/images/bg-pattern-card.svg" alt="background" />
		</div>
		<div>
			<img
				class="rounded-full border-8 border-white mt-[-50%]
			"
				src="/images/image-victor.jpg"
				alt="profile"
			/>
		</div>
		<div class="flex gap-2 mt-4">
			<h1 class="text-xl font-bold text-very-dark-blue">Victor Crest</h1>
			<p class="text-xl text-dark-grayish-blue">26</p>
		</div>
		<div class="mt-2">
			<p class="text-dark-grayish-blue text-sm">London</p>
		</div>
		<div class="flex justify-around w-full mt-4 p-6 border-t-[1px] border-t-gray-200">
			<div class="flex flex-col items-center">
				<p class="text-lg font-bold text-very-dark-blue">80K</p>
				<p class="text-dark-grayish-blue text-sm">Followers</p>
			</div>
			<div class="flex flex-col items-center">
				<p class="text-lg font-bold text-very-dark-blue">803K</p>
				<p class="text-dark-grayish-blue text-sm">Likes</p>
			</div>
			<div class="flex flex-col items-center">
				<p class="text-lg font-bold text-very-dark-blue">1.4K</p>
				<p class="text-dark-grayish-blue text-sm">Photos</p>
			</div>
		</div>
	</div>
</div>
