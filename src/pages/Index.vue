<template>
  <Layout>
    <section class="bio">
      <p id="summary">
        I'm a developer and artist working with audiovisual, <br>immersive, and community-oriented technology.
      </p>
    </section>
    <section class="projects">
      <article
        @click="goTo($event, project.node.path)"
        class="project"
        v-for="project in $page.projects.edges"
        :key="project.node.id"
      >
        <g-image
          class="project-thumbnail"
          :src="project.node.thumbnail.src"
          :alt="project.node.title"
        ></g-image>
        <ProjectMeta
          :title="project.node.title"
          :categories="project.node.categories"
          :year="project.node.year"
        />
      </article>
    </section>
  </Layout>
</template>

<page-query>
query Projects {
  projects: allProject {
    edges {
      node { 
        id
        path
        title
        year
        thumbnail
        categories
      }
    }
  }
}
</page-query>

<script>
import ProjectMeta from "@/components/ProjectMeta";

export default {
  components: {
    ProjectMeta
  },
  metaInfo: {
    titleTemplate: require("../data/theme.json").site_name
  },
  methods: {
    goTo(event, route) {
      const distanceScrolled = window.pageYOffset;
      const elementPosition = event.target.getBoundingClientRect().top;
      const totalOffset = distanceScrolled + elementPosition;
      const finalPosition = totalOffset - 167;

      // Scroll window so that the thumbnail is 12rem from the
      // top of the browser window, this will make a seamless transition.
      window.scrollTo({ top: finalPosition, behavior: "smooth" });

      // Now, navigate to the project page
      setTimeout(() => {
        this.$router.push(route);
      }, 450);
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  margin: 0 2rem;
}

.project {
  width: 33%;
  margin-bottom: 4rem;
  cursor: pointer;
  display: inline-block;
}
.project-thumbnail {
  display: block;
  width: 100%;
}

.bio {
  display: block;
}

#summary {
  text-align: left;
  font-size: 1.2rem;
  padding: 2rem;
}

a:link {
  color: white;
}

a:visited {
  color: white;
}

//for mobile
@media only screen and (max-width:1000px) {
  .project {
  width: 100%;
  margin-bottom: 4rem;
  cursor: pointer;
  display: block;
}
.project-thumbnail {
  display: block;
  width: 100%;
}
}

//for desktop
@media only screen and (min-width:1000px) {
    article.project {
      padding: 2rem;
    }

    #summary {
      font-size: 1.5rem;
    }
}



</style>
