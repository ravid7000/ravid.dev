<script lang="ts">
	// components
	import Section from '$lib/components/Section.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	/// -components
</script>

<Section hero>
	<div class="sm:grid sm:gap-9 h-full max-w-[750px] xl:max-w-[800px]">
		<div class="hidden sm:grid grid-cols-2">
			<h3 class="text-lg text-accent pr-[3rem]">I build visually appealing digital experiences</h3>
			<h3 class="text-lg text-accent pr-[3rem]">With 7 years of experience in the field</h3>
		</div>

		<h1 class="ff-dm text-[5rem] sm:text-[8rem] 2xl:text-[12rem] leading-[1.2]">
			Frontend Engineer
		</h1>
	</div>
</Section>

<Navbar />
