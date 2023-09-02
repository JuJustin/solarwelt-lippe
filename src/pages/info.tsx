import React from 'react';

import {
  Box,
  Button,
  Collapse,
  createStyles,
  Divider,
  Grid,
  List,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListItemButton, Stack } from '@mui/material';
import Head from 'next/head';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import LazyShow from '../components/LazyShow';
import config from '../config/index.json';

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    container: {
      backgroundColor: 'rgba(255, 241, 211, 0.2)',
      borderRadius: '20px',
      padding: 30,
      textAlign: 'center',
      minWidth: 350,
      maxWidth: 550,
    },
    title: {
      margin: '0px 0 20px 0',
    },
    button: {
      margin: '30px 0',
      backgroundColor: '#FF914D',
      color: '#ffffff',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#FF994D',
      },
    },
    listItemText: {
      fontSize: '1em',
      fontWeight: 'bold',
    },
    listItemSubText: {
      fontSize: '0.8em',
      paddingLeft: '1em',
      paddingRight: '1em',
    },
  })
);

function getItemCount() {
  let w = 2;
  if (typeof window !== 'undefined') {
    w = window.innerWidth;
  }
  if (w > 450) {
    return 4;
  }

  return 12;
}

const App = () => {
  const { company } = config;
  const {
    name: companyName,
    logo,
    beratung,
    mwst,
    kostensparen,
    iconBeratung,
    iconPlanung,
    iconMontage,
    iconAnmeldung,
    iconSupport,
    logoTop,
  } = company;
  const classes = useStyles();
  const [frage1, setFrage1] = React.useState(false);
  const [frage2, setFrage2] = React.useState(false);
  const [frage3, setFrage3] = React.useState(false);
  const [frage4, setFrage4] = React.useState(false);
  const [frage5, setFrage5] = React.useState(false);

  const handleClick = () => {
    setFrage1(!frage1);
  };
  const handleClick2 = () => {
    setFrage2(!frage2);
  };
  const handleClick3 = () => {
    setFrage3(!frage3);
  };
  const handleClick4 = () => {
    setFrage4(!frage4);
  };
  const handleClick5 = () => {
    setFrage5(!frage5);
  };

  // Get the button:

  function scrollFunction() {
    const mybutton = document.getElementById('myBtn');

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      if (mybutton !== null) {
        mybutton.style.display = 'block';
      }
    } else if (mybutton !== null) {
      mybutton.style.display = 'none';
    }
  }

  // When the user scrolls down 20px from the top of the document, show the button
  if (typeof window !== 'undefined') {
    window.onscroll = function scroller() {
      scrollFunction();
    };
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    const mybutton = document.getElementById('myBtn');

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    if (mybutton !== null) {
      mybutton.style.scrollBehavior = 'smooth';
    }
  }

  return (
    <div
      className={`websiteBackground bg-background grid gap-y-2  overflow-hidden`}
    >
      <Head>
        <title>
          {
            'Solarwelt-Lippe Photovoltaikanlage - Jetzt unverbindliches Angebot einholen!'
          }
        </title>
        <meta
          property="og:title"
          content="Solarwelt-Lippe Photovoltaikanlage - Jetzt unverbindliches Angebot einholen!"
          key="title"
        />
        <meta
          name="description"
          content="Sie möchten mit einer eigenen Photovoltaikanlage Strom erzeugen und Ihre Kosten senken? Profitieren Sie Dank Fördermittel des Staates. Jetzt informieren und und unverbindliches Angebot einholen!"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@id': 'https://solarwelt-lippe.de/',
                    name: 'Startseite',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  item: {
                    '@id': 'https://solarwelt-lippe.de/angebot/',
                    name: 'Angebot',
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <div className="flex items-center justify-center">
        <a href="../">
          <span className="sr-only">{companyName}</span>
          <img
            alt="logo"
            className="h-32 scale-150 w-auto sm:h-32"
            src={logo}
          />
        </a>
      </div>
      <div className="flex items-center justify-between w-full md:w-auto">
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  textAlign="center"
                >
                  <h1 className="textLead max-w-3xl">
                    Entdecken Sie jetzt, ob Ihre Immobilie für die Installation
                    einer <b>Photovoltaikanlage</b> geeignet ist!
                  </h1>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  textAlign="center"
                >
                  <h2 className="text-lg mt-10 max-w-3xl">
                    Falls Sie interessiert sind, haben Sie die Möglichkeit, im
                    nächsten Schritt einen Termin mit einem unserer
                    Energieberater zu planen.
                  </h2>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack direction="row" justifyContent="center">
                  <Button
                    onClick={() => {
                      window.location.href = '../angebot';
                    }}
                    variant={'contained'}
                    className={classes.button}
                    title="Unverbindliches Angebot einholen"
                  >
                    <div>
                      <h1 className="text-base">
                        Jetzt Beratungstermin einfordern!
                      </h1>
                      <h1 className="text-xs">(kostenlos & unverbindlich)</h1>
                    </div>
                  </Button>
                </Stack>
              </Grid>
              <Grid xs={getItemCount()}>
                <Stack direction="row" justifyContent="center">
                  <img alt="Keine Mehrwertsteuer" className="h-10" src={mwst} />
                </Stack>
              </Grid>
              <Grid xs={getItemCount()}>
                <Stack direction="row" justifyContent="center">
                  <img
                    alt="konstenlose Beratung"
                    className="h-10"
                    src={beratung}
                  />
                </Stack>
              </Grid>
              <Grid xs={getItemCount()}>
                <Stack direction="row" justifyContent="center">
                  <img
                    alt="kosten Sparen"
                    className="h-10"
                    src={kostensparen}
                  />
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  textAlign="center"
                >
                  <h1 className="text-lg w-90 mt-5">
                    <b>Photovoltaikanlage im Komplettpaket</b>
                  </h1>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  textAlign="center"
                >
                  <div className="flex  flex-col align-middle items-center justify-center ">
                    <img
                      alt="PV-Anlagen Beratung"
                      className="h-16 mt-5"
                      src={iconBeratung}
                    />
                    <h1 className="w-80 mb-5">Beratung vom Experten</h1>
                  </div>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  textAlign="center"
                >
                  <div className="flex  flex-col align-middle items-center justify-center ">
                    <img
                      alt="PV-Anlagen Planung"
                      className="h-16"
                      src={iconPlanung}
                    />
                    <h1 className="w-80 mb-5">Planung der PV-Anlage</h1>
                  </div>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  textAlign="center"
                >
                  <div className="flex  flex-col align-middle items-center justify-center ">
                    <img
                      alt="PV-Anlagen Montage"
                      className="h-16"
                      src={iconMontage}
                    />
                    <h1 className="w-80 mb-5">Montage und Inbetriebnahme</h1>
                  </div>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  textAlign="center"
                >
                  <div className="flex  flex-col align-middle items-center justify-center ">
                    <img
                      alt="PV-Anlagen Anmeldung"
                      className="h-16"
                      src={iconAnmeldung}
                    />
                    <h1 className="mb-5">Anmeldung beim Netzbetrieber</h1>
                  </div>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  textAlign="center"
                >
                  <div className="flex flex-col align-middle items-center justify-center mb-10">
                    <img
                      alt="PV-Anlagen Kundensupport"
                      className="h-16"
                      src={iconSupport}
                    />
                    <h1 className="w-80">
                      Kundenbetreuung auch nach der Installation
                    </h1>
                  </div>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  textAlign="center"
                >
                  <div className="mwstBoxTitle">
                    <h1 className="mwstBoxTitleText">
                      Mehrwertsteuerbefreiung
                    </h1>
                  </div>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  textAlign="center"
                >
                  <div className="mwstBox">
                    <h1 className="mwstText mt-5">
                      Holen Sie sich jetzt eine PV-Anlage und sparen Sie 19%!
                    </h1>
                    <p className="mwstText2">
                      Überlegen Sie, in eine <b>Photovoltaik-Anlage</b> zu
                      investieren? Jetzt ist der perfekte Zeitpunkt! Nutzen Sie
                      die <b>Mehrwertsteuersenkung auf 0 %</b> und{' '}
                      <b>sparen Sie Geld</b>, während Sie den Weg in eine{' '}
                      <b>energieunabhängigere</b> und{' '}
                      <b>umweltfreundlichere Zukunft</b> einschlagen.
                    </p>
                  </div>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  textAlign="center"
                >
                  <div className="BeratungDiv pt-10">
                    <h1 className="BeratungTitle1">
                      So funktioniert deine kostenfreie Solarberatung.
                    </h1>
                    <h2 className="BeratungTitle2">Präsentiere dein Dach.</h2>
                    <p className="BeratungText">
                      Ihr Dach sollte eine Fläche von mindestens 35
                      Quadratmetern haben, nicht zu alt sein oder, noch besser,
                      bereits saniert worden sein. Es sollte mit Beton- oder
                      Tonziegeln gedeckt sein. Im nächsten Schritt werden wir
                      uns auf die Details konzentrieren: Gibt es eventuelle
                      Verschattungen durch Bäume, Dachgauben oder
                      Satellitenschüsseln? Ist die Ausrichtung so gewählt, dass
                      das volle Sonnenpotenzial ausgenutzt werden kann?
                    </p>
                    <h2 className="BeratungTitle2">
                      Ob persönlich vor Ort oder übers Telefon, wir legen großen
                      Wert auf den persönlichen Kontakt in beiden Fällen.
                    </h2>
                    <p className="BeratungText">
                      Eine gründliche Prüfung deines Daches steht an, um die
                      optimale Lösung zu ermitteln. Wir analysieren das volle
                      Potenzial deines Dachs und erörtern, wie du Solarstrom
                      künftig nutzen möchtest. Dabei berücksichtigen wir, wie
                      viel Energie du produzieren und selbst verbrauchen kannst.
                      Außerdem klären wir die Kosten einer Solaranlage und ihr
                      Einsparpotenzial. Alle diese Fragen werden ausführlich
                      besprochen und beantwortet.
                    </p>
                    <h2 className="BeratungTitle2">
                      Nach der Installation heißt es: Die Anlage wird aktiviert
                      und los geht es!
                    </h2>
                    <p className="BeratungText">
                      Wenn du dich für eine Solaranlage entscheidest, wird vor
                      der Inbetriebnahme die Installation von einem
                      spezialisierten Team durchgeführt. Dein Netzbetreiber
                      wechselt den Zähler, prüft die Anlage und integriert sie
                      in das Stromnetz. Dann kann deine Solarenergie genutzt
                      werden.
                    </p>
                  </div>
                </Stack>
              </Grid>

              <Grid xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  textAlign="center"
                >
                  <div className="fragenBox mt-10 pt-5 items-center justify-between">
                    <h1 className="FragenTitle1 pb-10">
                      Klar wie der Sonnenschein. Das sind Fragen, die oft
                      gestellt werden.
                    </h1>
                    <div className="frageDiv mb-2">
                      <ListItemButton onClick={handleClick}>
                        <ListItemText
                          primary="Welche Vorteile bietet mir eine Solarberatung?"
                          classes={{ primary: classes.listItemText }}
                        />
                        {frage1 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={frage1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton>
                            <ListItemText
                              classes={{ primary: classes.listItemSubText }}
                              primary="Eine Solarberatung bringt Klarheit und Transparenz in dein Vorhaben. Wir verstehen, dass jedes Dach einzigartig ist, und es gibt keine Standardlösung für unterschiedliche Bedürfnisse. Deshalb legen wir großen Wert auf eine maßgeschneiderte Beratung für dich. Wir geben dir grünes Licht für eine kostenlose Beratung und zeigen dir, was möglich ist. Sobald wir alle Informationen über dein Haus haben, leiten wir dich an unseren Solarpartner weiter, der gemeinsam mit dir das beste Solaranlagen-Konzept erarbeitet."
                            />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </div>
                    <Divider />
                    <div className="frageDiv mt-2 mb-2">
                      <ListItemButton onClick={handleClick2}>
                        <ListItemText
                          primary="Wie hoch sind die Kosten für eine Solarberatung von Solarwelt-Lippe?"
                          classes={{ primary: classes.listItemText }}
                        />
                        {frage2 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={frage2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton>
                            <ListItemText
                              classes={{ primary: classes.listItemSubText }}
                              primary="Die Solarberatung, die wir anbieten, ist für dich 100% kostenlos."
                            />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </div>
                    <Divider />
                    <div className="frageDiv mt-2 mb-2">
                      <ListItemButton onClick={handleClick3}>
                        <ListItemText
                          primary="Was sind meine Vorteile einer Photovoltaikanlage?"
                          classes={{ primary: classes.listItemText }}
                        />
                        {frage3 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={frage3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton>
                            <ListItemText
                              classes={{ primary: classes.listItemSubText }}
                              primary="Eine Photovoltaikanlage hat zahlreiche Vorteile. Sie senkt Ihre Energiekosten, ist umweltfreundlich und kann staatliche Anreize nutzen. Zudem gewinnen Sie Unabhängigkeit von Energieversorgern und steigern den Wert Ihres Hauses. Dank Netzrückeinspeisung erhalten Sie möglicherweise eine Vergütung. Wartungsaufwand ist gering, und die langlebigen, recyclebaren Solarzellen tragen zur Nachhaltigkeit bei. In abgelegenen Gebieten ist sie eine effiziente Energiequelle. Kurz gesagt, eine Photovoltaikanlage ist eine nachhaltige, wirtschaftliche Lösung für Energieerzeugung."
                            />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </div>
                    <Divider />
                    <div className="frageDiv mt-2 mb-2">
                      <ListItemButton onClick={handleClick4}>
                        <ListItemText
                          primary="Wie hoch ist der durchschnittliche PV-Ertrag einer Photovoltaikanlage?"
                          classes={{ primary: classes.listItemText }}
                        />
                        {frage4 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={frage4} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton>
                            <ListItemText
                              classes={{ primary: classes.listItemSubText }}
                              primary="Der jährliche Durchschnittsertrag einer Photovoltaikanlage in Deutschland liegt bei etwa 1.000 kWh pro installiertem Kilowattpeak (kWp). Dieser spezifische Ertrag ergibt sich aus der Gesamtjahresenergie (in kWh) geteilt durch die Nennleistung der Anlage (in kWp)."
                            />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </div>
                    <Divider />
                    <div className="frageDiv mt-2 mb-10">
                      <ListItemButton onClick={handleClick5}>
                        <ListItemText
                          primary="Was kostet eine Photovoltaikanlage?"
                          classes={{ primary: classes.listItemText }}
                        />
                        {frage5 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={frage5} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton>
                            <ListItemText
                              classes={{ primary: classes.listItemSubText }}
                              primary="Die Gesamtkosten für Photovoltaikanlagen bei Solarwelt-Lippe setzen sich aus verschiedenen Komponenten zusammen, darunter die Kosten für die Solarmodule, den Wechselrichter, die optionalen Stromspeicher und die Montage. Gerne erstellen wir für Sie ein kostenfreies Angebot."
                            />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </div>
                  </div>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack direction="row" justifyContent="center">
                  <Button
                    onClick={() => {
                      window.location.href = '../angebot';
                    }}
                    variant={'contained'}
                    className={classes.button}
                    title="Unverbindliches Angebot einholen"
                  >
                    <div>
                      <h1 className="text-base">
                        Jetzt Beratungstermin einfordern!
                      </h1>
                      <h1 className="text-xs">(kostenlos & unverbindlich)</h1>
                    </div>
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </>
      </div>
      <div>
        <LazyShow>
          <>
            <Canvas />
            <About />
          </>
        </LazyShow>
      </div>
      <Analytics />
      <button onClick={() => topFunction()} id="myBtn" title="Nach Oben">
        <img width="50" height="50" alt="submit" src={logoTop} />
      </button>
    </div>
  );
};

export default App;
