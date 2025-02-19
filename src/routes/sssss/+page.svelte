<svelte:options runes />

<script lang="ts">
	import { enhance } from '$app/forms';

	let votes = $state(0);
</script>

<form
	method="post"
	use:enhance={() => {
		return ({ result }) => {
			if (result.type === 'success') {
				votes++;
			}
		};
	}}
>
	<div class="remote">
		<pre>{votes}</pre>
		<div class="buttons">
			<button name="vote" value="good" aria-label="upvote" class="button up"></button>
			<button name="vote" value="bad" aria-label="downvote" class="button down"></button>
		</div>
	</div>
</form>

<style>
	form {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background-color: #71bef0;
		padding: 2rem;
	}
	.remote {
		--radius: 40px;
		display: grid;
		grid-template-rows: auto 1fr;
		background-color: #ffd90f;
		width: 100%;
		height: 100%;
		border: 12px solid #000;
		border-radius: var(--radius);
		position: relative;
		box-shadow: inset -20px -20px 0 rgba(0, 0, 0, 0.1);
		padding: 20px;
		container-type: size;
	}
	pre {
		--padding: 0.5rem;
		font-size: 5rem;
		margin: 0;
		border-radius: calc(var(--radius) - 20px);
		background-color: #111;
		color: tomato;
		padding: 0.5rem 2rem;
		text-align: right;
		display: block;
		width: 100%;
	}

	.buttons {
		display: grid;
		height: 100%;
		grid-template-rows: 1fr 1fr;
		place-content: center;
		gap: 1rem;
		padding: 1rem;
	}

	.button {
		aspect-ratio: 1;
		max-width: 100%;
		min-width: 0;
		border: 8px solid #000;
		border-radius: 50%;
		position: relative;
		cursor: pointer;
		transition: transform 0.1s;
	}

	.button::after {
		content: '';
		position: absolute;
		top: 10%;
		left: 10%;
		width: 30%;
		height: 30%;
		background: white;
		border-radius: 50%;
		opacity: 0.6;
	}

	.up {
		background-color: #6bcb77;
		box-shadow: inset -10px -10px 0 rgba(0, 0, 0, 0.2);
	}

	.down {
		background-color: #ff6b6b;
		box-shadow: inset -10px -10px 0 rgba(0, 0, 0, 0.2);
	}

	.button:active {
		transform: scale(0.95);
	}
</style>
