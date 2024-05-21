<script lang="ts">
	export let email: string;
	export let name: string;
	export let role: string;
</script>

<li>
	<dl>
		<dt>{name}</dt>
		<dd>{role}</dd>
	</dl>
	<a href="mailto:{email}">{email}</a>
</li>

<style>
	dt,
	dd,
	a {
		display: block;
	}
	dd {
		color: var(--tertiary);
	}
</style>
