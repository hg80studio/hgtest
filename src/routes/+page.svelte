<script>
	import Person from '../components/Person.svelte';
	import Logo from '../components/Logo.svelte';

	let contactEmail = 'pitch@supercontinental.co';

	let partners = [
		{
			name: 'Michael Lawrence',
			role: 'ECD, Founding Partner',
			email: 'michael@supercontinental.co'
		},
		{
			name: 'Albert Zurashvili',
			role: 'EP, MD, Founding Partner',
			email: 'albert@supercontinental.co'
		},
		{
			name: 'Gijs Determeijer',
			role: 'EP, MD, Founding Partner',
			email: 'gijs@supercontinental.co'
		}
	];

	let teamMembers = [
		{
			name: 'Ira Nepomenko',
			role: 'Producer',
			email: 'ira@supercontinental.co'
		},
		{
			name: 'Oleh Teteriatnyk',
			role: 'Creative Producer',
			email: 'oleh@supercontinental.co'
		},
		{
			name: 'Marina Karmolit',
			role: 'Bidding Producer',
			email: 'marina@supercontinental.co'
		},
		{
			name: 'Marat Ibragimov test',
			role: 'Production Assistant test',
			email: 'marat@supercontinental.co'
		}
	];

	let socialMedias = [
		{
			name: 'Vimeo',
			url: 'https://vimeo.com/supercontinental'
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/supercontinental.co'
		},
		{
			name: 'Facebook',
			url: 'https://facebook.com/supercontinental.co'
		}
	];

	import { onMount } from 'svelte';

	let isMounted = false;

	onMount(() => {
		isMounted = true;
	});
</script>

<div class="wrapper" class:loading={!isMounted}>
	<header class="header">
		<h1 class="logo">
			<Logo />
		</h1>
		<div class="intro">
			<p>
				Supercontinental is an artist-led creative production studio. Embracing the ever-changing
				global landscape, we encourage storytellers to foster dialogue and tight collaboration
				between the creative and production teams as a means to tailor solutions to each project.
			</p>
			<p>We're based in Brussels and Amsterdam, but work internationally.</p>
			<p>
				We believe in widespread access to arts education and have established the Savusavu Media
				Workshops in Fiji as a model to expand opportunities to other remote communities globally.
			</p>
			<p>Supercontinental – it all started as one.</p>
		</div>
	</header>
	<main class="about">
		<section class="about__section">
			<h2>Partners</h2>
			<ul class="unstyled people">
				{#each partners as partner}
					<Person role={partner.role} email={partner.email} name={partner.name} />
				{/each}
			</ul>
		</section>
		<section class="about__section">
			<h2>Team</h2>
			<ul class="unstyled people">
				{#each teamMembers as member}
					<Person role={member.role} email={member.email} name={member.name} />
				{/each}
			</ul>
		</section>
		<section class="about__section">
			<h2>Social</h2>
			<p>
				{#each socialMedias as socialMedia, i}
					<a href={socialMedia.url}>{socialMedia.name}</a>{i === socialMedias.length - 1
						? ''
						: ', '}
				{/each}
			</p>
		</section>
		<section class="about__section">
			<h2>Contact</h2>
			<a href="mailto:{contactEmail}">{contactEmail}</a>
		</section>
		<footer class="footer">&#169;{new Date().getFullYear()} Supercontinental</footer>
	</main>
</div>

<style>
	.wrapper {
		transition-duration: 1.2s;
		transition-timing-function: ease;
		transition-property: opacity, transform;
		&.loading {
			opacity: 0;
			@media screen and (max-width: 899px) {
				transform: translateY(24px);
			}
		}
		@media screen and (min-width: 900px) {
			display: grid;
			border-top: 2px solid var(--secondary);
			grid-template-columns: 1fr 1fr;
			grid-column-gap: var(--body-margin);
			height: 100%;
		}
	}

	.header {
		@media screen and (min-width: 900px) {
			position: sticky;
			display: grid;
			grid-template-columns: 2fr 1fr;
		}
	}

	.intro {
		padding-top: 12px;
		@media screen and (max-width: 899px) {
			padding-bottom: 60px;
			border-top: 2px solid var(--secondary);
		}
		@media screen and (min-width: 900px) {
			grid-row: 1;
			align-self: start;
		}
		@media screen and (min-width: 900px) and (max-width: 1200px) {
			grid-column: 1 / span 2;
		}
	}

	.logo {
		@media screen and (max-width: 899px) {
			max-width: 480px;
			display: block;
			margin: 60px auto;
		}
		@media screen and (min-width: 900px) {
			grid-row: 2;
			align-self: end;
			max-width: 360px;
		}
	}

	.about {
		@media screen and (min-width: 700px) {
			overflow-y: scroll;
			&::-webkit-scrollbar {
				display: none;
			}
			-ms-overflow-style: none;
			scrollbar-width: none;
			display: grid;
		}
	}

	.about__section {
		border-top: 2px solid var(--secondary);
		padding-top: 12px;
		padding-bottom: 60px;
		@media screen and (min-width: 900px) {
			&:first-child {
				border-top: none;
			}
		}
	}

	.intro {
		display: grid;
		row-gap: 8px;
	}

	.people {
		display: grid;
		row-gap: 24px;
	}

	.footer {
		padding-bottom: 24px;
		align-self: end;
		color: var(--tertiary);
	}
</style>
