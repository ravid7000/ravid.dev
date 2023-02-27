<script lang="ts">
	// components
	import Tabs from './Tabs.svelte';
	/// -components

	// states
	const tabItems = ['About', 'Work', 'Repository', 'Packages'];
</script>

<header>
	<nav class="max-w-[800px] lg:max-w-[1100px] 2xl:max-w-[1400px] mx-auto mr-auto px-5">
		<h4 class="text-lg logo text-accent">Ravi Dhiman</h4>
		<div>
			<Tabs items={[]} />
		</div>
	</nav>
</header>

<style>
	nav {
		display: flex;
		align-items: center;
		height: var(--header-height);
	}
</style>
