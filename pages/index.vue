<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div
          class="column is-one-quarter"
          v-for="(article, index) in articles"
          :key="index">
          <a :href="article.url" target="_blank">
            <div class="card">
              <div class="card-image">
                <figure class="image is-3by2">
                  <img :src="article.urlToImage" :alt="article.title">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">{{ article.title }}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

  export default {
    async asyncData ({app}) {
      const {articles} = await app.$axios.$get(
        `https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=${process.env.API_KEY}`
      )

      return {articles}
    },
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
