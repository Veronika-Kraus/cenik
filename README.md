<h1>Ceník</h1>
<h2>Vytvořte funkci pro výběr předplatného.</h2>

Vytvořte si repozitář ze šablony cviceni-cenik se stránkou, která nabízí předplatné za nějaké služby. Může jít například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

Přidejte do stránky soubor s JavaScriptem.
Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. 
Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected.
Vyzkoušejte vaši funkci použít ve stránce pro výběr plánu.
Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. 
My bychom však chtěli, aby mohl být vybrán vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. 
Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.
Opět vyzkoušejte funkci ve stránce. Neuvidíte výběr jednotlivých plánů (JavaScript je vybere velmi rychle), ale na stránce by měl zůstat poslední vybraný plán.
