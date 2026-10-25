# Build & Learn — Coding Tutor for Codex

**Build & Learn** to skill dla Codexa do nauki programowania na własnym projekcie. Repozytorium nosi nazwę `build-learn-skill`, a nazwa instalowanego skilla i jego wywołanie pozostają odpowiednio `coding-tutor` i `$coding-tutor`.

Przenośny skill do nauki programowania przez pracę nad jednym wybranym projektem. Najlepiej wykorzystuje istniejącą aplikację z portfolio: pomaga ją poprawiać i rozwijać, a przy okazji uczyć się implementacji, diagnozowania błędów i wyjaśniania decyzji. Można też zacząć nowy projekt, jeśli taki jest wybór uczestnika.

Nie zawiera gotowej roadmapy konkretnej aplikacji ani profilu poprzedniego uczestnika. Dopasowuje zadania do rzeczywistego kodu i dowodów nauki. Przygotowanie do rozmów technicznych opiera na pracy wykonanej w tym projekcie.

## Dodanie do projektu

Skopiuj cały katalog `coding-tutor` do `.agents/skills/coding-tutor/` w projekcie. Zachowaj `SKILL.md` oraz katalogi `agents/`, `references/`, `scripts/` i `assets/`.

Alternatywnie skopiuj katalog do `~/.codex/skills/coding-tutor`, aby skill był dostępny w wielu projektach. Każda współpraca nadal skupia się na jednym wybranym projekcie. Nie potrzebujesz obu instalacji. Jeśli skill nie jest widoczny, uruchom ponownie Codexa.

Otwórz Codexa w projekcie i wyślij na przykład:

```text
$coding-tutor
Chcę poprawić istniejący projekt z portfolio i uczyć się przy jego rozwijaniu.
Sprawdź kod, zaproponuj usprawnienia i nowe funkcje, a potem ustalmy plan nauki.
```

## Poprawki i nowe funkcje

Plan może obejmować naprawę błędów, poprawę jakości i nowe funkcje. Mentor aktywnie szuka możliwości na podstawie aplikacji, celu uczestnika i zaobserwowanych braków wiedzy.

Przy propozycji wyjaśnia wartość dla użytkownika, cel nauki, przybliżony zakres oraz istotne wymagania lub kompromisy. Pyta o preferencje i uzgadnia rozszerzenia wykraczające poza przyjętą roadmapę. Uzgodnione zmiany trafiają do planu; zaakceptowanych zadań nie trzeba zatwierdzać ponownie. Propozycja nie przerywa automatycznie bieżącej pracy.

Nie dodaje funkcji, zależności ani przebudowy wyłącznie po to, żeby przećwiczyć technologię. Uzgodnienie funkcji nie oznacza przejęcia implementacji przez mentora. Domyślnie uczestnik pisze kod, uruchamia kontrole i wykonuje operacje Git. Bezpośrednie zlecenie konkretnej edycji lub kontroli upoważnia do tej pracy w jej zakresie.

## Pierwsze użycie i dokumenty projektu

Rozpoczęcie mentoringu w wybranym projekcie upoważnia do utworzenia brakujących dokumentów nauki oraz krótkiego pliku `AGENTS.md`. Skill najpierw sprawdza istniejący kod i dokumentację, a następnie ustala brakujące informacje istotne dla planu. Nieznane fakty pozostawia nieustalone.

Domyślny zestaw dokumentów:

- `AGENTS.md`: wskazanie skilla, źródeł kontekstu i zasad ciągłości pracy.
- `docs/README.md`: indeks dokumentacji nauki.
- `docs/ROADMAP.md`: cel, zakres, decyzje, etapy i kryteria ukończenia.
- `docs/PROGRESS.md`: wykonana praca, wyniki kontroli, ograniczenia i następny krok.
- `docs/LEARNING_SUMMARY.md`: umiejętności samodzielne i wymagające pomocy, dowody, powtórki i przygotowanie do rozmów technicznych.
- `docs/APP_GUIDE.md`: działanie aplikacji, decyzje techniczne, krótkie przedstawienie projektu, demonstracja i pytania do przećwiczenia.
- `docs/MENTOR.md`: lokalny podział pracy, preferencja dotycząca testów, ograniczenia i uzgodnione wyjątki.

Skill korzysta z [szablonów](assets/project/) i [procedury konfiguracji](references/onboarding.md). Zachowuje istniejące dokumenty, ich odpowiedniki i historię. Tworzy tylko brakujące zapisy i utrzymuje je w kolejnych sesjach bez zakładania drugiego zestawu dokumentacji.

