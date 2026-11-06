# web-resume

this project is how I generate PDFs of my resume.


## Step one: Get

You need [Bun](https://bun.sh) (`curl -fsSL https://bun.sh/install | bash`). This repo's lockfile is `bun.lock`.

Clone this repo (via git, GitHub Desktop, or download as ZIP).

Delete the `.git/` folder.

Run `bun install`

Run `bun run fake` to generate fake data. **!! This is important !!** Without this data, your site won't build.

> Scripts go through `bun run <script>`. A bare `bun build` / `bun test` calls bun's own subcommands and fails.

## Step two: Set

Change the data in `src/data/data.json` to describe you.

You might want to replace `src/images/hero.jpg` as well, but that's on you.

## Step three: Net

Run `bun run build && bun run serve`.

Open the address it gives you in your browser (probably `http://localhost:9000`) and print the page to PDF.

Done!
