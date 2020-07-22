<p align="center">
  <a href="https://wexond.net"><img src="static/icons/icon.png" width="256"></a>
</p>

<div align="center">
  <h1>Wexond</h1>

[![Actions Status](https://github.com/wexond/desktop/workflows/Build/badge.svg)](https://github.com/wexond/desktop/actions)
[![Downloads](https://img.shields.io/github/downloads/wexond/desktop/total.svg?style=flat-square)](https://github.com/wexond/desktop/releases)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwexond%2Fwexond.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwexond%2Fwexond?ref=badge_shield)
[![PayPal](https://img.shields.io/badge/PayPal-Donate-brightgreen?style=flat-square)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VCPPFUAL4R6M6&source=url)
[![Discord](https://discordapp.com/api/guilds/307605794680209409/widget.png?style=shield)](https://discord.gg/P7Vn4VX)

Wexond is an extensible and privacy-focused web browser with a totally different user experience, built on top of `Electron` and `React`. It aims to be fast, private, beautiful, extensible and functional.

</div>

# Features

- **Wexond Shield** - Browse the web without any ads and don't let websites to track you. Thanks to the Wexond Shield powered by [Cliqz](https://github.com/cliqz-oss/adblocker), websites can load even 8 times faster!
- **Chromium without Google services and low resources usage** - Since Wexond uses Electron under the hood which is based on only several and the most important Chromium components, it's not bloated with redundant Google tracking services and others.
- **Beautiful and modern UI**
- **Fast and fluent UI** - The animations are really smooth and their timings are perfectly balanced.
- **Highly customizable new tab page** - Customize almost an every aspect of the new tab page!
- **Customizable browser UI** - Choose whether Wexond should have compact or normal UI.
- **Tab groups** - Easily group tabs, so it's hard to get lost.
- **Scrollable tabs**
- **Partial support for Chrome extensions** - Install some extensions directly from Chrome Web Store\* (see [#110](https://github.com/wexond/wexond/issues/110)) (WIP)
- **Packages** - Extend Wexond for your needs, by installing or developing your own packages and themes\* ([#147](https://github.com/wexond/wexond/issues/147)) (WIP)

# Screenshots

![image](https://user-images.githubusercontent.com/11065386/81024159-d9388f80-8e72-11ea-85e7-6c30e3b66554.png)

UI normal variant:
![image](https://user-images.githubusercontent.com/11065386/81024186-f40b0400-8e72-11ea-976e-cd1ca1b43ad8.png)

UI compact variant:
![image](https://user-images.githubusercontent.com/11065386/81024222-13099600-8e73-11ea-9fc9-3c63a034403d.png)
![image](https://user-images.githubusercontent.com/11065386/81024252-2ddc0a80-8e73-11ea-9f2f-6c9a4a175c60.png)

# Downloads
- [Stable and beta versions](https://github.com/wexond/desktop/releases)
- [Nightlies](https://github.com/wexond/desktop-nightly/releases)

# [Roadmap](https://github.com/wexond/wexond/projects)

# Contributing

If you have found any bugs or just want to see some new features in Wexond, feel free to open an issue. We're open to any suggestions. Bug reports would be really helpful for us and appreciated very much. Wexond is in heavy development and some bugs may occur. Also, please don't hesitate to open a pull request. This is really important to us and for the further development of this project.

## Running

Before running Wexond, please ensure you have **latest** [`Node.js`](https://nodejs.org/en/) and [`Yarn`](https://classic.yarnpkg.com/en/docs/install/#windows-stable) installed on your machine.

When running on Windows, make sure you have build tools installed. You can install them by running this command as **administrator**:

```bash
$ npm i -g windows-build-tools
```

Firstly, run this command to install all needed dependencies. If you have encountered any problems, please report it.

```bash
$ yarn
```

After a successful installation, the native modules need to be rebuilt using Electron headers. To do this, run:

```bash
$ npm run rebuild
```

The given command below will run Wexond in the development mode.

```bash
$ npm run dev
```

# Documentation

Guides and the API reference are located in [`docs`](docs) directory.

### Sponsors

[![Sponsors](https://opencollective.com/wexond/tiers/sponsor.svg?avatarHeight=48)](https://opencollective.com/wexond)

### Backers

[![Backers](https://opencollective.com/wexond/tiers/backer.svg?avatarHeight=48)](https://opencollective.com/wexond)

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwexond%2Fwexond.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwexond%2Fwexond?ref=badge_large)

# FAQ

## Why Electron?

Wexond has been hated by many people for using Electron by saying things like it's a web browser inside a web browser.
It's somewhat true, but technically it doesn't matter (also please keep in mind that browsers like Firefox also have the UI built with web technologies). It doesn't make the browser any slower or heavier, it's rather the opposite based on Wexond resources usage compared to Chrome. Choosing Electron was the best option to build the browser. We can build the UI however we want and make the customization even better. We don't have enough resources to build Chromium for weeks and edit almost 25 million lines of code and search for weeks for example the code responsible for changing button icons. Instead we chose Electron which uses only several Chromium components required to properly display the external content without any of the Google services, which makes the browser much lighter. Despite using only some part of Chromium, it doesn't really affect on the browser functionalities. We can implement all of the Chromium features except the Google services.
