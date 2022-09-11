const movies = [
	"Titanic (1997)",
	"Black Panther (2018)",
	"Isle of Dogs (2018)",
	"The Hateful Eight (2015)"
];

const moviesFiltered = movies.filter(function (item) {
	/* Escribe el código aquí */
  return item.includes("2018")
});

console.log(moviesFiltered);


//Aquí hay un array de 36 cartas. Selecciona sólo las cartas rojas de la baraja con un valor de diez o inferior utilizando el método filter(), y regístralas en la consola.

const cards = [
  "6 de corazones", "7 de corazones", "8 de corazones", 
  "9 de corazones", "10 de corazones", "Jota de corazones", 
  "Reina de corazones", "Rey de corazones", 
  "As de corazones", "6 de picas", "7 de picas", 
  "8 de picas", "9 de picas", "10 de picas",  
  "Jota de picas", "Reina de picas", 
  "Rey de picas", "As de picas", "6 de tréboles", 
  "7 de tréboles", "8 de tréboles", "9 de tréboles", 
  "10 de tréboles", "Jota de tréboles", "Reina de tréboles", 
  "Rey de tréboles", "As de tréboles", "6 de diamantes", 
  "7 de diamantes", "8 de diamantes", "9 de diamantes", 
  "10 de diamantes", "Jota de diamantes", 
  "Reina de diamantes", "Rey de diamantes", 
  "As de diamantes"
];
  
  const cardsFiltered = cards.filter(function (card) {
    /* Escribe el código aquí */
  return parseInt(card, 10) <= 10 && (card.includes("corazones") || card.includes("diamantes"));
  });
  
  console.log(cardsFiltered);



  /*
  En esta tarea, tienes un string que contiene los nombres de los ganadores del Premio Nobel de Física y su país de afiliación en el momento de la concesión. Convierte este string en un array llamado nobelArr. Asegúrate de tener en cuenta el carácter de espacio que sigue al punto y coma de cada elemento cuando especifiques el separador.
  Una vez hayas hecho esto, crea un nuevo array llamado filtNobelque contenga sólo científicos de USA y Germany.
  */
  const nobel = `Wilhelm Conrad Röntgen, Germany; Pieter Zeeman, Netherlands; Hendrik Antoon Lorentz, Netherlands; Antoine Henri Becquerel, France; Pierre Curie, France; Marie Curie, née Sklodowska, France; Lord Rayleigh (John William Strutt), United Kingdom; Philipp Eduard Anton von Lenard, Germany; Joseph John Thomson, United Kingdom; Albert Abraham Michelson, USA; Gabriel Lippmann, France; Guglielmo Marconi, Italy; Karl Ferdinand Braun, Germany; Johannes Diderik van der Waals, Netherlands; Wilhelm Wien, Germany; Nils Gustaf Dalén, Sweden; Heike Kamerlingh Onnes, Netherlands; Max von Laue, Germany; Sir William Henry Bragg, United Kingdom; Sir William Lawrence Bragg, United Kingdom; Charles Glover Barkla, United Kingdom; Max Karl Ernst Ludwig Planck, Germany; Johannes Stark, Germany; Charles Edouard Guillaume, Switzerland; Albert Einstein, Germany; Niels Henrik David Bohr, Denmark; Robert Andrews Millikan, USA; Karl Manne Georg Siegbahn, Sweden; Gustav Ludwig Hertz, Germany; James Franck, Germany; Jean Baptiste Perrin, France; Charles Thomson Rees Wilson, United Kingdom; Arthur Holly Compton, USA; Owen Willans Richardson, United Kingdom; Louis de Broglie, France; Sir Chandrasekhara Venkata Raman, India; Werner Karl Heisenberg, Germany; Paul Adrien Maurice Dirac, United Kingdom; Erwin Schrödinger, Austria; James Chadwick, United Kingdom; Carl David Anderson, USA; Victor Franz Hess, Austria; Clinton Joseph Davisson, USA; George Paget Thomson, United Kingdom; Enrico Fermi, Italy; Ernest Orlando Lawrence, USA; Otto Stern, USA; Isidor Isaac Rabi, USA; Wolfgang Pauli, USA; Percy Williams Bridgman, USA; Sir Edward Victor Appleton, United Kingdom; Patrick Maynard Stuart Blackett, United Kingdom; Hideki Yukawa, Japan; Cecil Frank Powell, United Kingdom; Sir John Douglas Cockcroft, United Kingdom; Ernest Thomas Sinton Walton, United Kingdom; Felix Bloch, USA; Edward Mills Purcell, USA; Frits Zernike, Netherlands; Max Born, Germany; Walther Bothe, Germany; Polykarp Kusch, USA; Willis Eugene Lamb, USA; John Bardeen, USA; Walter Houser Brattain, USA; William Bradford Shockley, USA; Tsung-Dao Lee, USA; Chen Ning Yang, USA; Igor Yevgenyevich Tamm, USSR; Ilya Mikhailovich Frank, USSR; Pavel Alekseyevich Cherenkov, USSR; Emilio Gino Segrè, USA; Owen Chamberlain, USA; Donald Arthur Glaser, USA; Rudolf Ludwig Mössbauer, Germany; Robert Hofstadter, USA; Lev Davidovich Landau, USSR; Eugene Paul Wigner, USA; Maria Goeppert Mayer, USA; J. Hans D. Jensen, Germany; Nicolay Gennadiyevich Basov, USSR; Aleksandr Mikhailovich Prokhorov, USSR; Charles Hard Townes, USA; Sin-Itiro Tomonaga, Japan; Richard P. Feynman, USA; Julian Schwinger, USA; Alfred Kastler, France; Hans Albrecht Bethe, USA; Luis Walter Alvarez, USA; Murray Gell-Mann, USA; Hannes Olof Gösta Alfvén, Sweden; Louis Eugène Félix Néel, France; Dennis Gabor, United Kingdom; Leon Neil Cooper, USA; John Robert Schrieffer, USA; Ivar Giaever, USA; Brian David Josephson, United Kingdom; Leo Esaki, USA; Sir Martin Ryle, United Kingdom; Antony Hewish, United Kingdom; Aage Niels Bohr, Denmark; Ben Roy Mottelson, Denmark; Leo James Rainwater, USA; Burton Richter, USA; Samuel Chao Chung Ting, USA; Philip Warren Anderson, USA; John Hasbrouck van Vleck, USA; Sir Nevill Francis Mott, United Kingdom; Robert Woodrow Wilson, USA; Pyotr Leonidovich Kapitsa, USSR; Arno Allan Penzias, USA; Steven Weinberg, USA; Sheldon Lee Glashow, USA; Abdus Salam, United Kingdom; James Watson Cronin, USA; Val Logsdon Fitch, USA; Nicolaas Bloembergen, USA; Arthur Leonard Schawlow, USA; Kai M. Siegbahn, Sweden; Kenneth G. Wilson, USA; William Alfred Fowler, USA; Subramanyan Chandrasekhar, USA; Simon van der Meer, Switzerland; Carlo Rubbia, Switzerland; Klaus von Klitzing, Germany; Gerd Binnig, Switzerland; Heinrich Rohrer, Switzerland; Ernst Ruska, Germany; J. Georg Bednorz, Switzerland; K. Alexander Müller, Switzerland; Leon M. Lederman, USA; Jack Steinberger, Switzerland; Melvin Schwartz, USA; Norman F. Ramsey, USA; Hans G. Dehmelt, USA; Wolfgang Paul, Germany; Henry W. Kendall, USA; Richard E. Taylor, USA; Jerome I. Friedman, USA; Pierre-Gilles de Gennes, France; Georges Charpak, Switzerland; Joseph H. Taylor Jr., USA; Russell A. Hulse, USA; Bertram N. Brockhouse, Canada; Clifford G. Shull, USA; Martin L. Perl, USA; Frederick Reines, USA; David M. Lee, USA; Douglas D. Osheroff, USA; Robert C. Richardson, USA; Claude Cohen-Tannoudji, France; William D. Phillips, USA; Steven Chu, USA; Robert B. Laughlin, USA; Daniel C. Tsui, USA; Horst L. Störmer, USA; Martinus J.G. Veltman, USA; Gerardus ‘t Hooft, Netherlands; Zhores I. Alferov, Russia; Jack S. Kilby, USA; Herbert Kroemer, USA; Carl E. Wieman, USA; Wolfgang Ketterle, USA; Eric A. Cornell, USA; Riccardo Giacconi, USA; Raymond Davis Jr., USA; Masatoshi Koshiba, Japan; Alexei A. Abrikosov, USA; Vitaly L. Ginzburg, Russia; Anthony J. Leggett, USA; Frank Wilczek, USA; David J. Gross, USA; H. David Politzer, USA; Roy J. Glauber, USA; Theodor W. Hänsch, Germany; John L. Hall, USA; John C. Mather, USA; George F. Smoot, USA; Peter Grünberg, Germany; Albert Fert, France; Makoto Kobayashi, Japan; Toshihide Maskawa, Japan; Yoichiro Nambu, USA; Willard S. Boyle, USA; Charles Kuen Kao, China; George E. Smith, USA; Andre Geim, United Kingdom; Konstantin Novoselov, United Kingdom; Saul Perlmutter, USA; Adam G. Riess, USA; Brian P. Schmidt, Australia; Serge Haroche, France; David J. Wineland, USA; Peter W. Higgs, United Kingdom; François Englert, Belgium; Isamu Akasaki, Japan; Hiroshi Amano, Japan; Shuji Nakamura, USA; Takaaki Kajita, Japan; Arthur B. McDonald, Canada; David J. Thouless, USA; F. Duncan M. Haldane, USA; J. Michael Kosterlitz, USA; Rainer Weiss, USA; Barry C. Barish, USA; Kip S. Thorne, USA; Arthur Ashkin, USA; Gérard Mourou, France; Donna Strickland, Canada`;

const nobelArr = nobel.split("; ");
//console.log(nobelArr);

const filtNobel = nobelArr.filter(function (scientist) {
  /* Filtra los científicos de USA y Germany */
  return scientist.includes("USA") ||  scientist.includes("Germany")
});

console.log(filtNobel);