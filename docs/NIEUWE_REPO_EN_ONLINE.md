# Nieuwe GitHub-repo en site online (sitesprint.eu)

## 1. Oude repository (optioneel)

Op [github.com](https://github.com): open de oude repo → **Settings** → helemaal onderaan **Danger zone** → **Delete this repository**.

*(Of archiveer de repo als je historie wilt bewaren.)*

## 2. Nieuwe repository aanmaken

1. GitHub → **New repository**
2. Naam bijvoorbeeld: `sitesprint` of `SiteSprint`
3. **Public**
4. **Geen** README, .gitignore of license toevoegen (lege repo)
5. **Create repository**

## 3. Lokale code naar de nieuwe remote pushen

Vervang `JOUW_USER` en `JOUW_REPO` door jouw GitHub-gebruikersnaam en repo-naam:

```powershell
cd C:\Users\hp\SitesPrint
git remote remove origin
git remote add origin https://github.com/JOUW_USER/JOUW_REPO.git
git branch -M main
git push -u origin main
```

Als je wordt gevraagd om in te loggen: gebruik een **Personal Access Token** (Classic) met minimaal **repo**, of GitHub Desktop.

## 4. GitHub Actions workflow toevoegen (één keer)

De map `.github/workflows/` zit **niet** in deze push, zodat Cursor/IDE-pushes zonder `workflow`-rechten slagen.

**Optie A — via de GitHub-website (aanrader)**

1. Op GitHub: in de nieuwe repo → **Add file** → **Create new file**
2. Bestandsnaam: `.github/workflows/deploy.yml`
3. Open lokaal het bestand `docs/github-pages-deploy.yml` en kopieer **alleen de YAML** (vanaf `name: Deploy...` tot het einde, zonder de commentregels bovenaan als je wilt)
4. Plak in GitHub → **Commit new file**

**Optie B — lokaal**

1. Maak de map `.github/workflows/` en kopieer `docs/github-pages-deploy.yml` naar `.github/workflows/deploy.yml` (YAML zonder de eerste commentregels)
2. `git add .github && git commit -m "Add GitHub Pages deploy workflow" && git push`
   (hiervoor heb je een token **met** `workflow`-scope nodig, of push via GitHub Desktop)

## 5. GitHub Pages inschakelen

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → **Source**: **GitHub Actions**
3. Ga naar **Actions** en wacht tot de eerste workflow groen is

## 6. Custom domain sitesprint.eu

1. **Settings** → **Pages** → **Custom domain**: `sitesprint.eu` → Save
2. Zorg dat bij je **domeinprovider** de DNS-records staan zoals GitHub aangeeft (A-records of CNAME naar `USERNAME.github.io`, afhankelijk van apex vs www)
3. `public/CNAME` in dit project bevat al `sitesprint.eu` — die komt in elke build in `dist/` terecht

## 7. HTTPS

Na DNS-propagatie: op de Pages-instellingen **Enforce HTTPS** aanzetten.