Początkowa roadmapa jest propozycją do uzgodnienia przed zadaniami implementacyjnymi. Mentor ustala też, czy uczestnik chce sam pisać testy ze wsparciem, czy otrzymywać kompletne testy. Wybór można zmienić w dowolnej chwili.

`LEARNING_SUMMARY.md` rozróżnia implementację, wyjaśnianie, diagnozowanie i zastosowanie wiedzy w nowej sytuacji oraz zapisuje poziom pomocy. Gotowy kod i zielony test nie dowodzą samodzielnego rozumienia; niezadane pytania pozostają nieocenione. Drobne obserwacje są łączone w krótkie wpisy.

`APP_GUIDE.md` jest aktualizowany wraz ze zmianą zachowania lub uruchamiania aplikacji. Rozróżnia funkcje wdrożone i planowane oraz niezweryfikowane kroki demonstracji. Przygotowany scenariusz nie dowodzi samodzielnej umiejętności prezentacji.

Otwarcie folderu, recenzja skilla ani samo `/free` nie inicjalizują dokumentacji. Skill nie zakłada poziomu uczestnika ani wyników testów. Nie zmienia automatycznie `.gitignore`, nie robi commitów i nie uruchamia aplikacji bez odpowiedniego upoważnienia.

## Rozmowa i przywracanie kontekstu

- `/mentor`: nauka i praca nad projektem; powrót do ostatniego niedokończonego kroku.
- `/free`: swobodna rozmowa bez wymuszonych ćwiczeń i pytań kontrolnych. Nie zmienia uprawnień do edycji ani Git.

To konwencje wiadomości, nie dodatkowo zarejestrowane komendy interfejsu. Nowa rozmowa mentoringowa domyślnie zaczyna się w trybie mentor; wznowiona zachowuje jawnie ustalony tryb dostępny w kontekście rozmowy.

Mentor ocenia umiejętności na podstawie prób i notatek. Dla znanej logiki podaje zadanie lub szkielet, dla nieznanego API minimalny przykład z wyjaśnieniem. Pełne rozwiązanie jest dostępne na prośbę; użycie przykładu nie jest zapisywane jako samodzielne wykonanie.

`SKILL.md` zawiera krótki `Continuity contract`. Projektowy `AGENTS.md` kieruje do niego i dokumentów nauki. Przy wznowieniu, po kompakcji lub przy niepewności mentor odczytuje właściwe instrukcje i zapisy, odtwarza zadanie, poziom pomocy i niewyjaśnione kwestie. Brakujące dokumenty uzupełnia bez kasowania historii.

Po zgłoszeniu odejścia od zasad poprawia bieżący krok bez restartowania kursu ani wymagania przepisywania ujawnionego rozwiązania. Utrzymanie skilla i luźne rozmowy nie są zapisywane jako postęp aplikacji. To mechanizm ograniczania utraty kontekstu, a nie gwarancja niezawodnego przestrzegania instrukcji; nie wymaga automatycznego hooka.

## Narzędzia i sprawdzanie pakietu

Sama metoda nauki nie wymaga Node ani dodatkowych usług. Opcjonalne skrypty wymagają Node.js 20 lub nowszego i nie mają zależności npm. Z katalogu skilla:

```powershell
node scripts/session-context.mjs 'C:\sciezka\do\twojego-projektu'
node --test scripts/session-context.test.mjs scripts/package.test.mjs
```

Pierwszy skrypt wyłącznie odczytuje ograniczone fragmenty dokumentacji i stan Git. Nie inicjalizuje projektu, nie ocenia wiedzy i nie rozpoznaje trybu rozmowy. Nie ma automatycznych hooków ani płatnego runnera modeli.

Formalny walidator dostarczany ze skillem `skill-creator` wymaga Pythona i biblioteki `PyYAML`. Sprawdza strukturę pakietu; nie ocenia jakości nauczania. [Scenariusze zachowania](references/behavioral-cases.json) i [instrukcja oceny](references/evaluation.md) wymagają osobnego przeprowadzenia. Testy struktury i helpera nie dowodzą skuteczności odpowiedzi modelu.

## Utrzymanie

Źródłem utrzymywanej wersji jest katalog roboczy `coding-tutor`; instalacja jest jego kopią. Zmiany wprowadzaj i sprawdzaj w źródle, następnie synchronizuj odpowiednie pliki instalacji, zachowując niezależne zmiany.

Pochodzenie wskazówek komunikacyjnych i nota MIT upstream znajdują się w [attribution.md](references/attribution.md). Zachowaj tę informację przy udostępnianiu pakietu.

## Licencja

Pakiet jest udostępniany na licencji [MIT](LICENSE). Materiał adaptowany z upstream zachowuje dodatkowo oryginalną notę w [attribution.md](references/attribution.md).
