<script lang="ts">
	// props
	export let hero = false;
	/// -props
</script>

<section class:hero>
	<div class="max-w-[800px] lg:max-w-[1100px] 2xl:max-w-[1400px]  mx-auto mr-auto px-5">
		<slot />
	</div>
</section>

<style>
	section {
		padding-block: 80px;
	}

	section.hero {
		min-height: 300px;
		height: calc(100% - var(--header-height));
	}

	section.hero > div {
		height: 100%;
	}
</style>
