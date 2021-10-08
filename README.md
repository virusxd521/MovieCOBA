# Domácí úkol: Filmy

Za úkol máš vytvořit stránku, která bude zobrazovat nabídku filmů v místním kině.

Já jsem si úkol sám vypracoval a moje řešení nakonec vypadá nějak takto. Můžeš to použít jako inspiraci, ale je zcela na tobě, jak si svoji stránku nastyluješ.

![Ukázka možného výsledku](ukazka-vysledku.jpg)


## Fork zadání na GitHubu

Tentokrát **nebudeš** vytvářet aplikaci úplně od začátku pomocí `create-czechitas-app`, ale postupuj následovně:

1. Předpokládáme, že máš účet na GitHubu. Pokud ne, zaregistruj si ho a přihlaš se do něj.
2. Udělej si fork tohoto repozitáře se zadáním (tím se ti úkol zkopíruje do tvého GitHub účtu).
3. Naklonuj si repozitář ze svého GitHub účtu k sobě na disk.
4. Až budeš mít úkol hotový (viz. dále), tak nezapomeň udělat commit a push zpět na GitHub.
5. Úkol budeš odevzdávat jako odkaz na GitHub se svým zpracovaným řešením.

Pokud nevíš, jak s Gitem a GitHubem pracovat, zeptej se nás na Slacku nebo se prosím podívej na následující videa. Jsou z jiného kurzu, ale vše platí i pro náš kurz:

