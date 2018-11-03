<template>
	<div class="text-center d-flex w-100 h-100 p-3 mx-auto flex-column comming-soon">
		<header class="mb-auto"></header>

		<main role="main" class="">
			<h1 class="display-2">
				Coming Soon
			</h1>

			<p class="lead">
				Our website is under construction
			</p>
		</main>

		<footer class="mt-auto">
			@ 2018 realme.one
		</footer>
	</div>
</template>

<script>
export default {
  name: 'CommingSoon'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comming-soon {
  color: #fff;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  background: #7918f2;
  background: -webkit-linear-gradient(-45deg, #ac32e4, #7918f2, #4801ff);
  background: -o-linear-gradient(-45deg, #ac32e4, #7918f2, #4801ff);
  background: -moz-linear-gradient(-45deg, #ac32e4, #7918f2, #4801ff);
  background: linear-gradient(-45deg, #ac32e4, #7918f2, #4801ff);
}
</style>
