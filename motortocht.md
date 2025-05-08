---
layout: page
background: "/img/harley-road.jpg"
title: "Open Ride Out"
description: "Rijd mee voor een rolstoelbus voor Emma!"
wide: true
---

<div class="col-lg-11 mx-auto">
{% include doneer-info-buttons.html %}
</div>


## Motortocht Alkmaar – 21 juni 2025

Op zaterdag 21 juni 2025 is het tijd voor een fantastische motortocht door Noord-Holland! Een dag vol vrijheid, mooie wegen en goed gezelschap.

### Start en Route
Tussen 9:00 en 11:00 kun je starten bij **restaurant De Alkmaarse Poort**, gelegen aan Omval 72 in Alkmaar. De route is ongeveer 100 km lang en voert langs diverse stempelposten. Onderweg kun je genieten van prachtige landschappen en gezellige tussenstops.

### Eindpunt en Afsluiting
De eindbestemming is **Westcoast Motors**, gevestigd aan Madame Curiestraat 6 in Alkmaar. Hier sluiten we de dag feestelijk af rond 15:00.

### Inschrijven
Meedoen? De inschrijfkosten bedragen **€10,-**. Inschrijven kan uitsluitend bij **De Alkmaarse Poort**, waar je bij inschrijving een stempelkaart ontvangt. Deze kaart gebruik je tijdens de motortocht om stempels te verzamelen bij de verschillende posten langs de route.

### Voor Iedereen!
De motortocht wordt georganiseerd door **Westcoast Motors**, maar is **open voor alle motorrijders**! Of je nu een Harley-Davidson hebt of een ander merk rijdt, iedereen is welkom om mee te doen aan deze geweldige tocht.




{% capture motortocht_content %}
We willen [Coast Riders Chapter Alkmaar](ttps://www.coastriderschapter.nl/) hartelijk bedanken voor de organisatie van dit event!
{: .m-0}

{% endcapture %}
{% include bubble_left.html image="/img/sponsors/coast-riders-alkmaar.png" no-rounded=true
content=motortocht_content %}



{% capture doneer_content %}
Doneren kan via onderstaande link. Heel erg bedankt voor uw steun!
{: .m-0}

<a class="btn-xl btn-danger col-5" href="{{ site.doneerurl }}">&#10084;&#65038; Doneer</a>
{% endcapture %}
{% include bubble_right.html image="/img/betaalverzoek_qr.png" image-link=site.doneerurl no-rounded=true header="Doneer"
content=doneer_content %}



{% capture doel_content %}
We zamelen geld in voor een rolstoelbus voor Emma.
{: .m-0}

[Lees meer over Emma]({{ "/overemma" | relative_url }})
{% endcapture %}
{% include bubble_left.html image="/img/rolstoelbus.jpg" header="Rolstoelbus"
content=doel_content %}



{% capture flyer_content %}
Je kan de flyer [downloaden](/assets/flyer-motortocht.pdf) om verder te delen.
{: .m-0}
{% endcapture %}
{% include bubble_right.html header="Flyer" image="/img/flyer-motortocht.jpg" image-link="/assets/flyer-motortocht.pdf" no-rounded=true
content=flyer_content %}



{% capture contact_content %}
Als je op een andere manier wilt helpen, [kan je contact opnemen]({{ site.contacturl }}).
{: .m-0}

<a class="btn-xl btn-primary col-3" href="{{ site.contacturl }}">&#9993; Contact</a>
{% endcapture %}
{% include bubble_left.html header="Help mee!" image="/img/emma/IMG20240625164741.jpg"
content=contact_content %}
