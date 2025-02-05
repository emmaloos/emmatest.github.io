---
layout: page
background: '/img/bg-runner.jpg'
title: "Sponsorloop"
description: "We zamelen geld in voor een rolstoelbus voor Emma!"
wide: true
---

<div class="col-lg-11 mx-auto">
{% include doneer-inschrijf-buttons.html %}
</div>

<!-- Type the raised and total amount of money here -->
{% assign total_money_text = "50,000" %}
{% assign raised_money_text = "1025" %}
<!-- This calculates the percentage, which is used for the progress bar -->
{% assign raised_money = raised_money_text | replace: ",", "" | to_float %}
{% assign total_money = total_money_text | replace: ",", "" | to_float %}
{% assign progress_pct = 100.0 | times: raised_money | divided_by: total_money %}

<div class="progress-bg col-lg-11 mx-auto">
    <h3 id="countdown">Zaterdag 19 April is de sponsorloop! </h3>
    <div class="progress">
        <div class="progress-bar active" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: {{ progress_pct }}%;" aria-valuenow="{{ progress_pct }}">
        </div>
    </div>
    <h6 style="margin-top: 10px;">€ {{ raised_money_text }} van € {{total_money_text}} ingezameld</h6>
</div>

{% capture datum_content %}
Zet zaterdag 19 April in je agenda, want dan wordt de sponsorloop gehouden.
{: .m-0}

{% endcapture %}
{% include bubble_left.html image="/img/calendar.png" header="Zaterdag 19 April"
content=datum_content %}

{% capture doel_content %}
Het doel van de sponsorloop is om geld in te zamelen voor een rolstoelbus.
{: .m-0}

{% endcapture %}
{% include bubble_right.html image="/img/rolstoelbus.jpg" header="Rolstoelbus"
content=doel_content %}


{% capture doneer_content %}
Doneren kan via onderstaande link. Heel erg bedankt voor uw steun!
{: .m-0}

<a class="btn-xl btn-danger col-5" href="{{ site.doneerurl }}">&#10084;&#65038; Doneer</a>
{% endcapture %}
{% include bubble_left.html image="/img/betaalverzoek_qr.jpg" image-link=site.doneerurl no-rounded=true header="Doneer"
content=doneer_content %}

{% capture locatie_content %}
De sponsorloop is op het terrein van de Kolping Boys, [Beverdam 3 in Alkmaar](https://maps.app.goo.gl/orsoURzLDYEHCVJS6).
{: .m-0}

{% endcapture %}
{% include bubble_right.html header="Locatie"
image="/img/kolpingboys_applemaps.png" image-link="https://maps.app.goo.gl/orsoURzLDYEHCVJS6"
content=locatie_content %}


{% capture loop_mee_content %}
We zoeken kinderen die mee willen lopen! Opgeven kan via [dit formulier]({{ site.inschrijfurl }}).
{: .m-0}

Als je op een andere manier wilt helpen, [kan je contact opnemen]({{ site.contacturl }}).

{% endcapture %}
{% include bubble_left.html header="Help mee!" image="/img/emma/IMG20240625164741.jpg"
content=loop_mee_content %}
