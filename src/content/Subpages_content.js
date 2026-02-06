/* Data Structure for Subpages Content  | portrait = 9:16 | landscape = 16:9 | description elements can be empty arrays if not needed, new string = new paragraph
--------------------------------------------------------------------------------------------------------
  url_ending: [
    {
      title: "",
      subtitle: "",
       description: {
          intro: [
             "",
             "...",
             
          ],
          list: [
            "",
            "...",
            
          ],
          outro: [
            "",
            "...",
          ]
        },
      media: [
        { type: "image", src: "../../Green.jpg", aspect: "portrait" },
        { type: "image", src: "../../Red.jpg", aspect: "landscape" },

        { type: "video", src: "../../Intro.mov", aspect: "portrait" },
        { type: "video", src: "../../Intro.mov", aspect: "landscape" },
      ],
    },
    {
     ...
    },
  ],
  ...
-------------------------------------------------------------------------------------------------------
*/


export const Subpages_content = {
  Finaler_stand: [
    {
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum dolor sit amet",
       description: {
          intro: [
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
  ],

  Testen: [
    {
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum dolor sit amet",
       description: {
          intro: [
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
  ],

  Spielbrett: [
    {
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum dolor sit amet",
       description: {
          intro: [
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
  ],

  Coding: [
    {
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum dolor sit amet",
       description: {
          intro: [
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
  ],

  Design_Animation: [
    {
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum dolor sit amet",
       description: {
          intro: [
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
  ],

  Erste_Schritte_Entwicklung: [
    {
      title: "Controller",
      subtitle: "Die Entwicklung unseres Controllers",
       description: {
          intro: [
            "Der Controller wurde mit dem Ziel entwickelt, ein eigenes und einfaches Gerät zu schaffen, das nur die wichtigsten Funktionen für die Menü-Navigation im digitalen Spiel enthält. Als Inspiration dienten uns Multimedia-Systeme aus Autos: Drehen nach links  oder rechts bewegt das Menü, Drücken wählt aus. Für den Bau benötigten wir verschiedene Bauteile wie einen Encoder und einen Mikrocontroller, der die Signale per Bluetooth senden kann. Nach anfänglichen Schwierigkeiten bei der Bauteilesuche und einem beschädigten Mikrocontroller beim Löten funktionierte der Aufbau schließlich reibungslos."
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
    {
      title: "Kamera",
      subtitle: "Kamera für das Tracking",
       description: {
          intro: [
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
  ],

  Charakter: [
    {
      title: "3D Charakter",
      subtitle: "Die Entwicklung der Figuren in Blender",
       description: {
          intro: [
            "Unser ursprünglicher Plan war, die 3D-Modelle der Spielfiguren mithilfe von Meshy, einer KI-basierten Plattform zur automatischen Generierung von 3D-Modellen, zu erstellen. Wir testeten zunächst verschiedene Entwürfe, mussten jedoch feststellen, dass die Ergebnisse nicht unseren Vorstellungen entsprachen. Über das Education-Programm erhielten wir einen Pro-Account, der es erlaubte, mehrere Ansichten einer Figur hochzuladen, um detailliertere Meshes zu erzeugen. Trotzdem blieb die Qualität der automatisch generierten Modelle hinter unseren Erwartungen zurück.", 
            "Schließlich entschieden wir uns, die Modelle eigenständig in Blender zu erstellen. Dies war eine große Herausforderung, da niemand im Team zuvor Erfahrung im 3D-Modellieren hatte. Mit viel Geduld, zahlreichen YouTube-Tutorials und einigen Fehlschlägen gelang es uns jedoch, eigene Figuren zu modellieren, die sich für den 3D-Druck eigneten. So entstanden die ersten physischen Spielfiguren, die später als Grundlage für das Kamera-Tracking im Spiel dienen."
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
    {
      title: "Erste Druckversionen",
      subtitle: "Druckversuche und die Entwicklung der finalen Figuren",
       description: {
          intro: [
            "Nach dem erfolgreichen Modellieren der Figuren in Blender gingen wir in die Zentralwerkstatt der Hochschule, um die Modelle mit dem dort vorhandenen 3D-Drucker herzustellen. Uns war von Anfang an bewusst, dass der Drucker nicht optimal für unsere Anforderungen ist, da die Figuren mit etwa 6 cm Höhe sehr klein sind und einen vergleichsweise hohen Detailgrad aufweisen.", 
            "Wie erwartet spiegelte sich dies im Ergebnis wider: Die Ausdrucke waren grundsätzlich erkennbar, feine Strukturen – insbesondere an Händen und Füßen – wurden jedoch nur unzureichend wiedergegeben. Mehrere Testdrucke verbesserten die Details nur marginal, sodass sie weiterhin weicher und weniger präzise ausfielen, als wir es uns erhofft hatten.", 
            "Dementsprechend suchten wir nach Möglichkeiten, mit anderen 3D-Druckverfahren und angepassten Modellen ein besseres Ergebnis zu erzielen und die feinen Details unserer Figuren sauberer abzubilden."
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
    {
      title: "Finale Druckversionen",
      subtitle: "Finaler Druck",
       description: {
          intro: [
           "Schließlich fanden wir einen geeigneten 3D-Drucker, der mit Resin arbeitet und ein anderes Druckverfahren nutzt. Mit diesem konnten wir neue Versionen unserer Figuren herstellen, die deutlich detaillierter und präziser waren. Die Ergebnisse entsprachen nun unseren Vorstellungen, insbesondere die feinen Strukturen an Händen, Füßen und anderen Details wurden sauber abgebildet.", 
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
  ],

  Schnittstelle: [
    {
      title: "Recherche",
      subtitle: "Welche Technologien kommen in Frage",
       description: {
          intro: [
            "Um ein Gefühl für Maßstab und Spielgefühl zu bekommen, begannen wir damit, das Spielbrett aus Pappe nachzubauen. Dabei entstanden erste Prototypen von Gebäuden wie dem Tempel und den Ressourcenlagern. Außerdem fertigten wir Hexagon-Module an, um die einzelnen Teilgebiete des Spielfelds flexibel gestalten zu können. Diese ersten Modelle halfen uns dabei, die geplanten Spielmechaniken besser zu visualisieren und ein erstes Gefühl für den Umgang mit den Spielelementen zu entwickeln.",
          ],
          list: [
            "NFC (z.B. RC522, PN532): Jede Figur enthält einen NFC-Tag, Felder erkennen diesen.", 
            "Infrarot (IR-Kommunikation): Sender/Empfänger in Feldern und Figuren erkennen sich gegenseitig.",
            "Drucksensoren: Felder erkennen Gewicht oder Druck der Figuren.",
            "Lichtschranken: Unter den Feldern platzierte Sensoren erkennen, wenn eine Figur darüber steht.",
            "Computer Vision: Kamera über dem Spielfeld erkennt Positionen der Figuren durch Bilderkennung.",
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
    {
      title: "Unsere Schnittstelle",
      subtitle: "Welche Technologien nutzen wir?",
       description: {
          intro: [
            "Um das analoge Spielerlebnis auf unserem Spielbrett durch digitale Elemente zu erweitern, haben wir verschiedene Ansätze zur Figuren- und Felderkennung geprüft. Beispielsweise wäre NFC denkbar gewesen, bei dem jede Figur einen Tag enthält und die Felder diesen erkennen. Praktisch war dies jedoch nicht umsetzbar, da jede Figur oder jedes Feld mehrere Reader benötigen würde – das ist zu teuer.",
            "Weitere Möglichkeiten wie Infrarot-Kommunikation oder Drucksensoren schieden aus: IR-Lösungen erfordern sehr viele Komponenten und sind möglicherweise fehleranfällig bei unterschiedlichen Lichtverhältnissen, während Drucksensoren bei ähnlichen Figurengewichten keine zuverlässige Unterscheidung erlauben. Auch kontaktbasierte Stromkreise wären einfach und günstig, setzen jedoch Elektronikkenntnisse voraus, die im Team nicht ausreichend vorhanden waren.", 
            "Nach Abwägung aller Optionen entschieden wir uns für eine Lösung mit Computer Vision. Fixierte Kameras beobachten das Spielbrett kontinuierlich, ein Bilderkennungsalgorithmus identifiziert die Figuren anhand visueller Merkmale und berechnet ihre exakten Positionen. Diese Informationen werden an unsere Spielengine weitergeleitet, die passende Animationen und visuelle Effekte erzeugt.", 
            "Als Engine verwenden wir Godot, da sie Open Source ist, flexibel eingesetzt werden kann und bereits im 5. Semester von Teilen unseres Teams genutzt wurde. So entsteht eine hybride Spielerfahrung, die das haptische Gefühl eines analogen Brettspiels mit den Möglichkeiten digitaler Technologien verbindet."
          ],
          list: [

          ],
          outro: [

          ]
        },
      media: [
      ],
    },
  ],

  Prototyp: [
    {
      title: "Version 1.0",
      subtitle: "Erste Version unseres Prototyps",
       description: {
          intro: [
            "Um ein Gefühl für Maßstab und Spielgefühl zu bekommen, begannen wir damit, das Spielbrett aus Pappe nachzubauen. Dabei entstanden erste Prototypen von Gebäuden wie dem Tempel und den Ressourcenlagern. Außerdem fertigten wir Hexagon-Module an, um die einzelnen Teilgebiete des Spielfelds flexibel gestalten zu können. Diese ersten Modelle halfen uns dabei, die geplanten Spielmechaniken besser zu visualisieren und ein erstes Gefühl für den Umgang mit den Spielelementen zu entwickeln.",            
            "Der Fokus lag in dieser frühen Phase vor allem auf der Definition geeigneter Größenverhältnisse sowie der räumlichen Anordnung zentraler Spielelemente. Wir testeten verschiedene Varianten, um herauszufinden, wie die Komponenten optimal miteinander harmonieren. Diese praktische Herangehensweise erwies sich als besonders wertvoll, da sie uns nicht nur wichtige Erkenntnisse zur Spielbalance lieferte, sondern auch die Grundlage für die nächste Iteration des Prototyps schuf."
          ],
          list: [
          ],
          outro: [

          ]
        },
      media: [
      ],
    },
    {
      title: "Version 1.1",
      subtitle: "Kommunikation zwischen Analog und Digital",
       description: {
          intro: [
            "Mit der zweiten Version unseres Prototyps haben wir die ersten Schritte in Richtung Technologie gewagt und begonnen, analoge und digitale Elemente miteinander zu verbinden. Mithilfe eines Makey Makey entwickelten wir ein einfaches, aber wirkungsvolles System, um eine digitale Reaktion auf eine physische Aktion zu erzeugen. Dazu simulierten wir eine Kontaktfläche auf den Hexagon-Modulen des Spielbretts, die bei Berührung ein Signal auslöste.",            
            "Dieses Signal wurde in Figma genutzt, um eine Animation zu starten, die zeigte, wie sich ein Spieler auf ein anderes Hexagon bewegt. Damit konnten wir erstmals testen, wie sich das Zusammenspiel zwischen physischem Spielmaterial und digitalen Rückmeldungen anfühlen könnte. Diese Experimente lieferten uns wertvolle Erkenntnisse über mögliche Schnittstellen zwischen analogem Spielgeschehen und digitalen Erweiterungen – und gaben einen ersten Ausblick auf das Potenzial eines hybriden Spielerlebnisses."
          ],
          list: [
          ],
          outro: [
            
          ]
        },
      media: [
      ],
    },
    {
      title: "Werkschau 2025",
      subtitle: "Halbzeit, Ausstellung unseres Prototyps",
       description: {
          intro: [
            "Im Rahmen der Weiterentwicklung unseres Prototyps haben wir zusätzliche Häusermodelle entworfen und erste Farb- sowie Detailkonzepte ausprobiert. Dieser kreative Prozess wurde durch unsere Präsentation auf der Werkschau angestoßen, bei der wir unseren aktuellen Zwischenstand vorstellen konnten.",            
            "Durch die gezielte Farbgestaltung konnten wir dem Spielbrett mehr Lebendigkeit und Charakter verleihen. Außerdem haben wir die erste Spielfigur modelliert. Der erste Prototypen wurden aus Bastelton modelliert, um ein Gefühl für Form, Größe und Design zu bekommen. So nimmt unsere Spielwelt Schritt für Schritt Gestalt an."
          ],
          list: [
          ],
          outro: [
            
          ]
        },
      media: [
      ],
    },
  ],

  Goetter_Halbgoetter: [
    {
      title: "Recherche",
      subtitle: "Verschiedene Mythologien und ihre Götterfiguren",
       description: {
          intro: [
             "Für die thematische Ausrichtung unseres Spiels haben wir uns mit unterschiedlichen Mythologien aus verschiedenen Kulturkreisen auseinandergesetzt. Dabei standen unter anderem die griechische, nordische, ägyptische sowie fernöstliche Mythologie im Fokus. Jede dieser Traditionen bringt eigene Götterfiguren, Rollenbilder und mythologische Wesen hervor, die das jeweilige Weltbild widerspiegeln.",            
          ],
          list: [
            "Griechische Mythologie: Götter wie Zeus, Hera und Poseidon",
            "Nordische Mythologie: Figuren wie Odin, Thor und Loki",
            "Ägyptische Mythologie: Götter wie Ra, Isis und Osiris",
            "Fernöstliche Mythologie: Konzepte wie Yin und Yang, sowie Götter aus dem Hinduismus und Buddhismus",
            "..."
          ],
          outro: [
            "Aus dieser Vielzahl an Figuren haben wir gezielt eine Auswahl getroffen und versucht, wiederkehrende Muster und Gemeinsamkeiten zu identifizieren. Auf dieser Grundlage haben wir Kategorien gebildet und entschieden, welche Arten von Gottheiten für unser Spielkonzept besonders relevant sind und sich gut in das Gameplay integrieren lassen.",
            "Im Verlauf dieser Analyse wurde deutlich, dass viele Kulturen vergleichbare Gottheiten oder Rollen kennen, etwa in Bezug auf Natur, Krieg, Tod oder Wissen. Diese inhaltlichen Parallelen ermöglichen es uns, Götter bestimmten Themen- oder Einflussbereichen zuzuordnen. Daraus ergeben sich Ansatzpunkte für die Gestaltung unseres Spielfelds sowie für spielmechanische Elemente, die auf diesen übergeordneten Konzepten aufbauen.",
          ]
        },
      media: [
      ],
    },
    {
      title: "Götter",
      subtitle: "Unser Vorgehen bei der Entwicklung der Götterfiguren",
       description: {
          intro: [
             "Im Rahmen unserer Recherche haben wir unterschiedliche Mythologien untersucht und zentrale Erkenntnisse auf unserem Miro-Board festgehalten. Aufbauend darauf stand die Aufgabe im Fokus, geeignete Götterfiguren für die einzelnen Gebiete unseres Spiels zu entwickeln.",
             "Dazu erarbeitete jedes Teammitglied eigene Konzepte in Form von Tabellen, Listen und Steckbriefen. Diese Entwürfe dienten als Grundlage für eine gemeinsame Diskussion, in der wir zentrale Eigenschaften, Rollen und Merkmale der Götter definiert und weiter verfeinert haben.",
             "Zu Beginn verfolgten wir den Ansatz, die Götterfiguren an bestehende Mythen anzulehnen und sie in menschlicher Form darzustellen. Im weiteren Verlauf des Projekts entschieden wir uns jedoch bewusst dafür, eigenständige, nicht-menschliche Gottheiten zu entwickeln und uns von konkreten mythologischen Vorbildern zu lösen. Dieser Schritt ermöglichte es uns, eine konsistente und eigenständige Spielwelt zu gestalten und kreative Freiräume bei der Ausarbeitung der Figuren zu nutzen."
          ],
          list: [  
          ],
          outro: [
          ]
        },
      media: [
      ],
    },
    {
      title: "Halbgötter",
      subtitle: "Die Entwicklung der Halbgötter und ihres Skilltrees",
       description: {
          intro: [
             "Nachdem die grundlegenden Eigenschaften der Götter definiert waren, haben wir uns mit der Ausarbeitung der Halbgötter beschäftigt. Im Mittelpunkt stand dabei ein Skilltree-System, das jedem der sieben Halbgötter eine klar unterscheidbare Spielweise ermöglicht.",
             "Jeder Halbgott verfügt über zwei thematisch und funktional unterschiedliche Hauptzweige innerhalb seines Skilltrees. Beim Levelaufstieg kann jeweils nur eine Fähigkeit aus einem dieser Zweige gewählt werden, wodurch sich individuelle Entwicklungspfade ergeben. Am Ende des Skilltrees erhält der Halbgott ein zusätzliches Bonus-Level, das sich an dem Zweig orientiert, in den der Spieler über den Verlauf des Spiels überwiegend investiert hat.",
             "Bei der Gestaltung der Fähigkeiten war es uns wichtig, Überschneidungen zwischen den Halbgöttern zu vermeiden. Jeder Charakter sollte über einzigartige Stärken verfügen und in bestimmten Spielsituationen besonders effektiv sein. Auf diese Weise entstehen sieben klar voneinander abgegrenzte Halbgötter, die unterschiedliche strategische Ansätze und Spielstile unterstützen."
          ],
          list: [  
          ],
          outro: [
          ]
        },
      media: [
      ],
    },
  ],

  Spielmechaniken: [
    {
      title: "Erkundung",
      subtitle: "Ausarbeitung der Expeditionsmechanik",
      description: {
        intro: [
          "Für die Gestaltung der Erkundungsphase haben wir im Team verschiedene Aktionen diskutiert, die Spieler:innen während einer Expedition ausführen können. Ziel war es, ein System zu schaffen, das sowohl klare Strukturen bietet als auch Raum für strategische Entscheidungen lässt. Am Ende einigten wir uns auf ein Modell, bei dem Expeditionen in verschiedene Gebiete mit zugehörigen Teilgebieten führen, in denen die Aktionen ausgeführt werden können."
        ],

        list: [
          "Nach Loot suchen",
          "Nach Informationen suchen", 
          "Gotteswut senken durch beten",
          "Bauen von Gebäuden",
          "Rituale abhalten",
        ],

        outro: [
          "Diese Aktionen bilden das Fundament der Expeditionsphase. Im weiteren Verlauf der Spielentwicklung haben wir sie erneut überprüft und angepasst, um die Erkundungen abwechslungsreich und spielerisch attraktiv zu gestalten."
        ],
      },
      media: [
       
      ],
    },
    {
      title: "Dorf",
      subtitle: "Ausarbeitung der Dorfmechanik",
      description: {
        intro: [
          "Für die Gestaltung der Dorfmechanik haben wir im Team verschiedene Aktionen diskutiert, die Spieler:innen während einer Expedition ausführen können. Ziel war es, ein System zu schaffen, das sowohl klare Strukturen bietet als auch Raum für strategische Entscheidungen lässt. Am Ende einigten wir uns auf ein Modell, bei dem Expeditionen in verschiedene Gebiete mit zugehörigen Teilgebieten führen, in denen die Aktionen ausgeführt werden können.", 
          "Im weiteren Verlauf wurden diese Grundzüge verfeinert, ergänzt und mit spezifischen Elementen angereichert, sodass die Dorfphase einen eigenständigen Charakter und spielerischen Reiz erhält."
        ],

        list: [
        ],

        outro: [
        ],
      },
      media: [
       
      ],
    },
  ],

  Gebiete: [
    {
      title: "Verschiedene Gebiete",
      subtitle: "Konzeption von verschiedenen Randgebieten für die Expedition",
      description: {
        intro: [
          "Die Entwicklung unseres Spielbretts begann mit der Analyse verschiedener Mythologien. Dabei fiel auf, dass viele Kulturen ähnliche Götter mit vergleichbaren Aufgaben, Bedeutungen und Symbolen kennen. Aus diesen Parallelen leiteten wir sieben zentrale Themengebiete ab, die als Grundlage für unsere Spielwelt dienen. Jedes Gebiet wurde anschließend weiter ausgearbeitet, mit eigenen Ideen, Geschichten und spezifischen Funktionen versehen.",
        ],

        list: [
          "Wüste",
          "Natur",
          "Krieg",
          "Vulkan",
          "Sumpf", 
          "Winter", 
          "Sturm"
        ],

        outro: [
        ],
      },
      media: [
       
      ],
    },
    {
      title: "Teilgebiete",
      subtitle: "Konzeption von den Teilgebieten für die Expedition",
      description: {
        intro: [
          "Die Entwicklung unseres Spielbretts begann mit der Analyse verschiedener Mythologien. Dabei fiel auf, dass viele Kulturen ähnliche Götter mit vergleichbaren Aufgaben, Bedeutungen und Symbolen kennen. Aus diesen Parallelen leiteten wir sieben zentrale Themengebiete ab, die als Grundlage für unsere Spielwelt dienen. Jedes Gebiet wurde anschließend weiter ausgearbeitet, mit eigenen Ideen, Geschichten und spezifischen Funktionen versehen.",
        ],

        list: [
          "Standard: Keine Speziellen Möglichkeiten, hier kann aber Gebaut werden.",
          "Strafe: Erschwert den Aufenthalt im Gebiet ",
          "Lieblingsort: Gebietsritual kann abgehalten werden nachdem Hinderniss umgangen wurde"
        ],

        outro: [
        ],
      },
      media: [
       
      ],
    },

  ],

  Recherche: [
    {
      title: "Spielelemente",
      subtitle: "Was uns am Spielen wirklich Spaß macht",
      description: {
        intro: [
          "Spielmechaniken und Spielelemente bilden die Grundlage jedes Spiels. Sie bestimmen, wie sich ein Spiel anfühlt, welche Entscheidungen getroffen werden und wie Spieler:innen miteinander interagieren. Elemente wie Karten, Würfel, Ressourcen, Fähigkeiten oder Spielfelder greifen dabei ineinander und prägen gemeinsam das gesamte Spielerlebnis.",
          "Im Rahmen unseres Projekts haben wir verschiedene Spiele analysiert und gezielt untersucht, welche Mechaniken uns besonders ansprechen und warum. Dabei ging es weniger um einzelne Titel als um wiederkehrende Muster: Welche Entscheidungen fühlen sich sinnvoll an? Wo entsteht Spannung? Und welche Systeme motivieren langfristig? Aus dieser Analyse haben sich mehrere Mechaniken herauskristallisiert, die wir für unser eigenes Spielkonzept als besonders relevant erachten:",
        ],

        list: [
          "Kurze, abwechslungsreiche Spielzüge mit Pflicht- und optionalen Aktionen",
          "Zufallselemente wie Würfeln oder Kartenziehen",
          "Individuelle Charakterfähigkeiten und unterschiedliche Spielstile",
          "Tile-Placement und Deckbuilding zur Vertiefung der Spieltiefe",
          "Belohnungssysteme und Power-Ups für spürbaren Fortschritt",
          "Ressourcenmanagement sowie Aufbau- und Handelsmechaniken",
          "Kooperation mit Raum für eigenständige Entscheidungen oder Bluff",
        ],

        outro: [
          "Ergänzend zur allgemeinen Analyse haben wir uns intensiver mit dem Spiel „Winter der Toten“ auseinandergesetzt, einem kooperativen Überlebensspiel mit starkem Fokus auf Entscheidungsfindung und Gruppendynamik. Durch das gemeinsame Spielen und die anschließende Analyse der Mechaniken konnten wir konkret nachvollziehen, welche Systeme gut funktionieren und an welchen Stellen Herausforderungen entstehen. Die daraus gewonnenen Erkenntnisse sind direkt in die Weiterentwicklung unseres eigenen Spielkonzepts eingeflossen."
        ],
      },
      media: [
       
      ],
    },
    {
      title: "Hybride Spiele",
      subtitle: "Hybride Spiele die wir Analysierd haben auf ihr Spielprinzip, Analog/Digital Schnittstelle und mehr",
       description: {
          intro: [
             "Wir haben uns auf die Suche nach Spielen gemacht, die bereits einen digitalen Aspekt integrieren, um herauszufinden, wie diese in modernen Formaten umgesetzt werden. Dabei haben wir verschiedene Spiele ausgewählt. Im folgenden wird ein auszug dieser Spiele vorgestellt.",
          ], 
          list: [ 
          ], 
          outro: [
            "Wir haben festgestellt, dass die meisten Spiele eine App als digitales Begleitmittel nutzen. Diese Apps helfen den Spielern oft bei der Erklärung der Regeln, beim Aufbau des Spiels und geben Hinweise darauf, was als Nächstes zu tun ist. Außerdem werden die Apps häufig für Storytelling verwendet, um den Spielverlauf zu dokumentieren, Punkte zu zählen und das Zeitmanagement zu unterstützen.",
          ]
        },
      media: [
      ],
    },
    {
      title: "Designprinzipien",
      subtitle: "Was macht ein gutes Spiel wirklich spielenswert?",
      description: {
        intro: [
          "Ein gutes Brettspiel basiert auf drei zentralen Säulen: Thema, Spielmechanik und Spielerfahrung. In unserem Projekt stützen wir uns besonders auf zwei dieser Elemente: Zum einen haben wir bereits eine grobe Story entwickelt, die das Thema vorgibt. Zum anderen orientieren wir uns bei der Spielerfahrung an bewährten Elementen erfolgreicher Spiele."
        ],

        list: [
          "Klare Kernmechanik",
          "Interressante Entscheidungen",
          "Balance zwischen Strategie und Glück",
          "Spielzeit",
          "Klare Regeln und einfache Erklärungen",
          "Spannende Interaktion zwischen den Spielern",
          "Belohnungssysteme und Fortschritt",
          "Wiederspielbarkeit",
          "Ausgewogenes Risiko und Belohnung",
          "Thematik und Atmosphäre",
        ],

        outro: [
        ],
      },
      media: [
       
      ],
    }
  ],
}
