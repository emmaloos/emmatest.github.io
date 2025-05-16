---
loper_count: 33
raised_money: "32,914.69"
total_money: "50,000"


layout: page
background: '/img/bg-runner.jpg'
title: "Sponsorloop"
description: "We zamelen geld in voor een rolstoelbus voor Emma!"
wide: true

pictures:
  - "img/sponsorloop/DSC_3311.JPG"
  - "img/sponsorloop/DSC_3412.JPG"
  - "img/sponsorloop/DSC_3467_.JPG"
  - "img/sponsorloop/DSC_3541.JPG"
  - "img/sponsorloop/DSC_3204.JPG"
  - "img/sponsorloop/DSC_3219.JPG"
  - "img/sponsorloop/DSC_3251.JPG"
  - "img/sponsorloop/DSC_3296.JPG"
---

<div class="col-lg-11 mx-auto">
{% include doneer-info-buttons.html %}
</div>
<!-- This calculates the percentage, which is used for the progress bar -->
{% assign raised_money_num = page.raised_money | replace: ",", "" | to_float %}
{% assign total_money_num = page.total_money | replace: ",", "" | to_float %}
{% assign progress_pct = 100.0 | times: raised_money_num | divided_by: total_money_num %}


<div class="progress-bg col-lg-11 mx-auto">
    <h3>De sponsorloop is geweest!</h3>
    <p>Wat een fantastische middag hebben we gehad! Iedereen bedankt voor de inzet en gezelligheid, en in het bijzonder een bedankje voor onze sponsoren en vrijwilligers die de dag mogelijk hebben gemaakt 🥳. Emma heeft een topfeest gehad. En als klap op de vuurpijl tot nu toe een ongelofelijk bedrag opgehaald van € {{ page.raised_money }}! 💰🤯</p>
    <p>BEDANKT BEDANKT BEDANKT! ❤️</p>
    <div class="progress">
        <div class="progress-bar active" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: {{ progress_pct }}%;" aria-valuenow="{{ progress_pct }}">
        </div>
    </div>
    <div class="row mx-auto justify-content-between" style="margin-top: 10px;">
        <h6>€ {{ page.raised_money }} van € {{ page.total_money }} ingezameld</h6>
        <h6>Er liepen {{ page.loper_count }} kinderen mee!</h6>
    </div>
</div>
<div class="progress-bg col-lg-11 mx-auto mt-5">
    <h3 class="carousel slide px-3">Foto's</h3>
<div id="carouselExampleControls" class="carousel slide p-3" data-ride="carousel">
  <div class="carousel-inner">
  {% for picture in page.pictures %}
    {% if picture == page.pictures.first %}
    <div class="carousel-item active">
    {% else %}
    <div class="carousel-item">
    {% endif %}
      <img class="d-block w-100" src="{{ picture }}">
    </div>
  {% endfor %}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>

{% capture datum_content %}
De sponsorloop wordt gehouden op zaterdag 19 April van 15:00 tot 18:00.
{: .m-0}

{% endcapture %}
{% include bubble_left.html image="/img/calendar.png" header="Zaterdag 19 April"
content=datum_content %}

{% capture activiteiten_content %}
Tijdens de sponsor zijn er verschillende activiteiten voor de kinderen: ballonenartiest, schminken, suikerspin, springkasteel, grabbelton en origami. En voor de volwassenen is er een
bingo!
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
{: .m-0}

De veiling is inmiddels gesloten, er kan helaas niet meer geboden worden!
{% endcapture %}

{% include bubble_right.html image="/img/az.jpg" no-rounded=true header="Bied mee" id="veiling"
content=bied_mee_content %}



{% capture doneer_content %}
Doneren kan via onderstaande link. Heel erg bedankt voor uw steun!
{: .m-0}

<a class="btn-xl btn-danger col-5" href="{{ site.doneerurl }}">&#10084;&#65038; Doneer</a>
{% endcapture %}
{% include bubble_left.html image="/img/betaalverzoek_qr.png" image-link=site.doneerurl no-rounded=true header="Doneer"
content=doneer_content %}

{% capture locatie_content %}
De sponsorloop is op het terrein van de Kolping Boys, [Beverdam 3 in Alkmaar](https://maps.app.goo.gl/orsoURzLDYEHCVJS6).
{: .m-0}

{% endcapture %}
{% include bubble_left.html header="Locatie"
image="/img/kolpingboys_applemaps.png" image-link="https://maps.app.goo.gl/orsoURzLDYEHCVJS6"
content=locatie_content %}


{% capture loop_mee_content %}
Als je op een andere manier wilt helpen, [kan je contact opnemen]({{ site.contacturl }}).
{: .m-0}

<a class="btn-xl btn-primary col-3" href="{{ site.contacturl }}">&#9993; Contact</a>

{% endcapture %}
{% include bubble_right.html header="Help mee!" image="/img/emma/IMG20240625164741.jpg"
content=loop_mee_content %}

{% capture flyer_content %}
Je kan de flyer [downloaden](/assets/flyer-sponsorloop.pdf) om verder te delen.
{: .m-0}

{% endcapture %}
{% include bubble_left.html header="Flyer" image="/img/flyer-sponsorloop.jpg" image-link="/assets/flyer-sponsorloop.pdf" no-rounded=true
content=flyer_content %}