* [Úvod do Gitu](https://www.youtube.com/watch?v=hda4-ngFEWM)
* [GitHub](https://www.youtube.com/watch?v=JLzWjJjsLz8)
* [GitHub Fork](https://www.youtube.com/watch?v=K7rE3jRCjD4)


## Instalace a spuštění

1. I když ty sama jsi projekt nezakládala z nuly pomocí `create-czechitas-app`, projekt je vytvořený pomocí tohoto nástroje a používá se úplně stejně. Jen už v sobě obsahuje i nějaké další připravené podklady, jako obrázky a údaje o filmech.

2. Otevři si v editoru složku projektu, kterou sis z GitHubu naklonovala k sobě na disk. Složka, kterou otevíráš, by měla obsahovat soubor `package.json` (a další soubory a složky).

3. Otevři si v editoru terminál / příkazovou řádku a spusť příkaz:

	```
	npm install
	```

	Tím se ti do projektu doinstalují všechny potřebné balíčky závislostí stejně, jako kdybys projekt vytvářela/instalovala pomocí `create-czechitas-app`.

4. Známým způsobem zkus projekt spustit. Měla bys vidět stránku, na které je ikonka kamery a text *V našem kině právě uvádíme*.


## Zadání úkolu

Tvým cílem je vytvořit stránku, která bude zobrazovat přehled filmů, které se promítají v místním kině.

1. Prozkoumej složku `src` projektu a všimni si, že:
	- ve složce `img` je obrázek s ikonkou kamery, který se importuje do hlavního `index.jsx` souboru a používá se jako logo v hlavičce
	- ve složce `assets` jsou plakáty všech filmů, složka `assets` se beze změny kopíruje i do sestavené aplikace, takže se můžeš spolehnout, že cesta k obrázku s plakátem bude vždy `/assets/nazev-plakatu.jpg`
	- ve složce `src` je soubor `movies.js`, který obsahuje pole objektů nazvané `movies` s podrobnostmi o všech filmech v našem kině. Pole se ze souboru exportuje, takže ho můžeš importovat do místa, kde ho budeš potřebovat. Podívej se, jako mají data o filmech strukturu.

2. V samostatné složce vytvoř komponentu `Header` a přesuň do ní kód pro hlavičku stránky (nadpis s ikonkou kamery).

	Do složky s komponentou přesuň i obrázek kamery, ať je hezky pohromadě vše, co komponenta používá. Nezapomeň, že musíš z hlavního `index.jsx` přesunou i řádek s importem obrázku a případně upravit cestu k obrázku (záleží na tom, jak a kam obrázek přesuneš).

	Komponentu `Header` pak použij uvnitř `App`.

3. Vytvoř komponentu `Movie`, která se bude starat o zobrazování jednoho filmu. Jako **props** bude komponenta přijímat:
	- `title` - název filmu
	- `poster` - název obrázku s plakátem
	- `year` - rok vydání
	- `rating` - hodnocení x/10
	- `director` - režisér
	- `genre` - žánr
	- `cast` - pole herců a postav, které ve filmu ztvárnili

	Zatím ignoruj prop `cast` se seznamem herců a nakóduj komponentu tak, aby zobrazovala ostatní údaje v nějakém rozumné HTML podobě.

	Vyzkoušej, zda komponenta funguje podle tvých představ, když ji použiješ v `App` a manuálně do ní předáš nějaké parametry.

4. Vytvoř komponentu `MovieList`, která se bude starat o zobrazení celého seznamu filmů. Zatím se nestarej o HTML obsah komponenty.

	Komponenta bude přijímat jedinou prop s názvem `movies`.

5. V hlavním souboru `index.jsx`, kde je komponenta `App`, naimportuj mimo komponentu `App` pole s údaji o filmech ze souboru `movies.js` ve složce `src`.

	Uvnitř `App` použij komponentu `MovieList` a naimportované pole do ní předej jako prop s názvem `movies`.

6. Vrať se do komponenty `MovieList`. Komponenta v prop s názvem `movies` přijímá pole s údaji o filmech.

	Každý jeden film v poli má následující datovou strukturu:

	```js
	{
		id: 1,
		title: 'Pulp Fiction',
		poster: 'pulp-fiction.jpg',
		year: 1994,
		rating: 8.9,
		director: 'Quentin Tarantino',
		genre: 'crime, drama',
		cast: [
			{
				name: 'John Travolta',
				as: 'Vincent Vega',
			},
			{
				name: 'Samuel L. Jackson',
				as: 'Jules Winnfield',
			},
			{
				name: 'Uma Thurman',
				as: 'Mia Wallace',
			},
			{
				name: 'Bruce Willis',
				as: 'Butch Coolidge',
			}
		],
	}
	```

	Přemapuj toto pole na Reactí **seznam**. Každá položka v seznamu bude tvořená komponentou `Movie`, kterou jsem vytvořili již dříve. Do komponenty předej příslušné **props**.

	React ti pravděpodobně bude v konzoli prohlížeče vyhrožovat, že každá položka v seznamu by měla mít unikátní `key`. Podívej se do dat, která z vlastností filmu by se pro to nejvíc hodila.

7. Tvoje aplikace by teď měla zobrazovat seznam všech 10 filmů.

	**Pokud chceš, můžeš zde s úkolem skončit a odevzdat ho v této podobě.**

	Máš-li ráda výzvy a chceš na úkolu dále pracovat, pokračuj.


## Dobrovolné pokračování úkolu

8. Cool. Vítej :) Jsem rád, že to ještě nevzdáváš.

9. V komponentě `Movie` jsme zatím ignorovali seznam herců. Pojďme to napravit.

	Mohli bychom sice vygenerovat nějaké jednoduché HTML pro zobrazení herce přímo v komponentě `Movie`, ale to není to správné komponentové přemýšlení.

10. Vytvoř samostatnou komponentu `Actor`, která bude přijímat dvě props:
	- `name` - jméno herečky/herce
	- `as` - jméno postavy, kterou ve filmu ztvárnil/a

	Nějakým vhodným způsobem v komponentě zobraz oba údaje.

11. V komponentě `Movie` máme v prop `cast` uložené pole herců hrajících ve filmu. Každý jednotlivý herec v poli má následující datovou strukturu:

	```js
	{
		name: 'John Travolta',
		as: 'Vincent Vega',
	}
	```

	Uvnitř komponenty `Movie`, někde pod údaji o filmu, přemapuj pole uložené v `cast` na **seznam** komponent `Actor`, do kterých předej příslušné parametry.

	Jako `key` pro položky v seznamu můžeš použít jméno herce.

12. Nebojíš-li se CSS, všechny komponenty nastyluj tak, aby stránka hezky vypadala. Třeba jako na obrázku na začátku tohoto návodu.

13. Nezapomeň udělat `git commit` a potom `push` do GitHub repozitáře. Odkaz na repozitář odevzdej jako řešení úkolu.

