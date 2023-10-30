# Switch Timer Card

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/hacs/integration)
[![Version](https://img.shields.io/github/v/release/joseluis9595/lovelace-switch-timer-card)](#)
[![Last commit](https://img.shields.io/github/last-commit/joseluis9595/lovelace-switch-timer-card)](#)
![Downloads](https://img.shields.io/github/downloads/joseluis9595/lovelace-switch-timer-card/total)

Switch Timer Card is a custom Lovelace card for Home Assistant that provides a user-friendly interface to control a switch entity with added timer functionality. This card allows you to turn a switch ON or OFF and set a timer to automatically turn it off after a specified duration. It also features a collapsible design for a neat and organized UI.


https://github.com/joseluis9595/lovelace-switch-timer-card/assets/29345499/b9f451e9-46b8-4d59-a675-03b827574ff8


## Installation

### Installation using HACS

1. If you haven't already, install [HACS](https://hacs.xyz/) - Home Assistant Community Store.

2. Open HACS and navigate to "Frontend."

3. Add this repo as custom repository.

4. Click on the "+ Explore & Download Repositories" button.

5. Search for "Switch Timer Card" and click "Install" on the repository card.

### Manual Installation

1. Download the `switch-timer-card.js` file from the [GitHub repository](https://github.com/joseluis9595/lovelace-switch-timer-card).

2. Upload the file to your Home Assistant configuration directory under `www/switch-timer-card.js`.

3. Add the following code to your Lovelace configuration to load the card:

```yaml
resources:
  - url: /local/switch-timer-card.js
    type: module
```

## Usage/Instructions

Before using the Switch Timer Card, you need to create a Timer Helper in Home Assistant. Follow these steps to set it up:

1. Open your Home Assistant Configuration and navigate to "Configuration" > "Helpers."

2. Click the "+ Add Helper" button.

3. Choose "Timer" as the Helper type.

4. Fill in the details for your timer, including a name and an optional icon.

5. Save the Helper.

Now, you can add the Switch Timer Card to your Lovelace dashboard and configure it as follows:

```yaml
type: custom:switch-timer-card
switch_entity: switch.your_switch_entity
timer_entity: timer.your_timer_entity
title: Title of the card
```

- `switch_entity`: Replace `switch.your_switch_entity` with the entity ID of the switch you want to control.

- `timer_entity`: Replace `timer.your_timer_entity` with the entity ID of the timer helper you created in Home Assistant.

- `title` (optional): You can specify a title for the card if desired.

