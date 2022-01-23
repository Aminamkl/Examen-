<script>
	import {onMount} from 'svelte';
	export let name;
	let movies = [];

	onMount(async () => {
        try{
            const response = (getValues()) ? await fetch('http://localhost:3000/movies?page='+getValues()) : await fetch('http://localhost:3000/movies')
            allmovies = await response.json()
            movies=allmovies.data
            pages = parseInt(allmovies.pagination.count / 10)
        }catch(Err){
            console.log("error fetching data")
        }
    } )
    function gotot(id){
        window.location.replace('/movie/'+id)
    }
    function gotoPage(page){
        window.location.replace('/?page='+page)
    }
</script>

<main>
	<head>
		<!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	</head>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<body>
	    <table class="table">
			<thead>
				<tr>
					<th>Title</th>
					<th>Plot</th>
					<th>Type</th>
					<th>Runtime</th>
					<th>Year</th>
					<th>Rating</th>
				</tr>
			</thead>
			{#each movies as movie (movie.id)}
			<tr>
				<td>{movie.title}</td>
				<td>{movie.plot}</td>
				<td>{movie.type}</td>
				<td>{movie.runtime}</td>
				<td>{movie.year}</td>
				<td>{movie.imdb.rating}</td>
			</tr>
			{/each}
		</table>
	</body>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>