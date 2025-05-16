---
layout: page
background: '/img/emma/DSC_3543.JPG'
title: "Sponsoracties"
description: "We zamelen geld in voor een rolstoelbus voor Emma!"
wide: true
---

<div class="col-lg-11 mx-auto">
{% include doneer-info-buttons.html follow=true %}
</div>

{% capture intro_content %}
Om geld in te zamelen voor Emma organiseren we meerdere activiteiten. Zo zijn er binnenkort een spinning marathon en een motortocht, en was er op 19 April een sponsorloop.
{: .m-0}

{% endcapture %}
{% include bubble_right.html image="/img/triathlon.png" header="Activiteiten"
content=intro_content %}



{% capture spinning_content %}
Op zondag 25 mei 2025 wordt van 09:00 tot 12:00 een spinning marathon georganiseerd bij [Sportinstituut Tom van der Kolk](https://tomvanderkolk.nl)!
Je huurt een fiets voor €10 per uur, de opbrengst gaat naar Emma's rolstoelbus.

Inschrijven kan bij de balie van Sportinstituut Tom van der Kolk (Klaas Bootpad 2, Alkmaar)

[Meer Info](/spinningmarathon){: .btn-xl .btn-primary .col-3 }
{% endcapture %}
{% include bubble_left.html image="/img/flyer-spinning-marathon.jpg" image-link="/spinningmarathon" header="Spinning marathon"
content=spinning_content no-rounded=true %}



{% capture motortocht_content %}
De Harley Davidson club van Alkmaar organiseert op 21 juni 2025 een motortocht. Een route van 100 km, en je kan óók meerijden als je een andere merk motor rijdt!
{: .m-0}

[Meer Info](/motortocht){: .btn-xl .btn-primary .col-3 }
{% endcapture %}
{% include bubble_right.html image="/img/flyer-motortocht.jpg" image-link="/motortocht" header="Motortocht" no-rounded=true
content=motortocht_content %}



{% capture sponsorloop_content %}
Op Emma's verjaardag, 19 April 2025, was een sponsorloop op het terrein van de Kolping Boys.
{: .m-0}

[Meer Info](/sponsorloop){: .btn-xl .btn-primary .col-3 }
{% endcapture %}
{% include bubble_left.html header="Sponsorloop" image="/img/flyer-sponsorloop2.jpg" image-link="/sponsorloop" no-rounded=true
content=sponsorloop_content %}



{% capture doneer_content %}
Doneren kan via onderstaande link. Heel erg bedankt voor uw steun!
{: .m-0}

Als je op een andere manier wilt helpen, [kan je contact opnemen]({{ site.contacturl }}).

<a class="btn-xl btn-danger col-5" href="{{ site.doneerurl }}">&#10084;&#65038; Doneer</a>

<a class="btn-xl btn-primary col-3" href="{{ site.contacturl }}">&#9993; Contact</a>
{% endcapture %}
{% include bubble_right.html image="/img/betaalverzoek_qr.png" image-link=site.doneerurl no-rounded=true header="Doneer"
content=doneer_content %}
