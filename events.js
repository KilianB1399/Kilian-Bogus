// events.js
const events = [
    {
      "date": "01.09.2025 – 28.02.2027",
      "title": "FSJ im Krankentransport am Delme Klinikum Delmenhorst",
      "description": "Freiwilliges Soziales Jahr im Krankentransport am Delme Klinikum Delmenhorst."
    },
    {
      "date": "Nov 2024",
      "title": "Sanitätshelfer A (San A) Lehrgang",
      "description": "Absolvierung des Sanitätshelfer A Lehrgangs an zwei Wochenenden (02.11. – 03.11. und 23.11. – 24.11.2024)."
    },
    // {
      // "date": "Aug 2024",
      // "title": "DLRG Stedinger Land e.V.",
      // "description": "Aktivitäten im Bereich Wasserrettung, Schnelle Einsatzgruppe (SEG) und Schwimmausbildung."
    // },
    {
      "date": "26.10.2024",
      "title": "Führerschein Klasse A1",
      "description": "Erhalt des Führerscheins Klasse A1 für Motorräder und Leichtkraftfahrzeuge."
    },
    {
      "date": "11.09.2023",
      "title": "Schwimmabzeichen Bronze (DLRG)",
      "description": "Erfolgreiche Teilnahme an der Schwimmausbildung zur Erlangung des Deutschen Schwimmabzeichens in Bronze."
    },
    {
      "date": "08/2019 – 07/2019",
      "title": "Gymnasium Lemwerder",
      "description": "Beginn der schulischen Ausbildung am Gymnasium Lemwerder."
    },
    {
      "date": "09/2015 – 07/2019",
      "title": "Grundschule Ganspe",
      "description": "Besuch der Grundschule Ganspe und Abschluss der Grundschulzeit."
    }
];

const parseDate = (dateString) => {
    const parts = dateString.split(" ");
    if (parts.length === 2) {
        return new Date(`${parts[0]} 1, ${parts[1]}`);
    } else if (dateString.includes("–")) {
        const [start, end] = dateString.split(" – ");
        return new Date(`${start} 1, ${end}`);
    } else if (/\d{2}.\d{2}.\d{4}/.test(dateString)) {
        return new Date(dateString.split(".").reverse().join("-"));
    }
    return new Date(dateString);
};

events.sort((a, b) => parseDate(b.date) - parseDate(a.date));

window.onload = function() {
    const timeline = document.querySelector('.timeline');
    
    events.forEach(event => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');
        
        const timelineDate = document.createElement('div');
        timelineDate.classList.add('timeline-date');
        timelineDate.textContent = event.date;

        timelineDate.style.marginLeft = "40px";
        timelineDate.style.fontSize = "calc(18px)";
        timelineDate.style.transform = "translateY(-25px)";
        
        const timelineContent = document.createElement('div');
        timelineContent.classList.add('timeline-content');
        
        const title = document.createElement('h3');
        title.textContent = event.title;
        
        const description = document.createElement('p');
        description.textContent = event.description;
        
        timelineContent.appendChild(title);
        timelineContent.appendChild(description);
        
        timelineItem.appendChild(timelineDate);
        timelineItem.appendChild(timelineContent);
        
        timeline.appendChild(timelineItem);
    });
};
