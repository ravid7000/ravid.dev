<script lang="ts">
	// props
	export let items: string[] = [];
	/// -props
</script>

<div class="tab" role="tablist">
	{#each items as item}
		<button role="tab">{item}</button>
	{/each}
</div>

<style>
</style>
