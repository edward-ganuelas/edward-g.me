<template>
    <div class="container mt-4">
        <div>
            <div>
                <h3 class="sr-only">{{$t('about.bio.header')}}</h3>
            </div>
        </div>
        <div class="row">
            <div class="card p-6 rounded-xl">
                <!-- <div class="card-body" v-html="$t('about.bio.content')"></div> -->
                <div class="card-body">
                    <i18n-t keypath="about.bio.content.paragraph1" tag="p"></i18n-t>
                    <i18n-t keypath="about.bio.content.paragraph2" tag="p"></i18n-t>
                    <i18n-t keypath="about.bio.content.paragraph3" tag="p">
                        <template v-slot:twitter>
                            <a href="https://twitter.com/edward_pau" target="_blank"  rel="noopener noreferrer"><i class="fab fa-twitter"></i>@edward_pau</a>
                        </template>
                        <template v-slot:instagram>
                            <a href="https://www.instagram.com/edward.g.me/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i> instagram</a>
                        </template>
                        <template v-slot:linkedIn>
                            <a href="https://www.linkedin.com/in/epganuelas/" target="_blank" rel="noopener noreferrer"><span class='ico'><i class='fab fa-linkedin'></i></span>Linkedin</a>
                        </template>
                    </i18n-t>
                    <i18n-t keypath="about.bio.content.paragraph4" tag="p">
                        <template v-slot:eightRayedSun>
                            <a href="https://eightrayedsun.com/" target="_blank" rel="noopener noreferrer">EightRayedSun</a>
                        </template>
                    </i18n-t>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

