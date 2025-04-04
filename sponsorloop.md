---
loper_count: 32
raised_money: "20,565"
total_money: "50,000"


layout: page
background: '/img/bg-runner.jpg'
title: "Sponsorloop"
description: "We zamelen geld in voor een rolstoelbus voor Emma!"
wide: true
---

<div class="col-lg-11 mx-auto">
{% include doneer-inschrijf-buttons.html %}
</div>
<!-- This calculates the percentage, which is used for the progress bar -->
{% assign raised_money_num = page.raised_money | replace: ",", "" | to_float %}
{% assign total_money_num = page.total_money | replace: ",", "" | to_float %}
{% assign progress_pct = 100.0 | times: raised_money_num | divided_by: total_money_num %}


<div class="progress-bg col-lg-11 mx-auto">
    <h3 id="countdown">Zaterdag 19 April is de sponsorloop! </h3>
    <div class="progress">
        <div class="progress-bar active" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: {{ progress_pct }}%;" aria-valuenow="{{ progress_pct }}">
        </div>
    </div>
    <div class="row mx-auto justify-content-between" style="margin-top: 10px;">
        <h6>€ {{ page.raised_money }} van € {{ page.total_money }} ingezameld</h6>
        <h6>Er lopen al {{ page.loper_count }} kinderen mee!</h6>
    </div>
</div>

{% capture datum_content %}
De sponsorloop wordt gehouden op zaterdag 19 April van 15:00 tot 18:00.
{: .m-0}

{% endcapture %}
{% include bubble_left.html image="/img/calendar.png" header="Zaterdag 19 April"
content=datum_content %}

{% capture activiteiten_content %}
Tijdens de sponsor zijn er verschillende activiteiten voor de kinderen: ballonenartiest, schminken, suikerspin, springkasteel, grabbelton, origami vouwen en een bingo.
{: .m-0}

{% endcapture %}
{% include bubble_activiteiten.html image="/img/activiteiten/basballoon.jpg" header="Activiteiten"
content=activiteiten_content %}

{% capture doel_content %}
Het doel van de sponsorloop is om geld in te zamelen voor een rolstoelbus.
{: .m-0}

{% endcapture %}
{% include bubble_left.html image="/img/rolstoelbus.jpg" header="Rolstoelbus"
content=doel_content %}

{% capture bied_mee_content %}
Via AZ hebben we de kans gekregen om een shirt, gesigneerd door de hele selectie, te veilen. Een supermooi item voor elke AZ-fan!
Lijkt dit je wat? Bied dan mee via de knop hieronder!
Ken je iemand die hier blij van zou worden? Laat het ze weten! Hoe meer mensen meedoen, hoe mooier het bedrag dat we kunnen ophalen voor Emma!
{: .m-0}

<a class="btn-xl btn-danger col-5" href="{{ site.veilingurl }}">&#10084;&#65038; Bied mee</a>
{% endcapture %}
{% include bubble_right.html image="/img/az.jpg" image-link=site.veilingurl no-rounded=true header="Bied mee"
content=bied_mee_content %}


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
{% include bubble_left.html header="Locatie"
image="/img/kolpingboys_applemaps.png" image-link="https://maps.app.goo.gl/orsoURzLDYEHCVJS6"
content=locatie_content %}


{% capture loop_mee_content %}
We zoeken kinderen die mee willen lopen! Opgeven kan via [dit formulier]({{ site.inschrijfurl }}).
{: .m-0}

Als je op een andere manier wilt helpen, [kan je contact opnemen]({{ site.contacturl }}).

<a class="btn-xl btn-primary col-3" href="{{ site.inschrijfurl }}">+ Loop Mee</a>
<a class="btn-xl btn-primary col-3" href="{{ site.contacturl }}">&#9993; Contact</a>

{% endcapture %}
{% include bubble_right.html header="Help mee!" image="/img/emma/IMG20240625164741.jpg"
content=loop_mee_content %}

{% capture flyer_content %}
Je kan de flyer [downloaden](/assets/flyer.pdf) om verder te delen.
{: .m-0}

{% endcapture %}
{% include bubble_left.html header="Flyer" image="/img/flyer.jpg" image-link="/assets/flyer.pdf" no-rounded=true
content=flyer_content %}
