<template>
    <Layout>
        <div id="about-image">
            <g-image
            class="thumnail"
            src="~/../static/uploads/about.jpg"
            alt="hi"
            />
        </div>
        <section id="about-paragraph">
            <p>
            I'm a developer and artist currently
            completing a MA in Computational Arts at Goldsmiths, University of London. 
            I'm exploring audiovisual live coding, sonification, and computational
            governance through smart contracts. I also have professional experience with website
            design, virtual reality, sound design, and teaching.
            </p>
        </section>

    </Layout>
</template>

<script>

</script>

<style scoped>
#about-image {
    display: block;
    text-align: center;
}

#about-paragraph {
    width: 90%;
    margin-left: 5%;
    font-size: 1.2rem;
}

.thumnail {
    width: 90%;
}


@media only screen and (min-width:1000px) {
    .thumnail {
        width: 50%;
    }
    #about-paragraph {
        width: 50%;
        margin-left: 25%;
        margin-right: 25%;
    }
}
</style>
