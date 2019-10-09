<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="sr-only">Quick Bio</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-8 offset-md-2">
                <p>My name is Edward Paulo Nilmar Ganuelas. I was born the first of five children in Manila, Philippines and grew up in Quezon City. In 2005, me and my family migrated to Canada and have been living here ever since. As a child, I have always been interested in computers and programming due to my early love of video games. When I was a kid, our parents bought us a Nintendo Famicom (or the NES in the west) and because of that I asked for a programming book for christmas, intending to make a video game.</p>
                <p>Currently, I'm a web developer. My hobbies include video games, photography (mostly on film), working out, basketball, listening to music and watching pro wrestling. </p>

                <p>On social media, you can find me on twitter <a href="https://twitter.com/edward_pau" target="_blank"  rel="noopener noreferrer"><i class="fab fa-twitter"></i> @edward_pau</a>, on <a href="https://www.instagram.com/mustadio98/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i> instagram</a> and on <a href="https://www.linkedin.com/in/epganuelas/" target="_blank" rel="noopener noreferrer"><span class='ico'><i class='fab fa-linkedin'></i></span>Linkedin</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Bio",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
    &.profile{
        width: 120px;
        height: 120px;
        border: 1px solid #FFF;
        border-radius: 8px;
        margin-bottom: 16px;
    }
}
h2, h3{
    margin-bottom: 20px;
}
ul{
    padding-left: 16px;
    li{
        margin-bottom: 8px;    
    }
}
</style>
