<template>
  <header class="header">
    <g-link
      to="/"
      tag="h1"
      class="name"
      :class="{ first: data.first_letter_only }"
    >
      <span
        class="word"
        :class="{ 'first-line': index === 0 && multiLine }"
        v-for="(word, index) in siteName"
        :key="index"
      >
        <span class="first-letter" v-if="data.first_letter_only && word[0]">{{
          word[0]
        }}</span>
        <span class="letter" v-if="data.first_letter_only">{{
          word.slice(1)
        }}</span>
        <span v-if="!data.first_letter_only">{{ word }}</span>
      </span>
    </g-link>
    <div class="contact">
      <g-link to="/freelance">Freelance</g-link>
    </div>
    <div class="contact">
      <g-link to="/about/">
          About
      </g-link>
    </div>   
    <div class="contact">
      <a class="link" :href="`mailto:${data.email}`">email</a>
    </div>
    <div class="contact">
      <a class="link" :href="`${data.CV}`">CV</a>
    </div>
  </header>
</template>

<script>
import data from "@/data/theme.json";

export default {
  name: "Header",
  data() {
    return {
      data
    };
  },
  computed: {
    siteName() {
      return data.header_title.split(" ");
    },
    multiLine() {
      return this.siteName.length >= 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 4rem 2rem 2rem 3rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 100;
  opacity: 1;
  mix-blend-mode: difference;
  transition: opacity 0.5s ease;
  &.hidden {
    opacity: 0;
  }
}

.contact {
  padding-left:5rem;
}

.name {
  font-size: 2rem;
  font-weight: 500;
  user-select: none;
  margin: 0;
  cursor: pointer;
  .word {
    margin-right: 0.5rem;
    &.first-line {
      display: block;
      margin-bottom: 0rem;
    }
    &:last-of-type {
      margin: 0;
    }
  }


  &.first {
    .letter {
      transition: opacity 0.15s ease;
      opacity: 0;
    }
    .first-letter {
      opacity: 1;
    }
    &:hover {
      .letter {
        opacity: 1;
      }
    }
  }
}

// for mobile
@media only screen and (max-width: 1000px) {
  .name {
    font-size: 2rem;
  }

  .header {
    padding: 2rem;
    display: block;
  }

  .contact {
    padding: 1rem 0rem 0rem 0rem ;
  }

  

}
</style>