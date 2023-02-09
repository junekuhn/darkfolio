<template>
    <Layout>
        <div id="about-image">
            <g-image
            class="thumnail"
            src="~/../static/uploads/about.jpg"
            alt="performer with saxophone and glove controller"
            />
        </div>
        <section id="about-paragraph">
            <p>
            Justin is a transdisciplinary artist who uses live code, web development, and saxophone to make interactive, audiovisual experiences. They have recently completed an MA in Computational Arts at Goldsmiths, University of London. Since 2018, Justin exhibits work as an artist, freelances custom websites, and performs as a musician and VJ.
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
