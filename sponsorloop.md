---
layout: page
background: '/img/bg-runner.jpg'
title: "Sponsorloop"
description: "We zamelen geld in voor een rolstoelbus voor Emma!"
wide: true
---

{% include doneer-inschrijf-buttons.html %}
{: .col-lg10 }

{% assign total_money=50000 %}
{% assign raised_money=3000 %}
{% assign progress_pct = 100.0 | times: raised_money | divided_by: total_money %}

<div>
    <div class="progress">
        <div class="progress-bar active" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: {{ progress_pct }}%;" aria-valuenow="{{ progress_pct }}">
        </div>
    </div>
    <p>€ 3,000 van € 50,000 ingezameld.</p>
</div>

{% include bubble_left.html image="/img/calendar.png" header="Datum"
content="Zet zaterdag 19 April in je agenda, want dan wordt de sponsorloop gehouden." %}

{% include bubble_right.html image="/img/kolpingboys_applemaps.png" image-link="https://maps.app.goo.gl/orsoURzLDYEHCVJS6"
header="Locatie"
content="De sponsorloop is op het terrein van de Kolpingboys, [Beverdam 3 in Alkmaar](https://maps.app.goo.gl/orsoURzLDYEHCVJS6)" %}

{% include bubble_left.html image="/img/rolstoelbus.jpg" header="Rolstoelbus"
content="Het doel van de sponsorloop is om geld in te zamelen voor een rolstoelbus" %}


{% capture doneer_content %}
Doneren kan via onderstaande link. Heel erg bedankt voor uw steun!

<a class="btn-xl btn-danger col-5" href="{{ site.doneerurl }}">&#10084;&#65038; Doneer</a>
{% endcapture %}
{% include bubble_right.html image="/img/euro_heart.png" image-link=site.doneerurl header="Doneer"
content=doneer_content %}

{% capture loop_mee_content %}
Leuk dat je mee wilt lopen! Opgeven kan via [dit formulier]({{ site.inschrijfurl }})
{% endcapture %}
{% include bubble_left.html header="Loop mee" image="/img/emma/IMG20240625164741.jpg"
content=loop_mee_content %}
