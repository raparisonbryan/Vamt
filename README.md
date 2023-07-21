# Vamt

## Description du site

Vamt Sarl est un site de location de voiture qui vous permet de voir les différents types de véhicules que nous possédons et de nous contacter en fonction de vos besoins.

## Stack technique

Le site est fait en React, alimenté par le framework Next.js pour le front-end, tandis que le back-end est fait avec Node/Express.js avec une base de donnée en mongoDB. Pour lier fornt et back, j'utilise Axios et concernant le style j'utilise SASS.

J'ai décidé de passer en détail sur le rendering des différentes pages que j'ai car avec Next.js, l'affichage dynamique est simplifié par des fonctions qui sont intégrés.

## Rendering (rendu de page) avec Next.js

### Pagination

Un des systèmes de routage de Next.js est basé sur le système de fichiers, ce qui signifie que le chemin de l'URL correspond au chemin du fichier dans le dossier pages. 
Par exemple, si vous voulez une page ```à propos```, il suffit de créer un fichier ```/about/index.js``` dans le dossier pages, puis vous pourrez accéder à cette page en naviguant vers ```www.yoursite.com/about```.

Le fichier index.js dans le dossier pages correspond à la route racine de votre application (/). Voici donc à quoi ressemble ma pagination:

![image](https://github.com/raparisonbryan/Vamt/assets/90842784/a1e89f94-a00d-4d82-bc20-106c95869a1a)

Next.js permet également de créer des routes dynamiques. Par exemple, si vous voulez créer une page pour chaque utilisateur de votre application, et que l'URL est basée sur le nom d'utilisateur, vous pouvez créer un fichier appelé [id].js dans le dossier pages.

Le nom du fichier commence par des crochets ([]), ce qui indique à Next.js qu'il s'agit d'une route dynamique. Lorsque vous naviguez vers www.yoursite.com/12, Next.js cherche le fichier [id].js et l'affiche, en passant 12 comme paramètre.

### Principe du rendu de page 

Le rendu de page est le processus par lequel les données sont assemblés pour créer quelque chose que l'utilisateur peut voir et avec lequel il peut interagir (comme une page web).
En fonction de l'endroit où ces différentes étapes se produisent (soit sur le serveur, soit sur l'ordinateur de l'utilisateur), on parle de Server Side Rendering (SSR), Client Side Rendering (CSR) ou Static Site Generation (SSG).

### Server Side Rendering (SSR)

Server Side Rendering signifie que la page est entièrement rendue côté serveur avant d'être envoyée au navigateur de l'utilisateur. Chaque fois qu'un utilisateur fait une demande à une URL, le serveur génère le HTML final de la page et l'envoie au navigateur.

#### Avantages de SSR:

- Améliore le référencement (SEO) car les moteurs de recherche peuvent indexer plus facilement les pages.
- Affiche le contenu initial plus rapidement aux utilisateurs.

#### Inconvénients de SSR:

- Temps de chargement potentiellement plus long car le serveur doit préparer le HTML complet avant de l'envoyer.
- Coûte plus cher en termes de ressources serveur.

Voici à quoi ressemble une page en SSR:

```Javascript
export default function SearchPage({ cars }) {
  const router = useRouter();
  const { term } = router.query;

  return (
    <Default>
        <Search searchTerm={term} cars={cars} />
    </Default>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/cars/");
  const cars = await response.json();

  return {
    props: {
      cars,
    },
  };
};
```
La page Search est le résultat de recherche du moteur situé dans la page principale. Ce code récupère une liste de voitures depuis une API lors de la génération du site, et ensuite il passe cette liste au composant Search grâce à ```cars={cars}``` pour l'afficher dans la mise en page de base du site web, et le filtre va permettre de n'afficher que ceux qui ont été tapés dans le moteur de recherche.

### Static Site Generation (SSG)

Static Site Generation est une méthode où le HTML est généré au moment de la construction, et non au moment de la demande du client. Tous les fichiers HTML sont générés en une seule fois et servis à chaque demande.

#### Avantages de SSG:

- Temps de chargement très rapide.
- Très performant et sécurisé car il sert simplement du contenu statique.
- Très économique en termes de ressources serveur.
  
#### Inconvénients de SSG:

- Pas idéal pour les sites avec un contenu dynamique car le site doit être reconstruit pour chaque mise à jour du contenu.
- Le temps de construction peut augmenter avec la taille du site.

Voici à quoi ressemble une page en SSG:

```Javascript
export default function vehicles( {cars} ) {
  return (
    <>
      <Default>
        <Vehicles cars={cars} />
      </Default>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/cars/');
  const cars = await response.json();

  return {
    props: {
      cars,
    },
  };
}
```
Ce code récupère une liste de voitures depuis une API lors de la génération du site, et ensuite il passe cette liste au composant Vehicles grâce à ```cars={cars}``` pour l'afficher dans la mise en page de base du site web.

### Client Side Rendering (CSR)

Client Side Rendering signifie que le rendu de la page se fait dans le navigateur de l'utilisateur. Seul un squelette HTML vide est envoyé par le serveur, et le contenu est ensuite rempli dans le navigateur à l'aide de JavaScript.

#### Avantages de CSR:

- Offre une expérience utilisateur interactive et semblable à une application.
- Le serveur est moins sollicité car le travail de rendu est délégué au navigateur du client.
  
#### Inconvénients de CSR:

- Temps avant l'affichage du contenu plus long, car le navigateur doit télécharger, analyser et exécuter le JavaScript avant de pouvoir commencer à rendre la page.
- Peut être moins favorable pour le référencement (SEO), car les robots des moteurs de recherche peuvent avoir des difficultés à analyser les applications entièrement rendues côté client.

### Cas d'utilisation des rendus

Voici une image pour résumer l'utilisation de ces différents rendus:

![image](https://github.com/raparisonbryan/Vamt/assets/90842784/ac2c7a98-2091-4eaf-a848-3e928c64ae58)

En résumé,
- Le CSR est utile lorsqu'il y a des intéractions avec l'utilisateur du fait de son rendu côté client,
- Le SSR est utile quand l'affichage des données est dynamique et peut varier énromément, comme ma page de résultats de recherche ou une page de profile,
- Le SSG est utile pour des pages qui ne changent pas beaucoup.

Concernant mon site, voici le rendu de mes différentes pages;

![image](https://github.com/raparisonbryan/Vamt/assets/90842784/ce13b0ed-b789-4825-b1b4-42b0ba6de453)

