# Wasp Sensible Starter
A minimal starter kit for Wasp with TailwindCSS and ShadCN with some small changes (primarily theming and toasts).

Notes:
- ShadCN Chart is not included, but it can be added easily
- Sonner (toasts) are not included. `react-hot-toast` is used instead.

To create an app using this template run `npx wasp-sensible` and follow the prompts.


## 📜 Available `npm run ___` scripts:
- `dev`, `start` → Start the Wasp dev server
- `reset-wasp` → Full Wasp reset (clean + ts-setup + start)
- `reset-wasp-nostart`, `rwns` → Reset Wasp without starting
- `reset-migrate`, `rmig` → Clean, ts-setup, db migrate, start
- `reset-db`, `rd` → Reset and migrate DB, then start
- `reset-db-nostart`, `rdns` → Reset and migrate DB only
- `rwdb` → Reset Wasp (no start) + reset DB
- `squash-reset-migrate`, `srm` → Delete migrations, reset the DB, then migrate
- `reset-all`, `rall` → Nuke everything, reset, migrate the DB, start
- `build-clean`, `bc` → Clean + ts-setup + build
- `rw` → Alias for reset-wasp