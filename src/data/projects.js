import CREARTION from '../assets/projects/creartion/creartion.png'
import FOODPOOL from '../assets/projects/foodpool/foodpool.jpg'
import AQUAPLANE from '../assets/projects/aquaplane/aquaplane.jpg'
import { FaUnity, FaJava, FaPython, FaReact } from 'react-icons/fa'
import { SiMysql, SiFlutter, SiFirebase, SiCsharp } from 'react-icons/si'

const projects = [
    {
      id: 1,
      image: AQUAPLANE,
      title: 'AQUAPLANE',
      typ: 'Webanwendung',
      text: 'AQUAPLANE sagt voraus, welches Argument einer Debatte in Bezug auf Logik, Rhetorik und Dialektik überzeugender ist und liefert Erklärungen.',
      github: 'https://github.com',
      demo: 'http://github.com',
      stack: {
        'Java': FaJava,
        'Python': FaPython,
        'React': FaReact,
        'MySQL': SiMysql
      },
      tags: ['Computational Argumentation', 'Argument Quality', 'Explainability'],
      year: '2023',
      introduction: 'Aquaplane ist das Ergebnis meiner Bachelorarbeit, die sich mit dem Thema der automatisierten Bewertung der Qualität von Argumenten und der Bestimmung des überzeugenderen Arguments beschäftigt.  In Zeiten, in denen Menschen in sozialen Medien, Artikeln und Aufsätzen aufgrund unterschiedlicher Meinungen und Interessenkonflikte miteinander argumentieren, ist es von großer Bedeutung, überzeugende Argumente anzuführen, um ein Publikum zu überzeugen, Streitfragen zu lösen und fundierte Entscheidungen zu treffen. Bisher entwickelte Methoden, können entweder durch einen Vergleich von zwei Argumenten, oder durch graduelle Bewertung der Qualität eines Arguments jeweils zu einer Anfrage entscheiden, welches Argument überzeugender bzw. von höherer Qualität ist.',
      problem: 'Die verwendeten (Sprach-)Modelle können ihre Entscheidung häufig nicht transparent erklären, da sie meist ausschließlich darauf trainiert werden, die Genauigkeit zu erhöhen; auf Kosten der Erklärbarkeit. Menschen können daher nicht nachvollziehen, welche Qualitätseigenschaften eines Arguments für die Entscheidungsfindung ausschlaggebend waren, wodurch die Entscheidungen subjektiv wirken.',
      vision: 'Es werden verschiedene Dimensionen der Argumentqualität wie die Logik, Rhetorik und die Dialektik gemessen und durch Vergleichen bestimmter Qualitätsmerkmale der Argumente Unterschiede in der Argumentqualität festgestellt. Daraus wird das überzeugendere Argument abgeleitet und Nutzenden interaktiv Erklärungen für die Entscheidungen geliefert.'
    },
    {
      id: 2,
      image: CREARTION,
      title: 'CreARtion',
      typ: 'Mobile Applikation',
      text: 'Mit CreARtion können virtuelle Skulpturen aus auswählbaren und manipulierbaren Formen in einem physischen Raum errichtet werden.',
      github: 'https://github.com',
      demo: 'http://github.com',
      stack: {
        'Unity': FaUnity,
        'C#': SiCsharp
      },
      tags: ['Augmented Reality', 'Sculpting', 'Prototyping'],
      year: '2021',
      introduction: 'CreARtion ist als gemeinsames Studienprojekt mit einem Kommilitonen entstanden. Es handelt sich dabei um eine Augmented-Reality-App, mit der Nutzende primitive 3D-Objekte in AR erstellen können. Mit ihr sollen sich Nutzer und Nutzerinnen  künstlerisch entfalten können oder simple Prototypen erstellen können.',
      problem: 'Hürden ergeben sich dabei vor allem in der reibungslosen Gestaltung der Nutzerinteraktion. Nutzende sollten möglichst einfach und intuitiv mit der Umgebung und den virtuellen Formen interagieren können, um damit die Illusion der Verbundenheit der Realität und der Virtualität aufrecht zu erhalten.',
      vision: 'In Benutzerstudien wurde ermittelt, welche Interaktionstechniken am besten geeignet sind, um Formen zu platzieren, auszuwählen und auf verschiedene Weisen zu bearbeiten. Dadurch wurde der Fokus besonders auf die Benutzerfreundlichkeit gelegt.'
    },
    {
      id: 3,
      image: FOODPOOL,
      title: 'FoodPool',
      typ: 'Mobile Applikation',
      text: 'FoodPool hilft dabei Rezepte zu organisieren, wöchentliche Essenspläne zu erstellen und daraus Einkaufslisten zu generieren.',
      github: 'https://github.com',
      demo: 'http://github.com',
      stack: {
        'Flutter': SiFlutter,
        'Firebase': SiFirebase
      },
      tags: ['Meal Planning', 'Recipe Organizer', 'Shopping List'],
      year: '2020',
      introduction: 'Dieses kleine, private Projekt entstand mit dem Ziel, meinen eigenen Alltag in der Küche effizienter zu gestalten. Bei FoodPool handelt es sich um eine mobile Applikation, die es ermöglicht Rezepte zu organisieren, wöchentliche Essenspläne zu erstellen und Einkaufslisten zu generieren.',
      problem: 'Häufig ist es schwierig den Überblick über alle Gerichte zu behalten, was oft dazu führt, dass man immer wieder das Gleiche kocht. Zusätzlich erfordert es regelmäßige Planung, um im Voraus festzulegen, was in der nächsten Woche gegessen werden soll, und dabei auch zu berücksichtigen, welche Zutaten dafür benötigt werden und eingekauft werden müssen.',
      vision: 'In einer Anforderungsanalyse wurden die erforderlichen Funktionalitäten für die Applikation spezifiziert und mit Hilfe von Mock-Ups visualisiert. Mithilfe des Flutter-Frameworks und der Programmiersprache Dart wurden die Funktionalitäten implementiert. Flutter ermöglicht die plattformübergreifende Entwicklung von mobilen Anwendungen. Dart, als Programmiersprache, wurde verwendet, um die Logik hinter den Funktionen der Applikation zu entwickeln. Um die erforderlichen Daten wie Rezepte, Essenspläne und die Einkaufsliste effizient zu speichern und abzurufen, wurde die NoSQL-Datenbank Firebase integriert. Firebase bietet eine Cloud-basierte Plattform zur Verwaltung von Daten und ermöglicht eine schnelle und skalierbare Speicherung von Informationen.'
    }
  ]

  export default projects;