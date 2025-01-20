---
layout: page
background: '/img/bg-runner.jpg'
title: "Sponsorloop"
description: "Loop! Doneer! Help mee!"
wide: true
---

<!-- Doneer button -->
<div class="clearfix text-center">
    <a class="btn btn-primary" href="https://www.rabobank.nl/">Doneer</a>
</div>



{% include bubble_left.html image="/img/IMG_1554.jpg" header="Datum"
content="Zet zaterdag 19 April in je agenda, want dan wordt de sponsorloop gehouden." %}

{% include bubble_right.html image="/img/IMG_3392.jpg" header="Locatie"
content="De sponsorloop is op het terrein van de Kolpingboys, ADRES IN ALKMAAR" %}

{% include bubble_left.html image="/img/IMG_1554.jpg" header="Doneer"
content="Doneren kan via onderstaande link. Heel erg bedankt voor uw steun!" %}

{% capture loop_mee_content %}
Leuk dat je mee wilt lopen. Opgeven kan via [dit formulier](/about)
{% endcapture %}
{% include bubble_right.html header="Loop mee" image="/img/IMG_3392.jpg"
content=loop_mee_content %}
